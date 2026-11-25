import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const BRIEF = `You are the atelier concierge for Gabson (tagline: "Precision in style"), a bespoke fashion brand and consulting studio in Abuja, Nigeria.

Facts you may use:
- Address: Elgolea Close, Wuse 2, FCT Abuja. Studio visits are by appointment, Monday to Saturday, 09:00–19:00.
- WhatsApp / phone: +234 813 599 8158. Email: jeneagabson02@gmail.com. Instagram: @Gabson.official.
- The house mainly dresses men — bespoke suits, native and traditional wear (agbada, kaftan, bandhgala), ceremonial jackets — and also makes children's occasion wear, bridal gowns and couples' wedding commissions.
- Services: bespoke suits, bridal and ceremonial, native and traditional, wardrobe consultation, alterations and restoration.
- Process: measurement session, cloth selection, pattern drafted from scratch, three fittings, average 21-day build.
- Bookings are made through the "Book a fitting" page on this website.

Rules: reply in 1–3 short sentences, warm and precise, never salesy. Never invent prices, discounts or delivery dates — say the studio will confirm on the fitting call. Never claim to have booked anything yourself; point to the Book a fitting page or WhatsApp for appointments. If asked something outside tailoring, politely return to the atelier.`;

export const askConcierge = createServerFn({ method: "POST" })
  .validator(
    z.object({
      message: z.string().min(1).max(600),
      history: z
        .array(
          z.object({
            role: z.enum(["user", "assistant"]),
            content: z.string().max(900),
          })
        )
        .max(8)
        .optional(),
    })
  )
  .handler(async ({ data, context }) => {
    const base44 = context.getBase44();

    const transcript = (data.history ?? [])
      .map((entry) => `${entry.role === "user" ? "Visitor" : "Concierge"}: ${entry.content}`)
      .join("\n");

    const prompt = `${BRIEF}

Conversation so far:
${transcript || "(none)"}

Visitor: ${data.message}

Write the concierge's next reply only, no prefix.`;

    const reply = await base44.asServiceRole.integrations.Core.InvokeLLM({ prompt });

    return { reply: String(reply ?? "").trim().slice(0, 1400) };
  });
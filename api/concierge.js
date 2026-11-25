// The atelier concierge: answers the questions the site can answer, from the same
// facts the original brief carried, and hands everything else to WhatsApp.
// POST /api/concierge  { message, history? }
const WHATSAPP = "https://wa.me/2348135998158";

const RULES = [
  {
    match: /(book|appointment|fitting|session|visit the studio|come in)/i,
    reply:
      "Fittings are booked through the Book a fitting page on this site, or on WhatsApp. The studio confirms every appointment personally.",
  },
  {
    match: /(where|address|location|find you|directions|studio in)/i,
    reply:
      "The studio is on Elgolea Close, Wuse 2, FCT Abuja. Visits are by appointment, Monday to Saturday, 09:00 to 19:00.",
  },
  {
    match: /(open|hours|time do you|when are you|close)/i,
    reply: "The studio is open Monday to Saturday, 09:00 to 19:00, by appointment.",
  },
  {
    match: /(price|cost|how much|budget|rate|quote)/i,
    reply:
      "The studio does not quote prices by chat: what a piece costs depends on cloth and detail. It is confirmed on the fitting call.",
  },
  {
    match: /(child|kid|boy|girl|young)/i,
    reply:
      "Yes. Children's occasion wear is part of the house, cut to the same standard as the men's work.",
  },
  {
    match: /(bride|bridal|wedding|groom|couple)/i,
    reply:
      "Bridal gowns and couples' wedding commissions are both made in house, from first measurement through the final fitting.",
  },
  {
    match: /(suit|agbada|kaftan|bandhgala|traditional|native|jacket|tuxedo|blazer)/i,
    reply:
      "That is the heart of the house: bespoke suits, native and traditional wear such as agbada and kaftan, bandhgalas and ceremonial jackets.",
  },
  {
    match: /(alter|restore|restoration|repair|resize|adjust)/i,
    reply: "Alterations and restoration are both offered. Bring the piece in and the studio will advise what is possible.",
  },
  {
    match: /(consult|wardrobe|style advice|styling)/i,
    reply:
      "Wardrobe consultation is one of the services: the studio reviews what you own and what the wardrobe is missing.",
  },
  {
    match: /(how long|timeline|delivery|ready|turnaround|days|weeks)/i,
    reply:
      "The build averages 21 days: a measurement session, cloth selection, a pattern drafted from scratch, and three fittings.",
  },
  {
    match: /(contact|whatsapp|phone|call|email|instagram|reach)/i,
    reply:
      "WhatsApp or phone: +234 813 599 8158. Email: jeneagabson02@gmail.com. Instagram: @Gabson.official.",
  },
  {
    match: /(hello|hi\b|hey|good (morning|afternoon|evening))/i,
    reply:
      "Good day. Ask about a commission, cloth, or a fitting time and I'll point you right.",
  },
];

const FALLBACK =
  "That one is best answered by the studio itself. Send it on WhatsApp and they will reply directly.";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body || "{}");
    } catch {
      return res.status(400).json({ error: "Invalid JSON body." });
    }
  }
  body = body || {};

  const message = typeof body.message === "string" ? body.message.trim().slice(0, 600) : "";
  if (!message) {
    return res.status(400).json({ error: "A message is required." });
  }

  const rule = RULES.find((entry) => entry.match.test(message));
  return res.status(200).json({
    reply: rule ? rule.reply : FALLBACK,
    whatsapp: WHATSAPP,
    handoff: !rule,
  });
}

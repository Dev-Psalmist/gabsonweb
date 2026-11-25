import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Send, X } from "lucide-react";
import { WHATSAPP_LINK } from "./data";

const CHIPS = ["Book a fitting", "Do you make children's wear?", "Where is the studio?"];

const GREETING = {
  role: "assistant",
  content:
    "Good day — this is the Gabson atelier line. Ask about a commission, cloth, or a fitting time and I'll point you right.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "end" });
  }, [messages, open, busy]);

  const send = async (text) => {
    const message = (text ?? input).trim();
    if (!message || busy) return;

    const history = messages
      .slice(-6)
      .map(({ role, content }) => ({ role, content }));

    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setBusy(true);

    try {
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });
      if (!response.ok) throw new Error(`Concierge failed: ${response.status}`);
      const result = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            result?.reply ||
            "The studio will pick this up — send it to WhatsApp and we'll reply straight away.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "The atelier line is briefly offline. Message us on WhatsApp and the studio will answer directly.",
          fallback: true,
        },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close the atelier chat" : "Chat with the atelier"}
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-oxblood text-bone shadow-[0_16px_40px_-12px_rgba(0,0,0,0.9)] transition-transform hover:scale-105"
      >
        {!open && (
          <span className="pointer-events-none absolute inset-0 animate-pulse-ring rounded-full border border-gold/60" />
        )}
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-4 z-[70] flex h-[min(72vh,540px)] w-[min(92vw,384px)] flex-col overflow-hidden border border-bone/15 bg-ink/97 backdrop-blur-xl sm:right-5"
          >
            <div className="flex items-center justify-between border-b border-bone/10 px-4 py-3.5">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone">
                  Atelier concierge
                </p>
                <p className="mt-1 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-bone/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Online · replies in minutes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="text-bone/40 transition-colors hover:text-bone"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
                    message.role === "user"
                      ? "ml-auto bg-oxblood text-bone"
                      : "border border-bone/10 bg-bone/[0.04] text-bone/80"
                  }`}
                >
                  {message.content}
                  {message.fallback && (
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.22em] text-gold"
                    >
                      Open WhatsApp <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              ))}

              {busy && (
                <div className="flex w-fit items-center gap-1.5 border border-bone/10 bg-bone/[0.04] px-3.5 py-3">
                  {[0, 1, 2].map((dot) => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 animate-pulse rounded-full bg-bone/50"
                      style={{ animationDelay: `${dot * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {CHIPS.map((chip) => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => send(chip)}
                    className="border border-bone/15 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-bone/55 transition-colors hover:border-oxblood hover:text-bone"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(event) => {
                event.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-bone/10 px-3 py-3"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={600}
                placeholder="Ask the atelier…"
                className="min-w-0 flex-1 bg-transparent px-1 text-[13px] text-bone outline-none placeholder:text-bone/30"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="flex h-8 w-8 items-center justify-center bg-bone text-ink transition-colors hover:bg-oxblood hover:text-bone disabled:opacity-40"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
import { createStart } from "@tanstack/react-start";

// Gabson uses its own Vercel API routes and Neon database. No platform middleware is required.
export const startInstance = createStart(() => ({}));

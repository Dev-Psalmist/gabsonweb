import { createStart } from "@tanstack/react-start";

// The public Gabson site does not require platform-specific request or auth middleware.
export const startInstance = createStart(() => ({}));

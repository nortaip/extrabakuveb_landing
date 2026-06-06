"use client";

import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Login dialog restricted to club guides only.
 * Note: this is a front-end demo — wire `onSubmit` to a real auth endpoint.
 */
export default function LoginModal({ open, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your guide credentials.");
      return;
    }
    setError("Access is limited to authorised guides only.");
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-general text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-neon/60 focus:bg-white/[0.06] focus:shadow-glow-neon";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Guide login"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-[2rem] glass-strong p-8"
          >
            <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon/20 blur-3xl" />

            <button
              onClick={onClose}
              aria-label="Close login"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full glass text-white transition-colors hover:bg-white/10"
            >
              ✕
            </button>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-neon">
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                Guides only
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold text-white">
                Guide Login
              </h3>
              <p className="mt-2 font-general text-sm text-white/55">
                This area is restricted. Only authorised Extra Baku guides can
                sign in.
              </p>

              <form onSubmit={onSubmit} className="mt-7 flex flex-col gap-4">
                <label className="block">
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    Guide Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(null);
                    }}
                    placeholder="guide@extrabaku.az"
                    className={inputClass}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(null);
                    }}
                    placeholder="••••••••"
                    className={inputClass}
                  />
                </label>

                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-neon-blue"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 rounded-full bg-neon-gradient px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 shadow-glow-neon transition-transform hover:scale-[1.02]"
                >
                  Sign In
                </motion.button>
              </form>

              <p className="mt-5 text-center font-general text-xs text-white/40">
                Not a guide? Access is reserved for Extra Baku team members.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

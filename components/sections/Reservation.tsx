"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Fields = {
  name: string;
  phone: string;
  guests: string;
  date: string;
  time: string;
  requests: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = {
  name: "",
  phone: "",
  guests: "2",
  date: "",
  time: "",
  requests: "",
};

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[+\d][\d\s()-]{6,}$/.test(f.phone.trim()))
    e.phone = "Enter a valid phone number";
  if (!f.guests || Number(f.guests) < 1) e.guests = "At least 1 guest";
  if (!f.date) e.date = "Choose a date";
  if (!f.time) e.time = "Choose a time";
  return e;
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.label variants={fadeUp} className="group block">
      <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 block text-xs text-rose-400"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.label>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-general text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/[0.06] focus:shadow-glow-gold";

export default function Reservation() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    setStatus("submitting");
    // Simulated async booking — swap for a real API route.
    setTimeout(() => setStatus("success"), 1200);
  };

  const reset = () => {
    setFields(initial);
    setStatus("idle");
  };

  return (
    <section id="reservation" className="relative overflow-hidden section-pad">
      <GradientOrbs />
      <div className="container-max relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Reserve Your Night"
            title="Book the perfect"
            highlight="experience"
            description="Tell us when you're coming and what you're celebrating — our concierge team will take care of the rest."
          />
          <div className="mt-8 flex flex-col gap-4">
            {[
              "Instant confirmation within 2 hours",
              "Dedicated event concierge",
              "VIP packages & full-venue buyouts",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold">
                  ✓
                </span>
                <span className="font-general text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-[2rem] glass-strong p-7 sm:p-9"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-3xl text-ink-900 shadow-glow-gold"
                >
                  ✓
                </motion.span>
                <h3 className="font-display text-3xl font-bold text-white">
                  Reservation received!
                </h3>
                <p className="mt-3 max-w-sm font-general text-white/60">
                  Thank you, {fields.name.split(" ")[0] || "guest"}. Our team
                  will confirm your booking shortly via {fields.phone}.
                </p>
                <button
                  onClick={reset}
                  className="mt-8 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Make another reservation
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      value={fields.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Phone" error={errors.phone}>
                    <input
                      type="tel"
                      value={fields.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+994 ..."
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <Field label="Guests" error={errors.guests}>
                    <input
                      type="number"
                      min={1}
                      value={fields.guests}
                      onChange={(e) => update("guests", e.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Date" error={errors.date}>
                    <input
                      type="date"
                      value={fields.date}
                      onChange={(e) => update("date", e.target.value)}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </Field>
                  <Field label="Time" error={errors.time}>
                    <input
                      type="time"
                      value={fields.time}
                      onChange={(e) => update("time", e.target.value)}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </Field>
                </div>

                <Field label="Special Requests">
                  <textarea
                    rows={3}
                    value={fields.requests}
                    onChange={(e) => update("requests", e.target.value)}
                    placeholder="Birthday, VIP table, dietary needs..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <motion.button
                  variants={fadeUp}
                  type="submit"
                  disabled={status === "submitting"}
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 shadow-glow-gold transition-transform hover:scale-[1.02] disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-900/30 border-t-ink-900" />
                      Processing...
                    </>
                  ) : (
                    "Confirm Reservation"
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

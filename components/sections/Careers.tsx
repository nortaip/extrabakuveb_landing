"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientOrbs from "@/components/ui/GradientOrbs";
import { careersEmail, jobPositions } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type Fields = {
  name: string;
  contact: string;
  position: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const initial: Fields = {
  name: "",
  contact: "",
  position: jobPositions[0],
  message: "",
};

const MAX_CV_MB = 8;

const perks = [
  "Competitive pay & tips",
  "Premium, high-energy environment",
  "Flexible night schedules",
  "Real growth opportunities",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-general text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/[0.06] focus:shadow-glow-gold";

export default function Careers() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [cvName, setCvName] = useState<string>("");
  const [cvError, setCvError] = useState<string>("");
  const [sent, setSent] = useState(false);

  const onCvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setCvName("");
      return;
    }
    if (file.size > MAX_CV_MB * 1024 * 1024) {
      setCvError(`File is too large (max ${MAX_CV_MB} MB).`);
      setCvName("");
      e.target.value = "";
      return;
    }
    setCvError("");
    setCvName(file.name);
  };

  const update = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (f: Fields): Errors => {
    const e: Errors = {};
    if (f.name.trim().length < 2) e.name = "Please enter your name";
    if (f.contact.trim().length < 5)
      e.contact = "Enter your email or phone number";
    return e;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = `Job Application — ${fields.position} — ${fields.name}`;
    const body = [
      `Position: ${fields.position}`,
      `Name: ${fields.name}`,
      `Contact: ${fields.contact}`,
      `CV / Resume: ${cvName ? `${cvName} (please attach this file before sending)` : "to be attached"}`,
      "",
      "About me:",
      fields.message || "—",
      "",
      "— Sent from extrabaku.az careers",
    ].join("\n");

    // Static site: open the visitor's mail client pre-addressed to HR.
    window.location.href = `mailto:${careersEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="careers" className="relative overflow-hidden section-pad scroll-mt-24">
      <GradientOrbs />
      <div className="container-max relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left: pitch */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Careers"
            title="Join the team at the"
            highlight="best club in Baku"
            description="We're always looking for talented, energetic people to join the largest premium nightclub in the Caucasus. Send your application and our team will get back to you."
          />
          <ul className="mt-8 flex flex-col gap-4">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold">
                  ✓
                </span>
                <span className="font-general text-white/70">{perk}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-general text-sm text-white/50">
            Prefer email? Write to us directly at{" "}
            <a
              href={`mailto:${careersEmail}`}
              className="font-semibold text-gold-light underline-offset-4 hover:underline"
            >
              {careersEmail}
            </a>
          </p>
        </div>

        {/* Right: form */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-[2rem] glass-strong p-7 sm:p-9"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[360px] flex-col items-center justify-center text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient text-3xl text-ink-900 shadow-glow-gold"
                >
                  ✓
                </motion.span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Almost there!
                </h3>
                <p className="mt-3 max-w-sm font-general text-white/60">
                  Your email app should have opened with your application ready
                  to send to {careersEmail}.{" "}
                  {cvName
                    ? "Don't forget to attach your CV, then hit send."
                    : "Attach your CV, then hit send."}{" "}
                  We&apos;ll be in touch.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setFields(initial);
                    setCvName("");
                    setCvError("");
                  }}
                  className="mt-7 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-5"
                exit={{ opacity: 0 }}
              >
                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    Full Name
                  </span>
                  <input
                    type="text"
                    value={fields.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                  {errors.name && (
                    <span className="mt-1.5 block text-xs text-rose-400">
                      {errors.name}
                    </span>
                  )}
                </motion.label>

                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    Email or Phone
                  </span>
                  <input
                    type="text"
                    value={fields.contact}
                    onChange={(e) => update("contact", e.target.value)}
                    placeholder="you@email.com / +994 ..."
                    className={inputClass}
                  />
                  {errors.contact && (
                    <span className="mt-1.5 block text-xs text-rose-400">
                      {errors.contact}
                    </span>
                  )}
                </motion.label>

                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    Position
                  </span>
                  <select
                    value={fields.position}
                    onChange={(e) => update("position", e.target.value)}
                    className={`${inputClass} [color-scheme:dark]`}
                  >
                    {jobPositions.map((p) => (
                      <option key={p} value={p} className="bg-ink-800">
                        {p}
                      </option>
                    ))}
                  </select>
                </motion.label>

                <motion.div variants={fadeUp}>
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    CV / Resume
                  </span>
                  <label className="group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-white/15 bg-white/[0.03] px-4 py-4 transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.05]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-general text-sm text-white/80">
                        {cvName || "Upload your CV (PDF, DOC — max 8 MB)"}
                      </span>
                      <span className="block font-general text-xs text-white/40">
                        {cvName ? "File selected · tap to change" : "Click to choose a file"}
                      </span>
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={onCvChange}
                      className="sr-only"
                    />
                  </label>
                  {cvError && (
                    <span className="mt-1.5 block text-xs text-rose-400">
                      {cvError}
                    </span>
                  )}
                </motion.div>

                <motion.label variants={fadeUp} className="block">
                  <span className="mb-2 block font-general text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                    About You / Experience
                  </span>
                  <textarea
                    rows={4}
                    value={fields.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your experience and why you'd like to join Extra Baku..."
                    className={`${inputClass} resize-none`}
                  />
                </motion.label>

                <motion.button
                  variants={fadeUp}
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ink-900 shadow-glow-gold transition-transform hover:scale-[1.02]"
                >
                  Apply Now
                </motion.button>
                <p className="text-center font-general text-xs text-white/40">
                  Your application opens in your email app, addressed to{" "}
                  {careersEmail}. Please attach your selected CV file before
                  sending.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

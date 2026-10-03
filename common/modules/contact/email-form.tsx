"use client";

import { useTranslations } from "next-intl";
import { PaperPlaneTiltIcon } from "@phosphor-icons/react";

/**
 * Contact form with a section heading — UI only (no submit handler yet).
 * PRD §3.6: fields Name, Email, Subject, Message.
 * DESIGN.md §2: semantic tokens only (border-input, bg-background, etc.).
 */
export default function EmailForm() {
  const t = useTranslations("contact");
  const formT = useTranslations("contact.form");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const inputClass =
    "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition duration-200 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

  const labelClass = "text-xs font-medium text-foreground sm:text-sm";

  return (
    <section className="flex w-full flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-lg font-bold text-foreground">
          {t("formTitle")}
        </h2>
        <p className="text-xs text-muted-foreground sm:text-sm">
          {t("formSubtitle")}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3.5"
        aria-label="Contact form"
      >
        {/* Row for Name & Email on sm+ */}
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className={labelClass}>
              {formT("name")}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClass}
              placeholder={formT("name")}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className={labelClass}>
              {formT("email")}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              placeholder={formT("email")}
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-subject" className={labelClass}>
            {formT("subject")}
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            className={inputClass}
            placeholder={formT("subject")}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className={labelClass}>
            {formT("message")}
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            className={`${inputClass} resize-none`}
            placeholder={formT("message")}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          <PaperPlaneTiltIcon size={16} weight="bold" />
          {formT("submit")}
        </button>
      </form>
    </section>
  );
}
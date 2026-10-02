"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiAlertCircle, FiCheck, FiDownload } from "react-icons/fi";
import { createT } from "@/lib/t";
import { sendContact } from "@/lib/sendContact";

const WHATSAPP_NUMBER = "5492235845865";
const RESUMES = {
  en: "/cv/Juan-Ignacio-Maraude-Resume.pdf",
  es: "/cv/Juan-Ignacio-Maraude-CV.pdf",
};
const STATUS_RESET_MS = 4000;

const SEND_BUTTON_STYLES = {
  idle: "bg-[#90a0d9] border-transparent text-[#0d1117] hover-fine:bg-[#7b8fd4]",
  sending:
    "bg-[#90a0d9] border-transparent text-[#0d1117] opacity-60 cursor-not-allowed",
  sent: "bg-[#90a0d9]/15 border-[#90a0d9]/50 text-[#90a0d9]",
  error: "bg-red-400/15 border-red-400/50 text-red-300",
};

export default function Contact({ lang, dict }) {
  const t = createT(dict);
  const isEs = lang === "es";
  const [status, setStatus] = useState("idle");
  const resetTimer = useRef(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const onSubmit = async (data) => {
    clearTimeout(resetTimer.current);
    setStatus("sending");
    try {
      await sendContact(data);
      reset({ email: "", subject: "", body: "" });
      setStatus("sent");
    } catch (error) {
      setStatus("error");
    }
    resetTimer.current = setTimeout(() => setStatus("idle"), STATUS_RESET_MS);
  };

  const sendLabel = {
    idle: t("contact.send"),
    sending: t("contact.sending"),
    sent: t("contact.sent"),
    error: t("contact.retry"),
  }[status];

  const statusMessage =
    status === "sent"
      ? t("contact.swalTitle")
      : status === "error"
        ? `${t("contact.swalErrorTitle")}. ${t("contact.swalErrorText")}`
        : "";

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    t("contact.whatsappMessage"),
  )}`;

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/juan-ignacio-maraude-8a0694210/",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/NachoMaraude",
      icon: <FaGithub size={18} />,
      label: "GitHub",
    },
    {
      href: "mailto:maraudenacho@gmail.com",
      icon: <FaEnvelope size={18} />,
      label: "maraudenacho@gmail.com",
    },
  ];

  const inputClass =
    "w-full bg-[#161b2e] border border-[#5b6a9a] rounded-lg text-base text-[#c4cde8] placeholder-[#8892b0] px-4 py-3 focus:border-[#90a0d9] transition-colors duration-160 ease-snappy";

  return (
    <section id="contact" className="py-24 pb-32">
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-6">
        <p className="text-[#90a0d9] text-sm font-mono tracking-widest mb-3 uppercase">
          {t("contact.label")}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          {t("contact.h1")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: info + social */}
          <div className="flex flex-col gap-6">
            <p className="text-[#8892b0] text-base leading-relaxed">
              {t("contact.intro")}
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="press flex items-center justify-center gap-2 p-3 bg-[#90a0d9] text-[#0d1117] rounded-xl hover-fine:bg-[#7b8fd4] text-sm font-semibold"
            >
              <FaWhatsapp size={18} />
              {t("contact.whatsapp")}
            </a>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="press flex items-center gap-3 p-3 bg-[#161b2e] border border-[#2d3555] rounded-xl text-[#8892b0] hover-fine:text-[#90a0d9] hover-fine:border-[#90a0d9]/40 text-sm font-medium"
                >
                  {link.icon}
                  {link.label}
                </a>
              ))}
            </div>

            <a
              href={RESUMES[lang]}
              download={
                isEs
                  ? "Juan Ignacio Maraude - CV.pdf"
                  : "Juan Ignacio Maraude - Resume.pdf"
              }
              target="_blank"
              rel="noopener noreferrer"
              className="press flex items-center justify-center gap-2 p-3 bg-[#90a0d9]/10 border border-[#90a0d9]/30 rounded-xl text-[#90a0d9] hover-fine:bg-[#90a0d9]/20 text-sm font-semibold"
            >
              <FiDownload size={17} />
              {t("contact.resume")}
            </a>
          </div>

          {/* Right: form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-4"
          >
            <div>
              <label htmlFor="contact-email" className="sr-only">
                {t("contact.labelEmail")}
              </label>
              {errors?.email && (
                <p
                  id="contact-email-error"
                  role="alert"
                  className="text-sm text-red-400 mb-1.5"
                >
                  {errors.email.type === "required"
                    ? t("contact.errorRequired")
                    : errors.email.type === "pattern"
                      ? t("contact.errorEmail")
                      : errors.email.type === "minLength"
                        ? t("contact.minLengthEmail")
                        : t("contact.maxLengthEmail")}
                </p>
              )}
              <input
                id="contact-email"
                className={inputClass}
                type="email"
                autoComplete="email"
                placeholder={t("contact.labelEmail")}
                aria-invalid={errors?.email ? "true" : "false"}
                aria-describedby={
                  errors?.email ? "contact-email-error" : undefined
                }
                {...register("email", {
                  pattern:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  required: true,
                  minLength: 5,
                  maxLength: 50,
                })}
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="sr-only">
                {t("contact.subject")}
              </label>
              {errors?.subject && (
                <p
                  id="contact-subject-error"
                  role="alert"
                  className="text-sm text-red-400 mb-1.5"
                >
                  {errors.subject.type === "required"
                    ? t("contact.errorRequired")
                    : errors.subject.type === "minLength"
                      ? t("contact.minLengthSubject")
                      : t("contact.maxLengthSubject")}
                </p>
              )}
              <input
                id="contact-subject"
                className={inputClass}
                type="text"
                placeholder={t("contact.subject")}
                aria-invalid={errors?.subject ? "true" : "false"}
                aria-describedby={
                  errors?.subject ? "contact-subject-error" : undefined
                }
                {...register("subject", {
                  required: true,
                  minLength: 2,
                  maxLength: 25,
                })}
              />
            </div>

            <div>
              <label htmlFor="contact-body" className="sr-only">
                {t("contact.labelBody")}
              </label>
              {errors?.body && (
                <p
                  id="contact-body-error"
                  role="alert"
                  className="text-sm text-red-400 mb-1.5"
                >
                  {errors.body.type === "required"
                    ? t("contact.errorRequired")
                    : errors.body.type === "minLength"
                      ? t("contact.minLengthBody")
                      : t("contact.maxLengthBody")}
                </p>
              )}
              <textarea
                id="contact-body"
                className={`${inputClass} resize-none h-36`}
                placeholder={t("contact.body")}
                aria-invalid={errors?.body ? "true" : "false"}
                aria-describedby={
                  errors?.body ? "contact-body-error" : undefined
                }
                {...register("body", {
                  required: true,
                  minLength: 10,
                  maxLength: 300,
                })}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              aria-busy={status === "sending"}
              className={`press w-full py-3 border font-semibold rounded-lg text-sm ${SEND_BUTTON_STYLES[status]}`}
            >
              <span
                key={status}
                className="fade-in inline-flex items-center justify-center gap-2"
              >
                {status === "sent" && <FiCheck size={16} aria-hidden="true" />}
                {status === "error" && (
                  <FiAlertCircle size={16} aria-hidden="true" />
                )}
                {sendLabel}
              </span>
            </button>

            <p role="status" aria-live="polite" className="sr-only">
              {statusMessage}
            </p>
            {statusMessage && (
              <p
                aria-hidden="true"
                className={`fade-in text-sm ${
                  status === "error" ? "text-red-300" : "text-[#90a0d9]"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

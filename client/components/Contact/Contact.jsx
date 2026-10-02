"use client";

import { useForm } from "react-hook-form";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { createT } from "@/lib/t";
import { sendContact } from "@/lib/sendContact";

const WHATSAPP_NUMBER = "5492235845865";
const RESUMES = {
  en: "/cv/Juan-Ignacio-Maraude-Resume.pdf",
  es: "/cv/Juan-Ignacio-Maraude-CV.pdf",
};

export default function Contact({ lang, dict }) {
  const t = createT(dict);
  const isEs = lang === "es";

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const showAlert = async (options) => {
    // sweetalert2 solo se descarga cuando hay que mostrar un aviso.
    const { default: swal } = await import("sweetalert2");
    swal.fire({
      background: "#161b2e",
      color: "#c4cde8",
      confirmButtonColor: "#90a0d9",
      ...options,
    });
  };

  const onSubmit = async (data) => {
    try {
      await sendContact(data);
      reset({ email: "", subject: "", body: "" });
      showAlert({
        title: t("contact.swalTitle"),
        icon: "success",
        allowEscapeKey: true,
      });
    } catch (error) {
      showAlert({
        title: t("contact.swalErrorTitle"),
        text: t("contact.swalErrorText"),
        icon: "error",
      });
    }
  };

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
    "w-full bg-[#161b2e] border border-[#5b6a9a] rounded-lg text-base text-[#c4cde8] placeholder-[#8892b0] px-4 py-3 focus:border-[#90a0d9] transition-colors duration-200";

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
              className="flex items-center justify-center gap-2 p-3 bg-[#90a0d9] text-[#0d1117] rounded-xl hover:bg-[#7b8fd4] transition-colors duration-200 text-sm font-semibold"
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
                  className="flex items-center gap-3 p-3 bg-[#161b2e] border border-[#2d3555] rounded-xl text-[#8892b0] hover:text-[#90a0d9] hover:border-[#90a0d9]/40 transition-all duration-200 text-sm font-medium"
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
              className="flex items-center justify-center gap-2 p-3 bg-[#90a0d9]/10 border border-[#90a0d9]/30 rounded-xl text-[#90a0d9] hover:bg-[#90a0d9]/20 transition-all duration-200 text-sm font-semibold"
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
                aria-describedby={errors?.email ? "contact-email-error" : undefined}
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
                aria-describedby={errors?.body ? "contact-body-error" : undefined}
                {...register("body", {
                  required: true,
                  minLength: 10,
                  maxLength: 300,
                })}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#90a0d9] text-[#0d1117] font-semibold rounded-lg hover:bg-[#7b8fd4] transition-colors duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

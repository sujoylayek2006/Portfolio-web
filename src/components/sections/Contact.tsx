"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  FileText,
  Sparkles,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { socialLinks } from "@/data/navigation";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "activation" | "error";
    text: string;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const emailAddress = socialLinks.email;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getGmailComposeUrl = () => {
    const subject = encodeURIComponent(
      formData.name
        ? `Portfolio Inquiry from ${formData.name}`
        : "Portfolio Inquiry — Sujoy Layek"
    );
    const body = encodeURIComponent(
      formData.message
        ? `Hi Sujoy,\n\n${formData.message}\n\nBest regards,\n${formData.name || "Visitor"} (${formData.email || "Email not specified"})`
        : "Hi Sujoy,\n\nI came across your portfolio and would like to connect."
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.name
        ? `Portfolio Inquiry from ${formData.name}`
        : "Portfolio Inquiry — Sujoy Layek"
    );
    const body = encodeURIComponent(
      formData.message
        ? `Hi Sujoy,\n\n${formData.message}\n\nBest regards,\n${formData.name || "Visitor"}`
        : "Hi Sujoy,\n\nI came across your portfolio and would like to connect."
    );
    return `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${emailAddress}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`,
            _replyto: formData.email,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      const data = await response.json().catch(() => null);

      if (response.ok && data) {
        if (
          typeof data.message === "string" &&
          data.message.toLowerCase().includes("activation")
        ) {
          // First-time FormSubmit confirmation
          setStatusMessage({
            type: "activation",
            text: "Message sent! FormSubmit has sent a 1-time 'Activate Form' confirmation email to sujoylayek.rampur.2006@gmail.com. Once clicked in Gmail, all messages will be received instantly.",
          });
        } else {
          setStatusMessage({
            type: "success",
            text: "Thank you for reaching out! Your message has been sent directly to Sujoy Layek's Gmail inbox.",
          });
        }
        setSubmitted(true);
      } else {
        // Fallback error with direct Gmail open button
        setStatusMessage({
          type: "error",
          text: "Submission encountered an issue. You can send directly using Gmail Web or your email client below.",
        });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Network error sending form. Please use the direct 'Send via Gmail' button below.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
            Let&apos;s Connect
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mt-2">
            Get in Touch.
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-neutral-400 max-w-md text-sm md:text-base font-normal">
          Available for software engineering internships, junior developer roles, and collaborative projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Outreach & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-8"
        >
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
              Have an opportunity or project in mind?
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Whether you are looking to hire a full-stack engineer, discuss hackathon projects, or just talk tech, feel free to drop a message or reach out on my socials.
            </p>
          </div>

          {/* Email Copy Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-white/10 relative overflow-hidden group">
            <div className="flex items-center space-x-2 text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Direct Inbox</span>
            </div>

            <p className="text-white font-mono text-sm sm:text-base break-all mb-4 select-all">
              {emailAddress}
            </p>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-neutral-200 hover:text-white transition-all focus:outline-none cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={getGmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-xs font-mono text-purple-300 hover:text-purple-200 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Open Gmail</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Resume */}
          <div className="space-y-3 pt-2">
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 block">
              Professional Profiles
            </span>

            <div className="flex flex-wrap gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-purple-500/40 text-xs font-medium text-neutral-300 hover:text-white transition-all group"
              >
                <LinkedinIcon className="w-4 h-4 text-purple-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-purple-500/40 text-xs font-medium text-neutral-300 hover:text-white transition-all group"
              >
                <GithubIcon className="w-4 h-4 text-purple-400" />
                <span>GitHub Repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={socialLinks.resume || `mailto:${emailAddress}?subject=Resume%20Request%20-%20Sujoy%20Layek`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-white/10 hover:border-purple-500/40 text-xs font-medium text-neutral-300 hover:text-white transition-all group"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>Resume / CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-neutral-900/50 border border-white/10 shadow-2xl relative"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Message Sent!
              </h4>
              <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                {statusMessage?.text ||
                  "Your message has been delivered directly to Sujoy Layek's Gmail inbox. I will reply to you as soon as possible."}
              </p>

              {statusMessage?.type === "activation" && (
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs max-w-lg mx-auto text-left flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                  <span>
                    <strong>First-time setup:</strong> FormSubmit sent an activation email to <code>{emailAddress}</code>. Click the &quot;Activate Form&quot; button in your Gmail to finalize delivery.
                  </span>
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStatusMessage(null);
                  }}
                  className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-xs font-mono transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open in Gmail Web</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Spam Honeypot Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/10 focus:border-purple-400/80 text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/10 focus:border-purple-400/80 text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2"
                >
                  Message / Role Details *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your team, internship opening, or project opportunity..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/10 focus:border-purple-400/80 text-white text-sm placeholder:text-neutral-600 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Status or Error Banner */}
              {statusMessage?.type === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-3">
                  <span>{statusMessage.text}</span>
                  <a
                    href={getGmailComposeUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-semibold hover:text-white shrink-0"
                  >
                    Open Gmail &rarr;
                  </a>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-white text-neutral-950 font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Sending to Gmail...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/15 text-neutral-300 hover:text-white hover:border-purple-400/50 bg-white/[0.03] hover:bg-purple-500/10 transition-all text-xs font-mono"
                >
                  <Mail className="w-3.5 h-3.5 text-purple-400" />
                  <span>Send via Gmail Web</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>

                <a
                  href={getMailtoUrl()}
                  className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-300 px-3 py-2 transition-colors"
                >
                  <span>Open Mail App</span>
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      {/* Editorial Footer */}
      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 font-mono gap-4">
        <p>&copy; 2026 Sujoy Layek. Crafted with Next.js &bull; Tailwind CSS &bull; Framer Motion.</p>
        <div className="flex items-center space-x-2 text-neutral-400">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>Available for Internships &bull; Full-Stack Developer</span>
        </div>
      </div>
    </section>
  );
}

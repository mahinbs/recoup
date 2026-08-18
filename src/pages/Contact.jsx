import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { addContactMessage } from "../lib/contactStorage";

const emptyForm = {
  fullName: "",
  organization: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "";
  const section = searchParams.get("section") || "";

  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [busy, setBusy] = useState(false);

  // Personalize eyebrow based on landing referral source
  let eyebrow = "Let's Connect";
  if (from === "academy") {
    eyebrow = "RECOUP Academy Enquiry";
  } else if (from === "ephr" || from === "ephr_legacy") {
    eyebrow = "RECOUP EPHR Enquiry";
  } else if (from.startsWith("second_bell")) {
    eyebrow = "Second Bell Program Enquiry";
  } else if (from === "conditions" || from === "programs" || from === "home") {
    eyebrow = "Clinical Program Enquiry";
  } else if (from === "blog_post" || from === "blog") {
    eyebrow = "Blog Reader Enquiry";
  } else if (from === "services") {
    eyebrow = "Services Enquiry";
  }

  const updateField = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (error) setError("");
    if (success) setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!form.email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!form.message.trim()) {
      setError("Please tell us how we can help.");
      return;
    }

    setBusy(true);
    try {
      addContactMessage({
        fullName: form.fullName,
        organization: form.organization,
        email: form.email,
        phone: form.phone,
        message: form.message,
        from,
        section,
      });
      setForm(emptyForm);
      setSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 text-left">
      {/* Header */}
      <Section className="pt-16 md:pt-24 pb-12 section-tint text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
            {eyebrow}
          </span>
          <h1 className="font-bold text-primary-dark mb-6">
            A conversation, not a decision.
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you&apos;re a school leader, parent, or patient — we&apos;re here to
            listen. No pressure, no hard sell. Just an honest conversation about
            how we can help.
          </p>
        </div>
      </Section>

      {/* Split Layout */}
      <Section className="py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-8">
              Send Us a Message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="utm_source_page" value={from} />
              <input type="hidden" name="utm_source_section" value={section} />

              {error && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {error}
                </div>
              )}
              {success && (
                <div className="rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                  Thanks — your message was sent. Our team will get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="contact-name">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.fullName}
                    onChange={updateField("fullName")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    autoComplete="name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="contact-org">
                    Organization / School
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={form.organization}
                    onChange={updateField("organization")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="St. Mary's Academy (optional)"
                    autoComplete="organization"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="contact-email">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={updateField("email")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john.doe@email.com"
                    autoComplete="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700" htmlFor="contact-phone">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={form.phone}
                    onChange={updateField("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700" htmlFor="contact-message">
                  How can we help you?
                </label>
                <textarea
                  id="contact-message"
                  rows="4"
                  value={form.message}
                  onChange={updateField("message")}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us what you're looking for..."
                />
              </div>

              <Button
                type="submit"
                disabled={busy}
                className="w-full py-4 text-base font-bold shadow-lg shadow-primary/20"
              >
                {busy ? "Sending…" : "Submit Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <h3 className="text-xl font-bold text-primary-dark mb-6">
                Direct Channels
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:connect@recoup.health"
                  className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <span className="font-medium">connect@recoup.health</span>
                </a>

                <div className="space-y-6 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-bold text-primary-dark mb-4">
                    Our Clinics in Bangalore
                  </h4>

                  {/* Bellandur */}
                  <div className="flex items-start gap-4 text-gray-600">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">
                        Bellandur
                      </span>
                      <span className="text-sm leading-relaxed block mb-2">
                        7/1, Eco Space, 3rd Floor Doddakannelli, Exit Gate
                        Bhoganhalli, opp. Campus 8B, RMZ Ecoworld
                        <br />
                        Kaikondrahalli, Bengaluru, Karnataka 560103
                      </span>
                      <a
                        href="tel:+919845155449"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        <Phone size={14} />
                        +91 98451 55449
                      </a>
                    </div>
                  </div>

                  {/* Jayanagar */}
                  <div className="flex items-start gap-4 text-gray-600 pt-2">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 block mb-1">
                        Jayanagar
                      </span>
                      <span className="text-sm leading-relaxed block mb-2">
                        3rd Floor, Pasadena Building, 10th Main, above Simpli
                        Namdhari&apos;s, 18/1, Ashoka Pillar Road <br />
                        Jayanagar 1st Block, Bengaluru, Karnataka 560011
                      </span>
                      <a
                        href="tel:+919845155449"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark transition-colors font-medium"
                      >
                        <Phone size={14} />
                        +91 98451 55449
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-dark rounded-2xl p-8 shadow-inner">
              <h3 className="text-lg font-bold mb-4 text-white">
                What happens next?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-light shrink-0 w-5 h-5 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    You&apos;ll receive a confirmation and we&apos;ll set up a 30-minute
                    discovery call.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-light shrink-0 w-5 h-5 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    We&apos;ll provide an overview of our programs relevant to your
                    needs.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary-light shrink-0 w-5 h-5 mt-0.5" />
                  <p className="text-sm text-gray-300">
                    We&apos;ll outline a tailored recommendation for your specific
                    situation.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

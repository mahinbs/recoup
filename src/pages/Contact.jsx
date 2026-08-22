import React, { useSearchParams } from "react";
import { Section } from "../components/ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { ContactInquiryForm } from "../components/contact/ContactInquiryForm";

const CENTRES = [
  {
    name: "Bellandur",
    address:
      "7/1, Eco Space, 3rd Floor, Doddakannelli, Exit Gate Bhoganahalli, Opp. Campus 8B, RMZ Ecoworld, Kaikondrahalli, Bengaluru, Karnataka 560103",
  },
  {
    name: "Jayanagar",
    address:
      "3rd Floor, Pasadena Building, 10th Main, Above Simpli Namdhari's, 18/1, Ashoka Pillar Road, Jayanagar 1st Block, Bengaluru, Karnataka 560011",
  },
];

const PHYSIO_CENTRE = {
  name: "Whitefield",
  address:
    "1st Floor, Phase I, The Brigade Arcade, S/01, Doddanakundi Industrial Area 2, Garudachar Palya, Mahadevapura, Bengaluru, Karnataka 560048",
};

const Contact = () => {
  const [searchParams] = useSearchParams();
  const from = searchParams.get("from") || "";
  const section = searchParams.get("section") || "";

  let eyebrow = "Contact Us";
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
  } else if (from === "functional-nutrition") {
    eyebrow = "Functional Nutrition Enquiry";
  }

  return (
    <div className="bg-white min-h-screen pt-20 text-left">
      <Section className="pt-16 md:pt-24 pb-12 section-tint text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 block">
            {eyebrow}
          </span>
          <h1 className="font-bold text-primary-dark mb-6">Let&apos;s Connect</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Start with a conversation. Whether you&apos;re looking to understand
            your health, explore our wellness programs, or discuss how we can
            support your school or organization, we&apos;re here to listen. No
            pressure. No hard sell. Just a conversation about what you need and
            how we can help.
          </p>
        </div>
      </Section>

      <Section className="py-12 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm"
          >
            <ContactInquiryForm from={from} section={section} idPrefix="contact" />
          </motion.div>

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
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 block">
                      Email
                    </span>
                    <span className="font-medium">connect@recoup.health</span>
                  </div>
                </a>

                <a
                  href="tel:+919845155449"
                  className="flex items-center gap-4 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-400 block">
                      Phone
                    </span>
                    <span className="font-medium">+91 98451 55449</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-8 pt-2 border-t border-gray-100">
              <h3 className="text-xl font-bold text-primary-dark">Visit Us</h3>

              <div>
                <h4 className="text-lg font-bold text-primary-dark mb-4">
                  Our Centres in Bangalore
                </h4>
                <div className="space-y-6">
                  {CENTRES.map((centre) => (
                    <div key={centre.name} className="flex items-start gap-4 text-gray-600">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <span className="font-bold text-gray-900 block mb-1">
                          {centre.name}
                        </span>
                        <span className="text-sm leading-relaxed block">
                          {centre.address}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-primary-dark mb-4">
                  Our Physiotherapy Centre
                </h4>
                <div className="flex items-start gap-4 text-gray-600">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center shrink-0 mt-1">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block mb-1">
                      {PHYSIO_CENTRE.name}
                    </span>
                    <span className="text-sm leading-relaxed block">
                      {PHYSIO_CENTRE.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-dark rounded-2xl p-8 shadow-inner">
              <h3 className="text-lg font-bold mb-3 text-white">
                A conversation is the first step.
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Tell us what you&apos;re looking for, and we&apos;ll help you find the
                right way forward.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { TrooperCanvas } from "./3d-renders";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// ===============================
// CONSTANTS
// ===============================

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  message: "",
};

const CONTACT_ANIMATION_DELAY = 0.2;
const CONTACT_ANIMATION_DURATION = 1;
const AUDIO_VOLUME = 0.7;

// ===============================
// CONTACT COMPONENT
// ===============================

const Contact = () => {
  const formRef = useRef(null);
  const audioRef = useRef(null);

  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // ===============================
  // HANDLERS
  // ===============================

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      alert("Please complete all fields before submitting.");
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          to_name: "Jorge",
          from_email: email,
          to_email: "your@email.com",
          message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setIsSuccess(true);
      setForm(INITIAL_FORM_STATE);

      alert("Thank you for your message. I will get back to you soon.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // EFFECTS
  // ===============================

  useEffect(() => {
    if (isSuccess && audioRef.current) {
      audioRef.current.volume = AUDIO_VOLUME;
      audioRef.current.play();
    }
  }, [isSuccess]);

  // ===============================
  // RENDER
  // ===============================

  return (
    <section className="flex flex-col-reverse gap-10 overflow-hidden xl:flex-row xl:mt-12">
      <motion.div
        variants={slideIn("left", "tween", CONTACT_ANIMATION_DELAY, CONTACT_ANIMATION_DURATION)}
        className="flex-[0.75] p-8 rounded-2xl bg-black-100"
      >
        <h3 className={styles.sectionHeadText}>Get in Touch</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"
        >
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />

          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={form.email}
            onChange={handleChange}
          />

          <FormField
            label="Message"
            name="message"
            type="textarea"
            rows={7}
            placeholder="Write your message"
            value={form.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-fit py-3 px-8 font-bold text-primary bg-accent rounded-xl outline-none hover:bg-accent-light transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", CONTACT_ANIMATION_DELAY, CONTACT_ANIMATION_DURATION)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <TrooperCanvas />
      </motion.div>

      <audio ref={audioRef} src="/cantina-band.mp3" preload="auto" />
    </section>
  );
};

// ===============================
// FORM FIELD COMPONENT
// ===============================

const FormField = ({ label, type, name, value, onChange, placeholder, rows }) => {
  const baseClasses =
    "bg-black-200 py-4 px-6 placeholder:text-secondary text-white-100 rounded-lg outline-none border border-black-100 font-medium focus:border-accent";

  return (
    <label className="flex flex-col">
      <span className="mb-4 font-medium text-white-100">{label}</span>

      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={baseClasses}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClasses}
        />
      )}
    </label>
  );
};

export default SectionWrapper(Contact, "contact");
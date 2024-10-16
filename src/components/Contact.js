import React from "react";
import { motion } from "framer-motion";
import '../css/Contact.css'; 
import { ReactComponent as Mail } from "../assets/mail.svg"; // Replace with the actual path
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg"; // Replace with the actual path
import { ReactComponent as Instagram } from "../assets/instagram.svg"; // Replace with the actual path

const ContactSection = (props) => {
  return (
    <div className="contact-section noise" id={props.sectionID}>
      <motion.h1
        className="contact-section-title"
        style={{ margin: "0 2rem" }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, delay: 0.25 },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        want to contact me?
      </motion.h1>
      <motion.h1
        className="contact-section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, delay: 0.5 },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        let's connect!
      </motion.h1>
      <motion.div
        className="contact-section-content glass"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1.5, delay: 0.75 },
        }}
        viewport={{ once: true, amount: 1 }}
      >
        <div className="csc-content-container vert-flex">
          <p className="csc-description">Reach me at</p>
          <p className="csc-email">
            <Mail />
            <a
              aria-label="Email"
              className="animated-underline"
              href="mailto:zesanrahim@gmail.com"
            >
              zesanrahim@gmail.com
            </a>
          </p>
        </div>
        <div className="csc-content-container vert-flex">
          <p className="csc-description">Connect with me on</p>
          <div className="navbar__socials-container">
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/zesanrahim/"
              target="_blank"
              rel="noreferrer"
              className="animated-underline"
            >
              <LinkedIn className="navbar__socials-item linkedin" />
            </a>
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/zesanrahim"
              target="_blank"
              rel="noreferrer"
              className="animated-underline"
            >
              <Instagram className="navbar__socials-item instagram" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <footer
        className="text-center mt-[100px] py-3"
        style={{ backgroundColor: "#161b22", color: "#f5f5f5" }} id="#footer"
      >
        <div className="container pt-[60px]">
          <h2 className="fw-bold mb-3">
            🚀 Start Your Web Development Journey Today!
          </h2>
          <p className="mb-4 opacity-75">
            We’re here to guide you — contact us anytime to join our classes.
          </p>

          <div className="row justify-content-center g-4">
            {/* Phone */}
            <div className="col-md-3">
              <a
                href="tel:+923001234567"
                className="text-decoration-none text-light d-block"
              >
                <FaPhoneAlt className="me-2 text-primary" /> +92 306 6390289
              </a>
              <a
                href="tel:+923009876543"
                className="text-decoration-none text-light d-block mt-4"
              >
                <FaPhoneAlt className="me-2 text-primary" /> +92 309 7126890
              </a>
            </div>

            {/* Email */}
            <div className="col-md-3">
              <a
                href="mailto:muhmmadtalha2006@gmail.com"
                className="text-decoration-none text-light d-block"
              >
                <FaEnvelope className="text-success" />{" "}
                muhmmadtalha2006@gmail.com
              </a>
              <a
                href="mailto:ahmyy680@gmail.com"
                className="text-decoration-none text-light d-block"
              >
                <FaEnvelope className="me-2 text-success" />{" "}
                ahmyy680@gmail.com
              </a>
            </div>

            {/* WhatsApp */}
            <div className="col-md-3">
              <a
                href="https://wa.me/923066390289"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                💬 Send Message on WhatsApp
              </a>
              <a
                href="https://wa.me/923097126890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success mt-2"
              >
                💬 Send Message on WhatsApp
              </a>
            </div>
          </div>

          <hr className="my-4" style={{ borderColor: "#fff" }} />

          <p className="mb-0">
            © {new Date().getFullYear()} CodeMentor 🌉 | All Rights
            Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

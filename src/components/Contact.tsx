"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_1n35jzj",   // Service ID
        "template_nm5ueuo",  // Template ID
        form.current,
        "yqa54oaX_HrkLahKk"  // Public Key (punyamu)
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <Container id="contact" className="my-5 p-4 bg-white rounded shadow">
      <Card className="p-4 border-0 shadow-sm rounded-4">
        <h2 className="fw-bold mb-3">Want to work together?</h2>
        <p className="text-muted">
          Feel free to contact me: <strong>diazdgirgani93@gmail.com</strong>
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Your Message</label>
            <textarea
              name="message"
              className="form-control"
              rows={4}
              placeholder="Write your message..."
              required
              suppressHydrationWarning
            ></textarea>
          </div>

          <div className="d-grid">
            <Button
              type="submit"
              variant="dark"
              className="fw-bold rounded-3"
            >
              Send Message
            </Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}

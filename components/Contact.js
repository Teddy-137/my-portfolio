import React from "react";
import Section from "./Section";

const Contact = () => (
  <Section id="contact" className="bg-gray-900/50 backdrop-blur-sm">
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
      </div>
      <div className="bg-gray-800/50 p-8 rounded-2xl border border-neutral-700 shadow-lg">
        <form
          action="https://formspree.io/f/xkgbywno"
          method="POST"
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full px-4 py-3 bg-gray-700 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full px-4 py-3 bg-gray-700 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-4 py-3 bg-gray-700 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Message"
            className="w-full px-4 py-3 bg-gray-700 border border-neutral-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-purple-600 text-white font-medium rounded-lg shadow-lg hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </Section>
);

export default Contact;

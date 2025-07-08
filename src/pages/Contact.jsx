import React from 'react';

const Contact = () => (
  <section className="max-w-xl mx-auto space-y-4">
    <h2 className="text-2xl font-bold text-center">Contact Us</h2>
    <p className="text-center">📍 23/1 Nanda Nagar, Indore (Opp. Sai Temple)</p>
    <p className="text-center">Email: steadfast.englishclub@gmail.com</p>
    <p className="text-center">Phone: 9669696629 / 9669696631</p>
    <form className="flex flex-col gap-4">
      <input className="border p-2 rounded" type="text" placeholder="Your Name*" />
      <input className="border p-2 rounded" type="email" placeholder="Your Email*" />
      <textarea className="border p-2 rounded" placeholder="Your Message" rows="4" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  </section>
);

export default Contact;
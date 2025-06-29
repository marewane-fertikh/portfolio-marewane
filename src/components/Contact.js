import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="pt-8 pb-16 flex flex-col items-center justify-center relative">
      <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-24 h-0.5 bg-purple-900/40 rounded-full" />
      <div className="max-w-lg w-full mx-auto px-4 pb-8 rounded-2xl shadow-2xl bg-gray-900 border border-purple-900/30">
        <h2 className="text-3xl font-bold mb-2 text-purple-400 text-center">
          Contact
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Vous souhaitez me contacter&nbsp;?
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-3 mb-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow"
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 mb-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow"
            required
          />
          <input
            type="text"
            placeholder="Objet"
            className="w-full p-3 mb-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow"
            required
          />
          <textarea
            placeholder="Votre message"
            rows="4"
            className="w-full p-3 mb-4 rounded-xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 shadow"
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition shadow-lg text-base md:text-lg"
          >
            Envoyer
          </button>
        </form>
        {sent && (
          <p className="mt-4 text-center text-green-400">
            Message envoyé avec succès !
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;

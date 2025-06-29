function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 bg-[#111827] shadow-lg rounded-b-3xl border-b border-purple-900/30">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center drop-shadow-lg">
          Marewane Fertikh
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 text-center">
          Étudiant en informatique, passionné par la data et le développement.
        </p>
        <a
          href="/cv-alternance-Marewane-FERTIKH.pdf"
          download
          className="inline-block bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-md"
        >
          Télécharger mon CV
        </a>
      </div>
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-32 h-1 bg-purple-900/40 rounded-full blur-sm" />
    </section>
  );
}

export default Hero;

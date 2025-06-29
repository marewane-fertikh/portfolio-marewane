function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="max-w-3xl mx-auto px-6 py-10 rounded-2xl shadow-2xl bg-gray-900 border border-purple-900/30">
        <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
          Présentation
        </h2>
        <div className="text-gray-300 space-y-5 text-left leading-relaxed">
          <p>
            Je m'appelle{" "}
            <span className="font-semibold text-white">Marewane FERTIKH</span> et
            je suis actuellement étudiant en{" "}
            <span className="font-semibold text-purple-300">
              2ᵉ année de BUT Informatique
            </span>
            , parcours Développement d'Applications, à l'IUT de Villetaneuse (
            <span className="italic">Université Sorbonne Paris Nord</span>).
            Issu d’un parcours sans antécédent en informatique, j’ai découvert le
            développement lors de ma première année et je me suis progressivement
            passionné par cet univers exigeant et stimulant.
          </p>
          <p>
            Au fil des semestres, j’ai eu l’opportunité de travailler sur des
            projets variés, qui m’ont permis de développer des compétences
            techniques et méthodologiques :
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>
              SAE Python : En binôme, une étape importante qui m’a donné un socle
              solide en programmation et m’a aidé à prendre confiance.
            </li>
            <li>
              SAE 3.01 & 4.01 : Les projets collectifs m’ont marqué : travailler
              en équipe sur une application web complète m’a permis de progresser
              en organisation, communication et gestion de projet.
            </li>
            <li>
              Stage : Développement d’un site vitrine pour une entreprise du BTP
              (PHP, HTML, CSS, JS), avec de vraies contraintes professionnelles.
            </li>
          </ul>
          <p>
            Ces deux années m’ont permis de consolider mes compétences en{" "}
            <span className="font-semibold text-purple-300">
              programmation orientée objet
            </span>{" "}
            (Java, PHP, JavaScript), d’approfondir mes connaissances en{" "}
            <span className="font-semibold text-purple-300">bases de données</span>{" "}
            (modélisation, requêtes SQL) et de découvrir la virtualisation et
            l’administration de serveurs (VirtualBox, LAMP).
          </p>
          <p>
            Je souhaite poursuivre mes études vers un{" "}
            <span className="font-semibold text-purple-300">Bac+5</span>,
            idéalement en école d’ingénieurs spécialisée en{" "}
            <span className="font-semibold text-purple-300">Data</span> ou{" "}
            <span className="font-semibold text-purple-300">
              Intelligence Artificielle
            </span>
            , car j’ai un intérêt marqué pour les mathématiques et l’analyse de
            données.
          </p>
          <p>
            <span className="font-semibold text-purple-300">
              Ma qualité principale :
            </span>{" "}
            la curiosité, qui me pousse à apprendre de nouveaux langages,
            frameworks et méthodologies, quelles que soient les difficultés, et à
            toujours chercher à progresser.
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-32 h-1 bg-purple-900/30 rounded-full blur-sm" />
    </section>
  );
}

export default About;

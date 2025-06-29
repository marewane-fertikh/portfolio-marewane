import React from "react";

const skills = {
  "Langages": [
    "Java",
    "PHP",
    "JavaScript",
    "HTML / CSS",
    "SQL",
    "Python",
  ],
  "Frameworks & Librairies": [
    "Spring Boot",
    "Node.js",
    "React",
  ],
  "Outils & Environnements": [
    "PostgreSQL",
    "VirtualBox",
    "Figma",
    "GitHub",
    "IntelliJ",
    "Eclipse",
    "Android Studio",
  ],
};

function Skills() {
  return (
    <section className="py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 text-center mb-12">
        Mes Compétences
      </h2>
      <div className="w-full max-w-4xl flex flex-col gap-10">
        {Object.entries(skills).map(([section, items]) => (
          <div key={section}>
            <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">{section}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2 rounded-xl bg-[#181926] text-white font-medium shadow border border-purple-500/30 transition
                    duration-200 transform hover:-translate-y-1 hover:bg-[#7c3aed] hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Retirer la ligne de séparation ici si elle existe */}
      {/* <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-40 h-2 bg-purple-500/40 rounded-full blur-sm" /> */}
    </section>
  );
}

export default Skills;
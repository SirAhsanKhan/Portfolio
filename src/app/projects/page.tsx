import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

const projects = [
  {
    title: "CLI-ATM",
    description: "A CLI-based ATM machine.",
    link: "npx mr0ahs4n-ka-atm",
    isLink: false,
    technologies: ["TypeScript", "Node.Js", "Javascript"],
    backgroundImage: "/atm.webp"
  },
  {
    title: "CLI-Calculator",
    description: "A command-line calculator.",
    link: "npx mr0ahs4n-simple-calculator",
    isLink: false,
    technologies: ["TypeScript", "Node.Js", "Javascript"],
    backgroundImage: "/calculator.webp"
  },
  {
    title: "CLI-WordCounter",
    description: "Counts your words and characters.",
    link: "npx mr0ahs4n-word_counter",
    isLink: false,
    technologies: ["TypeScript", "Node.Js", "Javascript"],
    backgroundImage: "/word.webp"
  },
  {
    title: "CLI-Number Guessing Game",
    description: "A command-line number guessing game.",
    link: "npx mr0ahs4n-cli-number-guessing-game",
    isLink: false,
    technologies: ["TypeScript", "Node.Js", "Javascript"],
    backgroundImage: "/number.webp"
  },
  {
    title: "Weather-Widget-App",
    description: "A basic weather website.",
    link: "https://weatherwizard1.vercel.app/",
    isLink: true,
    technologies: ["HTML", "CSS", "Javascript"],
    backgroundImage: "/weather.webp"
  },
  {
    title: "SIP-investment-calculator",
    description: "Basic investment calculator.",
    link: "https://investment-calculator-sip.vercel.app/",
    isLink: true,
    technologies: ["HTML", "CSS", "Javascript"],
    backgroundImage: "/investment.webp"
  },
  {
    title: "Static-Resume",
    description: "My resume.",
    link: "https://static-resume-ahsan.vercel.app/",
    isLink: true,
    technologies: ["HTML", "CSS"],
    backgroundImage: "/resume.webp"
  },
  {
    title: "Dynamic-Resume-Builder",
    description: "Resume builder.",
    link: "https://dynamic-resume-ahsan.vercel.app/",
    isLink: true,
    technologies: ["HTML", "CSS"],
    backgroundImage: "/Dresume.webp"
  },
];

const Projects: React.FC = () => {
  return (
    <main>
      <Header />
      <section className="bg-gradient-to-b from-[#1a2335] to-[#060338] min-h-screen py-16 px-5">
        <h2 className="text-3xl font-bold text-[#fbbf24] text-center mb-10">My Projects</h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 0.3}s` }}  // Stagger animation delay for each card
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] opacity-0 animate-fadeIn"
            >
              <Card {...project} />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Projects;

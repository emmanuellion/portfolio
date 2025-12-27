'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, ArrowRight, Brain, Calendar, MapPin, TrendingUp, Server, Layers, Package } from 'lucide-react';
import Script from 'next/script';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Emmanuel Lion',
    url: 'https://emmanuellion.fr',
    image: 'https://emmanuellion.fr/og-image.jpg',
    sameAs: [
      'https://www.linkedin.com/in/lion-emmanuel',
      'https://github.com',
    ],
    jobTitle: 'Étudiant Ingénieur en Développement Logiciel',
    worksFor: {
      '@type': 'Organization',
      name: 'BRL Ingénierie',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'IMT Mines Alès',
    },
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'Développement Full Stack',
      'Développement Web',
      'Développement Mobile',
    ],
    email: 'emmanuel.lion30@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nîmes',
      addressRegion: 'Occitanie',
      addressCountry: 'FR',
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Module Cartographique",
      description: "Module interactif avec graphiques dynamiques, tests unitaires et mocks pour BRL Ingénierie.",
      tech: ["Next.js", "TypeScript", "Leaflet", "Jest"],
      year: "2024"
    },
    {
      title: "Intranet BRL",
      description: "Application intranet pour 200+ collaborateurs avec React et Spring Boot.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      year: "2023"
    },
    {
      title: "Pipeline CI/CD",
      description: "Optimisation et maintenance de pipelines pour déploiements automatisés.",
      tech: ["GitLab CI", "Docker", "Shell"],
      year: "2024"
    },
    {
      title: "Automatisation SIG",
      description: "Script de conversion shapefiles/rasters en TIFF pour production de rendus.",
      tech: ["Python", "GDAL", "Automation"],
      year: "2024"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Spring Boot", "PostgreSQL", "Strapi"]
    },
    {
      category: "Mobile & IA",
      icon: Brain,
      items: ["React Native", "Python", "TensorFlow", "Scikit-learn"]
    },
    {
      category: "DevOps",
      icon: Layers,
      items: ["Docker", "CI/CD", "GitLab", "Linux"]
    }
  ];

  const experiences = [
    {
      title: "Apprenti ingénieur fullstack",
      company: "BRL Ingénierie",
      period: "Sept 2023 - Présent",
      location: "Nîmes, France",
      description: "Développement Next.js/Strapi, module cartographique, CI/CD et automatisation SIG."
    },
    {
      title: "Alternance développement web",
      company: "BRL Ingénierie",
      period: "Août 2022 - Août 2023",
      location: "Nîmes, France",
      description: "Conception d'un intranet React + Spring Boot pour 200+ collaborateurs."
    },
    {
      title: "Stagiaire développement web",
      company: "BRL Ingénierie",
      period: "Mars 2022 - Juillet 2022",
      location: "Nîmes, France",
      description: "Stage de développement web dans le cadre de ma formation."
    }
  ];

  const stats = [
    { label: "Projets", value: "20+", icon: Package },
    { label: "Technologies", value: "15+", icon: Code2 },
    { label: "Années", value: "3+", icon: TrendingUp }
  ];

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-xl font-semibold text-gray-900">
              Emmanuel Lion
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'experience', label: 'Expérience' },
                { id: 'projects', label: 'Projets' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Étudiant ingénieur en développement logiciel
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Passionné par la création de solutions numériques innovantes.
              Actuellement en alternance chez BRL Ingénierie et étudiant à IMT Mines Alès.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300 font-medium"
              >
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-300 font-medium"
              >
                Voir mes projets
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-gray-200">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-5 h-5 text-gray-400" />
                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Compétences</h2>
            <p className="text-gray-600 max-w-2xl">
              Stack technologique diversifié couvrant le développement web, mobile et l'intelligence artificielle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.category} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md hover:border-gray-300 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                    {skill.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">À propos</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Étudiant ingénieur passionné d'informatique à IMT Mines Alès,
                je suis actuellement en alternance chez BRL Ingénierie où je développe
                des applications web avec Next.js et Strapi.
              </p>
              <p>
                Je crée des projets personnels dans le domaine du web, des applications mobiles
                et explore l'intelligence artificielle. Toujours à l'affût des dernières technologies,
                j'aime apprendre continuellement et relever de nouveaux défis techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expérience</h2>
            <p className="text-gray-600 max-w-2xl">
              Parcours professionnel en alternance et responsabilités associatives.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <div className="text-gray-900 font-medium mb-2">{exp.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-600 mb-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 lg:justify-end">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets</h2>
            <p className="text-gray-600 max-w-2xl">
              Sélection de projets professionnels et personnels démontrant mes compétences techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-sm text-gray-500">{project.year}</div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Travaillons ensemble</h2>
            <p className="text-xl text-gray-600 mb-12">
              Ouvert aux opportunités de stage, alternance et projets collaboratifs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="mailto:contact@emmanuellion.fr"
                className="cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:shadow-lg transition-all duration-300 font-medium"
              >
                <Mail className="w-4 h-4" />
                contact@emmanuellion.fr
              </a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://github.com/emmanuellion"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/lion-emmanuel"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@emmanuellion.fr"
                className="cursor-pointer w-12 h-12 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-900 hover:bg-gray-50 hover:shadow-md transition-all duration-300 text-gray-600 hover:text-gray-900"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Emmanuel Lion.
            </p>
            <div className="flex gap-4">
              <span className="text-sm text-gray-600">IMT Mines Alès</span>
              <span className="text-gray-300">·</span>
              <span className="text-sm text-gray-600">BRL Ingénierie</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

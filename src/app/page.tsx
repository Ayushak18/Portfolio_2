'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Purple Glow */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[140px]" />

      {/* Blue Glow */}
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/30 blur-[140px]" />

      {/* Navbar */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#050816]/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <h1 className="text-lg font-semibold tracking-wide">
            Ayush<span className="text-violet-400">.</span>
          </h1>

          <nav className="hidden items-center gap-10 text-sm text-gray-300 md:flex">
            <a
              href="#work"
              className="transition hover:text-white"
            >
              Work
            </a>

            <a
              href="#experience"
              className="transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="#engineering"
              className="transition hover:text-white"
            >
              Engineering
            </a>

            <a
              href="#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center px-6 pt-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-sm uppercase tracking-[0.25em] text-violet-400"
            >
              Frontend Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-6xl font-extrabold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl"
            >
              AYUSH
              <br />
              KAMBOJ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400"
            >
              Frontend engineer building scalable, high-performance digital
              experiences with React, Next.js & TypeScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <button className="rounded-full bg-violet-600 px-7 py-3 shadow-[0_0_40px_rgba(139,92,246,0.4)] transition hover:bg-violet-500">
                View Work
              </button>

              <button className="rounded-full border border-white/10 bg-white/5 px-7 py-3 backdrop-blur-md transition hover:bg-white/10">
                Download Resume
              </button>
            </motion.div>
          </div>

          {/* Right Floating Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute h-[320px] w-[320px] rounded-full bg-violet-500/20 blur-[120px]" />

            <div className="relative w-[320px] rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">Current Focus</p>
                  <h3 className="mt-1 text-xl font-semibold">
                    Frontend Systems
                  </h3>
                </div>

                <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />
              </div>

              <div className="space-y-5">
                {/* Stack */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <p className="mb-3 text-sm text-gray-400">Stack</p>

                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript'].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Philosophy */}
                {/* <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <p className="mb-3 text-sm text-gray-400">
                    Engineering Philosophy
                  </p>

                  <p className="text-sm leading-relaxed text-gray-300">
                    Clean architecture, scalable systems, performance-first UI,
                    and product-focused development.
                  </p>
                </div> */}

                {/* Experience */}
                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                  <p className="mb-2 text-sm text-gray-400">Experience</p>

                  <h4 className="text-xl font-semibold">4+ Years</h4>

                  <p className="mt-1 text-sm text-gray-400">
                    Frontend & Full Stack Development
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="work"
        className="relative px-6 pb-32 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-violet-400">
              Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Featured Projects
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    {project.category}
                  </span>

                  <span className="text-sm text-violet-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const projects = [
  {
    category: 'SaaS Platform',
    title: 'Requirement & Pitch Platform',
    description:
      'A platform where users post requirements and others pitch scalable solutions with a modern full stack architecture.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    category: 'Web3',
    title: 'Bull INC DEX UI',
    description:
      'Decentralized exchange interface focused on scalability, responsiveness and performance-first frontend architecture.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    category: 'Realtime App',
    title: 'Realtime Chat Application',
    description:
      'Realtime communication platform built with scalable websocket architecture and modern frontend patterns.',
    tech: ['Socket.io', 'Express', 'Redis'],
  },
];
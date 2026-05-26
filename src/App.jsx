import profilePic from "./assets/profilepic.jpeg"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaReact,
  FaHtml5,
  FaGitAlt,
} from "react-icons/fa6"

import {
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiPostgresql,
  SiPostman,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si"

import { VscVscode } from "react-icons/vsc"

import { useState } from "react"

function App() {

  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-black text-white min-h-screen">

      <nav className="flex justify-between items-center px-10 py-5">

  {/* Logo */}
  <h1 className="text-2xl font-bold text-orange-400">
    Gloria
  </h1>

  {/* Nav Links */}
  <div className="flex items-center gap-8">

    <ul className="flex gap-6 text-lg">

      <li>
        <a href="#" className="hover:text-orange-400">
          Home
        </a>
      </li>

      <li>
        <a href="#about" className="hover:text-orange-400">
          About
        </a>
      </li>

      <li>
        <a href="#services" className="hover:text-orange-400">
          Services
        </a>
      </li>

    </ul>

    {/* Let's Talk Button */}
    <a
      href="#contact"
      className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg transition duration-300 hover:scale-105"
    >
      Let's Talk
    </a>

  </div>

</nav>

  {/* Hero Section */}
<div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto mt-20 px-5 gap-16">

  {/* LEFT SIDE */}
  <div className="flex-1 text-center md:text-left">

    <h1 className="text-5xl font-bold leading-tight">
      Hello, I'm Gloria Birundu.
    </h1>

    <p className="text-xl font-bold text-gray-300 mt-5">
      Full Stack Developer
    </p>

    <p className="text-lg text-gray-400 mt-4 max-w-2xl">
      I craft modern, responsive and scalable web applications,
      with a passion for clean code and user-centric design.
      I create seamless digital experiences that drive results
      and bring ideas to life on the web.
    </p>

    <a
  href="#contact"
  className="mt-8 inline-block bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:scale-105"
>
  Get In Touch
</a>

    {/* Social Links */}
    <div className="flex gap-6 mt-8 text-3xl justify-center md:justify-start">

      <a
        href="https://github.com/BirunduGloria"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/Gloria_Birundu"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://instagram.com/Birundu.g"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-400 transition duration-300"
      >
        <FaInstagram />
      </a>

      <a
        href="mailto:birundugloria@gmail.com"
        className="hover:text-orange-400 transition duration-300"
      >
        <FaEnvelope />
      </a>

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="flex-1 flex justify-center">

    <div className="relative">

      {/* Blur Background */}
      <div className="absolute inset-0 bg-orange-400 blur-2xl opacity-30 rounded-xl"></div>

      {/* Image */}
      <img
        src={profilePic}
        alt="Profile"
        className="w-64 h-72 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300 relative"
      />

    </div>

  </div>

</div>

      {/* About Section */}
<section
  id="about"
  className="max-w-7xl mx-auto px-6 py-24"
>

  {/* Heading */}
  <div className="text-center mb-16">

    <h2 className="text-5xl font-bold">
      About <span className="text-orange-400">Me</span>
    </h2>

    <p className="text-gray-400 mt-4">
      Crafting digital experiences with passion and precision.
    </p>

  </div>

  {/* Main Content */}
  <div className="grid lg:grid-cols-2 gap-16 items-start">

    {/* LEFT SIDE */}
    <div>

      <h3 className="text-3xl font-semibold mb-6 leading-snug">
        Full Stack Developer focused on modern and scalable web applications.
      </h3>

      <p className="text-gray-400 leading-8 text-lg">
        I am a passionate{" "}
        <span className="text-orange-400">
          Full Stack Developer
        </span>{" "}
        with expertise in building scalable, high-performance
        web applications using modern technologies like React,
        Next.js, .NET, and PostgreSQL.
      </p>

      <p className="text-gray-400 leading-8 text-lg mt-6">
        My journey into web development started from curiosity
        about how things work on the internet. Today,
        I enjoy transforming ideas into functional digital
        products, solving real-world problems,
        and creating intuitive user experiences.
      </p>

      <p className="text-gray-400 leading-8 text-lg mt-6">
        I believe in writing code that is not only functional,
        but also maintainable, scalable, and clean.
      </p>

{/* Resume Button */}
      <section className="flex justify-center pb-20">

        <a
          href="/resume.pdf"
          download
          className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl transition duration-300 hover:scale-105 inline-block"
        >
          My Resume
        </a>

      </section>
    </div>

          {/* Right Side */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <FaReact className="text-5xl text-cyan-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">React</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiJavascript className="text-5xl text-yellow-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">JavaScript</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiTailwindcss className="text-5xl text-cyan-300 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">Tailwind CSS</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <FaHtml5 className="text-5xl text-orange-500 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">HTML</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiDotnet className="text-5xl text-purple-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">.NET / C#</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiPostgresql className="text-5xl text-blue-300 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">PostgreSQL</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <FaGitAlt className="text-5xl text-orange-500 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">Git</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <FaGithub className="text-5xl text-white mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">GitHub</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiPostman className="text-5xl text-orange-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">Postman</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <VscVscode className="text-5xl text-blue-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">VS Code</h4>
            </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiNodedotjs className="text-5xl text-blue-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">Node.js</h4>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl text-center hover:scale-105 transition duration-300">
              <SiNextdotjs className="text-5xl text-blue-400 mx-auto mb-4" />
              <h4 className="text-orange-400 font-semibold">Next.js</h4>
            </div>
          </div>

        </div>

      </section>

    
    {/* ServicesSection */}
    <section
  id="services"
  className="max-w-7xl mx-auto px-6 py-24"
>

  {/* Heading */}
  <div className="text-center mb-16">

    <h2 className="text-5xl font-bold">
      What <span className="text-orange-400">I Do</span>
    </h2>

    <p className="text-gray-400 mt-4">
      I build modern, scalable, and user-focused digital solutions.
    </p>

  </div>

  {/* Services Grid */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Frontend */}
    <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800">

      <div className="text-5xl mb-5">
        💻
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Frontend Development
      </h3>

      <p className="text-gray-400 leading-7">
        Building responsive and interactive user interfaces
        using React, Next.js, Tailwind CSS, HTML, and JavaScript.
      </p>

    </div>

    {/* Backend */}
    <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800">

      <div className="text-5xl mb-5">
        ⚙️
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Backend Development
      </h3>

      <p className="text-gray-400 leading-7">
        Developing secure and scalable backend systems
        using C#, .NET, ASP.NET Core, REST APIs, and Node.js.
      </p>

    </div>

    {/* Database */}
    <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800">

      <div className="text-5xl mb-5">
        🗄️
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Database Design
      </h3>

      <p className="text-gray-400 leading-7">
        Designing and managing efficient databases using
        PostgreSQL, Entity Framework Core, and JSON Server.
      </p>

    </div>

    {/* API */}
    <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800">

      <div className="text-5xl mb-5">
        🔗
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        API Development
      </h3>

      <p className="text-gray-400 leading-7">
        Creating RESTful APIs and integrating third-party services
        for seamless communication between systems.
      </p>

    </div>

    {/* UI/UX */}
    <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800">

      <div className="text-5xl mb-5">
        🎨
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        UI / UX Design
      </h3>

      <p className="text-gray-400 leading-7">
        Designing clean, modern, and intuitive user experiences
        focused on usability and accessibility.
      </p>

    </div>

    {/* Optimization */}
    <div className="bg-gray-900 p-8 rounded-2xl hover:scale-105 transition duration-300 border border-gray-800">

      <div className="text-5xl mb-5">
        🚀
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Performance Optimization
      </h3>

      <p className="text-gray-400 leading-7">
        Improving website speed, responsiveness, scalability,
        and overall application performance.
      </p>

    </div>

  </div>

    {/* Projects Button */}
<div className="flex justify-center mt-16">

  <button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl transition duration-300 hover:scale-105">
    View My Projects
  </button>

</div>
</section>
{/* Contact Section */}
<section
  id="contact"
  className="max-w-5xl mx-auto px-6 py-24 text-center"
>

  {/* Heading */}
  <h2 className="text-5xl font-bold">
    Let's <span className="text-orange-400">Talk</span>
  </h2>

  <p className="text-gray-400 mt-6 text-lg">
    Have a project in mind or want to collaborate?
    Feel free to reach out.
  </p>

  {/* Contact Button */}
  <button
    onClick={() => setShowForm(!showForm)}
    className="mt-10 bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl transition duration-300 hover:scale-105"
  >
    {showForm ? "Hide Form" : "Send Message"}
  </button>

  {/* Hidden Form */}
  {showForm && (

    <form className="bg-gray-900 p-8 rounded-2xl space-y-6 mt-12 text-left">

      <div>

        <label className="block mb-2 text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-400"
        />

      </div>

      <div>

        <label className="block mb-2 text-gray-300">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-400"
        />

      </div>

      <div>

        <label className="block mb-2 text-gray-300">
          Message
        </label>

        <textarea
          rows="6"
          placeholder="Write your message..."
          className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white outline-none focus:border-orange-400"
        ></textarea>

      </div>

      <button
        type="submit"
        className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl transition duration-300 hover:scale-105"
      >
        Send
      </button>

    </form>

  )}

</section>

{/* Footer */}
<footer className="bg-gray-950 border-t border-gray-800 mt-24">
  <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">

    © 2026 Gloria Birundu. All rights reserved.
  </div>
</footer>
</div>
  )
}

export default App
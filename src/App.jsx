function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5">

        <h1 className="text-2xl font-bold text-orange-400">
          Gloria
        </h1>

        <ul className="flex gap-6 text-lg">

          <li>
            <a href="#" className="hover:text-orange-400">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-orange-400">
              About
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-orange-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-orange-400">
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-20 px-5">

        {/* Profile Image */}
        <img
          src="https://i.pravatar.cc/200"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-orange-400 shadow-lg"
        />

        {/* Heading */}
        <h1 className="text-5xl font-bold mt-8">
          Hello, I'm Gloria Birundu.
        </h1>

        {/* Subtitle */}
        <p className="text-xl font-bold text-gray-300 mt-5">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 mt-4 max-w-3xl">
          I craft modern, responsive and scalable web applications,
          with a passion for clean code and user-centric design.
          I create seamless digital experiences that drive results
          and bring ideas to life on the web.
        </p>

        {/* Button */}
        <button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:scale-105">

          View Projects

        </button>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 text-lg">

          <a
            href="#"
            className="hover:text-orange-400"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-orange-400"
          >
            LinkedIn
          </a>

          <a
            href="#"
            className="hover:text-orange-400"
          >
            Email
          </a>

        </div>

      </div>

    </div>
  )
}

export default App
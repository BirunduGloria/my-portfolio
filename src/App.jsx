import profilePic from "./assets/profilepic.jpeg"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa6"

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

       <div className="relative mt-6">
  
  {/* Blur background layer */}
  <div className="absolute inset-0 bg-orange-400 blur-2xl opacity-30 rounded-xl"></div>

  {/* Image */}
  <img
    src={profilePic}
    alt="Profile"
    className="w-48 h-56 object-cover rounded-xl shadow-lg hover:scale-105 transition duration-300"
  />

</div>  

        <h1 className="text-5xl font-bold mt-8">
          Hello, I'm Gloria Birundu.
        </h1>

         <p className="text-xl font-bold text-gray-300 mt-5">
          Full Stack Developer
         </p>

        <p className="text-lg text-gray-400 mt-4 max-w-3xl">
          I craft modern, responsive and scalable web applications,
          with a passion for clean code and user-centric design.
          I create seamless digital experiences that drive results
          and bring ideas to life on the web.
        </p>

        {/* Button */}
        <button className="mt-8 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:scale-105">

          View My Projects

        </button>

        {/* Social Links */}
        <div className="flex gap-6 mt-8 text-3xl">

  <a
    href="https://github.com/BirunduGloria"
    target="_blank"
    className="hover:text-orange-400 transition duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/Gloria_Birundu"
    target="_blank"
    className="hover:text-orange-400 transition duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://instagram.com/Birundu.g"
    target="_blank"
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

    </div>
  )
}

export default App
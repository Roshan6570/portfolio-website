export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name and Role */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Roshan Patil</h3>
            <p className="text-gray-400 text-sm mt-1">
              Full Stack Developer | React Developer | Problem Solver
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Roshan6570"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/roshan-patil-16350b320/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Roshankailaspatil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LeetCode
            </a>

            <a
              href="mailto:patilroshan6570@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Roshan Patil. All rights reserved.
          </p>

          <p className="text-gray-500 text-center md:text-right">
            Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
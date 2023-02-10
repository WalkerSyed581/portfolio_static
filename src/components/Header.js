const Header = () => {
  return (
    <header className="header fixed w-screen">
      <nav className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-10 w-32"
                  src={process.env.PUBLIC_URL + "logo.svg "}
                  alt="Sajeel Hassan"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 text-xl">
                  <a
                    href="#home"
                    className="bg-gray-900 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    HOME
                  </a>

                  <a
                    href="#about"
                    className="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    ABOUT
                  </a>

                  <a
                    href="#skills"
                    className="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    SKILLS
                  </a>

                  <a
                    href="#projects"
                    className="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    PORTFOLIO
                  </a>

                  <a
                    href="#testimonials"
                    className="text-gray-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TESTIMONIALS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="lg:pl-[340px] bg-[#005eff37] text-white flex flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 xl:justify-evenly w-full p-4">
      <span className="attribution"></span> licensed under
      <p className="license">
        <a
          href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className="text-blue-500"
        >
          CC BY 4.0
          <img
            className="h-6 ml-2 inline"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
            alt="CC"
          />
          <img
            className="h-6 ml-2 inline"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
            alt="BY"
          />
        </a>
      </p>
      <p className="copyright">Copyright &copy; {currentYear} INMEDEV</p>
      </footer>
    </>
  );
};

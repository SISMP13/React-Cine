import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
        <Link to='/' className="navbar-link">
              <span className="title">MiCineTMDB</span>
        </Link>
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
  );
};

export default Footer;
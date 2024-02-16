import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiSearchLine, RiHome3Line, RiMore2Fill, RiHomeSmile2Fill, RiDonutChartFill } from 'react-icons/ri';
import { BsStars } from 'react-icons/bs';

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery === '') {
      navigate('/');
    } else {
      navigate(`/search/${trimmedQuery}`);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
<header className="fixed top-0 w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#005eff37] z-40">
  <div className="flex items-center gap-8"> {/* Aumenté el espacio entre elementos */}
    <button
      className="lg:hidden"
      onClick={toggleMenu}
    >
      <RiMore2Fill className="text-lg" /> {/* Reduje el tamaño de la letra */}
    </button>
    <Link to="/" className="text-lg flex items-center gap-2"> {/* Reduje el tamaño de la letra y añadí espacio entre icono y texto */}
      <RiHome3Line /> <span>Home</span>
    </Link>
    <Link to="/favorites" className="text-lg flex items-center gap-2"> {/* Reduje el tamaño de la letra y añadí espacio entre icono y texto */}
      <BsStars /> <span>Favorite</span>
    </Link>
    <Link to="/more" className="text-lg flex items-center gap-2"> {/* Reduje el tamaño de la letra y añadí espacio entre icono y texto */}
      <RiHomeSmile2Fill /> <span>More</span>
    </Link>
    <Link to="/miscompras" className="text-lg flex items-center gap-2"> {/* Reduje el tamaño de la letra y añadí espacio entre icono y texto */}
      <RiDonutChartFill /> <span>Tickets</span>
    </Link>
  </div>
  <form
    className="flex items-center gap-4"
    onSubmit={handleSearchSubmit}
  >
    <input
      type="text"
      placeholder="Search"
      className="bg-[#141414] text-white p-2 rounded-md"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    <button type="submit">
      <RiSearchLine className="text-lg" /> {/* Reduje el tamaño de la letra */}
    </button>
  </form>
</header>

  );
};

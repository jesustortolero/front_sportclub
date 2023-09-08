const Header = () => {
  return (
    <header className="bg-white text-white p-4 flex justify-between items-center shadow-md">
      <div className="xs:block">
        <img
          src="/logo-nav-bad008ff.png"
          alt="Logo"
          className="block sm:mr-4 max-h-24"
        />
      </div>
      <div className="bg-yellow-400 hover:bg-yellow-300 cursor-pointer s:ml-5 font-bold py-2 px-4 rounded-l-full rounded-r-full inline-block">
        <a
          href="https://www.sportclub.com.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl sm:text-xl text-black"
        >
          Conocenos
        </a>
      </div>
    </header>
  );
};

export default Header;

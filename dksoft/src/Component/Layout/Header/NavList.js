import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import logo from '../../../images/dksoftlogo.png'; // Assurez-vous que ce chemin est correct

export function NavList() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal text-base lg:text-lg">
        <a href="/" className="flex items-center">
          Accueil
        </a>
      </Typography>
      
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal text-base lg:text-lg">
        <a href="#services" className="flex items-center">
          Services
        </a>
      </Typography>
     
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal text-base lg:text-lg">
        <a href="#Project" className="flex items-center">
          Projets 
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal text-base lg:text-lg">
        <a href="#Temoignages" className="flex items-center">
          Temoignages
        </a>
      </Typography>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal text-base lg:text-lg">
        <a href="#Contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <a href="#">
          {/* Le logo est responsive avec des classes Tailwind */}
          <img src={logo} alt="DK Consulting Logo" className="h-8 w-auto sm:h-10 md:h-12 lg:h-14 rounded" />
        </a>
        <div className="flex items-center gap-4">
          {/* Le menu de navigation s'affiche sur les grands écrans */}
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      {/* Le menu déroulant pour les petits écrans */}
      {openNav && (
        <div className="block lg:hidden">
          {navList}
        </div>
      )}
    </Navbar>
  );
}

export default NavList;
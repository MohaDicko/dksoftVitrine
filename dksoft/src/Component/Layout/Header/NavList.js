import React from "react";
import {
  Navbar,
  
  Typography,
  
  IconButton,
  Card,
} from "@material-tailwind/react";
import image from '../../../images/dksoftlogo.png';

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
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href=" Accueil" className="flex items-center">
          Accueil
        </a>
      </Typography>
      {/* <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="A propos" className="flex items-center">
          A propos
        </a>
      </Typography> */}
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="services" className="flex items-center">
          Services
        </a>
      </Typography>
     
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="Project" className="flex items-center">
          Projets 
        </a>
        
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <a href="Contact" className="flex items-center">
          Contact
        </a>
      </Typography>
      
    </ul>
  );

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-medium">
            DK SOFT
          </Typography>
          <div className="flex items-center gap-4">
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
      
      </Navbar>
      <div className=" w-full   ">
        <Card className="mb-12   mt-0 ">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src={image} // Corrigé le chemin de l'image
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          DK SOFT
        </Typography>
        <Typography color="gray" className="font-normal">
        DK Soft est une Entreprise de Services du Numérique experte 
        dans le domaine des nouvelles technologies et de l'informatique.
        DK Soft fournit un développement de logiciels 
        personnalisés et de haute qualité à ses clients. 
        Leur expertise permet d'accélérer le déploiement des solutions, 
        de réduire les coûts et d'améliorer la compétitivité de leurs clients..
        </Typography>
      </div>
    </div>
  );
}

export default NavList;

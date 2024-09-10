import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { FaDigitalTachograph, FaMobileAlt, FaCode, FaChartLine } from 'react-icons/fa';

const consultingServices = [
  { text: "Conseil en transformation numérique : Accompagnement des entreprises dans leur transition vers le numérique, en optimisant leurs processus via des solutions digitales.", icon: FaDigitalTachograph },
];

const developmentServices = [
  { text: "Développement de sites web sur mesure : Création de sites web personnalisés en fonction des besoins spécifiques de l'entreprise.", icon: FaCode },
  { text: "Développement d'applications web : Conception et développement d'applications web interactives et réactives.", icon: FaCode },
  { text: "Développement mobile : Création d'applications mobiles natives ou hybrides pour Android et iOS.", icon: FaMobileAlt },
  { text: "Optimisation des performances : Amélioration de la vitesse, de la réactivité et de la performance globale des sites web.", icon: FaChartLine }
];

const Services = () => {
  return (
    <div className=" p-4 bg-gray-100" id="services">
      <Typography variant="h1" color="blue-gray" className="text-center mb-8 font-bold text-4xl">
        Nos Services
      </Typography>
      <div className="mb-8">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-2xl font-semibold">
          Services de Consulting
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingServices.map((service, index) => (
            <Card key={index} className="shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <CardBody className="flex items-center">
                <service.icon className="text-blue-500 text-3xl mr-4" />
                <Typography variant="body1" color="blue-gray" className="text-lg">
                  {service.text}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-2xl font-semibold">
          Services de Développement Web et Mobile
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentServices.map((service, index) => (
            <Card key={index} className="shadow-lg rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <CardBody className="flex items-center">
                <service.icon className="text-blue-500 text-3xl mr-4" />
                <Typography variant="body1" color="blue-gray" className="text-lg">
                  {service.text}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

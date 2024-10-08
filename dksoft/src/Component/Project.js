import React from "react";
import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";

const projects = [
  {
    title: "RMA-ASSURANCE",
    description: "Description du projet 1",
    link: "https://www.assurancedevoyage.ma",
    image: "https://via.placeholder.com/300", // URL de l'image du projet 1
  },
  {
    title: "SAHEL MARKET",
    description: "Description du projet 2",
    link: "https://www.example2.com",
    image: "https://via.placeholder.com/300", // URL de l'image du projet 2
  },
  {
    title: "FIND IT",
    description: "Description du projet 3",
    link: "https://www.example3.com",
    image: "https://via.placeholder.com/300", // URL de l'image du projet 3
  },
];

const Project = () => {
  return (
    <div className="py-8" id="Project">
      <Typography variant="h2" color="blue-gray" className="mb-8 text-center">
        Nos Projets Réalisés
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="w-full">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {project.title}
              </Typography>
              <Typography color="gray" className="font-normal">
                {project.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                color="orange"
                fullWidth
                onClick={() => window.open(project.link, "_blank")}
              >
                Visiter le site
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
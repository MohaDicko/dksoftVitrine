import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const consultingServices = [
  "Conseil en transformation numérique : Accompagnement des entreprises dans leur transition vers le numérique, en optimisant leurs processus via des solutions digitales.",
  "Stratégie digitale : Élaboration de stratégies pour maximiser la présence en ligne, y compris le SEO, les médias sociaux, et le marketing digital.",
  "Audit de site web : Analyse complète d'un site web existant pour identifier les points faibles et proposer des améliorations.",
  "Conseil en expérience utilisateur (UX/UI) : Optimisation de l'interface utilisateur et de l'expérience utilisateur pour améliorer la satisfaction et la conversion.",
  "Gestion de projet : Accompagnement dans la gestion de projets numériques, de la planification à l'exécution.",
  "Sécurité informatique : Évaluation des risques et mise en place de solutions pour protéger les données et infrastructures en ligne.",
  "Conseil en innovation : Aide à l'identification de nouvelles opportunités technologiques pour innover dans les produits et services."
];

const developmentServices = [
  "Développement de sites web sur mesure : Création de sites web personnalisés en fonction des besoins spécifiques de l'entreprise.",
  "Développement d'applications web : Conception et développement d'applications web interactives et réactives.",
  "E-commerce : Développement de plateformes de vente en ligne, y compris l'intégration des systèmes de paiement.",
  "Développement mobile : Création d'applications mobiles natives ou hybrides pour Android et iOS.",
  "Intégration d'API : Connexion de systèmes existants via des API pour améliorer l'efficacité opérationnelle.",
  "Maintenance et support : Suivi, mise à jour, et optimisation continue des sites web et applications développés.",
  "Développement de CMS (Content Management Systems) : Mise en place et personnalisation de systèmes de gestion de contenu tels que WordPress, Joomla, ou Drupal.",
  "Optimisation des performances : Amélioration de la vitesse, de la réactivité et de la performance globale des sites web."
];

const Services = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <Typography variant="h1" color="blue-gray" className="text-center mb-8 font-bold text-4xl">
        Nos Services
      </Typography>
      <div className="mb-8">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-2xl font-semibold">
          Services de Consulting
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {consultingServices.map((service, index) => (
            <Card key={index} className="shadow-lg rounded-lg">
              <CardBody>
                <Typography variant="body1" color="blue-gray" className="text-lg">
                  {service}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <Typography variant="h2" color="blue-gray" className="mb-4 text-2xl font-semibold">
          Services de Développement Web
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {developmentServices.map((service, index) => (
            <Card key={index} className="shadow-lg rounded-lg">
              <CardBody>
                <Typography variant="body1" color="blue-gray" className="text-lg">
                  {service}
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
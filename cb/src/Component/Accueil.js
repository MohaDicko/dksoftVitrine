import React from 'react';
import { Typography, Card, CardBody } from '@material-tailwind/react';

export default function Accueil() {
    return (
        <div id="accueil" className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-500 to-orange-500 p-4">
            <Card className="max-w-3xl mx-auto shadow-lg rounded-lg animate-fade-in">
                <CardBody>
                    <Typography variant="h1" color="black" className="text-center mb-6 animate-slide-in">
                        Bienvenue chez DK Soft
                    </Typography>
                    <Typography variant="body1" color="black" className="text-lg leading-relaxed animate-fade-in">
                        <strong>À propos de DK Soft</strong><br />
                        DK Soft est une Entreprise de Services du Numérique experte dans le domaine des nouvelles technologies et de l'informatique.
                        <br /><br />
                        DK Soft fournit un développement de logiciels personnalisés et de haute qualité à ses clients. Leur expertise permet d'accélérer le déploiement des solutions, de réduire les coûts et d'améliorer la compétitivité de leurs clients.
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}
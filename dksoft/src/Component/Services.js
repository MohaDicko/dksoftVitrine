import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import htmlLogo from './assets/html-logo.png'; // Assurez-vous d'avoir les logos dans le dossier assets
import cssLogo from './assets/css-logo.png';
import jsLogo from './assets/js-logo.png';
import reactLogo from './assets/react-logo.png';
import androidLogo from './assets/android-logo.png';
import iosLogo from './assets/ios-logo.png';

const Service = () => {
  return (
    <div className="container mx-auto p-4">
      <Typography variant="h1" color="blue-gray" className="text-center mb-8">
        Nos Services
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Développement Web
            </Typography>
            <div className="flex justify-around">
              <img src={htmlLogo} alt="HTML" className="h-16 w-16" />
              <img src={cssLogo} alt="CSS" className="h-16 w-16" />
              <img src={jsLogo} alt="JavaScript" className="h-16 w-16" />
              <img src={reactLogo} alt="React" className="h-16 w-16" />
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Typography variant="h2" color="blue-gray" className="mb-4">
              Développement Mobile
            </Typography>
            <div className="flex justify-around">
              <img src={androidLogo} alt="Android" className="h-16 w-16" />
              <img src={iosLogo} alt="iOS" className="h-16 w-16" />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Service;
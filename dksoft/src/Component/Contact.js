// Contact.js
import React, { useRef } from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import GoogleMapComponent from './GoogleMapComponent'; 
import emailjs from 'emailjs-com';

export function Contact() {
  const form = useRef(); // Crée une référence pour le formulaire

  const sendEmail = (e) => {
    e.preventDefault();

    // Utilisation de la fonction sendForm d'EmailJS
    emailjs.sendForm(
      'service_2xpet27', // Remplacez par votre Service ID
      'template_xnm9w8a', // Remplacez par votre Template ID
      form.current, 
      'hCSV1h066hxCZNIbw' // Remplacez par votre clé publique
    )
    .then((result) => {
        console.log('Email envoyé avec succès:', result.text);
    }, (error) => {
        console.error('Erreur lors de l\'envoi de l\'email:', error.message);
    });
  };

  return (
    <section className="px-8 py-8 lg:py-16 bg-gray-100" id="Contact">
      <div className="container mx-auto text-center">
        <Typography variant="h5" color="blue-gray" className="mb-4 !text-base lg:!text-2xl">
          {/* Sous-titre ou autre contenu */}
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4 !text-3xl lg:!text-5xl">
          Contact
        </Typography>
        
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <div className="w-full h-full lg:max-h-[510px]">
            <GoogleMapComponent />
          </div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 lg:max-w-sm">
            <Typography variant="small" className="text-left !font-semibold !text-gray-600">
              Select Options for Business Engagement
            </Typography>
            <div className="flex gap-4">
              <Button variant="outlined" className="max-w-fit">General inquiry</Button>
              <Button variant="outlined" className="max-w-fit">Product Support</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography variant="small" className="mb-2 text-left font-medium !text-gray-900">First Name</Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first_name" // Modifié pour correspondre à l'ID du modèle EmailJS
                  className="focus:border-t-gray-900"
                  containerProps={{ className: "!min-w-full" }}
                  labelProps={{ className: "hidden" }}
                />
              </div>
              <div>
                <Typography variant="small" className="mb-2 text-left font-medium !text-gray-900">Last Name</Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last_name" // Modifié pour correspondre à l'ID du modèle EmailJS
                  className="focus:border-t-gray-900"
                  containerProps={{ className: "!min-w-full" }}
                  labelProps={{ className: "hidden" }}
                />
              </div>
            </div>
            <div>
              <Typography variant="small" className="mb-2 text-left font-medium !text-gray-900">Your Email</Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="user_email" // Modifié pour correspondre à l'ID du modèle EmailJS
                className="focus:border-t-gray-900"
                containerProps={{ className: "!min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>
            <div>
              <Typography variant="small" className="mb-2 text-left font-medium !text-gray-900">Your Message</Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message" // Modifié pour correspondre à l'ID du modèle EmailJS
                className="focus:border-t-gray-900"
                containerProps={{ className: "!min-w-full" }}
                labelProps={{ className: "hidden" }}
              />
            </div>
            <Button type="submit" className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

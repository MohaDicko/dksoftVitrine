import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Importation des images locales
import image1 from "../images/CICR_Logo.webp";
import image2 from "../images/giz.webp";
import image3 from "../images/b2gold.jpg";
import image4 from "../images/crouge.jpg";
import image5 from "../images/irc.webp";
import image6 from "../images/medum.jpg";
import image7 from "../images/nrc.jpg";
import image8 from "../images/oxfam.jpg";
import image9 from "../images/PAM.jpg";
import image10 from "../images/savethechildren.jpg";// Correction de l'emplacement de l'image

const testimonials = [
  {
    name: 'CICR',
    text: ' "Notre collaboration avec DK SOFT a été exceptionnelle. Leur équipe est toujours disponible et prête à répondre à nos besoins. Nous recommandons vivement leurs services."',
    image: image1 // Utilisation de l'image importée
  },
  {
    name: 'GIZ',
    text: ' "Nous sommes extrêmement satisfaits des services fournis par DK SOFT. Leur professionnalisme et leur expertise sont incomparables. Nous les recommandons sans hésitation."',
    image: image2 // Utilisation de l'image importée
  },
  // Ajoutez plus de témoignages ici
  {
    name: 'FEKOLA',
    text: ' "Travailler avec DK SOFT a été une expérience très positive. Leur équipe est compétente et toujours prête à aider. Nous les recommandons vivement."',
    image: image3 // Utilisation de l'image importée
  },
  {
    name: 'CROIX ROUGE',
    text: ' "L\'équipe de DK SOFT est exceptionnelle. Leur dévouement et leur expertise ont grandement contribué à notre succès. Nous les recommandons fortement."',
    image: image4 // Utilisation de l'image importée
  },
  {
    name: 'IRC',
    text: ' "Nous avons eu une excellente expérience avec [Nom de votre startup]. Leur équipe est professionnelle et toujours prête à répondre à nos besoins. Nous les recommandons vivement."',
    image: image5 // Utilisation de l'image importée
  },
  {
    name: 'MINISTERE DE L EDUCATION MALI',
    text: ' "Le service fourni par DK SOFT est exceptionnel. Leur équipe est compétente et toujours prête à aider. Nous les recommandons sans réserve."',
    image: image6 // Utilisation de l'image importée
  },
  {
    name: 'NRC',
    text: ' "Nous sommes très satisfaits des services de DK SOFT. Leur équipe est professionnelle et toujours disponible. Nous les recommandons vivement."',
    image: image7 // Utilisation de l'image importée
  },
  {
    name: 'OXFAM',
    text: ' "Travailler avec DK SOFT a été une expérience très positive. Leur équipe est compétente et toujours prête à aider. Nous les recommandons sans hésitation."',
    image: image8 // Utilisation de l'image importée
  },
  {
    name: 'PAM',
    text: ' "Nous avons eu une excellente expérience avec DK SOFT. Leur équipe est professionnelle et toujours prête à répondre à nos besoins. Nous les recommandons vivement."',
    image: image9 // Utilisation de l'image importée
  },
  {
    name: 'SAVE THE CHILDREN',
    text: ' "Le service fourni par DK SOFT est exceptionnel. Leur équipe est compétente et toujours prête à aider. Nous les recommandons sans réserve."',
    image: image10 // Utilisation de l'image importée
  },
];

const Temoignage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto py-8  bg-gray-100 ">
      <h2 className="text-4xl font-bold text-center mb-8"> . </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="max-w-md mx-auto bg-tilexind-green rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img className="h-48 w-full object-cover md:w-48" src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-tilexind-green-dark font-semibold">{testimonial.name}</div>
                  <p className="mt-2 text-tilexind-green-dark">{testimonial.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Temoignage;
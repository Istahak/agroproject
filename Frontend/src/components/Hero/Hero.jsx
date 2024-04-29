
import React from 'react';
import Slider from 'react-slick'; // Assuming you're using a slider library like react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Hero.css'; // Your custom CSS for Hero Section
import story1 from '../../assets/images/heroimage1.jpg';
import story2 from '../../assets/images/heroimage2.jpg';
import story3 from '../../assets/images/heroimage3.jpg';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  const successStories = [
    {
      image: story1,
      title: 'Increased Crop Yield',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: story2,
      title: 'Improved Soil Health',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: story3,
      title: 'Efficient Water Management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  return (
    <div className="hero-section">
      <Slider {...settings}>
        {successStories.map(story => (
          <div key={story.title} className="story-slide">
            <img src={story.image} alt={story.title} />
            <div className="story-content">
              <h2>{story.title}</h2>
              <p>{story.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

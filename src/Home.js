import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const carouselData = [
  {
    image: 'p1.jpg',
    description: 'When a small town gets plunged into the nightmare of serial killings, rokkie cop Arjan embarks on a chase for the truth and unravels a gruesome conspiracy',
    duration: '2h 14min',
    category: 'Mystery | Thriller | Conspiracy | Action',
  },
  {
    image: 'p2.jpg',
    description: 'NEW EPISODE EVERY FRIDAY. An attempt for justice gets squashed when forced to take an unjust path. Will an aspiring judge stand his moral ground...',
    duration: '1 season, 7 languages',
    category: 'Crime | Drama',
  },
  {
    image: 'p3.jpg',
    description: 'As the covid-19 pandemic looms over India, the medical community races to find a cure and control rumours which get more contagious than the virus.',
    duration: '2h 40min',
    category: 'Drama | Thriller | Medical',
  },
  {
    image: 'p4.jpg',
    description: 'The Sherni is back again, and she is all set to end it all. Will she succeed?',
    duration: '3 seasons, 7 languages',
    category: 'Drama | Thriller | Mystery | Crime',
  },
  {
    image: 'p5.jpg',
    description: 'A covert investigation changes its course when special officer Amar encounters an unrelenting Vikram and his pursuit to take down a notorious drug cartel',
    duration: '2h 51min',
    category: 'Action | Thriller | Tragedy',
  }
];

const latestReleases = [
  { id: 1, image: 'l1.jpg' },
  { id: 2, image: 'l2.jpg' },
  { id: 3, image: 'l3.jpg' },
  { id: 4, image: 'l4.jpg' },
  { id: 5, image: 'l5.jpg' },
  { id: 6, image: 'l6.jpg' }
];

const sports = [
  { id: 1, image: 's1.jpg', desc:'Tigers roar silenced by Super Star' },
  { id: 2, image: 's2.jpg', desc:'Jaiswal blazes away at the top' },
  { id: 3, image: 's3.jpg', desc:'Giants clip Urbanisers wings' },
  { id: 4, image: 's4.jpg', desc: 'Rooney-esque! Garnacho nets a worldie' },
];

const action = [
  { id: 1, image: 'm1.jpg' },
  { id: 2, image: 'm2.jpg' },
  { id: 3, image: 'm3.jpg' },
  { id: 4, image: 'm4.jpg' },
  { id: 5, image: 'm5.jpg' },
  { id: 6, image: 'm6.jpg' }
];

const pl = [
  { id: 1, image: 'pl1.jpg' },
  { id: 2, image: 'pl2.jpg' },
  { id: 3, image: 'pl3.jpg' },
  { id: 4, image: 'pl4.jpg' }
];

const pg = [
  { id: 1, image: 'pg1.jpg' },
  { id: 2, image: 'pg2.jpg' },
  { id: 3, image: 'pg3.jpg' },
  { id: 4, image: 'pg4.jpg' }
];


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="main-page">
    <div id='home'>
    <Carousel>
      {carouselData.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={`Movie ${index + 1}`}
          />
          <Carousel.Caption>
            <div className='desc'>
            <p>2023&nbsp;&nbsp;&#8226;&nbsp;&nbsp;{item.duration}&nbsp;&nbsp;&#8226;&nbsp;&nbsp;Hindi</p>
            <p>{item.description}</p>
            <p>{item.category}</p>
            <button>&#43;&nbsp;&nbsp;Subscribe to Watch</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
    <div className="latest-releases">
      <h2>Latest Releases</h2>
      <div className="movie-list">
        {latestReleases.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt="movie" />
          </div>
        ))}
      </div>
    </div>

    <div className="sports" id='sports'>
      <h2>Best in Sports</h2>
      <div className="movie-list">
        {sports.map((sp) => (
          <div key={sp.id} className="sports-item">
            <img src={sp.image} alt="sports" />
            <p>{sp.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="latest-releases">
      <h2>Action Movies</h2>
      <div className="movie-list">
        {action.map((movie) => (
          <div key={movie.id} className="movie-item">
            <img src={movie.image} alt="movie" />
          </div>
        ))}
      </div>
    </div>

    <div className="sports" id='sports'>
      <h2>Popular Languages</h2>
      <div className="movie-list">
        {pl.map((sp) => (
          <div key={sp.id} className="sports-item">
            <img src={sp.image} alt="sports" />
          </div>
        ))}
      </div>
    </div>

    <div className="sports" id='sports'>
      <h2>Popular Genres</h2>
      <div className="movie-list">
        {pg.map((sp) => (
          <div key={sp.id} className="sports-item">
            <img src={sp.image} alt="sports" />
          </div>
        ))}
      </div>
    </div>

    </div>
  );
};

export default Home;

/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { ProjectCard } from "../card/ProjectCard";
import TypeAnimation from 'react-type-animation';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";



import './Projects.css';


import HourWork from '../../assets/recentprojects/hourwork.png';
import GSDex from '../../assets/recentprojects/gsdex.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Projects = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'HourWork',
      subtitle: 'A Spaced Repetition Based Study Assistant', 
      date: 'Spring 2022',
      description:"A Client-side web application built in conjunction with the CS410 HourWork team and HOURWORK© in Spring 2022. Users can upload their structured notes .txt file, which is then converted into the mind map and deck of flashcards that they can study from.",
      link: 'https://kylehackett99.github.io/HourWork/',
      github: '', 
      alter: 'HourWork Image',
      image: `${HourWork}`,
    },
    { 
      id: 2,
      title: 'GS Dex',
      subtitle: 'A Pokemon Teambuilder Android App',
      date: 'Fall 2021',
      description:"Term Project for CS443: Mobile Applications in Fall 2021. Utilized SQLite and the PokeAPI to allow users to choose a team of 6 pokemon, and be able to search and filter results by a number of different fields.",
      link: '',
      github: 'https://github.com/kylehackett99/GSDEX-PokemonTeamBuilder', 
      alter: 'GS Dex Image',
      image: `${GSDex}`,
    }
  ]);

  return (
    <section id="projects">
      <Container component="main" className={classes.main} maxWidth="md">
      <TypeAnimation className="subheading"
              cursor={true}
              sequence={[
                '',
                2000,
                'School Projects',
                2000,
                'Personal Projects',
                2000,
              ]}
              wrapper="h1"
              repeat={Infinity}
          /> 
      <Swiper
        cssMode={true}
        spaceBetween={100}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        
      {projects.map((exp) => (
        <SwiperSlide key={exp.id}>
          <div className="project">
            <ProjectCard data={exp}/>
          </div>
        </SwiperSlide>
          
      ))}   
      </Swiper>
      </Container>
      
    </section>
  );
};

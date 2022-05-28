/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { WorkCard } from "../card/WorkCard";
import TypeAnimation from 'react-type-animation';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";


import './Swiper.css';
import './Experiences.css';

// Import ../../assets/recentexps/
import Nuance from '../../assets/recentexperiences/nuance.png';
import UMB from '../../assets/recentexperiences/umb.png';




const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Experiences = () => {
  const classes = useStyles();
  const [experiences] = useState([
    { 
      id: 0,
      company: 'Nuance Communications',
      position: 'Software Engineering Intern',
      dates: 'May 2022 - September 2022',
      description: [`Just getting started :)`],
      alter: 'nuance logo',
      image: `${Nuance}`,
      link: 'https://www.nuance.com/index.html',
    },
    { 
      id: 1,
      company: 'UMass Boston',
      position: 'Teaching Assistant for CS210',
      dates: 'September 2021 - May 2022',
      description: ["Facilitated weekly discussions with 30 students to further their understanding of class material.", "Provided one-on-one guidance to students to communicate new concepts and improve projects.", "Evaluated student projects giving constructive feedback to make their code more efficient."],
      alter: 'umb logo',
      image: `${UMB}`,
      link: 'https://www.cs.umb.edu',
      skills: ["java"],
    }
  ]);

  return (
    <section id="experience">
      
      <Container component="main" className={classes.main} maxWidth="md">
      <TypeAnimation className="subheading"
              cursor={true}
              sequence={[
                '',
                2000,
                'Work Experiences',
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
        
      {experiences.map((exp) => (
        <SwiperSlide key={exp.id}>
          <div className="experiences">
            <WorkCard data={exp}/>
          </div>
        </SwiperSlide>
          
      ))}   
      </Swiper>
      </Container>
    </section>
  );
};

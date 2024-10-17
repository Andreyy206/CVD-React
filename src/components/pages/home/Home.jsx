import React from 'react'
import Header from '../parts/Header';
import CallToAction from '../parts/CallToAction';
import Footer from '../parts/Footer';
import HomeBanner from './HomeBanner';
import HomeServices from './HomeServices';
import HomeAbout from './HomeAbout';
import CardList from '../parts/CardList';
import { Globe, Mail, Pencil } from "lucide-react";
import AboutBanner from '../about/AboutBanner';

const Home = () => {
     const services = [
       {
         icon: <Globe stroke={"#ffa700"} size={50} className='mx-auto mb-5' />,
         title: "Web Design Development",
         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste enim neque nisi ipsa sunt ab necessitatibus cumque distinctio odio?",
         url: "xxx"
       },
       {
         icon: <Pencil stroke={"#ffa700"} size={50} className='mx-auto mb-5' />,
         title: "Graphics and Vector Design",
         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste enim neque nisi ipsa sunt ab necessitatibus cumque distinctio odio?",
         url: "xxx"
       },
       {
         icon: <Mail stroke={"#ffa700"} size={50} className='mx-auto mb-5' />,
         title: "Social Media Specialist",
         body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In iste enim neque nisi ipsa sunt ab necessitatibus cumque distinctio odio?",
         url: "xxx"
       },
     ];

     const trends = [
        {
            image: "https://via.placeholder.com/300x200",
            title: "Lorem ipsum dolor sit amet",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit fugit aperiam dignissimos voluptates ipsam quo labore molestias alias in!",
        },
        {
            image: "https://via.placeholder.com/300x200",
            title: "Lorem ipsum dolor sit amet",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit fugit aperiam dignissimos voluptates ipsam quo labore molestias alias in!",
        },
        {
            image: "https://via.placeholder.com/300x200",
            title: "Lorem ipsum dolor sit amet",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sit fugit aperiam dignissimos voluptates ipsam quo labore molestias alias in!",
        },
     ]


  return (
    <>
      <Header />
      <HomeBanner />
      <HomeServices services={services} />
      <HomeAbout />
      <CardList data={trends} header="Latest Trends" subheader="Latest Happenings in virual space"/>
      <CallToAction />
      <Footer />
    </>
  );
}

export default Home

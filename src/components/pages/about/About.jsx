import React from 'react'
import Footer from '../parts/Footer'
import CallToAction from '../parts/CallToAction'
import Header from '../parts/Header'
import CardList from '../parts/CardList'
import AboutBanner from './AboutBanner'

const About = () => {
    const project = [
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
    ];
    



  return (
    <>
      <Header/>
      <AboutBanner/>
      <CardList data= {project} header="My Recent Projects" subheader/>
      <CallToAction/>
      <Footer/>

     
    </>
  )
}

export default About

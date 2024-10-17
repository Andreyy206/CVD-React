import React from 'react'
import Footer from '../parts/Footer'
import CallToAction from '../parts/CallToAction'
import Header from '../parts/Header'
import ServicesTwoCols from './ServicesTwoCols'

const Services = () => {
  return (
    <>
      <Header />

      <ServicesTwoCols
        title='Web Design and Development'
        price='$200-$300'
        image='https://via.placeholder.com/400x400'
        content='lLorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto necessitatibus, quam veniam earum tenetur et deleniti dicta iure perspiciatis impedit corporis beatae iste quaerat, nam sapiente accusamus error, neque corrupti!'
        isDark={false}
        />
      
      
      <ServicesTwoCols
        title='Graphics and Vector Design'
        price='$150-$300'
        image='https://via.placeholder.com/400x400'
        content='lLorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto necessitatibus, quam veniam earum tenetur et deleniti dicta iure perspiciatis impedit corporis beatae iste quaerat, nam sapiente accusamus error, neque corrupti!'
        isDark={true}
      />
      
      <ServicesTwoCols
        title='Social Media Specialist'
        price='$240-$300'
        image='https://via.placeholder.com/400x400'
        content='lLorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto necessitatibus, quam veniam earum tenetur et deleniti dicta iure perspiciatis impedit corporis beatae iste quaerat, nam sapiente accusamus error, neque corrupti!'
        isDark={false}
      />
      
      <CallToAction />
      <Footer />
    </>
  );
}

export default Services
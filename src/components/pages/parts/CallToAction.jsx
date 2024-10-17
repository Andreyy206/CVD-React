import React from 'react'
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className='bg-accent text-black py-24'>
      <div className='max-w-[750px] w-full mx-auto text-center'>
        <h3>Feel free to talk about your projects</h3>
        <p className='mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, eius! Voluptatibus id ea eligendi ullam perferendis!
          Mollitia vitae, perspiciatis vero labore consectetur fugiat doloribus
          non illo, animi earum ab debitis?
        </p>
        <Link to='/contact' className="btn btn-dark">Contact Us</Link>
      </div>
    </section>
  );
}

export default CallToAction

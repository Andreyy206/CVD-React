import React from 'react'
import { Link } from 'react-router-dom';

const HomeAbout = () => {
  return (
      <section className='py-24'>
        <div className='container'>
          <div className='flex flex-row-reverse md:flex-row items-center gap-10'>
            <div className='basis-[50%]'>
              <h3 className='text-accent'>About Me</h3>
              <p className='max-w-[550px] mb-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates molestiae distinctio asperiores neque. In ullam natus
                nemo rerum nostrum magni rem, aspernatur consectetur non nam eos
                veniam placeat, sint, sit dolorum minima? Corporis eum
                exercitationem modi mollitia, inventore harum ea!
              </p>
              
            </div>
            <div className='basis-[50%] self-center grid place-content-center'>
              <img
                src='https://via.placeholder.com/550x550'
                alt=''
                className='size-[450px] rounded-full '
              />
            </div>
          </div>
        </div>
      </section>
  );
}
export default HomeAbout

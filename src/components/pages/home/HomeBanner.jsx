import React from 'react'
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='flex items-center md:items-center md:flex-col-reverse gap-10'>
          <div className='basis-[65%]'>
            <h1>Creative Visual Design</h1>
            <p className='max-w-[550px] mb-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates molestiae distinctio asperiores neque. In ullam natus
              nemo rerum nostrum magni rem, aspernatur consectetur non nam eos
              veniam placeat, sint, sit dolorum minima? Corporis eum
              exercitationem modi mollitia, inventore harum ea!
            </p>
            <Link to='/' className='btn btn-accent' >
              Explore more
            </Link>
          </div>
          <div className='basis-[65%] self-center grid place-content-center'>
            <img
              src='https://via.placeholder.com/550x550'
              alt=''
              className='size-[350px] rounded-full '
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner

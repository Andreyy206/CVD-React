import React from 'react'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <Header/>
      <section className='py-4 bg-black text-white min-h-[80vh]'>
        <div className="container">
          <h1 className='text-accent'>Contact</h1>
          <div className="grid gap-10 lg:grid-cols-2">

          <div className='info'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus tempora consequuntur nisi maiores odit aperiam fugiat eum eius in.</p>
            <ul className='space-y-5'>
              <li className="flex gap-5"><Phone stoke={"#ffa700"}/>0909090909</li>
              <li className="flex gap-5"><Mail stoke={"#ffa700"}/>Someone@soomeone.com</li>
              <li className="flex gap-5"><MapPin stoke={"#ffa700"} size={30}/>Baloc Road</li>
            </ul>
          </div>
          
          <div className='form'>
            <form action="" className='space-y-5'>
              <label htmlFor="name" className='block'>
                <input type="text" name="name" className=' text-black w-full p-2 placeholder:opacity-100 outline-none  border-2 border-transparent focus:border-accent ' placeholder="Fullname" />
              </label>
              <label htmlFor="email" className='block'>
                <input type="text" name="email" className=' text-black w-full p-2 placeholder:opacity-100 outline-none  border-2 border-transparent focus:border-accent ' placeholder="Email" />
              </label>
              <label htmlFor="message" className='block'>
                <textarea name="message" className=' text-black w-full p-2 placeholder:opacity-100 outline-none  border-2 border-transparent focus:border-accent !h-[200px] ' placeholder="message" />
              </label>

              <button className='btb btn-accent w-[120px]'>Submit </button>

            </form>
          </div>
          </div>
        </div>
      </section>
      <Footer /> 
    </div>
  );
}

export default Contact

import React from "react";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
const AboutBanner = () => {
  return (
    <>
      <section className='py-24'>
        <div className='container'>
          <div className='flex  items-center gap-10'>
            <div className='basis-[50%]'>
              <p className='mb-0'>Things you need to know</p>
              <h2 className='text-accent'>About Me</h2>
              <p className='max-w-[550px] '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti quo ex dicta, totam eligendi omnis minima numquam
                voluptates deserunt? Eum nesciunt perspiciatis praesentium
                dignissimos sit amet neque cumque reprehenderit quis molestias
                harum temporibus nihil, facilis iste! Mollitia expedita
                reprehenderit facilis!
              </p>

              <p className='max-w-[550px] '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti quo ex dicta, totam eligendi omnis minima numquam
                voluptates deserunt? Eum nesciunt perspiciatis praesentium
                dignissimos sit amet neque cumque reprehenderit quis molestias
                harum temporibus nihil, facilis iste! Mollitia expedita
                reprehenderit facilis!
              </p>

              <ul className='flex gap-5'>
                <li>
                  <Link to='/'>
                    <Facebook stroke={"#ffa700"} />
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <Twitter stroke={"#ffa700"} />
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <Instagram stroke={"#ffa700"} />
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <Youtube stroke={"#ffa700"} />
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <Mail stroke={"#ffa700"} />
                  </Link>
                </li>
              </ul>
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
    </>
  );
};

export default AboutBanner;

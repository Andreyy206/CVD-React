import { Calendar, Tag, User } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const BlogCard = ({image, user, calendar, tag, title, info, path}) => {
  return (
    <div>
      <div className='blog-card'>
        <img
          src={image}alt=''
          className='w-full h-[300px] object-cover'
        />

        <ul className='flex flex-wrap justify-between items-center'>
          <li className="flex justify-center gap-2">
            <User />{user}
          </li>
          <li className="flex justify-center gap-2">
            <Calendar /> {calendar}
          </li>
          <li className="flex justify-center gap-2">
            <Tag />
            {tag}
          </li>
        </ul>

        <h3 className='text-accent'>{title}</h3>
        <p>{info}</p>
        <Link to='/' className='text-accent'>{path}</Link>
      </div>
    </div>
  );
}

export default BlogCard

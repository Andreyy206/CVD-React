import React from 'react'
import CallToAction from '../parts/CallToAction'
import Header from '../parts/Header'
import Footer from '../parts/Footer'
import { Link } from 'react-router-dom'
import RecentPost from './RecentPost'
import BlogCard from './BlogCard'
import CategoryItem from './CategoryItem'
import TagLink from './TagLink'

const Update = () => {
  return (
    <div>
      <Header />
      <section className='py-4'>
        <div className='container'>
          <h1 className='mb-0 text-accent '>Latest Trends</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perspiciatis, quos!
          </p>

          <div className='grid grid-cols-[2.5fr,_1fr] gap-10 mt-10'>
            <main>
              <BlogCard
                image='https://via.placeholder.com/200x200'
                user='Roy Balaaldia'
                calendar='March 23, 2024'
                tag='Web Design'
                title='This is Web Design'
                info='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil debitis at atque adipisci eum totam molestias, temporibus nobis praesentium recusandae, quisquam quis cumque est aspernatur mollitia corporis exercitationem enim sed? Veritatis vero iusto modi fugit ex ipsum quis cupiditate est?'
                path='Read more...'
              />
              <BlogCard
                image='https://via.placeholder.com/200x200'
                user='Roy Balaaldia'
                calendar='March 23, 2024'
                tag='Web Design'
                title='This is Web Design'
                info='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil debitis at atque adipisci eum totam molestias, temporibus nobis praesentium recusandae, quisquam quis cumque est aspernatur mollitia corporis exercitationem enim sed? Veritatis vero iusto modi fugit ex ipsum quis cupiditate est?
'
                path='Read more...'
              />
            </main>
            <aside>
              <div className='aside-box mb-10'>
                <h3 className='text-accent uppercase'>Categories</h3>

                <CategoryItem title='Web Design' count='2' />
                <CategoryItem title='Wire Development' count='5' />
                <CategoryItem title='Wire Frame' count='3' />
                <CategoryItem title='Vector & Logo' count='1' />
                <CategoryItem title='Web Design' count='2' />
              </div>

              <div className='aside-box mb-10'>
                <h4 className='text-accent uppercase'>Recent Post</h4>

                <RecentPost img = 'https://via.placeholder.com/100x100' title='This is awesome' Date='march 12, 2020'path='/this-is-awesome'/>
                <RecentPost img = 'https://via.placeholder.com/100x100' title='This is awesome' Date='march 12, 2020'path='/this-is-awesome'/>
                <RecentPost img = 'https://via.placeholder.com/100x100' title='This is awesome' Date='march 12, 2020'path='/this-is-awesome'/>
                <RecentPost img = 'https://via.placeholder.com/100x100' title='This is awesome' Date='march 12, 2020'path='/this-is-awesome'/>
              </div>

              <div className='aside-box mb-10'>
                <h4 className='text-accent uppercase'>Tags</h4>
                <TagLink title='Web Development' path='/webdevelopment' />
                <TagLink title='Web Design' path='/webdesign' />
                <TagLink title='Web Design' path='/webdesign' />
                <TagLink title='Vector and Logo' path='/vectorandlogo' />
                <TagLink title='Social Media' path='/socialmedia' />
              </div>
            </aside>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Update

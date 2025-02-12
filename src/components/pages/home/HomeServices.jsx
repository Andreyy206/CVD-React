import { Globe, Mail, Pencil } from 'lucide-react'
import React from 'react'

const HomeServices = ({services}) => {
   
  return (
    <div className='py-24 bg-black text-white'>
        <div className="container">
            <div className="grid grid-cols-3 gap-8">
                {services.map((item, key)=>{
                    return (
                      <div className='card text-center ' key={key}>
                        {item.icon}
                        <h4 className='text-accent'>{item.title}</h4>
                        <p className='text-justify'>{item.body} </p>
                        <button className='btn btn-accent'>Get Quote</button>
                      </div>
                    );
                })}
            </div>
        </div>
    </div>
  )
}

export default HomeServices

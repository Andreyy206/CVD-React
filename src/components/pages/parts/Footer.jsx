import { Facebook, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className='py-10 bg-black text-white '>
        <div className="container">
            <div className="flex justify-between items-center">
                <ul className='flex gap-5'>
                    <li><Link><Facebook/></Link></li>
                    <li><Link><Twitter/></Link></li>
                    <li><Link><Instagram/></Link></li>
                    <li><Link><Youtube/></Link></li>
                    <li><Link><Mail/></Link></li>
                </ul>
                <p className='mb-0'>Baloc Road, Brgy. San Ignacio San Pablo City, Laguna 4000</p>
                <p className='mb-0'>Creative Visual Design</p>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

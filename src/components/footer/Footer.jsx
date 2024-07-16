import React from 'react'
import { Link } from 'react-router-dom'
import footer_logo from '../../images/footer_logo.svg'
import footer_logo_dark from '../../images/footer_logo_dark.svg'

import  Container  from '../container'

const Footer = () => {
  return (
    <footer>
      <Container>
        <ul className='flex justify-between items-center py-5'>
          <li><span className="text-black text-xs blog_text font-semibold ">Thanks for </span><span className="text-orange-600 text-xs font-semibold  underline">coming!</span></li>
          {/* <li><Link to='email:gblog@gmail' className='blog_text text-black text-xs font-semibold underline -mr-20'>gblog@gmail.com</Link></li> */}
          <li className='blog_light_logo w-[140px]'>
            <img  src={footer_logo} alt="logo"  />
          </li>
          <li className='blog_dark_logo '>
            {<img src={footer_logo_dark} alt="logo"  />  }    
          </li>
          
        </ul>
      </Container>
    </footer>
  )
}

export default Footer

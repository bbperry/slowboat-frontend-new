import React from 'react';
import { Link } from 'react-router-dom'
import brand from './images/branding.png'
import { GrFacebook } from 'react-icons/gr'
import { TiSocialInstagram } from 'react-icons/ti'
import { MdEmail } from 'react-icons/md'


function Footer() {
  
  return (
    <div className='footer-container'>
        <div className='brand-container'>
            <div>
                <img className='brand' src={brand} alt='brand image'/>
            </div>
            <div className='tagline'>wild, sustainable, fishermen direct</div>
            <h6 className='phone'>360.301.1393</h6> 
            <div className="admin-link-container">
            <Link className="admin-link" to="/login">admin</Link>
            </div>
            <div className='contacts'>

              <a  href="mailto:slowboatfishco@gmail.com" target="_blank" ><MdEmail className='icons'/></a>

              <a  href="https://www.facebook.com/slowboatfishco" target="_blank" ><GrFacebook className='icons' /></a>

              <a  href="https://www.instagram.com/slowboatfishcompany/" target="_blank" ><TiSocialInstagram className='icons' /></a>
            
            
            </div>
        </div>
    </div>
  );
}

export default Footer;

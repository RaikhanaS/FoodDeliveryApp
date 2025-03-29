import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <h2>FRADEL</h2>
            <p>Hungry? We’ve got you covered. Our food delivery app brings your favorite meals from local restaurants straight to your doorstep — fast, fresh, and hassle-free. Browse menus, track your order in real time, and enjoy delicious food anytime, anywhere. Whether it's breakfast, lunch, dinner, or a late-night craving — we deliver happiness with every bite.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-right">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-center">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1 (800) 123-4567</li>
                <li>support@foodieexpress.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>© 2025 Fradel. All rights reserved.
      Fast, fresh, and delicious – delivered right to your door.</p>
    </div>
  )
}

export default Footer

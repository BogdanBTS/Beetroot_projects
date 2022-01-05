import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/bmovie.png'


const Footer = () => {
    return (
        <div className='footer' style={{backgroundImage: `url(${bg})`}}>
           <div className="footer__content container">
               <div className="footer__content-logo">
                    <div className="logo">
                        <img src={logo} alt="bmovie logo" />
                        <Link to='/'>bMovies</Link>
                    </div>
               </div>
               <div className="footer__content-menus">
                   <div className="footer__content-item">
                       <Link to='/'>Home</Link>
                       <Link to='/'>Contact</Link>
                       <Link to='/'>Term of services</Link>
                       <Link to='/'>About</Link>
                   </div>
                   <div className="footer__content-item">
                       <Link to='/'>Live</Link>
                       <Link to='/'>FAQ</Link>
                       <Link to='/'>Premium</Link>
                       <Link to='/'>Privacy policy</Link>
                   </div>
                   <div className="footer__content-item">
                       <Link to='/'>You must watch</Link>
                       <Link to='/'>Recent release</Link>
                       <Link to='/'>TOP IMDB</Link>
                   </div>
               </div>
           </div>
        </div>
    );
}

export default Footer;

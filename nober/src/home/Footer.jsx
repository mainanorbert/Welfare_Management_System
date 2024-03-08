import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div className='mb-0 md:flex grid grid-cols-2 w-full justify-around mt-10 bg-slate-800'>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>Quick Links</h1>
                <ol className='disc-list text-neutral-200 font-light'>
                    <li className='hover:underline'><Link to="/">Home</Link></li>
                    <li className='hover:underline'><Link to='/about'>About</Link></li>
                    <li className='hover:underline'><Link to="/donations">Donations</Link></li>
                    <li className='hover:underline'><Link to="/members">Membership</Link></li>
                </ol>
            </div>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>Social Media</h1>
                <div className='text-neutral-200 font-light hover:underline'><Link to="https://www.nobertechx.xyz/" target={'_blank'} >Nobertechx Blog</Link></div>
                <div className='text-neutral-200 font-light hover:underline'><Link to="https://twitter.com/mainanorbert2" target={'_blank'} >Twitter</Link></div>

                <div className='text-neutral-200 font-light hover:underline'><Link to="https://www.linkedin.com/in/norbert-osiemo-0256a4144/" target={'_blank'}  >LinkedIn</Link></div>
                



            </div>
            <div className=''>
                <h1 className='text-neutral-300 font-bold'>More Contacts</h1>
                <ol className='disc-list text-neutral-200 font-light'>
                    <li className='hover:underline'><Link to="">mainanorbert@gmail.com</Link></li>
                    <li className='hover:underline'><Link to="">0799535642</Link></li>
                    <li className='hover:underline'><Link to="">Donations</Link></li>
                </ol>
            </div>

        </div>
    )
}

export default Footer
import React from 'react'
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <div>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Pratik's Portfolio</a>
            </div>
            <div className="flex-none ">
                <ul className="menu menu-horizontal px-1">
                <li><Link to='home' smooth={true} duration={500}><a>Home</a></Link></li>
                <li><Link to='about' smooth={true} duration={500}><a>About</a></Link></li>
                <li><Link to='skills' smooth={true} duration={500}><a>Skills</a></Link></li>
                <li><Link to='work' smooth={true} duration={500}><a>Work</a></Link></li>
                <li><Link to='contact' smooth={true} duration={500}><a>Contact</a></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Nav
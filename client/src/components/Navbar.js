import React, { Component } from 'react';
import { FaDeezer } from 'react-icons/fa';
import { BiMenu } from "react-icons/bi";


class Navbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
    ;
  }

  render() {
    return (
      <nav className='navbar bg-white/80 backdrop-blur-sm bg-slate'>
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className='flex flex-shrink-0 flex-wrap items-center p-8 mr-2 text-2xl font-bold'> <FaDeezer /> <span className='m-2 mx-4'>vboard</span>  </a>
          <button onClick={this.toggle} className='md:hidden m-8 navbar-toggler' >  <BiMenu size={28} /> </button>
          <div className={`w-full md:block md:w-auto ${this.state.isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col items-center md:flex-row md:space-x-8 md:font-medium transition-all duration-800 ease-in" aria-labelledby="dropdownMenuButton1">
              {[
                ['Home', '/'],
                ['Tests', '/testlink'],
                ['Contact', '/contact'],
                ['About', '/about'],
              ].map(([title, url]) => (
                <li className='my-2 nav-item'>
                  <a href={url} className=" current rounded-full text-lg px-5 py-3 md:hover:bg-white hover:outline-none md:hover:outline md:hover:outline-indigo-200 md:duration-100 md:hover:text-slate-900 " >{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
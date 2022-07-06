/* import React, {useState} from 'react'
import { Logo } from './Logo'
import serv from '../Servicios/serv.json'
import espec from '../Especialidades/espec.json'
import { DesktopNavigation, DropdownContainer, HamburguerWrapper } from './styles'
import { Hamburguer } from './Hamburguer'



const Navbar = () => {
    const [hover, setHover] = useState(false)
    const [hoverS, setHoverS] = useState(false)                              
    const [toggleMenu, setToggleMenu] = useState(false)
    
              
    return (
        <nav className='relative z-10 bg-white shadow-xl'>
            <div className='pt-2 px-16 flex justify-between'>
                <a href="/" className='flex items-center justify-center mb-2 mr-4 py-[5px] pl-4'><Logo/></a>   
                <DesktopNavigation className={toggleMenu ? "show-nav links" : "links"}  open={toggleMenu}>
                    <ul>
                        <li className='px-2 pb-2 h-full'><a href="" className='p-2 text-sm text-darkGray leading-5 hover:text-primary' onMouseEnter={()=>setHoverS(true)} onMouseLeave={()=>setHoverS(false)}>Servicios y especialidades</a></li>
                        <li className='px-2 pb-2 h-full'><a href="" className='p-2 text-sm text-darkGray leading-5 hover:text-primary'>Sala de emergencia</a></li>
                        <li className='px-2 pb-2 h-full'><a href="" className='p-2 text-sm text-darkGray leading-5 hover:text-primary'>Para paciente</a></li>
                        <li className='px-2 pb-2 h-full'><a href="" className='p-2 text-sm text-darkGray leading-5 hover:text-primary'>Sobre nosotros</a></li>
                        <li className='px-2 pb-2 h-full'><a href="" className='p-2 text-sm text-darkGray leading-5 hover:text-primary'>Contacto</a></li>                                       
                    </ul>
                    <HamburguerWrapper onClick={()=>setToggleMenu(!toggleMenu)}>
                        <Hamburguer/>
                    </HamburguerWrapper>
                </DesktopNavigation>
            </div>            
            <DropdownContainer className={hoverS ? "h-full flex px-16 py-6" : "h-0"} id="dropdownMenu">
                <div className='w-1/3'>
                    <h2>Servicios y especialidades</h2>
                    <p>En el Hospital Ashford ofrecemos una gran diversidad de servicios.</p>
                </div>
                <div className='w-1/3 pl-8'>
                    <p className='text-primary pl-8 py-2 pr-2'>Servicios</p>
                    <div className='flex flex-wrap pl-8'>
                    {
                        React.Children.toArray(
                        serv.map(item => (                                                                                            
                            <a href="" className='py-2'><h6>{item.name}</h6></a>                                                                                                                                       
                        ))
                        )
                    }
                    </div>
                </div>
                <div className='w-1/3 pl-8'>
                    <p className='text-primary pl-8 py-2 pr-2'>Especialidades</p>
                    <div className='flex flex-wrap pl-8'>
                    {
                        React.Children.toArray(
                        espec.map(item => (                                                                                            
                            <a href="" className='py-2'><h6>{item.name}</h6></a>                                                                                                                                   
                        ))
                        )
                    }
                    </div>
                </div>
            </DropdownContainer>
        </nav>

    )
}

export {Navbar} */
/* import Hamburger from "./Hamburger";
import React, { useState } from 'react';

export function Navbar(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return(
        <div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>

                    
                </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            </div>


            <style jsx>{`
                .navigation{
                    width: 100%;
                    height: 50px;
                }
                
                
                .navigation ul{
                    display:flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }
                .hamburger{
                    display: none;
                    z-index: 6;
                } 
                @media (max-width: 767px){
                  
                    .hamburger{
                        display:fixed;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }
                
                   
                    .navigation ul{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: blue;
                        height: 100vh;
                        width: 100vw;
                        margin-top: 50px;
                        position: absolute;
                        transition: display 0.8s ease-in-out;
                        z-index: 6;
                        overflow-y:auto;
                        
                    }
                }
                
               
                
            `}</style>
        </div>
    )

} */

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { NavbarWrapper, NavbarLogo, NavbarItems, NavbarItem, HamburgerButtonWrapper, HamburgerButtonLines } from './styles'

function NavigationBar() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    /* Close the drawer when the user clicks outside of it */
    const closeDrawer = event => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <>      
      <NavbarWrapper>
        <NavbarLogo>Logo</NavbarLogo>

        <HamburgerButtonWrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButtonLines />
        </HamburgerButtonWrapper>

        <NavbarItems ref={drawerRef} open={openDrawer}>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>Blog</NavbarItem>
          <NavbarItem>About</NavbarItem>
        </NavbarItems>
      </NavbarWrapper>
    </>
  );
}

export {NavigationBar};

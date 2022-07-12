import styled from "styled-components"

export const DesktopNavigation = styled.div.attrs({
    className: "flex grow items-center basis-auto relative"
})
`
    #dropdownMenu{
        position: absolute; 
        top: 0;        
        width:100%;  
        cursor: pointer; 
        z-index: 1;     
        transition: height .3s ease-in-out;  
        -webkit-transition: height 300ms ease-in-out;        
        background-color: white;
        overflow-y: auto;
    }
    ul{
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 767px){
            display: ${props => props.open ? 'inline' : 'none'};
            background-color: white;
            height: 100vh;
            width: 100%; 
            position:fixed; 
            transition: all .3s ease-in-out;
            top: 110px;
            left: 0; 
            overflow-y:auto;            
        }                       
    }
    li{
        list-style-type:none;        
    }
`;
export const DropdownContainer = styled.div.attrs({
    className: "bg-grayMenu"
})
`
    #dropdownMenu{
        position: absolute; 
        top: 0;        
        width:100%;  
        cursor: pointer; 
        z-index: 1;     
        transition: height .3s ease-in-out;  
        -webkit-transition: height 300ms ease-in-out;        
        background-color: white;
        overflow-y: auto;
    }

    z-index:2;
    overflow: hidden;  
`;
export const HamburguerWrapper = styled.div.attrs({
    className: ""
})
`
    display:none;

    @media screen and (max-width: 767px) {
        display:block;
    }
`;
export const HamburguerContainer = styled.div.attrs({
    className: ""
})
`
   width: 2rem;
   height: 2rem;
   display: flex;
   justify-content: space-around;
   flex-flow: column nowrap;
   z-index:10;

   .burguer{
        width: 2rem;
        height: 0.25rem; 
        border-radius: 10px;
        background-color: black;
        transform-origin: 1px;
        transition: all 0.3s linear;
   }
`;
export const NavbarWrapper = styled.nav.attrs({
    className: ""
})
`
    flex: 1;

    align-self: flex-start;

    padding: 8px 64px 18px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    position:fixed;
    top:0;
    width: 100%;
    z-index:1;
    

    // 40em == 640px
    @media only screen and (max-width: 40em) {
    
    width: 100vw;
    top: 0;
    z-index:10;
    }  
`;

export const NavbarLogo = styled.p.attrs({
    className: ""
})
`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
`;
export const NavbarItems = styled.ul.attrs({
    className: ""
})
`
    display: flex;
    list-style: none;
   

    @media only screen and (max-width: 40em) {
    position: absolute;
    left: 0;
    top: 100%;
    perspective: 1000px;
    z-index:-1;

    height: 100vh;

    flex-direction: column;

    background-color: white;
    padding: 1rem 2rem;
    overflow-y:auto;
    touch-action: none;
    

    transition: 0.2s ease-out;

    /* transform: ${props => props.open ? 'translateY(100%)' : 'translateY(0)'}; */

    animation:  ${props => props.open ? 'growDown 400ms ease-in-out forwards' : 'srinkUp 400ms ease-in-out forwards'};
    transform-origin: top center;

    @keyframes growDown {
        0% {
            transform: scaleY(0)
        }        
        100% {
            transform: scaleY(1)
        }
    }
    @keyframes srinkUp {
        0% {
            transform: scaleY(1)
        }        
        100% {
            transform: scaleY(0)
        }
    }
`;
export const NavbarItem = styled.li.attrs({
    className: "text-sm text-secondary font-normal hover:text-primary"
})
`
    padding: 8px;
    cursor: pointer;

    @media only screen and (max-width: 40em) {
    padding: 1rem 0;
    
    }
`;
export const HamburgerButtonWrapper = styled.button.attrs({
    className: ""
})
`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;

    display: none;

    @media only screen and (max-width: 40em) {
    display: block;
    }

    /* Remove default button styles */
    border: none;
    background: transparent;
    outline: none;

    cursor: pointer;

    &:after {
    content: "";
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
    }
`;
export const HamburgerButtonLines = styled.div.attrs({
    className: ""
})
`
    top: 50%;
    margin-top: -0.125em;

    &,
    &:after,
    &:before {
    /* Create lines */
    height: 2px;
    pointer-events: none;
    display: block;
    content: "";
    width: 100%;
    background-color: black;
    position: absolute;
    }

    &:after {
    /* Move bottom line below center line */
    top: -0.8rem;
    }

    &:before {
    /* Move top line on top of center line */
    top: 0.8rem;
    }
`;
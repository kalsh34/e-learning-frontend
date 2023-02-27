import React, {useRef} from 'react';
import { Container } from 'react-bootstrap';



const navLinks = [
    {
      display: "All Catagories",
      url: "#",
    },
    {
      display: "Accounting",
      url: "#",
    },
  
    {
      display: "Business",
      url: "#",
    },
    {
      display: "Design",
      url: "#",
    },
    {
      display: "Health & Fitness",
      url: "#",
    },
    {
        display: "IT & Software",
        url: "#",
      },
      {
        display: "Marketing",
        url: "#",
      },
      {
        display: "Photography & Video",
        url: "#",
      },
  ];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className='header1'>
      <Container>
        <div className="Nav__menu nav d-flex align-items-center gap-5">
          <div>
            <h1 className="head">Find the right Online Course for you</h1>
          </div>

         <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <div className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a className='an' href={item.url}>{item.display}</a>
                  </li>
                ))}
              </div>
            </div>
            <svg width="1312" height="5" viewBox="0 0 1312 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<line className="line" y1="2.5" x1="70" x2="3000" y2="2.5" stroke="#E6F0F0" stroke-width="5"/>
</svg>
            </div>
           

            <div className='mobile__menu'> 
            <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
            </div>

    

          </div>
          </Container>
    </header>
  );
};

export default Header;
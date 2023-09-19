import { Navbar, Container, Nav } from "react-bootstrap";
import { navLinks } from "../data/index";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavbarComponent = () => {
  const[changeColor, setChangeColor]=useState(false);

  const changeBackroundColor=()=>{
    if(window.scrollY > 10){
      setChangeColor(true);
    }else{
      setChangeColor(false);
    }
  }

  useEffect(()=>{
    changeBackroundColor();
    window.addEventListener('scroll',changeBackroundColor)
  });

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""} style={{position:"fixed",width:"100%"}}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Ngoding.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    end
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1 text-center">
                join with us
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

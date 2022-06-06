import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import { useColors } from "../../../hooks/useColor";

const Header = ({ showMobmenu }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const { color } = useColors();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar dark expand="md" style={{backgroundColor: color}}>
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
        </NavbarBrand>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link href="/ui/estudiantes">
              <a className="nav-link" style={{color: 'black'}}>Lista de estudiantes</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/ui/hospitales">
              <a className="nav-link" style={{color: 'black'}} >Sitios de Practica</a>
            </Link>
          </NavItem>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle style={{backgroundColor: color}}>
            <div style={{ lineHeight: "0px" }}>
              <Image
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
                height="30"
              />
            </div>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header><Link href="/ui/perfil">Perfil</Link></DropdownItem>
            <DropdownItem header><Link href="/ui/login">cerrar sesión</Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};



export default Header;

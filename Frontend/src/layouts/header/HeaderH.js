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
import { useRouter } from "next/router";
import { apiLogoutCoord } from "../../../api/logout";

const HeaderH = ({ showMobmenu }) => {
  const router = useRouter()

  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const { color } = useColors();

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      const rol = localStorage.getItem('rol')
      if (rol == "Coord") {
        apiLogoutCoord().then(() => {
          if (typeof window !== "undefined") {
            localStorage.removeItem("token")
            localStorage.removeItem("rol")
          }
        })
      }
    }
    router.push('/ui/login')
  }

  return (
    <Navbar dark expand="md" style={{backgroundColor: color}}>
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
        </NavbarBrand>
        <Button color="primary" className="d-lg-none" onClick={showMobmenu}>
          <i className="bi bi-list"></i>
        </Button>
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
            <DropdownItem header><a onClick={handleLogout}>Cerrar sesión</a></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default HeaderH;

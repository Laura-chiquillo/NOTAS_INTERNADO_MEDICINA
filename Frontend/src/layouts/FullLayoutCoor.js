import React from "react";
import { Container } from "reactstrap";
import HeaderH from "./header/HeaderH";
import Sidebar from "./sidebars/vertical/Sidebar";

const FullLayoutCoor = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const showMobilemenu = () => {
    setOpen(!open);
  };

  return (
    <main>
      <div className="pageWrapper d-md-block d-lg-flex">

        {/********Content Area**********/}

        <div className="contentArea">
          {/********header**********/}
          <HeaderH showMobmenu={() => showMobilemenu()} />

          {/********Middle Content**********/}
          <Container className="p-4 wrapper" fluid>
            <div>{children}</div>
          </Container>
        </div>
      </div>
    </main>
  );
};

export default FullLayoutCoor;

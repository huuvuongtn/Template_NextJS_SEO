import { IconButton, styled } from "@mui/material";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Menu as MenuIcon, Logout as LogoutIcon } from "@mui/icons-material";
type Props = {
  isMenuOpen: boolean;
  onClose: any
};

export default function SideMenuComponent(props: Props) {
  const { isMenuOpen, onClose } = props;
  const sideMenuRef = useRef(null);
  const router = useRouter();
  return (
    <SideMenu ref={sideMenuRef} className={isMenuOpen ? "show" : ""}>
      {/* Side menu content */}
      <IconButton
        edge="start"
        // color="inherit"
        // color="red"
        aria-label="menu"
        onClick={onClose}
        style={{marginLeft:'0px'}}
      >
        <MenuIcon />
      </IconButton>
      <div style={{ margin: "16px", fontWeight:'bold', fontSize: '24px'}} onClick={() => router.push("/")}>
        Home page
      </div>
      <div style={{ margin: "16px", fontWeight:'bold', fontSize: '24px'}} onClick={() => router.push("/Screen1")}>
        Screen 1
      </div>
      <div style={{ margin: "16px", fontWeight:'bold', fontSize: '24px'}}>Screen 2</div>
      <div style={{ margin: "16px", fontWeight:'bold', fontSize: '24px'}}>Screen 3</div>
    </SideMenu>
  );
}

const SideMenu = styled("div")`
  position: fixed;
  padding: 12px;
  pading-left:24px;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  border-radius:32px;
  // margin: 32px;
  background-color:rgb(127, 127, 127, 0.9);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  &.show {
    transform: translateX(0%);
    margin-left: 5px
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

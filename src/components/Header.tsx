import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useRouter } from "next/router";
import {
  toggleMenu,
  transparentMenu,
  disableTransparentMenu,
} from "@store/slices/toggleMenu";
// import { toggleMenu } from '@actions'; // Assuming you have a Redux action to toggle the menu
import React, { useState, useEffect, useRef } from "react";
import { styled } from "@mui/system";
import styles from "./Header.module.css";
import SideMenuComponent from "./SideMenu";
import "./Header.module.css";
const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const [scrollTrigger, setScrollTrigger] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrollTrigger(true);
    } else {
      setScrollTrigger(false);
    }
  };
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Slide
      className={styles.HeaderSlider}
      appear={false}
      direction="down"
      in={true}
      // in={!scrollTrigger}
    >
      <AppBar
        position="fixed"
        elevation={scrollTrigger ? 4 : 0}
        style={{
          backgroundColor: scrollTrigger ? "#ffffff" : "rgba(0, 0, 0, 0.2)",
        }}
      >
        <Toolbar
          style={{
            backgroundColor: scrollTrigger ? "#1544" : "rgba(0, 0, 0, 0.2)",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            // color="red"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "300px",
            }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <a
              className={styles.headerText}
              onMouseEnter={(e) => (e.target.style.color = "#ff8c00")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              onClick={() => router.push("/")}
              style={{ margin: "16px", color: "white" }}
            >
              Trang chủ
            </a>
            <a
              className={styles.headerText}
              onMouseEnter={(e) => (e.target.style.color = "#ff8c00")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              onClick={() => router.push("/Screen1")}
              style={{ margin: "16px", color: "white" }}
            >
              Trang 1
            </a>
            <a
              className={styles.headerText}
              onMouseEnter={(e) => (e.target.style.color = "#ff8c00")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              onClick={() => router.push("/")}
              style={{ margin: "16px", color: "white" }}
            >
              Trang 2
            </a>
            <a
              className={styles.headerText}
              onMouseEnter={(e) => (e.target.style.color = "#ff8c00")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
              onClick={() => router.push("/")}
              style={{ margin: "16px", color: "white" }}
            >
              Trang 3
            </a>
          </Typography>

          {/* Additional header content */}
          <IconButton
            edge="start"
            color="inherit"
            // color="red"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Slide>
  );
};
export default Header;

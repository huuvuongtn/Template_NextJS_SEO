import { ReactNode } from "react";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@mui/material";
import SideMenuComponent from "./SideMenu";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { toggleMenu } from "@store/slices/toggleMenu";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const isMenuOpen = useAppSelector((state) => state.header.isMenuOpen);
  
  const dispatch = useAppDispatch();
  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div>
      <Header />
      {/* <nav>
        <Link href="/">Home</Link>
        <Link href="/Screen1">Screen 1</Link>
        <Link href="/screen2">Screen 2</Link>
      </nav> */}
      <main style={{marginTop:"96px"}}>
      <Grid
        container
        // spacing={{ xs: 2, md: 3 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={0} sm={0} md={2} key={1}>
        <SideMenuComponent isMenuOpen={isMenuOpen} onClose={handleMenuToggle}></SideMenuComponent>
        </Grid>
        <Grid item xs={4} sm={8} md={10} key={2}>
          {children}
        </Grid>
      </Grid>
      </main>
      {/* <main></main> */}
      <Footer />
    </div>
  );
};

export default Layout;

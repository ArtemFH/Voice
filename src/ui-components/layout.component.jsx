import styled from "styled-components";
import {Outlet} from "react-router-dom";

import NavBar from "../components/header/navbar";
import Footer from "../components/footer/footer";

function Layout() {
    return (
        <Section>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </Section>
    );
}

export default Layout;

const Section = styled('div')`
  margin: 0 auto;
`

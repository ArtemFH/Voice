import styled from "styled-components";
import {Outlet} from "react-router-dom";
import NavBar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import Search from "../components/search/search";

function Layout() {
    return (
        <Section>
            <NavBar/>
            <Body>
                <Outlet/>
            </Body>
            <Footer/>
            <Search/>
        </Section>
    );
}

export default Layout;

const Section = styled('div')`
  margin: 0 auto;
  max-width: 1440px;
`

const Body = styled('main')`
  padding-top: 80px;
`
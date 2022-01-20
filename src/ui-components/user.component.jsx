import styled from "styled-components";
import {useOutlet, useLocation} from "react-router-dom";
import NavBar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import Search from "../components/search/search";
import {TransitionGroup, CSSTransition} from "react-transition-group";

function LayoutComponent() {
    return (
        <Section>
            <NavBar/>
            <TransitionGroup>
                <CSSTransition
                    key={useLocation().pathname}
                    timeout={500}
                    classNames={'user'}
                    unmountOnExit
                >
                    <Body>
                        {useOutlet()}
                    </Body>
                </CSSTransition>
            </TransitionGroup>
            <Footer/>
            <Search/>
        </Section>
    );
}

export default LayoutComponent;

const Section = styled('div')`
  margin: 0 auto;
  max-width: 1440px;
`

const Body = styled('div')`
  width: 100%;
  z-index: -1;
  padding-top: 80px;
  position: absolute;
`
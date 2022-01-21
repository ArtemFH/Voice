import styled from "styled-components";
import {useOutlet, useLocation} from "react-router-dom";
import NavBar from "../components/header/navbar";
import Footer from "../components/footer/footer";
import Search from "../components/search/search";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Box} from "@mui/material";
import {useState} from "react";

function LayoutComponent() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Section>
            <NavBar data={isActive}/>
            <div className={isActive ? "overflow" : null}>
                <TransitionGroup component={null}>
                    <CSSTransition
                        key={useLocation().pathname}
                        timeout={500}
                        classNames={"left"}
                        unmountOnExit
                        onEnter={() => {
                            setIsActive(true);
                        }}
                        onExited={() => {
                            setIsActive(false);
                        }}
                    >
                        <Grid>{useOutlet()}</Grid>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer/>
            <Search/>
        </Section>
    );
}

export default LayoutComponent;

const Section = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  align-content: stretch;
  flex-direction: column;

  header {
    width: 100%;
    height: auto;
    flex-grow: 0;
    display: flex;
  }

  & > div {
    width: 100%;
    height: auto;
    flex-grow: 2;
    display: flex;
    position: relative;
    justify-content: center;
  }

  footer {
    width: 100%;
    height: auto;
    flex-grow: 0;
  }
`

const Grid = styled(Box)`
  width: 1440px;
  margin: 0 auto;
`
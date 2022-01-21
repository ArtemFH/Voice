import User from "../user/user";
import {Box} from "@mui/material";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useActions} from "../../store/hook";

import logo from "./image/Logo.svg"
import SearchIcon from '@mui/icons-material/Search';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function NavBar(props) {
    const {focus, search} = useActions();

    const navItems = [{
        direction: 1,
        icon: <RssFeedIcon/>,
        title: 'FEED'
    }, {
        direction: 2,
        icon: <PeopleOutlineIcon/>,
        title: 'NETWORK'
    }, {
        direction: 3,
        icon: <BusinessCenter/>,
        title: 'JOBS'
    }, {
        direction: 4,
        icon: <ChatBubbleOutlineIcon/>,
        title: 'CHAT'
    }, {
        direction: 5,
        icon: <NotificationsActiveIcon/>,
        title: 'NOTICES'
    }]

    return (
        <Navbar>
            <Block>
                <img src={logo} alt={''}/>
            </Block>
            <Block>
                <Items id={'navbar'}>
                    {navItems.map((data, key) =>
                        <NavItem className={props.data ? "redirect" : null} id={data.direction} key={key}
                                 to={'/' + data.title.toLowerCase()}>
                            <BlockItem>
                                {data.icon}
                                <span>{data.title}</span>
                            </BlockItem>
                        </NavItem>
                    )}
                </Items>
            </Block>
            <Block>
                <Search>
                    <SearchIcon/>
                    <input type={'text'} placeholder={'Search'}/>
                </Search>
                <Overlay onClick={() => {
                    focus(true);
                    search({letter: ''});
                }}/>
            </Block>
            <Block>
                <User data={props.data}/>
            </Block>
            <Block>
                <Other>
                    <MoreHorizIcon/>
                    <span>OTHER</span>
                </Other>
            </Block>
        </Navbar>
    )
}

export default NavBar;

const Search = styled(Box)`
  display: flex;
  align-items: center;

  & input {
    padding: 5px;
    outline: none;
    font-size: 14px;
    border-radius: 5px;
    border-style: solid;
    border-color: transparent;
    transition: border-color 0.2s ease;
    font-family: GothamLight, sans-serif;

    :focus {
      border-color: #0275B1;
      transition: border-color 0.3s ease;
    }

    ::placeholder {
      font-size: 16px;
    }
  }

  & svg {
    width: 24px;
    height: 24px;
    color: #0275B1;
    padding-right: 20px;
  }
`

const Navbar = styled('header')`
  height: 80px;
  background-color: #FFFFFF;
  font-family: GothamMedium, sans-serif;

  & > div:not(div:last-child) {
    border-right: 1px #F4F4F4 solid;
  }
`

const NavItem = styled(NavLink)`
  width: 90px;
  font-size: 12px;
  padding-top: 18px;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &.active div {
    color: #0275B1;
    border-bottom: 2px #0275B1 solid;
  }

  &.redirect:not(&.active) {
    opacity: 0.3;
    transition: all 0.3s ease;
    pointer-events: none;
  }

  & {
    div {
      color: #181818;
      box-sizing: border-box;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
      transition: color 0.3s ease, border-bottom-color 0.3s ease;
    }

    :hover div {
      color: #008BCE;
      box-sizing: border-box;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: #008BCE;
      transition: color 0.3s ease, border-bottom-color 0.3s ease;
    }
  }
`

const BlockItem = styled(Box)`
  width: 66px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  font-size: 12px;
  text-align: center;
  flex-direction: column;

  & span {
    padding-top: 12px;
  }

  & svg {
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
`

const Items = styled(Box)`
  height: 100%;
  display: flex;
`

const Block = styled(Box)`
  width: 100%;
  display: flex;
  padding: 0 20px;
  position: relative;
  align-items: center;
  justify-content: center;
`

const Other = styled(Box)`
  width: 50px;
  height: 100%;
  display: flex;
  font-size: 12px;
  cursor: pointer;
  align-items: center;
  flex-direction: column;
  transition: color 0.3s;
  justify-content: center;
  font-family: GothamMedium, sans-serif;

  :hover {
    color: #0275B1;
  }
`

const Overlay = styled(Box)`
  width: 90%;
  height: 50%;
  margin: 0 auto;
  cursor: pointer;
  position: absolute;
  transition: all 0.5s ease;

  :hover {
    border-radius: 20px;
    box-shadow: 0 0 50px 10px rgb(0 0 0 / 10%);
  }
`
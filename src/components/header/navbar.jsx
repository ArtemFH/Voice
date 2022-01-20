import {Box} from "@mui/material";
import styled from "styled-components";
import User from "../user/user";
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

function NavBar() {
    const {focus, search} = useActions()

    return (
        <Navbar>
            <Block>
                <img src={logo} alt={''}/>
            </Block>
            <Block>
                <Items>
                    <NavItem to={'/feed'}>
                        <BlockItem>
                            <RssFeedIcon/>
                            <span>FEED</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'/network'}>
                        <BlockItem>
                            <PeopleOutlineIcon/>
                            <span>NETWORK</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'/jobs'}>
                        <BlockItem>
                            <BusinessCenter/>
                            <span>JOBS</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'/chat'}>
                        <BlockItem>
                            <ChatBubbleOutlineIcon/>
                            <span>CHAT</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'/notices'}>
                        <BlockItem>
                            <NotificationsActiveIcon/>
                            <span>NOTICES</span>
                        </BlockItem>
                    </NavItem>
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
                <User/>
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

const Navbar = styled(Box)`
  left: 50%;
  height: 80px;
  width: 1440px;
  display: flex;
  position: fixed;
  background-color: #FFFFFF;
  transform: translateX(-50%);
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

  &.active div {
    color: #0275B1;
    border-bottom: 2px #0275B1 solid;
  }

  & {
    div {
      color: #181818;
      border-bottom-width: 2px;
      border-bottom-style: solid;
      border-bottom-color: transparent;
      transition: color 0.3s ease, border-bottom-color 0.3s ease;
    }

    :hover div {
      color: #008BCE;
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
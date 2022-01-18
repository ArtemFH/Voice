import {Box} from "@mui/material";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useActions} from "../../store/hook";

import logo from "./image/Logo.svg"
import SearchIcon from '@mui/icons-material/Search';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function NavBar() {
    const {focus} = useActions()

    return (
        <Navbar>
            <Block>
                <img src={logo} alt={''}/>
            </Block>
            <Block>
                <Items>
                    <NavItem to={'feed'}>
                        <BlockItem>
                            <RssFeedIcon/>
                            <span>FEED</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'network'}>
                        <BlockItem>
                            <PeopleOutlineIcon/>
                            <span>NETWORK</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'jobs'}>
                        <BlockItem>
                            <BusinessCenter/>
                            <span>JOBS</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'chat'}>
                        <BlockItem>
                            <ChatBubbleOutlineIcon/>
                            <span>CHAT</span>
                        </BlockItem>
                    </NavItem>
                    <NavItem to={'notices'}>
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
                <Plaste onClick={() => focus()}/>
            </Block>
            <Block>
                <div>йух</div>
            </Block>
            <Block>
                <div>йух</div>
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
  height: 80px;
  display: flex;
  position: fixed;
  font-family: GothamMedium, sans-serif;

  & > div:not(& div:last-child) {
    min-width: 90px;
    border-right: 1px #F4F4F4 solid;
  }
`

const NavItem = styled(NavLink)`

  width: 90px;
  color: #181818;
  font-size: 12px;
  padding-top: 18px;
  text-decoration: none;

  &.active div {
    color: #0275B1;
    border-bottom: 2px #0275B1 solid;
  }

  &:hover div {
    color: #008BCE;
    border-bottom: 2px #008BCE solid;
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
  display: flex;
  height: 100%;
`

const Block = styled(Box)`
  position: relative;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`

const Plaste = styled(Box)`
  width: 90%;
  height: 80%;
  margin: 0 auto;
  position: absolute;
`
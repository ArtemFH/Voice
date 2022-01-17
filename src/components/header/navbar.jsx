import styled from "styled-components";
import {Box} from "@mui/material";
import logo from "./image/Logo.svg"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function NavBar() {
    return (
        <>
            <Navbar>
                <Block>
                    <img src={logo} alt={''}/>
                </Block>
                <Block>
                    <Items>
                        <div>
                            <div>
                                <RssFeedIcon/>
                                <span>FEED</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <PeopleOutlineIcon/>
                                <span>NETWORK</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <BusinessCenter/>
                                <span>JOBS</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <ChatBubbleOutlineIcon/>
                                <span>CHAT</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <NotificationsActiveIcon/>
                                <span>NOTICE</span>
                            </div>
                        </div>
                    </Items>
                </Block>
                <Block>
                    <div>йух</div>
                </Block>
                <Block>
                    <div>йух</div>
                </Block>
                <Block>
                    <div>йух</div>
                </Block>
            </Navbar>
        </>
    )
}

export default NavBar;

const Navbar = styled(Box)`
  height: 80px;
  display: flex;
  position: fixed;

  & > div:not(& div:last-child) {
    min-width: 90px;
    border-right: 1px #F4F4F4 solid;
  }
`

const Items = styled(Box)`
  display: flex;
  height: 100%;

  & div {
    width: 90px;
    display: flex;
    font-size: 12px;
    text-align: center;
    flex-direction: column;
  }

  & div div {
    width: 66px;
    height: 100%;
    margin: 0 auto;
    padding-top: 18px;
  }

  & div:first-child div {
    color: #0275B1;
    border-bottom: 2px #0275B1 solid;
  }

  & div div span {
    padding-top: 12px;
  }

  & div div svg {
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
`

const Block = styled(Box)`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`
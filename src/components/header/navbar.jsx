import styled from "styled-components";
import {Box} from "@mui/material";
import logo from "./image/Logo.svg"
import briefcase from "./image/items/briefcase.svg"
import bell from "./image/items/bell.svg"
import rss from "./image/items/rss.svg"
import message_square from "./image/items/message-square.svg"
import users from "./image/items/users.svg"

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
                            <img src={rss} alt={''}/>
                            <span>FEED</span>
                        </div>
                        <div>
                            <img src={users} alt={''}/>
                            <span>NETWORK</span>
                        </div>
                        <div>
                            <img src={briefcase} alt={''}/>
                            <span>JOBS</span>
                        </div>
                        <div>
                            <img src={message_square} alt={''}/>
                            <span>CHAT</span>
                        </div>
                        <div>
                            <img src={bell} alt={''}/>
                            <span>NOTICE</span>
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
    justify-content: space-evenly;
  }

  & div img {
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
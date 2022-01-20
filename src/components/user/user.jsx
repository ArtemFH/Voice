import {Box} from "@mui/material";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

function SignIn() {
    return (
        <NavLink to={'/user/sign-up'}>
            Sign Up
        </NavLink>
    )
}

function SignUp() {
    return (
        <NavLink to={'/user/sign-in'}>
            Sign In
        </NavLink>
    )
}

function User() {
    const auth = true;

    return (
        <>
            {auth ? <Block><SignIn/><SignUp/></Block> : <Block>Auth</Block>}
        </>
    )
}

export default User

const Block = styled(Box)`
  display: flex;
  flex-direction: row;

  .active {
    opacity: 0.7;
    pointer-events: none;
  }

  & > a {
    margin: 10px;
    padding: 10px;
    color: #181818;
    cursor: pointer;
    border-radius: 5px;
    white-space: nowrap;
    text-decoration: none;
    border: 1px #F4F4F4 solid;
    transition: all 0.1s linear;
  }

  & > a:hover {
    border: 1px #0275B1 solid;
  }
`
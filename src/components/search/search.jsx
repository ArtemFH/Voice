import styled from "styled-components";
import {useSelector} from "react-redux";
import {useActions} from "../../store/hook";
import SearchIcon from "@mui/icons-material/Search";
import {Box, CircularProgress} from "@mui/material";
import {CSSTransition} from "react-transition-group";
import Card from "./card";

function Search() {
    const {search, focus, clear} = useActions()
    const {data, isLoading, isFocus} = useSelector(state => state.search)

    let time;
    const handleChange = e => {
        e.preventDefault();
        clearTimeout(time);
        time = setTimeout(() => {
            const letter = e.target.value
            search({letter})
        }, 300)
    }
    return (
        <CSSTransition
            in={isFocus}
            timeout={500}
            classNames={'search'}
            unmountOnExit
            onExited={() => clear()}
        >
            <SearchWindow>
                <Background onClick={() => focus(false)}/>
                <Form>
                    <SearchForm>
                        <SearchIcon/>
                        <input type={'text'} placeholder={'Search'} onChange={handleChange}/>
                    </SearchForm>
                    <ContentForm>
                        {isLoading ? <CircularProgress size={100}/> : (data.length ? data.map((item, key) => <Card
                                key={key} data={item}/>) :
                            <span>Not found :(</span>)}
                    </ContentForm>
                    <Footer/>
                </Form>
            </SearchWindow>
        </CSSTransition>
    )
}

export default Search;

const Footer = styled(Box)`
  width: 100%;
  height: 20px;
  border-top: 1px #F4F4F4 solid;
`

const ContentForm = styled(Box)`
  width: 100%;
  height: 420px;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
  align-items: center;
  flex-direction: column;
`

const SearchForm = styled(Box)`
  width: 100%;
  height: 60px;
  justify-content: center;
  border-bottom: 1px #F4F4F4 solid;
`

const Form = styled(Box)`
  width: 400px;
  height: 500px;
  display: flex;
  position: relative;
  border-radius: 15px;
  align-items: center;
  flex-direction: column;
  margin: 60px auto auto;
  background-color: white;
  border: 1px #F4F4F4 solid;
  justify-content: space-between;

  &:first-child svg {
    width: 24px;
    height: 24px;
    color: #0275B1;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  & span {
    margin-top: calc(50% - 50px);
  }

  & input {
    outline: none;
    margin: 0 5px;
    font-size: 14px;
    padding: 5px 10px;
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
`

const SearchWindow = styled('main')`
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
`

const Background = styled(Box)`
  inset: 0;
  z-index: -1;
  display: flex;
  position: fixed;
`
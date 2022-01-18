import {useActions} from "../../store/hook";
import styled from "styled-components";
import {Box, CircularProgress} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {useSelector} from "react-redux";

function Search() {
    const {search, unFocus} = useActions()
    const {data, loading} = useSelector(state => state.search)

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
        <>
            <SearchWindow>
                <Background onClick={() => unFocus()}/>
                <Form>
                    <SearchIcon/>
                    <input type={'text'} placeholder={'Search'} onChange={handleChange}/>
                    {loading && <CircularProgress/>}
                    {!loading && <pre>{JSON.stringify(data, undefined, 2)}</pre>}
                </Form>
            </SearchWindow>
        </>
    )
}

export default Search;

const Form = styled(Box)`
  width: 400px;
  height: 500px;
  display: flex;
  position: relative;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  margin: 60px auto auto;
  background-color: white;

  & svg {
    width: 24px;
    height: 24px;
    color: #0275B1;
    padding-right: 20px;
  }

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
`

const SearchWindow = styled(Box)`
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
`

const Background = styled(Box)`
  position: fixed;
  display: flex;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`
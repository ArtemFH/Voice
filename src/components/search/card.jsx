import styled from "styled-components";
import {Box} from "@mui/material";

function Card(props) {
    return (
        <Block>
            <h1>{props.data.title}</h1>
            <p dangerouslySetInnerHTML={{__html: props.data.text}}></p>
        </Block>
    )
}

export default Card;

const Block = styled(Box)`
  width: 75%;
  margin: 15px auto;
  padding: 5px 15px;
  border-radius: 15px;
  border: 1px black solid;

  & * {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`
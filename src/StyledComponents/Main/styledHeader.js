import styled from "styled-components";
import AppBar from "@mui/material/AppBar";

const StyledHeader = styled(AppBar)`
  && {
    display: flex;
    height: 130px;
    justify-content: center;
    padding: 5px;
    font-family: "Josefin Sans";
    font-size: 1.2em;
    font-weight: 300;
    background-color: ${(props) => props.theme.colors.header};
    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledHeader;

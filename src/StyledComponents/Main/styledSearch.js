import styled from "styled-components";
import Grid from "@mui/material/Grid";

const StyledSearch = styled(Grid)`
  && {
    border-radius: 45px;
    height: 50px;
    align-items: center;
    padding-left: 10px;
    font-family: "Josefin Sans";
    background-color: ${(props) => props.theme.colors.header};
    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledSearch;

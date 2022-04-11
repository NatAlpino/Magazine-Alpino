import styled from "styled-components";
import Grid from "@mui/material/Grid";

const StyledCategories = styled(Grid)`
  && {
    margin-top: 130px;
    min-width: 300px;
    padding: 5px;
    font-size: 1.5em;
    font-weight: bold;
    font-family: "Josefin Sans";
    cursor: pointer;
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.categories};
  }
`;

export default StyledCategories;

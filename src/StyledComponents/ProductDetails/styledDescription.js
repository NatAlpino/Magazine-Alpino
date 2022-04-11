import styled from "styled-components";
import Typography from "@mui/material/Typography";

const StyledDescription = styled(Typography)`
  && {
    font-size: 1.5em;
    /* font-weight: bold; */
    font-family: 'Josefin Sans';
    display: flex;
    justify-content: center;
    margin: 20px; 
    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledDescription;

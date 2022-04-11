import styled from "styled-components";
import Typography from "@mui/material/Typography";

const StyledCardTitle = styled(Typography)`
  && {
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Josefin Sans';
    display: flex;
    margin-top: 40px;
    justify-content: center;
    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledCardTitle;

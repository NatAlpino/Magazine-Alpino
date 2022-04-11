import styled from "styled-components";
import Typography from "@mui/material/Typography";

const StyledFreight = styled(Typography)`
  && {
    font-size: 1.3em;
    font-weight: bold;
    font-family: 'Josefin Sans';
    display: flex;
    margin-top: 10px;
    justify-content: start;
    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledFreight;
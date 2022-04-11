import styled from "styled-components";
import Typography from "@mui/material/Typography";

const StyledTitle = styled(Typography)`
  && {
    font-size: 2, 5em;
    font-weight: bold;
    font-family: "Josefin Sans";
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledTitle;

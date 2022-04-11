import styled from "styled-components";
import Typography from "@mui/material/Typography";

const StyledTitleMan = styled(Typography)`
  && {
    font-size: 1.3em;
    font-weight: bold;
    font-family: "Josefin Sans";
    display: flex;
    justify-content: center;
    margin: 20px;
    color: ${(props) => props.theme.colors.font2};
  }
`;

export default StyledTitleMan;

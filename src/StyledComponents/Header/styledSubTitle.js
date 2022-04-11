import styled from "styled-components";
import Typography from "@mui/material/Typography";

const StyledSubTitle = styled(Typography)`
  && {
    font-size: 1.5em;
    font-weight: bold;
    font-family: "Josefin Sans";
    display: flex;
    margin-left: 50px;

    color: ${(props) => props.theme.colors.font3};
  }
`;

export default StyledSubTitle;

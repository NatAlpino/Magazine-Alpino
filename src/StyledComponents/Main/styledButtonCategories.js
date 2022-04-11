import styled from "styled-components";
import Button from "@material-ui/core/Button";


const StyledButtonCategories = styled(Button)`
  && {
    display: flex;
    justify-content: center;
    fonte-family: Josefin Sans;
    color: ${(props) => props.theme.colors.font4}     
  }
`;

export default StyledButtonCategories;
import * as React from "react";
import Grid from "@mui/material/Grid";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Dialog from "@mui/material/Dialog";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { formatNumber } from "../../utils";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import IconButton from "@material-ui/core/IconButton";
import {
  StyledTitle,
  StyledImg,
  StyledButtonFavorite,
  StyledDescription,
  StyledPrice,
  StyledButtonShoppingCart,
} from "../../StyledComponents/ProductDetails/exports";

export default function ProductDetails(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton>
        <ZoomInIcon onClick={handleOpen} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <Container>
          <Paper elevation={6}>
            <Grid container>
              <CloseIcon onClick={handleClose} />
              <StyledButtonFavorite item xs={12}>
                <FavoriteIcon />
              </StyledButtonFavorite>
              <Grid item xs={12}>
                <StyledTitle>{props.product.title}</StyledTitle>
              </Grid>
              <StyledImg item xs={12}>
                <img src={props.product.image} alt="id" />
              </StyledImg>
              <Grid item xs={12}>
                <StyledDescription sx={{ mt: 2 }}>
                  {props.product.description}
                </StyledDescription>
              </Grid>
              <Grid item xs={12}>
                <StyledPrice sx={{ mt: 2 }}>
                  {formatNumber(props.product.price)}
                </StyledPrice>
                <StyledButtonShoppingCart item xs={12}>
                  <ShoppingCartIcon />
                </StyledButtonShoppingCart>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Dialog>
    </div>
  );
}

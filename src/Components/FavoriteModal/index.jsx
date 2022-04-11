import * as React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Container from "@material-ui/core/Container";
import { formatNumber } from "../../utils";
import {StyledImg,
  StyledTitle,
  StyledPrice,
  StyledFavoriteAndShoppingCar,
  StyledCloseIcon,
  StyledCardTitle,
  StyledDialog,} from "../../StyledComponents/Favorite/exports";

export default function FavoriteModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    if (props.favoriteList.length) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span>
        <FavoriteIcon onClick={handleOpen} />
        {props.favoriteList.length}
      </span>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledCardTitle>Your Favorites</StyledCardTitle>
        <StyledCloseIcon item xs={12} justifyContent="center">
          <CloseIcon onClick={handleClose} />
        </StyledCloseIcon>
        <Container>
          <Grid container>
            <Paper elevation={6}>
              <Grid item xs={12}>
                {props.favoriteList.map((favoriteItem) => (
                  <Grid
                    key={favoriteItem.key}
                    spacing={6}
                    justifyContent="center"
                  >
                    <StyledImg src={favoriteItem.image} alt="id" />
                    <StyledFavoriteAndShoppingCar>
                      <IconButton>
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton>
                        <ShoppingCartIcon />
                      </IconButton>
                    </StyledFavoriteAndShoppingCar>
                    <StyledTitle sx={{ mt: 2 }}>
                      <p>{favoriteItem.title}</p>
                    </StyledTitle>
                    <StyledPrice sx={{ mt: 2 }}>
                      <p>{formatNumber(favoriteItem.price)}</p>
                    </StyledPrice>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </StyledDialog>
    </div>
  );
}

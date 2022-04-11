import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Typography from "@mui/material/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@mui/material/Grid";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { formatNumber } from "../../utils";
import {
  StyledCloseIcon,
  StyledImg,
  StyledPrice,
  StyledTitle,
  StyledCardTitle,
  StyledSubTotal,
  StyledDiscount,
  StyledFreight,
  StyledTotal,
  StyledDialog,
  StyledQuantity,
  StyledPaper,
} from "../../StyledComponents/ShoppingCard/exports";
export default function ShoppingCartModal(props) {
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);

  const handleOpen = (e) => {
    recalculate();
    e.preventDefault();
    if (props.shoppingCardList.length) {
      setOpen(true);
    }
  };

  const getQuantity = () => {
    return props.shoppingCardList.reduce((accum, currentValue) => {
      return accum + currentValue.quantity;
    }, 0);
  };

  const recalculate = () => {
    let accumulator = 0;
    props.shoppingCardList.forEach((item) => {
      item.totalItem = item.price * item.quantity;
      accumulator += item.totalItem;
    });
    setTotal(accumulator);
  };

  const handleClose = () => setOpen(false);

  const handleProductActions = (item, action) => {
    const index = props.shoppingCardList.indexOf(item);
    if (!item.quantity) {
      action = "del";
    }
    if (index !== -1) {
      switch (action) {
        case "inc": {
          item.quantity++;
          break;
        }
        case "dec": {
          item.quantity--;
          break;
        }
        case "del": {
          props.shoppingCardList.splice(index, 1);
          return;
        }
        default:
          throw new Error("Invalid action");
      }
      if (item.quantity > 0) {
        props.shoppingCardList.slice(index, 1, item);
      } else {
        handleProductActions(item, "del");
      }
      recalculate();
    }
  };

  return (
    <div>
      <span>
        <ShoppingCartIcon onClick={handleOpen} />
        {getQuantity()}
      </span>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledCardTitle>Your Shopping Card</StyledCardTitle>
        <StyledCloseIcon>
          <CloseIcon onClick={handleClose} />
        </StyledCloseIcon>
        <Container>
          <Typography variant="h6" component="h2">
            {props.shoppingCardList.map((shoppingCardItem) => (
              <>
                <StyledPaper elevation={8}>
                  <Grid container spacing={2} key={shoppingCardItem.key}>
                    <Grid>
                      <StyledImg src={shoppingCardItem.image} alt="id" />
                    </Grid>
                    <Grid>
                      <StyledTitle>{`${shoppingCardItem.title.substring(
                        0,
                        15
                      )}`}</StyledTitle>
                      <StyledPrice>
                        Valor: {formatNumber(shoppingCardItem.price)}
                      </StyledPrice>
                      <StyledPrice>
                      Valor Total: {formatNumber(shoppingCardItem.totalItem)} 
                      </StyledPrice>
                    </Grid>
                    <StyledQuantity
                      container
                      spacing={3}
                      justifyContent="start"
                    >
                      <Grid item={4}>
                        <RemoveCircleOutlineIcon
                          onClick={() =>
                            handleProductActions(shoppingCardItem, "dec")
                          }
                        />
                      </Grid>
                      <Grid item={4}>
                        <Typography>
                          {shoppingCardItem.quantity || 0}
                        </Typography>
                      </Grid>
                      <Grid item={4}>
                        <AddCircleOutlineIcon
                          onClick={() =>
                            handleProductActions(shoppingCardItem, "inc")
                          }
                        />
                      </Grid>
                    </StyledQuantity>
                    <Button
                      color="error"
                      onClick={() =>
                        handleProductActions(shoppingCardItem, "del")
                      }
                    >
                      Excluir Item
                    </Button>
                  </Grid>
                </StyledPaper>
              </>
            ))}
          </Typography>
        </Container>
        <Container>
          <Grid>
            <StyledSubTotal>Subtotal: {formatNumber(total)}</StyledSubTotal>
            <StyledDiscount>Desconto: R$ 0,00 </StyledDiscount>
            <StyledFreight>Frete: R$ 0,00</StyledFreight>
            <StyledTotal>Total: {formatNumber(total)}</StyledTotal>
          </Grid>
        </Container>
      </StyledDialog>
    </div>
  );
}

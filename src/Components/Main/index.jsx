import React, { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FaceIcon from "@mui/icons-material/Face";
import SearchIcon from "@mui/icons-material/Search";
import { get } from "../../services/api";
import ProductDetails from "../ProductDetails";
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteModal from "../FavoriteModal";
import ShoppingCartModal from "../ShoppingCartModal";
import IconButton from "@material-ui/core/IconButton";
import { formatNumber } from "../../utils";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import {
  StyledButtonCategories,
  StyledCard,
  StyledTitle,
  StyledSubTitle,
  StyledImg,
  StyledFavoriteAndShoppingCar,
  StyledTitleMan,
  StyledPriceMan,
  StyledButtonDetails,
  StyledSearch,
  StyledRating,
  StyledHeader,
  StyledCategories,
} from "../../StyledComponents/Main/export";

const url = "https://fakestoreapi.com/products";
let favorites = [];
let shoppingCarts = [];
let originalData = [];

const Main = () => {
  const [favoriteQuantity, setFavoriteQuantity] = useState(0);
  const [shoppingCartQuantity, setShoppingCartQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [isDataLoaded, setDataLoad] = useState(false);

  useEffect(() => {
    let temporaryData;
    if (!isDataLoaded || !originalData.length) {
      const getData = () => {
        get(url).then(({ data }) => {
          temporaryData = data.map((item) => {
            return {
              ...item,
              isFavorited: false,
            };
          });
          originalData = temporaryData;
          setProducts(temporaryData);
        });
      };
      getData();
      setDataLoad(true);
    }
    if (category !== "all") {
      temporaryData = originalData.filter((item) => item.category === category);
      setProducts(temporaryData);
    } else {
      setProducts(originalData);
    }
  }, [category, isDataLoaded]);

  const handleFavorites = (item) => {
    let indexItem = favorites.indexOf(item);
    if (indexItem === -1) {
      favorites.push(item);
    } else {
      favorites.splice(indexItem, 1);
    }
    setFavoriteQuantity(
      indexItem !== -1 ? favoriteQuantity - 1 : favoriteQuantity + 1
    );
  };

  const handleShoppingCart = (item) => {
    const indexItem = shoppingCarts.indexOf(item);
    item.quantity = !item.quantity ? 1 : item.quantity + 1;
    item.totalItem = item.quantity * item.price;
    indexItem !== -1
      ? shoppingCarts.splice(indexItem, 1, item)
      : shoppingCarts.push(item);
    setShoppingCartQuantity(shoppingCartQuantity + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledHeader>
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sm={3}>
              <StyledTitle variant="h3">MagaLino</StyledTitle>
              <StyledSubTitle variant="h6">
                O preço baixo do interior!!!
              </StyledSubTitle>
            </Grid>
            <StyledSearch item sm={5} display="flex" border="double">
              <SearchIcon />
              <InputBase
                margin-left="10px"
                padding-right="60px"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </StyledSearch>
            <Grid item sm={1.33} display="contents" margin-left="20px">
              <FavoriteModal favoriteList={favorites} />
            </Grid>
            <Grid item sm={1.33} display="contents" margin-left="20px">
              <ShoppingCartModal shoppingCardList={shoppingCarts} />
            </Grid>

            <Grid item sm={1.33}>
              <FaceIcon /> Boas Compras Vinicius!
            </Grid>
          </Grid>
        </Toolbar>
      </StyledHeader>

      <StyledCategories container alignItems="center">
        <Grid item sm={2.4}>
          <StyledButtonCategories onClick={() => setCategory("all")}>All</StyledButtonCategories>
        </Grid>
        <Grid item sm={2.4}>
          <StyledButtonCategories onClick={() => setCategory("women's clothing")}>Girls</StyledButtonCategories>
        </Grid>
        <Grid item sm={2.4}>
          <StyledButtonCategories onClick={() => setCategory("men's clothing")}>Boys</StyledButtonCategories>
        </Grid>
        <Grid item sm={2.4}>
          <StyledButtonCategories onClick={() => setCategory("jewelery")}>Acessories</StyledButtonCategories>{" "}
        </Grid>
        <Grid item sm={2.4}>
          <StyledButtonCategories onClick={() => setCategory("electronics")}>Eletronics</StyledButtonCategories>
        </Grid>
      </StyledCategories>
      <Container>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={4}>
              <StyledCard>
                <Grid spacing={3} alignItems="center" justifyContent="center">
                  <StyledFavoriteAndShoppingCar>
                    <IconButton sx={{ "&:hover": { color: "blue" } }}>
                      <FavoriteIcon onClick={() => handleFavorites(product)} />
                    </IconButton>
                    <IconButton>
                      <ShoppingCartIcon
                        onClick={() => handleShoppingCart(product)}
                      />
                    </IconButton>
                  </StyledFavoriteAndShoppingCar>
                </Grid>
                <StyledImg item xs={12}>
                  <img src={product.image} alt={product.id} />
                </StyledImg>

                <Grid item xs={12}>
                  <StyledTitleMan
                    title={product.title}
                  >{`${product.title.substring(0, 15)}`}</StyledTitleMan>
                </Grid>
                <Grid>
                  <StyledPriceMan>{formatNumber(product.price)}</StyledPriceMan>
                </Grid>
                <StyledRating
                  defaultValue={parseInt(product.rating.rate, 10)}
                  readOnly
                />
                <StyledButtonDetails>
                  <ProductDetails product={product} />
                </StyledButtonDetails>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Main;

import React, { useContext } from 'react'
import { ProductContext } from '../../pages/Home'
import { MediaCard } from '../../components/Card/MediaCard'; //*
// import { fetchData } from '../../helper/FetchData'
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from '@material-ui/core';

// category: "men clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// _id: "5fdd3fdac69db03ea0824a3d"
const stylesFunc = makeStyles((theme) => ({ //???
    wrapper: {
        textAlign: 'center',
        // marginTop: -10,
  

    },
    grid: {
        // marginTop: -200,
         marginTop: 250,
    }
}));


const Box = styled.div`
      font-variant: small-caps;
      font-weight: bold;
      position: relative;
      background-color: #F5F6F6;
      padding: 10px;
      color: #0F1111;
      margin-bottom: 7px;
      /* display:block; */
      /* box-sizing: border-box; */

`;


export function CardList() {
    const mainStyles = stylesFunc();
    const { productList } = useContext(ProductContext)
    //maxWidth="sm"
    return (
        <Container className={mainStyles.wrapper} >
            <Grid container className={mainStyles.grid}>
                <Grid item xs={12}>
                    <Box>   indirim kuponundan yararlanmak için kupon kısmına CODE47 yazınız.</Box>
                </Grid>
            </Grid>


            <Grid container spacing={3}>
                {productList?.map((products) => {
                    return (
                        <Grid item sm={3} xs={6} key={products.id}>
                            <MediaCard

                                productImage={products.image}
                                productTitle={products.title}
                                productDescription={products.description}
                                productCategory={products.category}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

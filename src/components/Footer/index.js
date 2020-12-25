import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { styles, FooterUp, FooterTitle, FooterSubTitle, FooterContainer, Link, FooterDown, FooterLogo, Image, FooterBoxContain, Box1, Box2, Box3 } from './Footer.style'
import logo from '../../assets/amazonLg.png'



export default function Footer() {
    //üst alt grid kapatılabilir
    return (
        <FooterContainer>
            <Grid item xs={12}>
                <Link href='#'>
                    <FooterUp> Back to top</FooterUp>
                </Link>
            </Grid>
            <Container maxWidth="md">

                <Grid container spacing={3}>

                    <Grid item xs={3}>
                        <FooterTitle>Get to Know Us</FooterTitle>
                        <FooterSubTitle>Careers</FooterSubTitle>
                        <FooterSubTitle>Blog</FooterSubTitle>
                        <FooterSubTitle>About Amazon</FooterSubTitle>
                        <FooterSubTitle>Sustainability</FooterSubTitle>
                        <FooterSubTitle>Investor Relations</FooterSubTitle>
                        <FooterSubTitle>Amazon Devices</FooterSubTitle>
                        <FooterSubTitle>Amazon Tours</FooterSubTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <FooterTitle>Sell products on Amazon</FooterTitle>
                        <FooterSubTitle> Sell apps on Amazon</FooterSubTitle>
                        <FooterSubTitle>Become an Affiliate</FooterSubTitle>
                        <FooterSubTitle>Advertise Your Products</FooterSubTitle>
                        <FooterSubTitle>Self-Publish with Us</FooterSubTitle>
                        <FooterSubTitle>Host an Amazon Hub</FooterSubTitle>
                        <FooterSubTitle>›See More Make Money with Us</FooterSubTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <FooterTitle >Amazon Payment Products</FooterTitle>
                        <FooterSubTitle>Amazon Business Card</FooterSubTitle>
                        <FooterSubTitle>Shop with Points</FooterSubTitle>
                        <FooterSubTitle>Reload Your Balance</FooterSubTitle>
                        <FooterSubTitle>Amazon Currency Converter</FooterSubTitle>
                    </Grid>
                    <Grid item xs={3}>
                        <FooterTitle>Let Us Help You</FooterTitle>
                        <FooterSubTitle>Amazon and COVID-19</FooterSubTitle>
                        <FooterSubTitle>Your Account</FooterSubTitle>
                        <FooterSubTitle>Your Orders</FooterSubTitle>
                        <FooterSubTitle>Shipping Rates & Policies</FooterSubTitle>
                        <FooterSubTitle>Returns & Replacements</FooterSubTitle>
                        <FooterSubTitle>Manage Your Content and Devices</FooterSubTitle>
                        <FooterSubTitle>Amazon Assistant</FooterSubTitle>
                        <FooterSubTitle>Help</FooterSubTitle>
                    </Grid>

                </Grid>
            </Container>

            <FooterDown>
                <FooterLogo>
                    <Image src={logo} alt="Logo" />
                </FooterLogo>

                <FooterBoxContain>
                    <Box1>* English</Box1>
                    <Box2>$ USD - U.S. Dollar</Box2>
                    <Box3>* Unidted States </Box3>

                </FooterBoxContain>


            </FooterDown>

        </FooterContainer>
    )

}




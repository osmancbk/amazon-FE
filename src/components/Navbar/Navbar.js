import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/amazonLg.png'//*
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Drawer, IconButton } from '@material-ui/core';

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleDrawer = () => {
    setOpen(true)
  }

  return (
    <div className="navbarContainer">


      <IconButton onClick={handleDrawer}>
        <div className="navbarMenuIcon">
          <MenuIcon />
        </div>
      </IconButton>

      <Link to="/">
        <img className='navbarImg'
          src={logo} alt="Logo" />
      </Link>

      <div className='navbarSearchBar'>
        <input className='navbarSearchInput' />
        <SearchIcon className='navbarSearchIcon' />

      </div>

      <div className="header__nav">

        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>


        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>



        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>


        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            0
            </span>
        </div>
      </div>
      <Drawer
        anchor='left'
        open={open}
        onClose={()=> setOpen(false)}

      >
        <h3>This is a Drawer ... </h3>

      </Drawer>
    </div>
  )
}

export default Navbar;































// import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// // import Switch from '@material-ui/core/Switch';
// // import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function Navbar() {
//   const classes = useStyles();
//   const [auth, setAuth] = React.useState(true);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

// //   const handleChange = (event) => {
// //     setAuth(event.target.checked);
// //   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className={classes.root}>
//       {/* <FormGroup>
//         <FormControlLabel
//           control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
//           label={auth ? 'Logout' : 'Login'}
//         />
//       </FormGroup> */}
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             Deneme
//           </Typography>
//           {auth && ( //giriş yapınca gözükecek
//             <div>
//               <IconButton
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleMenu}
//                 color="inherit"
//               >
//                  Names
//                 <AccountCircle />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={open}
//                 onClose={handleClose}
//               >
//                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                 <MenuItem onClick={handleClose}>My account</MenuItem>
//               </Menu>
//             </div>
//           )}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }












































// import React from "react";
// import "./Navbar.css";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { Link } from "react-router-dom";
// import { useStateValue } from "../context/StateProvider";
// // import { auth } from "./firebase";
// import { Drawer } from "@material-ui/core";
// // import Checkout from "./Checkout";

// function Header() {
//   const [{ basket, user, drawer }, dispatch] = useStateValue();

//   const handleAuthentication = () => {
//     // if (user) {
//     //   auth.signOut();
//     // }
//   };

//   return (
//     <div className="header">
//       <Link to="/">
//         <img
//           src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
//           className="header__logo"
//         />
//       </Link>
//       <div className="header__search">
//         <input className="header__searchInput" type="text" />
//         <SearchIcon className="header__searchIcon" />
//       </div>
//       <div className="header__nav">
//         <Link to={!user && "/login"}>
//           <div className="header__option" onClick={handleAuthentication}>
//             <span className="header__optionLineOne">
//               {user ? user.email : "Hello Guest"}
//             </span>
//             <span className="header__optionLineTwo">
//               {user ? "Sign Out" : "Sign In"}
//             </span>
//           </div>
//         </Link>
//         <div className="header__option">
//           <span className="header__optionLineOne">Returns</span>
//           <span className="header__optionLineTwo">& Orders</span>
//         </div>
//         <div className="header__option">
//           <span className="header__optionLineOne">Your</span>
//           <span className="header__optionLineTwo">Prime</span>
//         </div>
//         <Link
//           onClick={() => {
//             dispatch({
//               type: "SET_DRAWER",
//               toggle: true,
//             });
//           }}
//         >
//           <div className="header__optionBasket">
//             <ShoppingBasketIcon />
//             <span
//               className="header__basketCount header__optionLineTwo"
//               style={{ marginLeft: "5px" }}
//             >
//               {basket?.length}
//             </span>
//           </div>
//         </Link>
//         <Drawer open={drawer} style={{ width: "50%" }}>
//           {/* <Checkout /> */}
//         </Drawer>
//       </div>
//     </div>
//   );
// }

// export default Header;













































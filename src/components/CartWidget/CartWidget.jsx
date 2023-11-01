import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  
// export const CartWidget=()=>{
//     return (
//         <IconButton aria-label="cart">
//           <StyledBadge badgeContent={
//             4
//           } color="error">
//             <ShoppingCartIcon />
//           </StyledBadge>
//         </IconButton>
//       );
// }

export const CartWidget=()=>{

  const {cantidadEnCarrito}=useContext(CartContext)
  return (
    <div>
      <Link to="/carrito" >Carrito
        <span> {cantidadEnCarrito()} </span>
      </Link>
      
    </div>
    );
}

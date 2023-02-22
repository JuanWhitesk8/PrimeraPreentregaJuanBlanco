import React from 'react'
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import Badge from '@material-ui/core/Badge';

const CartWidget = () => {
  return (
    <div>
        <Badge badgeContent={4} color="primary">
             <LocalGroceryStoreRoundedIcon />
        </Badge>
    </div>
  )
}

export default CartWidget

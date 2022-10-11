import React from 'react';

const Header = (props) => {

    const { data } = props;
    
    return (
        <div className="add-to-cart">
            <span className='cart'>{data.length}</span>
            <img src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/cart-add-icon.png" alt="" />
        </div>
    )
}

export default Header;
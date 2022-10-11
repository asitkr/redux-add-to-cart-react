import React from 'react';

const Home = (props) => {
    // console.log("Home ", props);
    const { addToCartHandler, data, removeToCartHandler } = props;

    return (
        <div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.91-img.com/pictures/143993-v4-apple-iphone-14-mobile-phone-large-1.jpg" alt="iphone" />
                </div>

                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>&nbsp; Price: $1000.00</span>
                </div>

                <div className="btn-wrapper item">
                    <button className='add-btn' onClick={() => addToCartHandler({
                        price: 50000, name: "i phone 14"
                    })}>Add To Cart</button>

                    <button className='remove-btn' onClick={() => removeToCartHandler()}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
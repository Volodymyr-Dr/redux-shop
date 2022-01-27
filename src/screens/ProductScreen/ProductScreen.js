import React from 'react';
import "./ProductScreen.css";

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src="https://htstatic.imgsmail.ru/pic_image/ded8b8c9c1c12bbd7e5b7a6eb3124856/840/682/2150010/" alt="product name"/>
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: 499.99</p>
                    <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex odio ut tempore harum facilis temporibus obcaecati consequuntur voluptatem aliquam similique, corporis autem dolore pariatur! Ducimus perferendis dicta eaque porro quis.</p>
                </div>
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add to Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default ProductScreen;
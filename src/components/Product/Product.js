import React from 'react';
import { Link } from 'react-router-dom';
import "./Product.css";

const Product = () => {
    return (
        <div className="product">
            <img src="https://htstatic.imgsmail.ru/pic_image/ded8b8c9c1c12bbd7e5b7a6eb3124856/840/682/2150010/" alt="product name"/>

            <div className="product__info">
                <p className="info__name"></p>
                <p className="info__description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex odio ut tempore harum facilis temporibus obcaecati consequuntur voluptatem aliquam similique, corporis autem dolore pariatur! Ducimus perferendis dicta eaque porro quis.
                </p>

                <p className="info__price">$499.99</p>

                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
    )
};

export default Product;
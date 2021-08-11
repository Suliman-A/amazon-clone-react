import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src='https://images.unsplash.com/photo-1554026321-fe2a83b9e292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80' alt="home"></img>

            <div className="home__row">        
                <Product />
                <Product />
            </div>

            <div className="home__row">        
                <Product />
                <Product />
            </div>

            <div className="home__row">        
                <Product />
                {/* product */}
            </div>

            </div>
        </div>
    )
}

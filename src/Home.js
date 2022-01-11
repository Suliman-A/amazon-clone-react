import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src='https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/Young-woman-shopping-in-a-vintage-clothing-store-1296x728-header-1296x728.jpg?w=1155&h=1528' alt="home"></img>

            <div className="home__row">        
                <Product
                id = '123456789' 
                title = 'The Oppo Watch isn’t bad, but it does look like an Apple Watch'
                price = { 5000 }
                rating = {5}
                img = 'data:image/jpeg;base64,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'
                />
                <Product 
                id = '12345678' 
                 title = "Sony PS5 Slim tipped to utilise TSMC's 5 nm node with production slated for 2023"
                 price = { 5000 }
                 rating = {4}
                 img = 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled1578.png'
                 />
            </div>
            <div className="home__row">        
                <Product 
                id = '1234567' 
                 title = "IPHONE X: FACE THE FUTURE"
                 price = { 1200 }
                 rating = {3}
                 img = 'https://cdn.vox-cdn.com/thumbor/QytuXmIKkJXnSXTY-NZ5_rhnczM=/0x0:2040x1360/1200x0/filters:focal(0x0:2040x1360):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9599227/jbareham_171101_2099_A_0088_02.jpg'
                 />
                <Product 
                id = '123456' 
                 title = "Apple  16 inch macbook Built for all types of creatives, such as photographers, songwriters, visual effects artists, game developers, video editors."
                 price = { 1000 }
                 rating = {1}
                 img = 'https://www.bhphotovideo.com/images/images2500x2500/apple_mvvj2ll_a_16_macbook_pro_late_1520434.jpg'
                 />
                <Product 
                id = '12345' 
                 title = "Sony PS5 Slim tipped to utilise TSMC's 5 nm node with production slated for 2023"
                 price = { 5000 }
                 rating = {3}
                 img = 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled1578.png'
                />
            </div>

            <div className="home__row">        
                <Product 
                id = '123' 
                title = "Sony PS5 Slim tipped to utilise TSMC's 5 nm node with production slated for 2023"
                price = { 500 }
                rating = {4}
                img = 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled1578.png'/>
            </div>

            </div>
        </div>
    )
}

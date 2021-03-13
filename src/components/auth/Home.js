import React from 'react';
import '../../assets/styles/Home.css';
import { ProductContainer } from '../../containers/ProductContainer';
import { Footer } from '../pieces/Footer';
import { Header } from '../pieces/Header';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Home () {
    return (
        <div className='Home'>
            <Header />
            <div className='HomeContainer'>
                <ProductContainer>

                </ProductContainer>
            </div>
            <Footer Icons={faShoppingCart} liknRoute="/auth/cart"/>
        </div>
    )
}

export default Home;


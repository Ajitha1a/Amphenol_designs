import React from 'react'
import Header from '../Home_page/Header'
import Black_bg1 from '../Home_page/Black_bg1'
import Card1 from '../Home_page/Card1'
import Product from '../Home_page/Product'
import Black_bg2 from '../Home_page/Black_bg2'
import { Carousel } from 'react-bootstrap'
import Studio from '../Home_page/studio'
import Footer from '../Home_page/Footer'
import Video_banner2 from '../Home_page/Video_banner2'
import Video_banner1 from '../Home_page/Video_banner1'
import "../Style/HomePage.css"

function Home() {
    return (
        <div>
            <div class="banner-container">
                <div class="banner">
                    <Header />
                    <div class="content">
                        <h1 class="heading">Crafting Engaging<br />Digital Products</h1>
                        <p class="sub-heading">we specialize in creating exceptional digital experiences that enhance user
                            <br />engagement, satisfaction, and loyalty.
                        </p>
                    </div>
                </div>
                <Video_banner1 />
            </div>
            <Black_bg1 />
            <div class="crafting-card1-banner">
                <div class="text-center">
                    <h1 class="craft-heading">Crafting Engaging<br />Digital Products</h1>
                    <h6 class="craft-subheading">Services / Digital</h6>
                </div>
            <Card1 />
            </div>
            <div class="digital-products-banner">
                <div class="products-card-container">
                    <div class="text-center">
                        <h1 class="craft-heading">Crafting Engaging<br />Digital Products</h1>
                        <h6 class="craft-subheading mb-64">Services / Digital</h6>
                    </div>
                    <Product />
                </div>
            </div>
            <div style={{ marginTop: '-80px' }}>
                <Black_bg2 />
            </div>
            {/* <Carousel /> */}
            <Video_banner2 />
            <div style={{ marginTop: '-80px' }}>
                <Black_bg2 />
            </div>
            <Studio />
            <Footer />
        </div>
    )
}

export default Home
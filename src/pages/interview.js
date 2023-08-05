import React, { Component } from 'react'
import style from '../styles/interview.module.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class autoplay extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        };
        return(
            <div>
                <h1 className={style.interview}>INTERVIEW</h1>
                <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
                <div>
                    <h3>6</h3>
                </div>
                </Slider>
            </div>
    
        )
    }


} 

// export default interview
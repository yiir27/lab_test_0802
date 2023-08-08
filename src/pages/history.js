import React, { Component } from 'react'
import style from '../styles/history.module.scss'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

export default class autoplay extends Component {
    render () {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2001,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        
        const imgsAndCmts = [
            {src:"IMG_0531_Original.jpg", comment: "...\nwhere is it?" },
            {src:"IMG_0594_Original.jpg", comment: "Horseshoe Bend" },
            {src:"IMG_0641_Original.jpg", comment: "Antelope Canyon" },
            {src:"IMG_0935_Original.jpg", comment: "Grand Canyon" },
        ];

        return(
            <div>
                <h1 className={style.history}>〜USA〜</h1>
                <Slider {...settings}>
                    {imgsAndCmts.map((item, i) => (
                        //最初の書き方
                        // <div>
                        //     <img src = {item.src} alt= "pic" className={style.image} />
                        //     {item.comment.split('\n').map((line, index) => (
                        //         <p key={index} {...item} className={index === 0? style.firstLine : index ===1 ? style.secondLine : ''}>{line}</p>
                        //     ))}
                        // </div>
                        <div key={i}>
                            <div>
                                <Image src={"/" + item.src} alt="pic" width={500} height={300} />
                            </div>
                            {item.comment.split('\n').map((line, index) => (
                                <p key={index} {...item} className={index === 0? style.firstLine : index ===1 ? style.secondLine : ''}>{line}</p>
                            ))}
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

// export default dorama
import React, { Component } from 'react'
import style from '../styles/dorama.module.scss'
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
            autoplaySpeed: 2000,
            resuponsive: [
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
            {src:"summer.jpeg", comment: "毎週月曜 よる９時\nこの夏、一番の恋の予感" },
            {src:"changingJobs.jpeg", comment: "毎週月曜 よる１０時" },
            {src:"dog.jpeg", comment: "毎週火曜 よる９時" },
            {src:"f1814.jpeg", comment: "毎週月曜 よる９時" },
            {src:"game.jpeg", comment: "毎週金曜 よる１０時\n前代未聞のﾉﾝｽﾄｯﾌﾟ･ｴﾝﾀｰﾃｲﾒﾝﾄ!" }
        ];

        return(
            <div>
                <h1 className={style.dorama}>〜ドラマ〜</h1>
                <Slider {...settings}>
                    {imgsAndCmts.map((item, i) => (
                        //最初の書き方
                        // <div>
                        //     <img src = {item.src} alt= "pic" className={style.image} />
                        //     {item.comment.split('\n').map((line, index) => (
                        //         <p key={index} {...item} className={index === 0? style.firstLine : index ===1 ? style.secondLine : ''}>{line}</p>
                        //     ))}
                        // </div>
                        <div>
                            <div key={i}>
                                <Image
                                    src={"/" + item.src}
                                    alt="pic"
                                    width={500}
                                    height={300}
                                />
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
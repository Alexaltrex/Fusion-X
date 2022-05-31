import * as React from "react";
import style from "./Items.module.scss";
import src0 from "../../assets/png/Items/0.png";
import src1 from "../../assets/png/Items/1.png";
import src2 from "../../assets/png/Items/2.png";
import src3 from "../../assets/png/Items/3.png";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";

const items = [
    {
        src: src0,
        name: "ZENIT/USDT",
        rate: 96.26
    },
    {
        src: src1,
        name: "BTC/USDT",
        rate: 96.26
    },
    {
        src: src2,
        name: "ETH/USDT",
        rate: 96.26
    },
    {
        src: src3,
        name: "BNB/USDT",
        rate: 96.26
    },
]

export const Items = () => {
    return (
        <section className={style.items}>
            <div className={style.borderWrapper}>
                <div className={style.inner}>

                    <Swiper slidesPerView="auto"
                            slidesPerGroup={1}
                            centeredSlides={true}
                            loop={true}
                            className={style.swiperMobile}

                    >
                        {
                            items.map(({src, name, rate}, index) => (
                                <SwiperSlide key={index}
                                     className={style.slide}
                                >
                                    <div>
                                        <img src={src} alt=""/>
                                    </div>

                                    <div>
                                        <p>{name}</p>
                                        <p>{`$${rate}`}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <div className={style.cardsDesktop}>
                        {
                            items.map(({src, name, rate}, index) => (
                                <div key={index}
                                     className={style.card}
                                >
                                    <div>
                                        <img src={src} alt=""/>
                                    </div>

                                    <div>
                                        <p>{name}</p>
                                        <p>{`$${rate}`}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

        </section>
    )
}
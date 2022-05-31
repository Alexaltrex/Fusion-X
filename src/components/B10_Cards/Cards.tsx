import * as React from "react";
import style from "./Cards.module.scss";
import src0 from "../../assets/png/Cards/0.png";
import src1 from "../../assets/png/Cards/1.png";
import { Card } from "./Card/Card";
import "swiper/css";
import {Swiper, SwiperSlide} from "swiper/react";

export interface ICard {
    src: string
    byMonster: string
    currentBid: string
}

const cards: ICard[] = [
    {
        src: src0,
        byMonster: "Monsters",
        currentBid: "1.2 ETH",
    },
    {
        src: src1,
        byMonster: "Monsters",
        currentBid: "1.2 ETH",
    },
    {
        src: src0,
        byMonster: "Monsters",
        currentBid: "1.2 ETH",
    },
    {
        src: src1,
        byMonster: "Monsters",
        currentBid: "1.2 ETH",
    },
];

export const Cards = () => {
    return (
        <section className={style.cards}>
            <div className={style.inner}>

                    <Swiper slidesPerView="auto"
                            slidesPerGroup={1}
                            centeredSlides={true}
                            loop={true}
                            className={style.sliderMobile}
                            spaceBetween={40}
                    >
                        {
                            cards.map((card, index) => (
                                <SwiperSlide key={index}
                                             className={style.slide}
                                >
                                    <Card {...card}/>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>


                <div className={style.desktopContent}>
                    {
                        cards.map((card, index) => (
                            <Card key={index} {...card}/>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
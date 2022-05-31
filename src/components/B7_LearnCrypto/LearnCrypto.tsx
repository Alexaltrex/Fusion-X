import * as React from "react";
import style from "./LearnCrypto.module.scss";
import src0 from "../../assets/png/Learn Crypto/0.png";
import src1 from "../../assets/png/Learn Crypto/1.png";
import src2 from "../../assets/png/Learn Crypto/2.png";
import src3 from "../../assets/png/Learn Crypto/3.png";
import {Card} from "./Card/Card";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import "swiper/css";
import SwiperClass from 'swiper/types/swiper-class';
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import {useAppSelector} from "../../store/hooks";
import {selectSwitcher} from "../../store/appSlice";
import {FlyCoin} from "../Y_Common/FlyCoin/FlyCoin";


export interface ICard {
    src: string
    title: string
    date: string
    text: string
}

const items: ICard[] = [
    {
        src: src0,
        title: "Advanced Tools",
        date: "Jun 1, 2021",
        text: "Whether you’re a seasoned trader or just starting out, the ZenithCex offers advanced charting features to allow traders to visualize orders, positions, and price alerts.",
    },
    {
        src: src1,
        title: "Buy and sell digital assets at the best prices on ZenithCex",
        date: "Jun 1, 2021",
        text: "We provide high liquidity and trusted prices.",
    },
    {
        src: src2,
        title: "Leveraged tokens now available",
        date: "Jun 1, 2021",
        text: "Our API feed lets you easily gain access to real-time market data, while our trading API lets you develop secure, programmatic trading bots.",
    },
    {
        src: src3,
        title: "Low fees",
        date: "Jun 1, 2021",
        text: "Trading fees are determined based on trading activity and do not exceed 0.2%. Free deposit and low withdrawal fees for all assets.",
    },
];


export const LearnCrypto = () => {
    const [swiper, setSwiper] = useState<SwiperClass | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const switcher = useAppSelector(selectSwitcher);

    return (
        <section className={style.learnCrypto}>
            <div className={style.inner}>

                <FlyCoin className={style.flyCoin}/>

                <h2 className={style.title}>Learn <span>crypto</span></h2>

                <div className={style.cardsDesktop}>
                    {
                        items.map((item, index) => (
                            <Card key={index} {...item} switcher={switcher}/>
                        ))
                    }
                </div>

                <Swiper slidesPerView="auto"
                        slidesPerGroup={1}
                        loop={true}
                        centeredSlides={true}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
                        className={style.swiper}
                        spaceBetween={24}
                        speed={300}
                >
                    {
                        items.map((item, index) => (
                            <SwiperSlide key={index} className={style.slide}>
                                <Card {...item} switcher={switcher}/>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>

                <div className={style.controlBlock}>
                    <button className={style.btn}
                            onClick={() => swiper?.slidePrev()}
                    >
                        {svgIcons.chevronLeft}
                    </button>

                    <div className={style.status}>
                        <div className={style.move}
                             style={{
                                 width: `calc((100% - 6px) / 4)`,
                                 left: `calc(3px + ${currentIndex} * ((100% - 6px) / 4)  )`
                             }}
                        />
                    </div>

                    <button className={clsx(style.btn, style.btn_right)}
                            onClick={() => swiper?.slideNext()}
                    >
                        {svgIcons.chevronLeft}
                    </button>
                </div>

                <ButtonCustom label="View all"
                              className={style.viewBtn}
                              switcher={switcher}
                />

            </div>
        </section>
    )
}
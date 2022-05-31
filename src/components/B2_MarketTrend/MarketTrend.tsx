import * as React from "react";
import style from "./MarketTrend.module.scss"
import src0 from "../../assets/png/Market trend/0.png";
import src1 from "../../assets/png/Market trend/1.png";
import src2 from "../../assets/png/Market trend/2.png";
import src3 from "../../assets/png/Market trend/3.png";
import src4 from "../../assets/png/Market trend/4.png";
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import cone from "../../assets/png/cone.png";
import sphere from "../../assets/png/half-sphere.png";

const items = [
    {
        icon: src0,
        name: "ZENITH",
        fullName: "Zenith Chain",
        price: "125.894632",
        change: "+11,56%",
        up: true,
    },
    {
        icon: src1,
        name: "BTC",
        fullName: "Bitcoin",
        price: "56 443.164983",
        change: "-12,56%",
        up: false,
    },
    {
        icon: src2,
        name: "ETH",
        fullName: "Ethereum",
        price: "154.134613",
        change: "+12,76%",
        up: true,
    },
    {
        icon: src3,
        name: "BNB",
        fullName: "Binance Coin",
        price: "126.124663",
        change: "+9,99%",
        up: true,
    },
    {
        icon: src4,
        name: "XRP",
        fullName: "Ripple",
        price: "234.154793",
        change: "+14,44%",
        up: true,
    },
]

export const MarketTrend = () => {
    return (
        <section className={style.marketTrend}>

            <img src={cone} alt="" className={style.cone}/>

            <div className={style.inner}>

                <img src={sphere} alt="" className={style.sphere}/>

                <div className={style.back}/>

                <div className={style.content}>

                    <div className={style.title}>
                        Market trend
                    </div>

                    <div className={style.itemsMobile}>
                        {
                            items.map((item, index) => (
                                <div key={index}
                                     className={style.item}
                                >
                                    <img src={item.icon} alt="" className={style.icon}/>

                                    <div className={style.info}>

                                        <div className={style.left}>
                                            <p>{item.name}</p>
                                            <p>{item.fullName}</p>
                                        </div>

                                        <div className={style.right}>

                                            <p className={style.price}>{item.price}</p>

                                            <div className={clsx({
                                                [style.changeBlock]: true,
                                                [style.changeBlock_down]: !item.up,
                                            })}>
                                                <p>{item.change}</p>
                                                {svgIcons.arrowUpRight}
                                            </div>

                                        </div>

                                    </div>

                                    <button className={style.tradeBtn}>
                                        Trade
                                    </button>

                                </div>


                            ))
                        }
                    </div>

                    <div className={style.itemsDesktop}>

                        <div className={style.header}>
                            <p>#</p>
                            <p>Name</p>
                            <p>Price</p>
                            <p>24H change</p>
                            <p>Trade</p>
                        </div>

                        {
                            items.map((item, index) => (
                                <div key={index}
                                     className={style.item}
                                >
                                    <div className={style.numberBlock}>
                                        {index+1}
                                    </div>

                                    <div className={style.nameBlock}>
                                        <img src={item.icon} alt="" className={style.icon}/>
                                        <p>{item.name} <span>{`(${item.fullName})`}</span></p>
                                    </div>

                                    <div className={style.priceBlock}>
                                        {item.price}
                                    </div>

                                    <div className={style.changeBlock}>
                                        <div className={clsx({
                                            [style.card]: true,
                                            [style.card_down]: !item.up,
                                        })}>
                                            <p>{item.change}</p>
                                            {svgIcons.arrowUpRight}
                                        </div>
                                    </div>

                                    <button className={style.tradeBtn}>
                                        Trade
                                    </button>

                                </div>


                            ))
                        }
                    </div>

                </div>

            </div>

        </section>
    )
}
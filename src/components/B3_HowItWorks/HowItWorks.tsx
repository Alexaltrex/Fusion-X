import * as React from "react";
import style from "./HowItWorks.module.scss";
import src0 from "../../assets/png/How it works/0.png";
import src1 from "../../assets/png/How it works/1.png";
import src2 from "../../assets/png/How it works/2.png";
import src3 from "../../assets/png/How it works/3.png";

const items = [
    {
        src: src0,
        label: "Download",
    },
    {
        src: src1,
        label: "Connect wallet",
    },
    {
        src: src2,
        label: "Start trading",
    },
    {
        src: src3,
        label: "Earn money",
    },
]


export const HowItWorks = () => {
    return (
        <section className={style.howItWorks}>
            <div className={style.inner}>
                <h2 className={style.title}>How it <span>works</span></h2>

                <div className={style.items}>
                    {
                        items.map(({src, label}, index) => (
                            <div key={index}
                                 className={style.item}
                            >
                                    <div className={style.imgWrapper}>
                                        <img src={src} alt=""/>
                                    </div>
                                    <p>{label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
import * as React from "react";
import style from "./Experience.module.scss"
import src0 from "../../assets/png/Experience MetaX/0.png";
import src1 from "../../assets/png/Experience MetaX/1.png";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import {useMediaQuery} from "@mui/material";
import {useAppSelector} from "../../store/hooks";
import {selectSwitcher} from "../../store/appSlice";
import cone from "../../assets/png/cone.png";
import sphere from "../../assets/png/half-sphere.png";

const items = [
    {
        src: src0,
        title: "One interoperable wallet for all your DeFi needs",
        text: "Connect to MetaX and access a wealth of DeFi platforms without switching apps.",
        buttonLabel: "Get Connected",
        onClick: () => {}
    },
    {
        src: src1,
        title: "World-class security as you trade and store assets",
        text: "Connect to MetaX and access a wealth of DeFi platforms without switching apps.",
        buttonLabel: "Trade Securely",
        onClick: () => {}
    },
];

export const Experience = () => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    const switcher = useAppSelector(selectSwitcher);

    return (
        <section className={style.experience}>

            <img src={cone} alt="" className={style.cone}/>


            <div className={style.inner}>
                <h2 className={style.title}>Experience <span>MetaX</span></h2>

                <img src={sphere} alt="" className={style.sphere}/>

                <div className={style.items}>
                    {
                        items.map(({src, title, text, buttonLabel, onClick}, index) => (
                            <div key={index}
                                 className={style.item}
                            >
                                <img src={src} alt="" className={style.img}/>
                                <p className={style.title}>{title}</p>
                                <p className={style.text}>{text}</p>
                                <ButtonCustom label={buttonLabel}
                                              className={style.btn}
                                              onClick={onClick}
                                              outlined={matchesDesktop}
                                              switcher={switcher}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
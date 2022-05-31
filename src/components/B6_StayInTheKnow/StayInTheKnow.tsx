import * as React from "react";
import style from "./StayInTheKnow.module.scss";
import srcM from "../../assets/png/Stay in the know/mobile.png";
import srcD from "../../assets/png/Stay in the know/desktop.png";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import "./fly.scss"
import clsx from "clsx";
import {useAppSelector} from "../../store/hooks";
import {selectSwitcher} from "../../store/appSlice";

export const StayInTheKnow = () => {
    const switcher = useAppSelector(selectSwitcher);

    return (
        <section className={style.stayInTheKnow}>
            <div className={style.inner}>
                <h2 className={style.title}>Stay in the know on crypto with <span>Zenith</span></h2>

                <p className={style.description}>Anytime, anywhere. Trade crypto on your terms.</p>

                <div className={style.card}>

                    <div className={style.back}/>

                    <div className={style.cardContent}>

                        <img src={srcM} alt="" className={style.imgM}/>

                        <img src={srcD} alt="" className={clsx(style.imgD, "fly")}/>

                        <div className={style.infoBlock}>
                            <p className={style.infoBlockTitle}>Be Part of our Global Community</p>
                            <p className={style.infoBlockDescription}>Let’s stay in touch. Join our communities to keep up with the Zenith team and our traders from across the world.</p>
                            <ButtonCustom label="Join now"
                                          switcher={switcher}
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}
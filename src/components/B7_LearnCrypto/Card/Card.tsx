import {FC} from "react";
import {ICard} from "../LearnCrypto";
import * as React from "react";
import style from "./Card.module.scss"
import {svgIcons} from "../../../assets/svg/svgIcons";
import clsx from "clsx";

interface ICardComponent extends ICard {
    switcher: boolean
}

export const Card: FC<ICardComponent> = ({
                                    src,
                                    title,
                                    date,
                                    text,
                                             switcher
                                }) => {
    return (
        <div className={style.card}>

            <img src={src} alt=""/>

            <p className={clsx({
                [style.title]: true,
                [style.title_switcher]: switcher,
            })}>
                {title}
            </p>

            <p className={style.date}>{date}</p>
            <p className={style.text}>{text}</p>

            <button className={clsx({
                [style.btn]: true,
                [style.btn_switcher]: switcher,
            })}>
                <p>Learn more</p>
                {svgIcons.arrow}
            </button>

        </div>
    )
}
import * as React from "react";
import style from "./Card.module.scss";
import {ICard} from "../Cards";
import {FC} from "react";
import {svgIcons} from "../../../assets/svg/svgIcons";

export const Card: FC<ICard> = ({
                                    src,
                                    byMonster,
                                    currentBid
}) => {
    return (
        <div className={style.card}>
            <img src={src} alt="" className={style.img}/>

            <div className={style.info}>
                <div className={style.row}>
                    <p className={style.param}>by Monster</p>
                    <p className={style.param}>Current Bid</p>
                </div>
                <div className={style.row}>
                    <p className={style.value}>by Monster</p>
                    <p className={style.value}>Current Bid</p>
                </div>
            </div>

            <div className={style.buttonBlock}>
                <button className={style.bidBtn}>
                    Place Bid
                </button>
                <button className={style.likeBtn}>
                    {svgIcons.heart}
                </button>
            </div>

        </div>
    )
}
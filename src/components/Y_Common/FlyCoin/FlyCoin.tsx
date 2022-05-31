import * as React from "react";
import style from "./FlyCoin.module.scss";
import coins from "../../../assets/png/Fly coins/coins.png";
import {FC} from "react";
import clsx from "clsx";
import "./coinWrapper.scss";
import wingFirstLeft from "../../../assets/png/Fly coins/wingFirstLeft.png";
import wingFirstRight from "../../../assets/png/Fly coins/wingFirstRight.png";
import wingSecondLeft from "../../../assets/png/Fly coins/wingSecondLeft.png";
import wingSecondRight from "../../../assets/png/Fly coins/wingSecondRight.png";


interface IFlyCoin {
    className?: string
}

export const FlyCoin: FC<IFlyCoin> = ({className}) => {
    return (
        <div className={clsx(style.flyCoin, Boolean(className) && className)}>
            <div className={clsx(style.coinWrapper, "coinWrapper")}>
                <img src={coins} alt="" className={style.coins}/>

                <img src={wingFirstLeft}
                     alt=""
                     className={clsx(style.wingFirstLeft, "wingFirstLeft")}
                />

                <img src={wingFirstRight}
                     alt=""
                     className={clsx(style.wingFirstRight, "wingFirstRight")}
                />

                <img src={wingSecondLeft}
                     alt=""
                     className={clsx(style.wingSecondLeft, "wingSecondLeft")}
                />

                <img src={wingSecondRight}
                     alt=""
                     className={clsx(style.wingSecondRight, "wingSecondRight")}
                />

            </div>
        </div>
    )
}
import * as React from "react";
import style from "./TradeAnywhere.module.scss";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import {svgIcons} from "../../assets/svg/svgIcons";
import {FC} from "react";
import {useAppSelector} from "../../store/hooks";
import {selectSwitcher} from "../../store/appSlice";
import clsx from "clsx";
import figure from "../../assets/png/Trade anyware/figure.png";

interface ITradeAnywhere {
    pageYOffset: number
}


export const TradeAnywhere: FC<ITradeAnywhere> = ({pageYOffset}) => {
    const switcher = useAppSelector(selectSwitcher);

    return (
        <section className={clsx({
            [style.tradeAnywhere]: true,
            [style.tradeAnywhere_switcher]: switcher,
        })}>
            <div className={style.inner}>

                <div className={style.star}
                     style={{
                         transform: `rotate(${-0.1 * pageYOffset}deg)`
                     }}
                >
                    {svgIcons.star}
                </div>

                <img src={figure}
                     alt=""
                     className={style.figure}
                     style={{
                         transform: `rotate(${0.1 * pageYOffset}deg)`
                     }}
                />

                <h2 className={style.title}>Trade <span>anywhere</span></h2>

                <p className={style.description}>Anytime, anywhere. Trade crypto on your terms.</p>

                <div className={style.buttons}>
                    <ButtonCustom label="Get on AppStore"
                                  outlined={true}
                                  icon={svgIcons.apple}
                                  switcher={switcher}
                    />
                    <ButtonCustom label="Get on Google Play"
                                  outlined={true}
                                  icon={svgIcons.googlePlay}
                                  switcher={switcher}
                    />
                </div>

            </div>
        </section>
    )
}
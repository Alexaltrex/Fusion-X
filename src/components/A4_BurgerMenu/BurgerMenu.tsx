import * as React from "react";
import style from "./BurgerMenu.module.scss"
import {useAppSelector} from "../../store/hooks";
import {selectBurgerMenu, selectSwitcher} from "../../store/appSlice";
import clsx from "clsx";
import {DropDownBlock} from "./DropDownBlock/DropDownBlock";
import {tradeList} from "../A1_Header/Header";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import {LangBlock} from "./LangBlock/LangBlock";
import {CurrBlock} from "./CurrBlock/CurrBlock";

export const BurgerMenu = () => {
    const burgerMenu = useAppSelector(selectBurgerMenu);
    const switcher = useAppSelector(selectSwitcher);

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>
            <div className={style.inner}>
                {
                    !switcher ? (
                        <>
                            <DropDownBlock title="Trade"
                                           content={(
                                               <>
                                                   {
                                                       tradeList.map(item => (
                                                               <div key={item}
                                                                    className={style.listItem}
                                                               >
                                                                   {item}
                                                               </div>
                                                           )
                                                       )
                                                   }
                                               </>
                                           )}
                            />

                            <DropDownBlock title="Novice Zone"
                                           content={(<></>)}
                            />

                            <div className={style.block}>
                                Market
                            </div>

                            <DropDownBlock title="Earn"
                                           content={(<></>)}
                            />

                            <div className={style.block}>
                                Download
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={style.block}>Dashboard</div>
                            <div className={style.block}>Trade</div>
                            <div className={style.block}>NFT Marketplace</div>
                            <div className={style.block}>Discover</div>
                        </>
                    )
                }

                <CurrBlock/>
                <LangBlock/>

                <div className={style.btnWrapper}>
                    <ButtonCustom label={switcher ? "Connect Wallet" : "Get started now"}
                                  className={style.btn}
                                  switcher={switcher}
                    />
                </div>
            </div>
        </div>
    )
}
import React, {useEffect, useState} from 'react';
import {MarketTrend} from "../B2_MarketTrend/MarketTrend";
import {HowItWorks} from "../B3_HowItWorks/HowItWorks";
import style from "./App.module.scss";
import {Items} from "../B1_Items/Items";
import {SocialLinks} from "../A2_SocialLinks/SocialLinks";
import {TradeAnywhere} from "../B5_TradeAnywhere/TradeAnywhere";
import {StayInTheKnow} from "../B6_StayInTheKnow/StayInTheKnow";
import {LearnCrypto} from "../B7_LearnCrypto/LearnCrypto";
import {Header} from "../A1_Header/Header";
import {FirstBlock} from "../B0_FirstBlock/FirstBlock";
import {Footer} from "../A3_Footer/Footer";
import {BecomeACrypto} from "../B4_BecomeACrypto/BecomeACrypto";
import {throttle} from "../../helper/throttle";
import {useAppSelector} from "../../store/hooks";
import {selectBurgerMenu, selectSwitcher} from "../../store/appSlice";
import {Experience} from "../B8_Experience/Experience";
import {TheNFTWorld} from "../B9_TheNFTWorld/TheNFTWorld";
import {Cards} from "../B10_Cards/Cards";
import {BurgerMenu} from "../A4_BurgerMenu/BurgerMenu";
import clsx from "clsx";

export const App = () => {
    // mouse move
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setX(e.clientX);
        setY(e.clientY);
    }
    const onMouseMoveThrottle = throttle(onMouseMoveHandler, 50);

    // scroll
    const [pageYOffset, setPageYOffset] = useState(0);
    useEffect(() => {
        document.addEventListener(
            'scroll',
            throttle(() => {
                setPageYOffset(window.pageYOffset);
            }, 100)
        );
        return document.removeEventListener(
            'scroll',
            throttle(() => {
                setPageYOffset(window.pageYOffset);
            }, 100)
        );
    });

    const switcher = useAppSelector(selectSwitcher);
    const burgerMenu = useAppSelector(selectBurgerMenu);

    return (
        <div className={clsx({
            [style.app]: true,
            [style.app_burgerMenu]: burgerMenu,
        })}

             onMouseMove={onMouseMoveThrottle}
        >

            <div className={style.cursorBall}
                 style={{ left: `${x - 5}px`, top: `${y - 5}px`}}
            />

            <div className={style.back1}
                 style={{ backgroundPosition: switcher ? "0 0" : "200px 200px" }}
            />

            <div className={style.back2}
                 style={{ backgroundPosition: switcher ? "200px 200px" : "0 0" }}
            />

            <div className={style.back3}
                 style={{ backgroundPosition: switcher ? "200px 0px" : "200px 0" }}
            />

            <BurgerMenu/>
            <Header pageYOffset={pageYOffset}/>
            <SocialLinks/>

            <div className={style.content}>
                <FirstBlock x={x} y={y}/>
                {
                    !switcher && (
                        <>
                            <Items/>
                            <MarketTrend/>
                            <HowItWorks/>
                            <BecomeACrypto x={x} y={y}/>
                        </>
                    )
                }
                {
                    switcher && (
                        <>
                            <Experience/>
                            <TheNFTWorld/>
                            <Cards/>
                        </>
                    )
                }
                <TradeAnywhere pageYOffset={pageYOffset}/>
                <StayInTheKnow/>
                <LearnCrypto/>
                <Footer/>
            </div>


        </div>
    );
}


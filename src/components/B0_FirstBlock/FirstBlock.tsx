import * as React from "react";
import style from "./FirstBlock.module.scss";
import {Switcher} from "../B2_MarketTrend/Switcher/Switcher";
import {useAppSelector} from "../../store/hooks";
import {selectSwitcher} from "../../store/appSlice";
import clsx from "clsx";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import imgLeft from "../../assets/png/First block/left.png";
import imgRight from "../../assets/png/First block/right.png";
import secure from "../../assets/png/First block/secure.png";
import bottomItemImg from "../../assets/png/Become a crypto/1.png";
import {FC, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@mui/material";
import {Circles} from "../Y_Common/Circles/Circles";
import {throttle} from "../../helper/throttle";

interface IFirstBlock {
    x: number
    y: number
}

export const FirstBlock: FC<IFirstBlock> = ({x, y}) => {
    const switcher = useAppSelector(selectSwitcher);
    const isDesktop = useMediaQuery('(min-width:1440px)');
    const ref = useRef<HTMLDivElement>(null);
    const [alfaX, setAlfaX] = useState(0);
    //const [alfaY, setAlfaY] = useState(0);
    const [alfaY_topItem, setAlfaY_topItem] = useState(0);
    const [alfaY_middleItem, setAlfaY_middleItem] = useState(0);

    useEffect(throttle(() => {
        if (ref && ref.current) {
            const x0 = ref.current.getBoundingClientRect().x;
            const y0 = ref.current.getBoundingClientRect().y;
            const w = ref.current.getBoundingClientRect().width;
            const h = ref.current.getBoundingClientRect().height;
            const x_center = x0 + w / 2;
            const y_center = y0 + h / 2;

            const deltaY = -(y - y_center);
            const deltaX = x - x_center;
            let alfaX = 0.05 * deltaY;
            alfaX = (alfaX < -60)
                ? -60
                : (alfaX > 60)
                    ? 60
                    : alfaX;
            setAlfaX(alfaX);
            let alfaY = 0.05 * deltaX;

            //alfaY_topItem
            let alfaY_topItem = alfaY + (switcher ? 30 : -30);
            alfaY_topItem = (alfaY_topItem < -60)
                ? -60
                : (alfaY_topItem > 60)
                    ? 60
                    : alfaY_topItem;
            setAlfaY_topItem(alfaY_topItem);

            // alfaY_middleItem
            let alfaY_middleItem = alfaY + (switcher ? -30 : 30);
            alfaY_middleItem = (alfaY_middleItem < -60)
                ? -60
                : (alfaY_middleItem > 60)
                    ? 60
                    : alfaY_middleItem;
            setAlfaY_middleItem(alfaY_middleItem);

        }
    }, 100), [x, y, isDesktop, switcher]);

    const refBtnLeft = useRef<HTMLDivElement>(null);
    const [leftHover, setLeftHover] = useState(false)
    const [xCircleLeft, setXCircleLeft] = useState(100);
    const [yCircleLeft, setYCircleLeft] = useState(30);

    useEffect(() => {
        if (leftHover && refBtnLeft && refBtnLeft.current) {
            const rect = refBtnLeft.current.getBoundingClientRect()
            const x0 = rect.x;
            const y0 = rect.y;
            const w = rect.width;
            const h = rect.height;
            setXCircleLeft(((x - x0 <= w) && (x - x0 >= 0))  ? x - x0 : 100);
            setYCircleLeft(((y - y0 <= h) && (y - y0 >= 0))  ? y - y0 : 30);
        }
    }, [x, y, leftHover, refBtnLeft])

    const refBtnRight = useRef<HTMLDivElement>(null);
    const [rightHover, setRightHover] = useState(false)
    const [xCircleRight, setXCircleRight] = useState(100);
    const [yCircleRight, setYCircleRight] = useState(30);

    useEffect(() => {
        if (rightHover && refBtnRight && refBtnRight.current) {
            const rect = refBtnRight.current.getBoundingClientRect()
            const x0 = rect.x;
            const y0 = rect.y;
            const w = rect.width;
            const h = rect.height;
            setXCircleRight(((x - x0 <= w) && (x - x0 >= 0))  ? x - x0 : 100);
            setYCircleRight(((y - y0 <= h) && (y - y0 >= 0))  ? y - y0 : 30);
        }
    }, [x, y, rightHover, refBtnRight])

    return (
        <section className={style.firstBlock}>
            <div className={style.inner}>
                <Switcher/>

                <div className={style.contentMobile}>

                    <div className={style.titleWrapper}>
                        <div className={clsx({
                            [style.titleInner]: true,
                            [style.titleInner_switch]: switcher,
                        })}>
                            <h1 className={style.title}>
                                Trade <span>cryptos</span>
                            </h1>
                            <h1 className={style.title}>
                                One <span>Defi</span> portal
                            </h1>
                        </div>
                    </div>

                    <div className={style.titleWrapper}>
                        <div className={clsx({
                            [style.titleInner]: true,
                            [style.titleInner_switch]: switcher,
                        })}>
                            <h1 className={style.title}>
                                on Zenith CEX
                            </h1>
                            <h1 className={style.title}>
                                to rule them all
                            </h1>
                        </div>
                    </div>

                    <div className={style.descriptionWrapper}>
                        <div className={clsx({
                            [style.descriptionWrapperInner]: true,
                            [style.descriptionWrapperInner_switcher]: switcher,
                        })}>
                            <p className={style.description}>
                                Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset
                                exchange
                            </p>

                            <p className={clsx(
                                style.description,
                                style.description_second
                            )}>
                                Crypto wallet ⋅ NFT world ⋅ DApp access
                            </p>
                        </div>

                    </div>

                    <div className={style.imgWrapper}>
                        <div className={style.centeredContent}>

                            <div className={style.imgBlock}>
                                <img src={imgRight}
                                     alt=""
                                     className={clsx({
                                         [style.imgRight]: true,
                                         [style.imgRight_switcher]: switcher,
                                     })}
                                />
                                <img src={imgLeft}
                                     alt=""
                                     className={clsx({
                                         [style.imgLeft]: true,
                                         [style.imgLeft_switcher]: switcher,
                                     })}
                                />
                            </div>

                            <div className={clsx(style.item, style.firstItem)}>
                                <p className={clsx(style.number, switcher && style.number_switcher)}>175</p>
                                <p className={clsx(style.text, switcher && style.text_switcher)}>Supported countries</p>
                            </div>

                            <div className={clsx(style.item, style.secondItem, switcher && style.secondItem_switcher)}>
                                <div className={clsx(style.content1, switcher && style.content1_switcher)}>
                                    <p className={style.number}>200+</p>
                                    <p className={style.text}>Cryptocurrencies listed</p>
                                </div>
                                <div className={clsx(style.content2, switcher && style.content2_switcher)}>
                                    <img src={secure} alt=""/>
                                    <p className={style.text}>World-class security as you trade</p>
                                </div>
                            </div>

                            <div className={clsx(style.item, style.thirdItem, switcher && style.thirdItem_switcher)}>
                                <img src={bottomItemImg} alt=""/>
                                <p className={style.text}>Trade Assets</p>
                            </div>

                        </div>
                    </div>


                    <div className={style.btnWrapper}>

                        <ButtonCustom label="Get started now"
                                      onClick={() => console.log("Get started now")}
                                      className={clsx({
                                          [style.btn]: true,
                                          [style.btn_hide]: switcher,
                                      })}
                                      disabled={switcher}
                        />

                        <ButtonCustom label="Connect Wallet"
                                      onClick={() => console.log("Connect Wallet")}
                                      className={clsx({
                                          [style.btn2]: true,
                                          [style.btn2_show]: switcher,
                                      })}
                                      disabled={!switcher}
                                      switcher={true}
                        />
                    </div>

                </div>

                <div className={style.contentDesktop}
                     ref={ref}
                >

                    <div className={clsx({
                        [style.imgBlock]: true,
                        [style.imgBlock_switcher]: switcher,
                    })}>
                        <img src={imgLeft}
                             alt=""
                             className={clsx({
                                 [style.imgLeft]: true,
                                 [style.imgLeft_show]: switcher,
                             })}
                        />
                        <img src={imgRight}
                             alt=""
                             className={clsx({
                                 [style.imgRight]: true,
                                 [style.imgRight_hide]: switcher,
                             })}
                        />
                    </div>

                    {/* topItem */}
                    <div className={clsx({
                        [style.topItem]: true,
                        [style.topItem_switcher]: switcher,
                    })}>
                        <div className={clsx({
                            [style.topItemInner]: true,
                            [style.topItemInner_switcher]: switcher,
                        })}
                             style={
                                 isDesktop
                                     ? {transform: `rotateX(${alfaX}deg) rotateY(${alfaY_topItem}deg)`}
                                     : {}
                             }
                        >
                            <div className={clsx({
                                [style.content1]: true,
                                [style.content1_hide]: switcher,
                            })}>
                                <p className={style.number}>200+</p>
                                <p className={style.text}>Cryptocurrencies listed</p>
                            </div>
                            <div className={clsx({
                                [style.content2]: true,
                                [style.content2_show]: switcher,
                            })}>
                                <p className={style.number}>175</p>
                                <p className={style.text}>Supported countries</p>
                            </div>

                        </div>
                    </div>

                    {/*middle Item*/}
                    <div className={clsx({
                        [style.middleItem]: true,
                        [style.middleItem_switcher]: switcher,
                    })}>
                        <div className={clsx({
                            [style.middleItemInner]: true,
                            [style.middleItemInner_switcher]: switcher,
                        })}
                             style={
                                 isDesktop
                                     ? {transform: `rotateX(${alfaX}deg) rotateY(${alfaY_middleItem}deg)`}
                                     : {}
                             }
                        >
                            <div className={clsx({
                                [style.content1]: true,
                                [style.content1_hide]: switcher,
                            })}>
                                <p className={style.number}>175+</p>
                                <p className={style.text}>Supported countries</p>
                            </div>
                            <div className={clsx({
                                [style.content2]: true,
                                [style.content2_show]: switcher,
                            })}>
                                <img src={secure} alt="" className={style.secure}/>
                                <p className={style.text}>World-class security as you trade</p>
                            </div>

                        </div>
                    </div>

                    {/* bottom Item */}
                    <div className={clsx({
                        [style.bottomItem]: true,
                        [style.bottomItem_switcher]: switcher,
                    })}>
                        <div className={style.bottomItemInner}
                             style={
                                 isDesktop
                                     ? {transform: `rotateX(${alfaX}deg) rotateY(${alfaY_middleItem}deg)`}
                                     : {}
                             }
                        >
                            <p className={style.text}>Trade Assets</p>
                            <img src={bottomItemImg} alt="" className={style.bottomItemImg}/>
                        </div>
                    </div>


                    <div className={style.leftInfoBlock}>
                        <div className={style.title}>
                            <h1 className={clsx({
                                [style.titleInner]: true,
                                [style.titleInner_hide]: switcher,
                            })}>
                                Trade <span>cryptos</span>
                            </h1>
                        </div>

                        <div className={style.title}>
                            <h1 className={clsx({
                                [style.titleInner]: true,
                                [style.titleInner_hide]: switcher,
                            })}>
                                on Zenith CEX
                            </h1>
                        </div>

                        <div className={style.descriptionBlock}>
                            <div className={style.description}>
                                <p className={clsx({
                                    [style.descriptionInner]: true,
                                    [style.descriptionInner_hide]: switcher,
                                })}>
                                    Trade Bitcoin, Ethereum, USDT, and the top altcoins
                                </p>
                            </div>

                            <div className={style.description}>
                                <p className={clsx({
                                    [style.descriptionInner]: true,
                                    [style.descriptionInner_hide]: switcher,
                                })}>
                                    on the legendary crypto asset exchange
                                </p>
                            </div>
                        </div>

                        <div className={style.btnWrapper}
                             ref={refBtnLeft}
                             onMouseEnter={() => setLeftHover(true)}
                             onMouseLeave={() => setLeftHover(false)}
                        >

                            <ButtonCustom label="Get started now"
                                          onClick={() => console.log("Get started now")}
                                          className={clsx({
                                              [style.btn]: true,
                                              [style.btn_hide]: switcher,
                                          })}
                                          disabled={switcher}
                            />

                            <Circles className={style.circles}
                                     inlineStyle={{
                                         top: `${yCircleLeft}px`,
                                         left: `${xCircleLeft}px`,
                                     }}
                            />
                        </div>


                    </div>

                    <div className={style.rightInfoBlock}>

                        <div className={style.title}>
                            <h1 className={clsx({
                                [style.titleInner]: true,
                                [style.titleInner_show]: switcher,
                            })}>
                                One <span>Defi</span> portal
                            </h1>
                        </div>

                        <div className={style.title}>
                            <h1 className={clsx({
                                [style.titleInner]: true,
                                [style.titleInner_show]: switcher,
                            })}>
                                to rule them all
                            </h1>
                        </div>

                        <div className={style.descriptionBlock}>
                            <div className={style.description}>
                                <p className={clsx({
                                    [style.descriptionInner]: true,
                                    [style.descriptionInner_show]: switcher,
                                })}>
                                    Crypto wallet ⋅ NFT world ⋅ DApp access
                                </p>
                            </div>
                        </div>

                        <div className={style.btnWrapper}
                             ref={refBtnRight}
                             onMouseEnter={() => setRightHover(true)}
                             onMouseLeave={() => setRightHover(false)}
                        >

                            <ButtonCustom label="Connect Wallet"
                                          onClick={() => console.log("Connect Wallet")}
                                          className={clsx({
                                              [style.btn]: true,
                                              [style.btn_show]: switcher,
                                          })}
                                          disabled={!switcher}
                            />

                            <Circles className={style.circles}
                                     inlineStyle={{
                                         top: `${yCircleRight}px`,
                                         left: `${xCircleRight}px`,
                                     }}
                            />
                        </div>





                    </div>
                </div>

            </div>
        </section>
    )
}
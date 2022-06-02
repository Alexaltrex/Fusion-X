import * as React from "react";
import style from "./Header.module.scss"
import {svgIcons} from "../../assets/svg/svgIcons";
import logo from "../../assets/png/Header/logo.png";
import Popover from "@mui/material/Popover";
import clsx from "clsx";
import {Link} from "react-router-dom";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {
    CurrencyType,
    LangType, selectBurgerMenu,
    selectCurrency,
    selectLang,
    selectSwitcher,
    setBurgerMenu,
    setCurrency,
    setLang
} from "../../store/appSlice";
import {FC} from "react";

export const tradeList = [
    "Classic",
    "Advanced",
    "Margin",
    "ETF",
    "P2P",
    "Futures",
];

export const langs = {
    "Chi": {
        lang: "Chi",
        icon: svgIcons.langChi
    },
    "Eng": {
        lang: "Eng",
        icon: svgIcons.langEng
    },
    "Mon": {
        lang: "Mon",
        icon: svgIcons.langMon
    },
}

export const currencies = [
    "TRY",
    "TWD",
    "USD",
    "ZAR"
];

interface IHeader {
    pageYOffset: number
}

const secondMenuLinks = [
    {label: "Dashboard", to: "/"},
    {label: "Trade", to: "/"},
    {label: "NFT Marketplace", to: "/"},
    {label: "Discover", to: "/"},
];

export const Header: FC<IHeader> = ({pageYOffset}) => {
    // Trade
    const [anchorTrade, setAnchorTrade] = React.useState<null | HTMLElement>(null);
    const openTrade = Boolean(anchorTrade);
    const onClickTradeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorTrade(e.currentTarget);
    };
    const onCloseTrade = () => setAnchorTrade(null);

    // Lang
    const [anchorLang, setAnchorLang] = React.useState<null | HTMLElement>(null);
    const openLang = Boolean(anchorLang);
    const onClickLangHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorLang(e.currentTarget);
    };
    const onCloseLang = () => setAnchorLang(null);

    // Currency
    const [anchorCurrency, setAnchorCurrency] = React.useState<null | HTMLElement>(null);
    const openCurrency = Boolean(anchorCurrency);
    const onClickCurrencyHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorCurrency(e.currentTarget);
    };
    const onCloseCurrency = () => setAnchorCurrency(null);

    const dispatch = useAppDispatch();
    const langSelected = useAppSelector(selectLang);
    const currency = useAppSelector(selectCurrency);

    const delta = 50;

    const switcher = useAppSelector(selectSwitcher);

    const burgerMenu = useAppSelector(selectBurgerMenu);


    return (
        <header className={style.header}>

            <div className={clsx({
                [style.back]: true,
                [style.back_show]: pageYOffset > delta,
            })}/>

            <div className={style.inner}>

                <button className={clsx({
                    [style.btn]: true,
                    [style.btn_switcher]: switcher,
                })}
                        onClick={() => dispatch(setBurgerMenu(!burgerMenu))}
                >
                    {burgerMenu ? svgIcons.menu_close : svgIcons.menu_open}
                </button>


                <div className={style.left}>

                    <img src={logo} alt="" className={style.logo}/>

                    <div className={style.menuWrapper}>

                        <div className={clsx({
                            [style.menuWrapperInner]: true,
                            [style.menuWrapperInner_switcher]: switcher,
                        })}>

                            <div className={style.menu}>

                                <button className={clsx({
                                    [style.btnPopover]: true,
                                    [style.btnPopover_open]: openTrade,
                                })}
                                        onClick={onClickTradeHandler}
                                >
                                    <p>Trade</p>
                                    {svgIcons.carretDown}
                                </button>

                                <button className={clsx({
                                    [style.btnPopover]: true,
                                    //[style.btnPopover_open]: openTrade,
                                })}
                                    //onClick={onClickTradeHandler}
                                >
                                    <p>Novice Zone</p>
                                    {svgIcons.carretDown}
                                </button>

                                <Link to={"/"}
                                      className={style.link}
                                >
                                    Market
                                </Link>

                                <button className={clsx({
                                    [style.btnPopover]: true,
                                    //[style.btnPopover_open]: openTrade,
                                })}
                                    //onClick={onClickTradeHandler}
                                >
                                    <p>Earn</p>
                                    {svgIcons.carretDown}
                                </button>

                                <Link to={"/"}
                                      className={style.link}
                                >
                                    Download
                                </Link>

                                <Popover anchorEl={anchorTrade}
                                         disableScrollLock={true}
                                         open={openTrade}
                                         onClose={onCloseTrade}
                                         transformOrigin={{horizontal: 'center', vertical: 'top'}}
                                         anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                                         sx={{
                                             "& .MuiPopover-paper": {
                                                 backgroundColor: "#40433F",
                                                 borderRadius: "10px",
                                                 width: "120px",
                                             }
                                         }}
                                >
                                    {
                                        tradeList.map((item, index) => (
                                            <div key={index}
                                                 className={style.listItem}
                                                 onClick={() => {
                                                     onCloseTrade();
                                                 }}
                                            >
                                                <p>{item}</p>
                                            </div>
                                        ))
                                    }
                                </Popover>
                            </div>

                            <div className={clsx(style.menu, style.menu_switcher)}>
                                {
                                    secondMenuLinks.map(({to, label}, index) => (
                                        <Link key={index}
                                              to={to}
                                              className={style.link}
                                        >
                                            {label}
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>


                    </div>


                </div>

                <div className={style.right}>

                    <button className={clsx({
                        [style.btnPopover]: true,
                        [style.btnPopover_open]: openLang,
                    })}
                            onClick={onClickLangHandler}
                    >
                        {langs[langSelected].icon}
                        <p>{langSelected}</p>
                        {svgIcons.carretDown}
                    </button>

                    <button className={clsx({
                        [style.btnPopover]: true,
                        [style.btnPopover_open]: openCurrency,
                    })}
                            onClick={onClickCurrencyHandler}
                            style={{marginLeft: "15px"}}
                    >
                        <p>{currency}</p>
                        {svgIcons.carretDown}
                    </button>

                    <Popover anchorEl={anchorLang}
                             disableScrollLock={true}
                             open={openLang}
                             onClose={onCloseLang}
                             transformOrigin={{horizontal: 'center', vertical: 'top'}}
                             anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                             sx={{
                                 "& .MuiPopover-paper": {
                                     backgroundColor: "#40433F",
                                     borderRadius: "10px",
                                     width: "80px",
                                 }
                             }}
                    >
                        {

                            Object.values(langs).map(({icon, lang}, index) => (
                                <div key={index}
                                     className={clsx({
                                         [style.listItem]: true,
                                         [style.listItem_lang]: true,
                                         [style.listItem_selected]: lang === langSelected,
                                     })}
                                     onClick={() => {
                                         dispatch(setLang(lang as LangType))
                                         onCloseLang();
                                     }}
                                >
                                    {icon}
                                    <p>{lang}</p>
                                </div>
                            ))
                        }
                    </Popover>

                    <Popover anchorEl={anchorCurrency}
                             disableScrollLock={true}
                             open={openCurrency}
                             onClose={onCloseCurrency}
                             transformOrigin={{horizontal: 'center', vertical: 'top'}}
                             anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
                             sx={{
                                 "& .MuiPopover-paper": {
                                     backgroundColor: "#40433F",
                                     borderRadius: "10px",
                                     width: "64px",
                                 }
                             }}
                    >
                        {
                            currencies.map((curr, index) => (
                                <div key={index}
                                     className={clsx({
                                         [style.listItem]: true,
                                         [style.listItem_lang]: true,
                                         [style.listItem_selected]: curr === currency,
                                     })}
                                     onClick={() => {
                                         dispatch(setCurrency(curr as CurrencyType))
                                         onCloseCurrency();
                                     }}
                                >
                                    <p>{curr}</p>
                                </div>
                            ))
                        }
                    </Popover>

                    <div className={clsx({
                        [style.btnWrapperLeft]: true,
                        [style.btnWrapperLeft_switcher]: switcher
                    })}>
                        <div className={style.btnWrapperLeftInner}>
                            <button className={style.loginBtn}>Log in</button>

                            <ButtonCustom label="Sign Up"
                                          className={style.signUpBtn}
                                          outlined={true}
                            />
                        </div>
                    </div>

                    <div className={clsx({
                        [style.btnWrapperRight]: true,
                        [style.btnWrapperRight_switcher]: switcher
                    })}>
                        <ButtonCustom label="Connect Wallet"
                                      className={style.connectBtn}
                                      outlined={true}
                                      switcher={true}
                        />
                    </div>

                </div>


                <button className={clsx({
                    [style.btn]: true,
                    [style.btn_switcher]: switcher,
                })}>
                    {svgIcons.profits}
                </button>
            </div>
        </header>
    )
}
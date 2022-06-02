import * as React from "react";
import {FC, useState} from "react";
import style from "./CurrBlock.module.scss";
import {svgIcons} from "../../../assets/svg/svgIcons";
import clsx from "clsx";
import Collapse from "@mui/material/Collapse";
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {CurrencyType, selectCurrency, setCurrency} from "../../../store/appSlice";
import {currencies} from "../../A1_Header/Header";

export const CurrBlock = () => {
    const [open, setOpen] = useState(false);
    const selectedCurr = useAppSelector(selectCurrency);
    const dispatch = useAppDispatch();

    return (
        <div className={style.currBlock}>
            <div className={clsx({
                [style.header]: true,
                [style.header_open]: open,
            })}
                 onClick={() => setOpen(!open)}
            >
                <div className={style.title}>{selectedCurr}</div>

                {svgIcons.carretDown}

            </div>

            <Collapse in={open}>
                {
                    currencies.map(item => (
                        <div key={item}
                             className={style.item}
                             onClick={() => {
                                 dispatch(setCurrency(item as CurrencyType))
                                 setOpen(false);
                             }}
                        >
                            {item}
                        </div>
                    ))
                }
            </Collapse>
        </div>
    )
}
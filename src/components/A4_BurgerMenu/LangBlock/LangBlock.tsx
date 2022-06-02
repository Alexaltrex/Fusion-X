import * as React from "react";
import {FC, useState} from "react";
import style from "./LangBlock.module.scss";
import {svgIcons} from "../../../assets/svg/svgIcons";
import clsx from "clsx";
import Collapse from "@mui/material/Collapse";
import {langs} from "../../A1_Header/Header";
import {useAppDispatch} from "../../../store/hooks";
import {LangType, selectLang, setLang} from "../../../store/appSlice";
import {useSelector} from "react-redux";


export const LangBlock = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useAppDispatch();
    const selectedLang = useSelector(selectLang);

    return (
        <div className={style.langBlock}>
            <div className={clsx({
                [style.header]: true,
                [style.header_open]: open,
            })}
                 onClick={() => setOpen(!open)}
            >
                <div className={style.title}>
                    {langs[selectedLang].icon}
                    <p className={style.lang}>{selectedLang}</p>
                </div>

                <div className={style.carret}>
                    {svgIcons.carretDown}
                </div>
            </div>

            <Collapse in={open}>
                {
                    Object.values(langs).map(({lang, icon}, index) => (
                        <div key={index}
                             className={style.listItem}
                             onClick={() => {
                                 dispatch(setLang(lang as LangType));
                                 setOpen(false);
                             }}
                        >
                            {icon}
                            <p className={style.lang}>{lang}</p>
                        </div>
                    ))
                }
            </Collapse>
        </div>
    )
}
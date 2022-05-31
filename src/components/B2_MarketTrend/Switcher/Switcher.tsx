import * as React from "react";
import style from "./Switcher.module.scss"
import {useAppDispatch, useAppSelector} from "../../../store/hooks";
import {selectSwitcher, setSwitcher} from "../../../store/appSlice";
import clsx from "clsx";
import {svgIcons} from "../../../assets/svg/svgIcons";

export const Switcher = () => {
    const switcher = useAppSelector(selectSwitcher);
    const dispatch = useAppDispatch();


    return (
        <div className={style.switcher}
             onClick={() => dispatch(setSwitcher(!switcher))}
        >
            <div className={style.inner}>
                <div className={clsx({
                    [style.move]: true,
                    [style.move_right]: switcher,
                })}>
                    {svgIcons.switcher}
                </div>
            </div>
        </div>
    )
}
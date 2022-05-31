import * as React from "react";
import {FC, useEffect, useState} from "react";
import style from "./ButtonCustom.module.scss"
import clsx from "clsx";
import "./animation.scss";
import {useAppSelector} from "../../../store/hooks";
import {selectSwitcher} from "../../../store/appSlice";

interface IButtonCustom extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string
    icon?: JSX.Element
    label: string
    outlined?: boolean
    switcher?: boolean
}

export const ButtonCustom: FC<IButtonCustom> = ({
                                                    className,
                                                    icon,
                                                    label,
                                                    outlined = false,
                                                    switcher = false,
                                                    ...props
                                                }) => {
    const [mouseDown, setMouseDown] = useState(false);


    return (
        <button className={clsx(
            {
                [style.buttonCustom]: true,
                [style.buttonCustom_switcher]: switcher,
                [style.buttonCustom_outlined]: outlined,
                [style.buttonCustom_outlined_switcher]: outlined && switcher,
                [style.buttonCustom_mouseDown]: mouseDown,

            },
            Boolean(className) && className,
        )}
                onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
                {...props}
        >
            <div className={style.content}>
                <div className={style.contentInner}>
                    {Boolean(icon) && icon}
                    <p className={style.label}>{label}</p>
                </div>
                <div className={style.contentInner2}>
                    {Boolean(icon) && icon}
                    <p className={style.label}>{label}</p>
                </div>
            </div>
        </button>
    )
}
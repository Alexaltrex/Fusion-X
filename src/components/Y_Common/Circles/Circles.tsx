import * as React from "react";
import style from "./Circles.module.scss"
import {FC} from "react";
import clsx from "clsx";
import "./circle.scss"

interface ICircles {
    className?: string
    inlineStyle?: any
}

export const Circles: FC<ICircles> = ({
                                          className,
                                          inlineStyle = {}
                                      }) => {
    const delay = 800;
    const count = 10;
    const array = [];
    for (let i = 0; i < count; i++) {
        array[i] = i;
    }
    return (
        <div className={clsx(style.circlesWrapper, Boolean(className) && className)}
            style={inlineStyle}
        >
            {
                array.map((el, index) => (
                    <div key={index}
                         className={clsx(style.circleItem, "circle")}
                         style={{
                             animationDelay: `${index * delay}ms`
                         }}
                    />
                ))
            }
        </div>
    )
}
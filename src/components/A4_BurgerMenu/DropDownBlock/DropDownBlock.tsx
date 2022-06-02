import * as React from "react";
import {FC, useState} from "react";
import style from "./DropDownBlock.module.scss"
import {svgIcons} from "../../../assets/svg/svgIcons";
import clsx from "clsx";
import Collapse from "@mui/material/Collapse";

interface IDropDownBlock {
   title: string
    content: JSX.Element
}

export const DropDownBlock: FC<IDropDownBlock> = ({
                                                      title,
                                                      content
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={style.dropDownBlock}>
            <div className={clsx({
                [style.header]: true,
                [style.header_open]: open,
            })}
                onClick={() => setOpen(!open)}
            >
                <div className={style.title}>{title}</div>

                    {svgIcons.carretDown}

            </div>
            <Collapse in={open}>
                {content}
            </Collapse>
        </div>
    )
}
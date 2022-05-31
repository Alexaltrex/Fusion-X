import * as React from "react";
import style from "./SocialLinks.module.scss";
import {svgIcons} from "../../assets/svg/svgIcons";

const socialLinks  = [
    {
        icon: svgIcons.telegram,
        href: "#",
    },
    {
        icon: svgIcons.facebook,
        href: "#",
    },
    {
        icon: svgIcons.twitter,
        href: "#",
    },
    {
        icon: svgIcons.instagram,
        href: "#",
    },
]

export const SocialLinks = () => {
    return (
        <nav className={style.socialLinks}>
            {
                socialLinks.map(({icon, href}, index) => (
                    <a key={index}
                       href={href}
                       className={style.link}
                       target="_blank"
                       rel="nofollow noopener"
                    >
                        {icon}
                    </a>
                ))
            }
        </nav>
    )
}
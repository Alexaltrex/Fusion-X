import * as React from "react";
import style from "./Footer.module.scss"
import logo from "../../assets/png/Header/logo.png"
import {svgIcons} from "../../assets/svg/svgIcons";
import clsx from "clsx";
import {useAppSelector} from "../../store/hooks";
import {selectSwitcher} from "../../store/appSlice";

const socialLinks = [
    { href: "#", icon: svgIcons.telegram },
    { href: "#", icon: svgIcons.facebook },
    { href: "#", icon: svgIcons.twitter },
    { href: "#", icon: svgIcons.instagram },
    { href: "#", icon: svgIcons.linkedin },
    { href: "#", icon: svgIcons.discord },
    { href: "#", icon: svgIcons.tikTok },
    { href: "#", icon: svgIcons.medium },
    { href: "#", icon: svgIcons.github },
    { href: "#", icon: svgIcons.youtube },
];

const links = [
    {
        title: "About Us",
        links: [
            "About",
            "User Agreement",
            "Privacy Policy",
            "Announcements",
            "Risk Disclosure",
        ],
    },
    {
        title: "Ecosystem",
        links: [
            "Zenith launchpad",
            "Margin trading",
            "Features - (coming soon)",
            "Zenith Zone - (coming soon)",
            "Zenith venture - (coming soon)",
            "Zenith staking",
            "Zenith star - (coming soon)",
            "Zenith pay - (coming soon)",
            "Zenith dex",
            "Zenith scan",
            "Zenith explorer",
            "NFT Marketplace - (coming soon)",
        ],
    },
    {
        title: "Services",
        links: [
            "App Download",
            "Fees structure",
            "Referral - (coming soon)",
            "Listing Application",
            "P2P Merchant application",
        ],
    },
    {
        title: "Support",
        links: [
            "Institutional Services",
            "API Document",
            "Help Center",
            "Let’s Collaborate",
            "Media Collaborate",
            "Submit a Request",
            "Complaints and Suggestions",
            "Product Suggestion",
        ],
    }
]

export const Footer = () => {
    const switcher = useAppSelector(selectSwitcher);

    return (
        <footer className={style.footer}>
            <div className={style.inner}>

                <div className={style.firstBlock}>
                    <div className={style.logoWrapper}>
                        <img src={logo} alt="" className={style.logo}/>
                        <button className={style.top}>{svgIcons.chevronLeft}</button>
                    </div>

                    <div className={style.socialLinks}>
                        {
                            socialLinks.map(({href, icon}, index) => (
                                <a key={index}
                                   href={href}
                                   className={clsx({
                                       [style.socialLink]: true,
                                       [style.socialLink_switcher]: switcher,
                                   })}
                                >
                                    {icon}
                                </a>
                            ))
                        }
                    </div>

                    <p className={style.copy}>Copyright © 2022 Zenith Cex a product of Zenith Chain UAB Reg Number: 305865705</p>
                </div>

                {
                    links.map((item, index) => (
                        <div key={index} className={clsx({
                            [style.linksBlock]: true,
                            [style.linksBlock_last]: index === links.length - 1,
                        })}>

                            <p className={clsx({
                                [style.title]: true,
                                [style.title_switcher]: switcher,
                            })}>
                                {item.title}
                            </p>

                            <div className={style.links}>
                                {
                                    item.links.map((link, index) => (
                                        <a key={index}
                                           href="#"
                                           className={style.link}
                                        >
                                            {link}
                                        </a>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }

                <div className={style.copyBlock}>
                    <p>Copyright © 2022 Zenith Cex a product of Zenith Chain UAB Reg Number: 305865705</p>
                </div>


            </div>
        </footer>
    )
}
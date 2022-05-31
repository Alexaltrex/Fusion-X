import * as React from "react";
import style from "./TheNFTWorld.module.scss"
import src from "../../assets/png/The NFT world/0.png";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import {useMediaQuery} from "@mui/material";

export const TheNFTWorld = () => {
    const matchesDesktop = useMediaQuery('(min-width:1440px)');
    return (
        <section className={style.theNFTWorld}>
            <div className={style.inner}>
                <div className={style.back}/>
                <div className={style.content}>
                    <img src={src} alt="" className={style.img}/>

                    <p className={style.title}>The <span>NFT</span> world, your oyster</p>
                    <p className={style.text}>With MetaX, you can shop, trade or create trending NFTs easily, and be in the know with your
                        favourite NFT communities.</p>
                    <ButtonCustom label="Discover NFTs"
                                  outlined={matchesDesktop}
                                  className={style.btn}
                                  switcher={true}

                    />

                </div>

            </div>
        </section>
    )
}
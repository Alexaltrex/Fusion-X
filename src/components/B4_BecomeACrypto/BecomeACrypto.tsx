import * as React from "react";
import style from "./BecomeACrypto.module.scss";
import {ButtonCustom} from "../Y_Common/ButtonCustom/ButtonCustom";
import img0 from "../../assets/png/Become a crypto/0.png";
import img1 from "../../assets/png/Become a crypto/1.png";
import img2 from "../../assets/png/Become a crypto/2.png";
import back from "../../assets/png/Become a crypto/back.png";
import {FC, useEffect, useRef, useState} from "react";
import {useMediaQuery} from "@mui/material";

const cards = [
    {label: "Buy & Sell Crypto", img: img0},
    {label: "Trade Assets", img: img1},
    {label: "Learn Crypto", img: img2},
];

interface IBecomeACrypto {
    x: number
    y: number
}

export const BecomeACrypto: FC<IBecomeACrypto> = ({x, y}) => {
    const isDesktop = useMediaQuery('(min-width:1440px)');

    const ref = useRef<HTMLDivElement>(null);
    const [alfaX, setAlfaX] = useState(0);
    const [alfaY, setAlfaY] = useState(0);

    useEffect(() => {
        if (ref && ref.current) {
            const x0 = ref.current.getBoundingClientRect().x;
            const y0 = ref.current.getBoundingClientRect().y;
            const w = ref.current.getBoundingClientRect().width;
            const h = ref.current.getBoundingClientRect().height;
            const x_center = x0 + w / 2;
            const y_center = y0 + h / 2;

            const deltaY = -(y - y_center);
            const deltaX = x - x_center;
            let alfaX = 0.05 * deltaY;
            alfaX = (alfaX < -60)
                ? -60
                : (alfaX > 60)
                    ? 60
                    : alfaX;

            let alfaY = (-25) * 0 + 0.05 * deltaX;
            alfaY = (alfaY < -60)
                ? -60
                : (alfaY > 60)
                    ? 60
                    : alfaY;

            setAlfaX(alfaX);
            setAlfaY(alfaY);
        }
    }, [x, y, isDesktop]);

    return (
        <section className={style.becomeACrypto}
        >
            <div className={style.inner}>

                <div className={style.firstBlock}>
                    <h2 className={style.title}>Become a crypto trader <span>in seconds</span></h2>
                    <p className={style.description}>Anytime, anywhere. Trade crypto on your terms.</p>
                    <ButtonCustom label="Contact Us"
                                  className={style.btn}

                    />
                </div>

                <div className={style.secondBlock}
                     ref={ref}
                >
                    {
                        cards.map(({label, img}, index) => (
                            <div key={index} className={style.card}>

                                <div className={style.cardInner}
                                     style={
                                         isDesktop
                                             ? {transform: `rotateX(${alfaX}deg) rotateY(${alfaY}deg)`}
                                             : {}
                                     }
                                >
                                    <img src={back} alt="" className={style.back}/>
                                    <p className={style.label}>{label}</p>
                                    <img className={style.img} src={img} alt=""/>
                                </div>

                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import lottie from "lottie-web";
import {useEffect, useRef} from 'react';

function NotFound(){
    const container = useRef<any>()

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData:require('assets/images/notfound.json')
        })
    },[])

    return (
        <div>
            <div css = {lottiewrap} ref={container}></div>
            <div css = {textwrap}>
                <p>찾고 있는 페이지를 찾을 수 없습니다.<br/>
                이름이 바뀌었거나 존재하지 않습니다.
                </p>
            </div>
        </div>
    );
}

export default NotFound;

const lottiewrap = (theme:Theme) => css`
    width: 100%
    height: 60%
    padding : 0.5rem;
`

const textwrap = (theme:Theme) => css`
    width: 100%;
    height: auto;
    text-align: center;
    padding : 2rem;
`
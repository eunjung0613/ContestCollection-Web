/** @jsxImportSource @emotion/react */
import { css,Theme } from "@emotion/react";
import React,{useEffect, useRef} from 'react';
import lottie from "lottie-web";

function NF(){
    const con = useRef<any>();

    useEffect(()=>{
        lottie.loadAnimation({
            container: con.current,
            renderer:'svg',
            loop:true,
            autoplay: true,
            animationData:require('assets/lottieJSON/notfound.json')
        })
    },[])
    return(
        <div css = {Allwrap}>
            <div css = {lottiecontent} ref = {con}></div>
                <div css = {textwrap}>
                    <p css = {text}>
                        찾고있는 페이지를 찾을 수 없습니다. <br/>
                        이름이 바뀌었거나 존재하지 않습니다.
                    </p>
            </div>
        </div>
    )
}

export default NF;

const Allwrap = css`
    width: 100%;
    text-align:center;
`
const lottiecontent = css`
    display: inline-block;
    width : 45%;
    height: 30%;
    min-height: 20%;
`

const textwrap = css`
    display: absolute;
    height: auto;
`

const text = (theme:Theme) => css`
    font-weight: ${theme.fontWeight.bold};
`
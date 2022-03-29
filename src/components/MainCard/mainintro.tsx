/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";

function MainCard() {
    const container = useRef(null)

    useEffect(()=>{
        lottie.loadAnimation({
            container: container.current,
            renderer:'svg',
            loop: true,
            autoplay: true,
            animationData:require('assets/images/introduce_main.json')
        })
    },[])

    return (
        <div>
            <div css = {wrap1}>
                <div css = {wrap2}className="container" ref = {container}></div>
                <br/>
                <h4 css={h4}>SCON이란?</h4>
                <br/>
                <p>SCON은 성공회대학교 IT 경진대회 및 소프트웨어 경진대회와 미디어컨텐츠 경진대회등 이공계열 학생들이 참여하는 교내 대회 작품을 조금 더 쉽게 확인할 수 있도록 만들어진 경진대회 모음집이라고 할 수 있습니다.</p>
                <br/>
                <h4 css={h4}>SCON 사용법</h4>
                <br/>
                <p>현재 페이지에서 좌측을 확인시 각 [IT] [미디어켄턴츠] [S/W 경진대회] 의 탭이 있는 것을 확인할 수 있습니다. <br/>
                각 탭을 클릭 시 해당 경진대회에 수상한 작품의 이름과 팀명을 확인할 수 있으며, 추가적으로 마음에 드는 작품을 클릭하면 해당 작품에 대한 영상과 작품 내용을 확인할 수 있습니다.
                </p>
                <br/>
                <br/>
                <div css = {introduce}>ⓒ IT융합자율학부 - 김지인, 김은정, 손창하, 한슬희</div>
            </div>
        </div>
    );
}

export default MainCard;


const wrap1 = (theme:Theme)=> css`
    position: absolute;
    margin-top : 3rem;
    margin-right: 1rem;
`

const wrap2 = (theme:Theme)=> css`
    position: relative;
    width: 100%;
    border-style: dotted;
`

const h4 = (theme:Theme)=> css `` // 차후 폰트 스타일 지정 후 꾸미기

const introduce = (theme:Theme)=> css `
position: absolute;
font-size: 0.3rem;
text-align: center;
`
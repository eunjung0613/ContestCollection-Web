/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";
import { Link } from "react-router-dom";

function MainCard() {
    const container = useRef<any>()

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
                <Link to ='/list/it'>
                <div css = {wrap2}className="container" ref = {container}></div>
                </Link>
                <br/>
                <div css= {maintext}>
                <h4 css = {mainh}>S-CON이란?</h4>
                <p css = {mainp}>S-CON은 성공회대학교 IT 경진대회 및 소프트웨어 경진대회와 미디어컨텐츠 경진대회등 이공계열 학생들이 참여하는 교내 대회 작품을 조금 더 쉽게 확인할 수 있도록 만들어진 경진대회 모음집이라고 할 수 있습니다.</p>
                <h4  css = {mainh}>S-CON 사용법</h4>
                <p css = {mainp} >현재 페이지에서 좌측을 확인시 각 [IT] [미디어켄턴츠] [S/W 경진대회] 의 탭이 있는 것을 확인할 수 있습니다.각 탭을 클릭 시 해당 경진대회에 수상한 작품의 이름과 팀명을 확인할 수 있으며, 추가적으로 마음에 드는 작품을 클릭하면 해당 작품에 대한 영상과 작품 내용을 확인할 수 있습니다.
                </p>
                </div>
                <div css = {btnwrap}>
                    <button css={btn} onClick={()=>window.open('https://forms.gle/CNSErVw1PKVqwMbc7')}>입력 구글 폼 이동</button> 
                </div>
                <footer css = {introduce}>ⓒ IT융합자율학부 - 김지인, 김은정, 손창하, 한슬희</footer>
            </div>
        </div>
    );
}

// 버튼 클릭시 현재 경진대회 모음집 구글 폼으로 이동
// 차후 onClick 수정 예정

export default MainCard;


const wrap1 = (theme:Theme)=> css`
    position: absolute;
    flex-direction: column;
    margin-top : 2rem;
    margin-right: 5rem;
    margin-left: 5rem;
    height: auto;
`

const wrap2 = (theme:Theme)=> css`
    background-color:
    position: relative;
    width: 100%;
    height: 10rem;
`

const introduce = (theme:Theme)=> css `
    position : fixed;
    bottom : 0;
    font-size: 0.3rem;
    text-align: center;
`

const maintext= (theme:Theme)=>css`
    width: auto;
    height:rem;
    padding: 3rem;
`
const mainh= (theme:Theme)=>css`
    font-weigjt: ${theme.fontWeight.bold};
    padding: 1rem;
    color: #ffffff;
    margin: 1rem;
    background-color: #f2b600;
    border-radius: 0.7rem;
    :after{
        content:""; 
        position: absolute; 
        left : 3rem; 
        border-right: 1.5rem solid #f2b600; 
        border-top: 1.2rem solid transparent; 
        border-bottom: 0.5rem solid transparent;
    }    
`
const mainp= (theme:Theme)=>css`
    font-weight:${theme.fontWeight.light};
    padding: 1rem;
    color: #ffffff;
    position: relative;
    margin: 2rem;
    background-color: #f7d794;
    border-radius: 0.7rem;
    :after{
        content:""; 
        position: absolute;
        right : -1.0rem;
        border-left: 30px solid #f7d794; 
        border-top: 20px solid transparent; 
        border-bottom: 10px solid transparent;
    }
`

const btnwrap = (theme:Theme)=>css`
    font-weight: ${theme.fontWeight.light};
    position: absolute;
    text-align:center;
    right : 1rem;
    background-color: ${theme.color.yellow};
    border-radius: 0.3rem;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
    :hover{
        background-color: ${theme.color.white};
    }
    :after{
        right:inherit;
        top:inherit;
        left:0;
        bottom:0;
    }
    :before,:after{
        content:'';
        position:absolute;
        background-color: ${theme.color.yellow};
        transition:400ms ease all;
    }
    :hover:before,:hover:after{
        width:100%;
        transition:800ms ease all;
    }
`

const btn = (theme:Theme)=>css`
    padding : 0.3rem;
    position: relative;
    color: ${theme.color.white};
    :hover{
        color: ${theme.color.darkYellow};
    }
`
import styled from "styled-components";
import KakaoLogin from "react-kakao-login";
import { useEffect, useState } from "react";

const buttonBlock = {
    border: "none",
    borderRadius: "9px",
    fontSize: "17px",
    width: "284px",
    fontWeight: "500",
    height: "32px",
    cursor: "pointer",
    background: "#fae101",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: "4px 0px",
};

const ButtoninnerText = styled.h3`
    margin: 0;
    font-size: 14px;
`;

const Kakao = () => {
    const [logToggle, setLogToggle] = useState<boolean>(false);
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://developers.kakao.com/sdk/js/kakao.js";
        script.async = true;
        document.body.appendChild(script);

        if (window.Kakao) {
            window.Kakao.init(`${process.env.REACT_APP_KAKAO_APP_KEY}`);
            console.log(window.Kakao.isInitialized());
        }

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <KakaoLogin
            
            token={`${process.env.REACT_APP_KAKAO_APP_KEY}`}
            onSuccess={(res) => {
                console.log(res);
                setLogToggle(true);
            }}
            onFail={(err) => console.error("로그인 실패", err)}
            onLogout={() => setLogToggle(false)}
            render={(renderProps) => (
                <KaKaoButton onClick={renderProps.onClick}>
                    <svg width="18px" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 18 17">
                        <g transform="translate(0.000000,17.000000) scale(0.100000,-0.100000)" stroke="none">
                            <path
                                fill="#212529"
                                d="M38 154 c-15 -8 -30 -25 -34 -38 -6 -26 10 -66 27 -66 7 0 9 -10 5 -26 -7 -25 -6 -25 16 -10 12 9 31 16 41 16 29 0 75 28 82 50 10 31 -3 59 -35 75 -36 19 -67 18 -102 -1z"
                            ></path>
                        </g>
                    </svg>
                </KaKaoButton>
            )}
        >
            <ButtoninnerText>{logToggle ? "로그아웃" : "카카오로 로그인"}</ButtoninnerText>
        </KakaoLogin>
    );
};

export default Kakao;

const KaKaoButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fae500;
    padding: 0;
    border: 0;
    border-radius: 4px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
    svg {
        width: 18px;
        height: 17;
        overflow: hidden;
    }
`;

import Kakao from "../Kakao";
import Google from "../Google";
import styled from "styled-components";
import { ReactComponent as Close } from "../assets/close.svg";
import Facebook from "../Facebook";
const Login = () => {
    return (
        <Modal>
            <PageDiv />
            <Article>
                <CloseSpan>
                    <button onClick={() => alert("모달 꺼짐")}>
                        <Close />
                    </button>
                </CloseSpan>
                <h2>로고</h2>
                <Form>
                    <input type="text" placeholder="이메일" />
                    <input type="password" placeholder="비밀번호" />
                </Form>
                <LoginButton>버튼</LoginButton>
                <span>
                    <a>아이디 찾기 | 비밀번호 찾기</a>
                </span>
                <span>
                    <a>회원가입</a>
                </span>
                <span>간편 로그인</span>
                <LogoButtonDiv>
                    <Kakao />
                    <Google />
                    <Facebook />
                </LogoButtonDiv>
            </Article>
        </Modal>
    );
};

export default Login;

const Modal = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 80;
    position: fixed;
    display: flex;
    overflow: hidden;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;
const PageDiv = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    background: rgba(11, 19, 30, 0.37);
`;
const Article = styled.article`
    border: 3px solid #888;
    width: 360px;
    height: 432px;
    margin: auto;
    padding: 24px;
    display: flex;
    border-radius: 6px;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    background-color: #fff;

    hr {
        width: 0;
        height: 10px;
    }
`;
const Form = styled.div`
    margin-top: 0em;
    font-size: 1rem;
    color: #000a12;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        text-align: center;
    }

    input {
        margin-bottom: 12px;
        width: 312px;
        height: 2em;
        margin-top: 0px;
        padding: 13px 12px;
        line-height: 1.47;
        font-size: 15px;
        border: 1px solid #dee2e6;
        letter-spacing: -0.3px;
        border-radius: 4px;
    }
`;

const CloseSpan = styled.span`
    margin-left: auto;

    button {
        border: 0px;
        background: none;
    }
`;
const LoginButton = styled.button`
    margin: 12px 0;
    width: 342px;
    height: 48px;
    background-color: #ff7272;
    color: white;
    font-weight: 700;
    border: none;
    border-radius: 4px;
`;

const LogoButtonDiv = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;

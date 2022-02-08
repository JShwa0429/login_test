import FacebookLogin from "@greatsumini/react-facebook-login";
import styled from "styled-components";
export default function Facebook() {
    return (
        <FacebookLogin
            appId={`${process.env.REACT_APP_FACEBOOK_APP_KEY}`}
            onSuccess={(res) => {
                console.log("로그인 성공!");
                console.log("id: ", res?.userID);
            }}
            onFail={(err) => {
                console.log("로그인실패", err);
            }}
            onProfileSuccess={(res) => {
                console.log("Get Profile 성공");
                console.log("name: ", res);
            }}
            render={(renderProps) => (
                <FacebookButton onClick={renderProps.onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" fill="none" viewBox="0 0 10 18">
                        <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M8.91 10.125l.467-3.258H6.459V4.753c0-.89.407-1.76 1.714-1.76H9.5V.22S8.296 0 7.145 0C4.742 0 3.171 1.56 3.171 4.385v2.482H.5v3.258h2.671V18H6.46v-7.875H8.91z"
                            clip-rule="evenodd"
                        ></path>
                    </svg>
                </FacebookButton>
            )}
        />
    );
}

const FacebookButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #325ca6;
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

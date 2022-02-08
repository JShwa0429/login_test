import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { ReactComponent as GoogleLogo } from "./assets/google.svg";

import styled from "styled-components";
const Google = () => {
    let googleClientId: string = process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID || "";
    const [userObj, setUserObj] = useState({
        email: "",
        name: "",
    });
    const onLoginSuccess = (res: any) => {
        setUserObj({ ...userObj, email: res.profileObj.email, name: res.profileObj.name });
    };

    useEffect(() => {
        console.log(userObj);
    }, [userObj]);

    useEffect(() => {
        return () => {};
    }, []);

    return (
        <div>
            <GoogleLogin
                clientId={googleClientId}
                onSuccess={(res) => onLoginSuccess(res)}
                onFailure={(result) => console.log(result)}
                render={(renderProps) => (
                    <GoogleButton onClick={renderProps.onClick}>
                        <GoogleLogo width="18px" height="17" />
                    </GoogleButton>
                )}
                buttonText="Login"
            />
        </div>
    );
};

export default Google;

const GoogleButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
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

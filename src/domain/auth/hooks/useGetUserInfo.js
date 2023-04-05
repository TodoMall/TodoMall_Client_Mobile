import axios from "axios";

import {
    KAKAO_CLIENT_ID,
    LOCAL_STORAGE_KEYS,
    REDIRECT_URI,
} from "../../../constants";

const useGetUserInfo = async code => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

    let token;

    if (accessToken) {
        token = await axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
    }

    const userInfo = await axios("https://kapi.kakao.com/v2/user/me", {
        headers: {
            Authorization: `Bearer ${token.data.access_token}`,
        },
    });

    const userProfile =
        userInfo.data.kakao_account.profile.profile_image_url.replace(
            "http",
            "https"
        );

    return {
        name: userInfo.data.kakao_account.profile.nickname,
        email: userInfo.data.kakao_account.email,
        image: userProfile,
    };
};

export default useGetUserInfo;

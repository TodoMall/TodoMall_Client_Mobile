import styled from "styled-components";

import { COLOR, LOCAL_STORAGE_KEYS } from "../../../constants";
import { RowBox } from "../../../mds/box";
import { BodyL, BodyM } from "../../../mds/text";
import { ProfileCard } from "../../member/components";

const PayerInfo = () => {
    const [userName] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_NAME);
    const [userEmail] = useLocalStorage(LOCAL_STORAGE_KEYS.USER_EMAIL);

    return (
        <ProfileCard>
            <UserInfo>
                <RowBox justifyContent={"flex-start"}>
                    <BodyM margin={"0 1.813rem 0 0"} fontColor={COLOR.GRAY500}>
                        이름
                    </BodyM>
                    <BodyL>{userName}</BodyL>
                </RowBox>
                <RowBox>
                    <BodyM margin={"0 1rem 0 0"} fontColor={COLOR.GRAY500}>
                        이메일
                    </BodyM>
                    <BodyL>{userEmail}</BodyL>
                </RowBox>
            </UserInfo>
        </ProfileCard>
    );
};

export default PayerInfo;

const UserInfo = styled.div`
    margin-left: 1rem;
`;

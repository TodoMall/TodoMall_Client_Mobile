import { Fragment } from "react";
import styled from "styled-components";
import ThinText from "../global/ThinText";
import BorderText from "../global/BorderText";
import Label from "../global/Label";

const PayerInfo = ({ image, name, email }) => {
  return (
    <Fragment>
      <Label>도전자</Label>
      <UserWrapper>
        <ProfileImage src={image} alt="" />

        <UserInfo>
          <User>
            <ThinText width="20%">이름 </ThinText>
            <BorderText width="80%">{name}</BorderText>
          </User>

          <User>
            <ThinText width="20%">이메일 </ThinText>
            <BorderText width="80%">{email}</BorderText>
          </User>
        </UserInfo>
      </UserWrapper>
    </Fragment>
  );
};

export default PayerInfo;

const ProfileImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  object-fit: cover;
`;

const UserWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
`;

const User = styled.div`
  display: flex;
  margin-left: 15px;
  width: 100%;
`;

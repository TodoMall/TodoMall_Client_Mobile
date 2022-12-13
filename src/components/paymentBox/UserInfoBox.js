import { Fragment } from "react";
import styled from "styled-components";

const UserInfoBox = ({ image, name, email }) => {
  const amount = 10000;
  return (
    <Fragment>
      <Label>도전자</Label>
      <UserWrapper>
        <ProfileImage src={image} alt={image} />
        <UserInfo>
          <User>
            <Description>이름 </Description>
            <BorderText>{name}</BorderText>
          </User>

          <User>
            <Description>이메일 </Description>
            <BorderText>{email}</BorderText>
          </User>
        </UserInfo>
      </UserWrapper>
    </Fragment>
  );
};
const Label = styled.div`
  height: 35px;
  align-self: flex-start;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
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
  display: inline-flex;
  margin-left: 15px;
  width: 100%;
`;

const BorderText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #222222;
  width: 80%;
`;
const Description = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #888888;
  width: 20%;
`;
export default UserInfoBox;

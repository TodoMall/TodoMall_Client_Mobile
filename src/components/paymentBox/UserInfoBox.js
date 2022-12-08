import { Fragment } from "react";
import styled from "styled-components";

const UserInfoBox = ({ image, name, email }) => {
  return (
    <Fragment>
      <Label>도전자</Label>
      <UserInfo>
        <ProfileImage src={image} alt={image} />
        <User>
          <Description>이름 </Description>
          <BorderText>{name}</BorderText>
          <Description>이메일 </Description>
          <BorderText>{email}</BorderText>
        </User>
      </UserInfo>
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
  display: inline-block;
`;
const UserInfo = styled.span`
  display: flex;
  align-items: center;
`;

const BorderText = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #222222;
`;
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
`;
const User = styled.div`
  margin-left: 15px;
`;
const Description = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #888888;
`;
export default UserInfoBox;

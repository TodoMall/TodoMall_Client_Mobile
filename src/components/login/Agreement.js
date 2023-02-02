import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../global/Header";

const Agreement = () => {
  const navigate = useNavigate();

  const { service, personal } = { ...localStorage };
  const [isServiceOn, setIsServiceOn] = useState(!!service);
  const [isPersonalOn, setIsPersonalOn] = useState(!!personal);
  const [isMarketingOn, setIsMarketingOn] = useState(false);
  const [isOverTeenager, setIsOverTeenager] = useState(false);

  const TOGGLE_BUTTON_OFF = "/images/toggle_button_off.svg";
  const TOGGLE_BUTTON_ON = "/images/toggle_button_on.svg";

  const handleSubmit = () => {
    localStorage.setItem("personal", true);
    localStorage.setItem("service", true);
    navigate("/todobox");
  };

  const handleCheckService = () => setIsServiceOn((prevState) => !prevState);
  const handleCheckPersonal = () => setIsPersonalOn((prevState) => !prevState);
  const handleCheckOverTeenager = () =>
    setIsOverTeenager((prevState) => !prevState);
  const handleCheckMarketing = () =>
    setIsMarketingOn((prevState) => !prevState);

  const handleService = () => navigate("/service");
  const handlePersonal = () => navigate("/personal");

  const AgreementItem = ({
    handleState,
    state,
    description,
    handlePage,
    optionDescription = "필수",
    optionDescriptionColor = "#6B47FD",
  }) => {
    return (
      <ItemWrapper>
        <Item>
          <CheckIcon
            onClick={handleState}
            src={state ? TOGGLE_BUTTON_ON : TOGGLE_BUTTON_OFF}
          />
          <p style={{ color: optionDescriptionColor, marginRight: "5px" }}>
            ({optionDescription})
          </p>
          <p>{description}</p>
        </Item>
        {handlePage && <ArrowIcon onClick={handlePage} />}
      </ItemWrapper>
    );
  };

  return (
    <>
      <Header title="회원 가입" />
      <Body>
        <Text>
          <BodyText>더 나은 서비스 품질을 위해서</BodyText>
          <BodyText>필수 약관에 동의해주세요</BodyText>
        </Text>
        <BodyImage />
      </Body>
      <Footer>
        <Table>
          <AgreementItem
            handleState={handleCheckService}
            state={isServiceOn}
            description={"서비스 이용약관 동의"}
            handlePage={handleService}
          />
          <AgreementItem
            handleState={handleCheckPersonal}
            state={isPersonalOn}
            description={"개인정보 처리방침 동의"}
            handlePage={handlePersonal}
          />
          <AgreementItem
            handleState={handleCheckOverTeenager}
            state={isOverTeenager}
            description={"만 14세 이상입니다"}
          />
          <AgreementItem
            handleState={handleCheckMarketing}
            state={isMarketingOn}
            description={"마케팅 활용 / 광고성 정보 동의"}
            optionDescription={"선택"}
            isLast={true}
            optionDescriptionColor={"#666666"}
          />
        </Table>

        {isPersonalOn && isServiceOn && isOverTeenager ? (
          <Button onClick={handleSubmit}>제출하기</Button>
        ) : (
          <Button bgcolor="#ededed" color="#888888">
            제출하기
          </Button>
        )}
      </Footer>
    </>
  );
};

const ArrowIcon = styled.img`
  content: url("/images/next_button.svg");
`;
const CheckIcon = styled.img`
  margin-right: 10px;
  content: url(${(props) => props.src});
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fbfbfb;
  padding-top: 72px;
  width: 100vw;
  max-width: 450px;
`;

const Text = styled.div`
  flex-direction: column;
`;

const BodyText = styled.p`
  font-weight: bolder;
  font-size: 22px;
  line-height: 30px;
  padding-left: 15px;
  text-align: left;
`;

const BodyImage = styled.img`
  width: 250px;
  height: 250px;
  margin: auto;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -58%);
  content: url("/images/agreement_image.svg");
`;

const Footer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
  margin-top: 40px;
`;

const Table = styled.div`
  max-width: 380px;
  width: 100%;
  margin-bottom: 30px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Item = styled.span`
  display: flex;
  align-items: center;
  height: 48px;
`;
const Button = styled.div`
  max-width: 380px;
  width: 90vw;
  background-color: ${(props) => props.bgcolor || "#6b47fd"};
  border-radius: 20px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => props.color || "white"};
`;

export default Agreement;

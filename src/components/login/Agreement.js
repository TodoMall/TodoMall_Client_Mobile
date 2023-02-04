import React from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../hooks";
import { Header } from "../global";
import { LOCAL_STORAGE_KEYS, COLOR } from "../../constants";
import styled from "styled-components";

const Agreement = () => {
  const navigate = useNavigate();

  const { isService, isPersonal } = { ...localStorage };

  const [isServiceOn, setIsServiceOn, handleCheckService] =
    useToggle(isService);
  const [isPersonalOn, setIsPersonalOn, handleCheckPersonal] =
    useToggle(isPersonal);
  const [isMarketingOn, setIsMarketingOn, handleCheckMarketing] = useToggle();
  const [isOverTeenager, setIsOverTeenager, handleCheckOverTeenager] =
    useToggle();
  const [isAlarmOn, setIsAlarmOn, handleCheckAlarm] = useToggle();
  const [isAllClauseCheck, setIsAllClauseCheck] = useToggle();

  const handleCheckClause = () => {
    setIsAllClauseCheck((isAllClauseCheck) => {
      setIsServiceOn(!isAllClauseCheck);
      setIsPersonalOn(!isAllClauseCheck);
      setIsMarketingOn(!isAllClauseCheck);
      setIsOverTeenager(!isAllClauseCheck);
      setIsAlarmOn(!isAllClauseCheck);
      return !isAllClauseCheck;
    });
  };

  const handleSubmit = () => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.isPersonal, true);
    localStorage.setItem(LOCAL_STORAGE_KEYS.isService, true);
    navigate("/todobox");
  };

  const handleMoveService = () => navigate("/service");
  const handleMovePersonal = () => navigate("/personal");

  const getCheckIconByStatus = (status) => {
    return `/images/agreement_check_box_${status ? "on" : "off"}.svg`;
  };

  const AgreementItem = ({
    status,
    description,
    handleStatus,
    handlePage,
    optionDescription = "필수",
    optionDescriptionColor = COLOR.GRAY600,
  }) => {
    return (
      <ItemWrapper>
        <Item>
          <CheckIcon
            onClick={handleStatus}
            src={getCheckIconByStatus(status)}
          />
          <p style={{ color: optionDescriptionColor, marginRight: "0.313rem" }}>
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
      <Header title="약관 동의" />

      <DescriptionWrapper>
        <Description>더 나은 학습을 위해</Description>
        <Description>투두몰 약관에 동의해주세요</Description>
        <DescriptionImage />
      </DescriptionWrapper>
      <AgreementList>
        <AgreeAllClause>
          <ClauseCheckBox
            src={getCheckIconByStatus(isAllClauseCheck)}
            onClick={handleCheckClause}
          />
          <p>약관 전체 동의</p>
        </AgreeAllClause>

        <AgreementItem
          handleStatus={handleCheckService}
          status={isServiceOn}
          description={"서비스 이용약관 동의"}
          handlePage={handleMoveService}
        />
        <AgreementItem
          handleStatus={handleCheckPersonal}
          status={isPersonalOn}
          description={"개인정보 처리방침 동의"}
          handlePage={handleMovePersonal}
        />
        <AgreementItem
          handleStatus={handleCheckOverTeenager}
          status={isOverTeenager}
          description={"만 14세 이상입니다"}
        />
        <AgreementItem
          handleStatus={handleCheckMarketing}
          status={isMarketingOn}
          description={"마케팅 활용 / 광고성 정보 동의"}
          optionDescription={"선택"}
          optionDescriptionColor={"#8D94A8"}
        />
        <AgreementItem
          handleStatus={handleCheckAlarm}
          status={isAlarmOn}
          description={"앱 내 푸시알림 수신 동의"}
          optionDescription={"선택"}
          isLast={true}
          optionDescriptionColor={"#8D94A8"}
        />

        {isPersonalOn && isServiceOn && isOverTeenager ? (
          <Button onClick={handleSubmit} bgcolor={COLOR.DISABLED}>
            동의합니다
          </Button>
        ) : (
          <Button bgcolor={COLOR.BRAND_COLOR}>동의합니다</Button>
        )}
      </AgreementList>
    </>
  );
};

const AgreeAllClause = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 2rem);
  height: 3.75rem;
  background-color: #fafafc;
  border-radius: 1.25rem;
  padding: 1.125rem 1rem;
  p {
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.75rem;
    text-align: left;
  }
`;

const ClauseCheckBox = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  content: url(${(props) => props.src});
`;

const ArrowIcon = styled.img`
  content: url("/images/arrow_icon.svg");
`;
const CheckIcon = styled.img`
  margin-right: 0.625rem;
  content: url(${(props) => props.src});
`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${COLOR.BACKGROUND1};
  padding-top: 4.5rem;
  width: 100%;
  max-width: 28.125rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
  padding-left: 1.5rem;
`;

const DescriptionImage = styled.img`
  width: 15rem;
  height: 15rem;
  margin: 1.563rem auto;
  content: url("/images/agreement_image.svg");
`;

const AgreementList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.WHITE};
`;

const ItemWrapper = styled.div`
  display: flex;
  width: calc(100% - 4rem);
  height: 1.5rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;
const Item = styled.span`
  display: flex;
  align-items: center;
  height: 3rem;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 2.25rem);
  height: 3.25rem;
  border-radius: 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  color: ${COLOR.WHITE};
  background-color: ${(props) => props.bgcolor};
  margin-top: 1.5rem;
`;

export default Agreement;

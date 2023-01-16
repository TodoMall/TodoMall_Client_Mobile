import useAxios from "axios-hooks";
import { useParams, useNavigate } from "react-router-dom";
import { baseApiUrl } from "../../../constants";
import {
  Divider,
  Header,
  ThinText,
  IconDict,
  BorderText,
  Loader,
} from "../../global";
import styled from "styled-components";
import dayjs from "dayjs";

const MyTodoDetail = () => {
  const navigate = useNavigate();
  const { planId } = useParams();
  const { email } = { ...localStorage };
  const [{ data: plan }] = useAxios(`${baseApiUrl}products?id=${planId}`);
  const [{ data: myPlans }] = useAxios(`${baseApiUrl}user?email=${email}`);
  const currentPlanSessions = myPlans?.ownProducts.find(
    (el) => el.productId === planId
  );

  const selectTodoSuccessIcon = (expireDate, status) => {
    let iconPath;
    const FormattedExpireDate = new Date(expireDate);
    const currentTime = new Date();
    switch (true) {
      case status === true:
        iconPath = "class_success_icon";
        break;
      case status === false && FormattedExpireDate - currentTime > 0:
        iconPath = "class_inprogress_icon";
        break;
      case status === false:
        iconPath = "mypage_plan_failed";
        break;
      /*        
        TODO : 1회 실패
        case ...judge value:
          iconImage = "class_one_fail_icon";
          break;
        TODO : 2회 실패
        case ...judge value:
          iconImage = "class_two_fail_icon";
          break;
      */
      default:
    }
    return `/images/${iconPath}.svg`;
  };

  const setClassStatus = (plan) => {
    let status;
    plan?.sessions.forEach((session) => {
      let expireDate = dayjs(session.expireDate).startOf("day");
      const currentDate = dayjs().startOf("day");
      const deadLine = expireDate - currentDate > 0;
      if (plan.status) {
        status = "success";
      }
      if (!plan.status && deadLine) {
        status = "inprogress";
      }
      if (!plan.status && !deadLine) {
        status = "fail";
      }
    });
    return status;
  };

  const setClassIconBasedOnStatus = (classStatus) => {
    if (classStatus === "inprogress") {
      return "/images/mypage_plan_inprogress.svg";
    }
    if (classStatus === "success") {
      return "/images/mypage_plan_finished.svg";
    }
    if (classStatus === "fail") {
      return "/images/mypage_plan_failed.svg";
    }
  };

  return (
    <Wrapper>
      <Header title="클래스" containerHeight="48px" />
      {plan ? (
        <>
          <ImageContainer backgroundImage={plan?.image} />
          <TodoInfo>
            <img src={setClassIconBasedOnStatus(setClassStatus(plan))} alt="" />
            <ThinText
              width="auto"
              color="#444444"
              fontSize="16px"
              lineHeight="24px"
            >
              {plan?.subDescription}
            </ThinText>
            <BorderText
              width="auto"
              fontWeight="700"
              fontSize="24px"
              lineHeight="36px"
              textAlign="left"
            >
              {plan?.title}
            </BorderText>
            <CardTags>
              {plan?.informationTags.map((tag) => {
                return (
                  <div key={tag}>
                    <CardTag>
                      <img src={`/images/${IconDict[tag]}.svg`} alt="" />
                      <ThinText
                        width="auto"
                        textAlign="center"
                        fontWeight="500"
                        lineHeight="14px"
                      >
                        {tag}
                      </ThinText>
                    </CardTag>
                  </div>
                );
              })}
            </CardTags>
          </TodoInfo>
        </>
      ) : (
        <Loader height="279px" />
      )}
      <Divider
        margin="24px 0"
        border="1px solid #ededed"
        maxWidth="100%"
        height="8px"
      />
      <BorderText
        fontSize="20px"
        fontWeight="700"
        lineHeight="32px"
        textAlign="left"
        margin="0 0 16px 16px"
      >
        커리큘럼
      </BorderText>
      <SessionWrapper>
        {currentPlanSessions?.sessions?.map((session, idx) => {
          const beforeSessionInProgress =
            idx === 0 ? true : currentPlanSessions?.sessions[idx - 1]?.status;

          return (
            <Sessions key={session.id} opacity={!beforeSessionInProgress}>
              <ThinText width="auto">Session {idx + 1}</ThinText>
              <SessionInfo>
                <BorderText
                  width="auto"
                  fontSize="18px"
                  fontWeight="700"
                  lineHeight="28px"
                  textAlign="left"
                >
                  {session.title}
                </BorderText>
                {beforeSessionInProgress && (
                  <Icon
                    src={selectTodoSuccessIcon(
                      session?.expireDate,
                      session?.status
                    )}
                    alt=""
                  />
                )}
              </SessionInfo>
              {session?.todos?.map((todo) => {
                return (
                  <TodoWrapper
                    key={todo.id}
                    pointEvent={beforeSessionInProgress}
                    onClick={() => {
                      navigate(
                        `/todo/${todo?.id}/${session?.id}/${planId}/detail/${todo?.status}`
                      );
                    }}
                  >
                    <ThinText width="auto" color="#222222" margin="0 0 0 8px">
                      {todo.title}
                    </ThinText>
                    {beforeSessionInProgress && (
                      <IconWrapper>
                        <ArrowIcon alt="" />
                      </IconWrapper>
                    )}
                  </TodoWrapper>
                );
              })}
            </Sessions>
          );
        })}
      </SessionWrapper>
    </Wrapper>
  );
};

const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
  content: url("/images/arrow_icon.svg");
`;

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  pointer-events: ${(props) => (props.pointEvent ? null : "none")};
`;

const Sessions = styled.div`
  margin-bottom: 16px;
  opacity: ${(props) => (props.opacity ? "40%" : "")};
`;
const SessionInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;
const Icon = styled.img`
  width: 59px;
  height: 32px;
  border-radius: 50px;
  margin-bottom: 4px;
`;

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56px;
`;
const SessionWrapper = styled.div`
  padding: 0px 16px;
`;
const TodoInfo = styled.div`
  position: absolute;
  width: 100%;
  top: 154px;
  padding: 0 16px;
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 279px;
  margin-top: 56px;
  object-fit: cover;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
    ),
    url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

const CardTags = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
`;
const CardTag = styled.div`
  width: auto;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
  border-radius: 8px;
  padding: 0 10px 0 6px;
`;
export default MyTodoDetail;

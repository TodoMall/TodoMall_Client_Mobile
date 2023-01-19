import React, { Fragment } from "react";
import Label from "../global/Label";
import ThinText from "../global/ThinText";
import BorderText from "../global/BorderText";
import Divider from "../global/Divider";
import Loader from "../global/Loader";
import styled from "styled-components";

const SelectedProductInfo = ({ isLoading, title, sessions }) => {
  const getColorForDuration = (duration, isText = false) => {
    let color;
    switch (true) {
      case duration >= 4:
        color = isText ? "rgba(82, 196, 26, 1)" : "rgba(82, 196, 26, 0.2)";
        break;
      case duration >= 2:
        color = isText ? "rgba(250, 173, 20, 1)" : "rgba(250, 173, 20, 0.2)";
        break;
      case duration === 1:
        color = isText ? "rgba(246, 80, 80, 1)" : "rgba(246, 80, 80, 0.2)";
        break;
      default:
        color = "rgba(0,0,0,0)";
    }
    return color;
  };

  return (
    <>
      <Label>도전 클래스</Label>
      <ThinText margin="0 0 8px 0">클래스명</ThinText>
      {isLoading ? (
        <Loader width="100%" height="100%" />
      ) : (
        <BorderText width="auto">{title}</BorderText>
      )}
      <Divider
        margin="16px 0"
        border="1px solid #ededed"
        maxWidth="100%"
        height="1px"
      />
      <ThinText>커리큘럼</ThinText>
      {isLoading && <Loader width="100%" height="100%" />}
      {!isLoading &&
        sessions?.map((session) => {
          return (
            <CurriculumWrapper key={session.orderBy}>
              <BorderText margin="6px 0" textAlign="left">
                {session.title}
              </BorderText>
              <DDayIcon bgColor={getColorForDuration(session.duration, false)}>
                <DDayIconText
                  color={getColorForDuration(session.duration, true)}
                >
                  D-{session.duration}
                </DDayIconText>
              </DDayIcon>
            </CurriculumWrapper>
          );
        })}
    </>
  );
};
const CurriculumWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DDayIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 37px;
  height: 24px;
  background: ${(props) => props.bgColor};
  border-radius: 8px;
`;

const DDayIconText = styled.p`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  font-family: "Pretendard";
`;

export default SelectedProductInfo;

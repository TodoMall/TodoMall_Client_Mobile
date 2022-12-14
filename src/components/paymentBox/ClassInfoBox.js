import styled from "styled-components";

const ClassInfoBox = ({ title, sessions }) => {
  return (
    <>
      <Label>도전 클래스</Label>
      <Description>클래스명</Description>
      <p>{title}</p>
      <Divider />
      <Description>커리큘럼</Description>
      {sessions?.map((session) => {
        return (
          <div key={session.orderBy}>
            <BorderText>{session.title}</BorderText>
            {/* <DDay>D-{RemainingDay}</DDay> */}
          </div>
        );
      })}
    </>
  );
};
export default ClassInfoBox;

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
const Description = styled.p`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #888888;
`;
const Divider = styled.div`
  width: 100vm;
  border: 1px solid #ededed;
  margin: 16px 0;
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

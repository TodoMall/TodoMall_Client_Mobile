import styled from "styled-components";
import Label from "../global/Label";
import ThinText from "../global/ThinText";
import BorderText from "../global/BorderText";
import Divider from "../global/Divider";

const ClassInfoBox = ({ title, sessions }) => {
  return (
    <>
      <Label>도전 클래스</Label>
      <ThinText margin="0 0 8px 0">클래스명</ThinText>
      <p>{title}</p>
      <Divider
        margin="16px 0"
        border="1px solid #ededed"
        width="100%"
        height="none"
      />
      <ThinText>커리큘럼</ThinText>
      {sessions?.map((session) => {
        return (
          <div key={session.orderBy}>
            <BorderText margin="12px 0">{session.title}</BorderText>
            {/* <DDay>D-{RemainingDay}</DDay> */}
          </div>
        );
      })}
    </>
  );
};
export default ClassInfoBox;

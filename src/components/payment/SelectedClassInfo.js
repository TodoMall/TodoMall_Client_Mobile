import React from "react";
import Label from "../global/Label";
import ThinText from "../global/ThinText";
import BorderText from "../global/BorderText";
import Divider from "../global/Divider";
import Loader from "../global/Loader";

// paying || selected 을 붙이는게 나으려나 고민
const SelectedClassInfo = ({ loading, title, sessions }) => {
  return (
    <>
      <Label>도전 클래스</Label>
      <ThinText margin="0 0 8px 0">클래스명</ThinText>
      {loading ? <Loader width="100%" height="100%" /> : <p>{title}</p>}
      <Divider
        margin="16px 0"
        border="1px solid #ededed"
        width="100%"
        height="none"
      />
      <ThinText>커리큘럼</ThinText>
      {loading && <Loader width="100%" height="100%" />}
      {!loading &&
        sessions?.map((session) => {
          return (
            <React.Fragment key={session.orderBy}>
              <BorderText margin="12px 0">{session.title}</BorderText>
            </React.Fragment>
          );
        })}
    </>
  );
};
export default SelectedClassInfo;

import styled from "styled-components";
import { UserImageProfile } from "../../global";
import BorderText from "../../global/BorderText";

// should be rename
const UserInfo = ({ plans }) => {
  const { name, image } = { ...localStorage };
  const planLength = plans.length;

  return (
    <Wrapper>
      <UserImageProfile image={image} isProgress={!!plans} />
      <TextWrapper>
        <BorderText width="auto" fontWeight="500" fontSize="16px">
          힘내세요, {name}님!
        </BorderText>
        <RowDirectionDiv>
          <BorderText
            width="auto"
            fontWeight="700"
            fontSize="20px"
            lineHeight="32px"
            color="#6B47FD"
          >
            {planLength}개의 투두 &nbsp;
          </BorderText>
          <BorderText
            width="auto"
            fontWeight="700"
            fontSize="20px"
            lineHeight="32px"
          >
            도전 중
          </BorderText>
        </RowDirectionDiv>
      </TextWrapper>
    </Wrapper>
  );
};
export default UserInfo;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RowDirectionDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
`;

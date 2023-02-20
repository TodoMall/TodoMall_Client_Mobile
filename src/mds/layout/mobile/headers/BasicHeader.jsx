import { PreviousArrowButton, ListButton } from "../../../button";
import { useNavigate } from "react-router-dom";
import { COLOR, FONT_STYLE } from "../../../../constants";
import styled from "styled-components";

const BasicHeader = ({
  pageDescription = null,
  hasPrevButton = true,
  hasListButton = false,
}) => {
  const navigate = useNavigate();
  const handlePreviousPage = () => navigate(-1);

  return (
    <Container>
      {hasPrevButton ? (
        <PreviousArrowButton onClick={handlePreviousPage} />
      ) : (
        <EmptyBox />
      )}
      <PageDescription>{pageDescription}</PageDescription>
      {hasListButton ? <ListButton /> : <EmptyBox />}
    </Container>
  );
};

export default BasicHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 0.5rem;
`;

const PageDescription = styled.p`
  font-weight: ${FONT_STYLE.PRETENDARD_300.WEIGTHT};
  font-size: ${FONT_STYLE.PRETENDARD_300.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_300.HEIGHT};
  color: ${COLOR.GRAY900};
  text-align: center;
  letter-spacing: -0.01em;
`;

const EmptyBox = styled.div`
  width: 2.5rem;
`;

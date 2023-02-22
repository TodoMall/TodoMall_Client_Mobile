import { useNavigate } from "react-router-dom";
import { COLOR } from "../../../../constants";
import Divider from "../../../Divider";
import { BodyXXL } from "../../../text";
import { PreviousArrowButton, ListButton } from "../../../button";
import styled from "styled-components";

const BasicHeader = ({
  pageDescription = null,
  hasPrevButton = true,
  hasListButton = false,
  height = "3.25rem",
}) => {
  const navigate = useNavigate();
  const handlePreviousPage = () => navigate(-1);

  return (
    <>
      <Container height={height}>
        {hasPrevButton ? (
          <PreviousArrowButton onClick={handlePreviousPage} />
        ) : (
          <EmptyBox />
        )}
        <BodyXXL fontColor={COLOR.GRAY900} textAlign={"center"}>
          {pageDescription}
        </BodyXXL>
        {hasListButton ? <ListButton /> : <EmptyBox />}
      </Container>
      <Divider />
    </>
  );
};

export default BasicHeader;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: ${(props) => props.height};
  padding: 0 0.5rem;
`;

const EmptyBox = styled.div`
  width: 2.5rem;
`;

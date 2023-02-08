import { CheckBox, ArrowIcon } from "../components/icon";
import { useToggle } from "../../hooks";
import styled from "styled-components";

const CheckItem = ({
  hasDetail,
  initialValue = false,
  children,
  handlePage,
}) => {
  const [isCheck, _ignore, handleCheck] = useToggle(initialValue);
  return (
    <Container>
      <Wrapper onClick={handleCheck}>
        <CheckBox isCheck={isCheck} />
        {children}
      </Wrapper>
      {hasDetail && <ArrowIcon onClick={handlePage} />}
    </Container>
  );
};

export default CheckItem;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

import styled from "styled-components";
import Header from "../global/Header";

const Refund = () => {
  const description = ``;
  return (
    <>
      <Header title="환불정책" />
      <HTMLDiv dangerouslySetInnerHTML={{ __html: description }} />
    </>
  );
};

export default Refund;

const HTMLDiv = styled.div`
  padding: 60px 20px;
`;

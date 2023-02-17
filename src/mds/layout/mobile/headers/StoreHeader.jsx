import styled from "styled-components";
import { RowBox } from "../../../box";
import { SearchButton, LogoButton } from "../../../button";
import { CategoryTabBar } from "../../../category";
import { useState } from "react";
import SearchTab from "./SearchTab";

const StoreHeader = () => {
  const [isStartSearch, setIsStartSearch] = useState(false);
  const handleOpenSearchArea = () => setIsStartSearch(true);
  const handleCLoseSearchArea = () => setIsStartSearch(false);
  return (
    <>
      {!isStartSearch && (
        <Container>
          <RowBox padding={"0.625rem 1rem"} justifyContent={"space-between"}>
            <LogoButton />
            <SearchButton onClick={handleOpenSearchArea} />
          </RowBox>
          <CategoryTabBar />
        </Container>
      )}
      {isStartSearch && <SearchTab onClose={handleCLoseSearchArea} />}
    </>
  );
};
export default StoreHeader;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

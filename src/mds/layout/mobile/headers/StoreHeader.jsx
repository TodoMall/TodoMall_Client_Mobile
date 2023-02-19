import styled from "styled-components";
import { RowBox } from "../../../box";
import { SearchButton, LogoButton } from "../../../button";
import { CategoryTabBar } from "../../../category";
import { useState } from "react";
import SearchTab from "./SearchTab";

const StoreHeader = () => {
  const [isShowSearchArea, setIsShowSearchArea] = useState(false);
  const handleOpenSearchArea = () => setIsShowSearchArea(true);
  const handleCloseSearchArea = () => setIsShowSearchArea(false);
  return (
    <>
      {!isShowSearchArea && (
        <Container>
          <RowBox padding={"0.625rem 1rem"} justifyContent={"space-between"}>
            <LogoButton />
            <SearchButton onClick={handleOpenSearchArea} />
          </RowBox>
          <CategoryTabBar />
        </Container>
      )}
      {isShowSearchArea && <SearchTab onClose={handleCloseSearchArea} />}
    </>
  );
};
export default StoreHeader;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

import { RowBox } from "../../../box";
import { LogoButton } from "../../../button";
import { CategoryTabBar } from "../../../category";
import SearchTab from "./SearchTab";
import Divider from "../../../Divider";
import styled from "styled-components";
import { SearchButtonResource } from "../../../button";

const StoreHeader = () => {
  const { SearchButton, isShowSearchArea, handleToggleSearchArea } =
    SearchButtonResource;
  return (
    <>
      {isShowSearchArea ? (
        <SearchTab onClose={handleToggleSearchArea} />
      ) : (
        <Container>
          <RowBox padding={"0.625rem 1rem"} justifyContent={"space-between"}>
            <LogoButton />
            <SearchButton />
          </RowBox>
          <CategoryTabBar />
        </Container>
      )}
      <Divider />
    </>
  );
};
export default StoreHeader;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

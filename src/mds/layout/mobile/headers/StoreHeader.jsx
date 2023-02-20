import styled from "styled-components";
import { RowBox } from "../../../box";
import { SearchButton, LogoButton } from "../../../button";
import { CategoryTabBar } from "../../../category";
import SearchTab from "./SearchTab";
import useToggle from "../../../../hooks/useToggle";
import Divider from "../../../Divider";

const StoreHeader = () => {
  const [isShowSearchArea, _, handleToggleSearchArea] = useToggle();

  return (
    <>
      {isShowSearchArea ? (
        <SearchTab onClose={handleToggleSearchArea} />
      ) : (
        <Container>
          <RowBox padding={"0.625rem 1rem"} justifyContent={"space-between"}>
            <LogoButton />
            <SearchButton onClick={handleToggleSearchArea} />
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

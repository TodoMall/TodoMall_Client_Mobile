import { useEffect } from "react";
import {
  COLOR,
  FONT_STYLE,
  FONT_WEIGTHT,
  recommendTag,
} from "../../../../constants";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { useInput } from "../../../../hooks";
import { isNull } from "../../../../utils";
import { PreviousArrowButton } from "../../../button";
import { BasicChip } from "../../../chip";
import { getProductListByQuery } from "../../../../apollo/domain/store";

const SearchTab = ({ onClose: handleClose = () => {} }) => {
  const [keyword, handleKeywordChange] = useInput(null);
  const { data: searchResult, refetch } = useQuery(getProductListByQuery, {
    variables: { query: keyword },
    skip: isNull(keyword),
  });
  useEffect(() => {
    const debounce = setTimeout(() => {
      refetch();
    }, 300);
    return () => clearTimeout(debounce);
  }, [keyword]);

  return (
    <Container>
      <SearchInputContainer>
        <PreviousArrowButton onClick={handleClose} />
        <Input
          placeholder="관심있는 싶은 툴을 검색해보세요."
          onChange={handleKeywordChange}
        />
        <EmptyBox />
      </SearchInputContainer>
      <SearchResultContainer>
        <Text>추천 검색 키워드</Text>
        <ChipContainer>
          {recommendTag.map((el) => {
            return (
              <BasicChip
                key={el.id}
                title={el.title}
                fontColor={COLOR.GRAY800}
                width={"4rem"}
              />
            );
          })}
          {keyword?.length > 0 &&
            searchResult?.filteredProductList?.length > 0 && (
              <List>
                {searchResult?.filteredProductList?.map((el) => {
                  return <Item>{el.title}</Item>;
                })}
              </List>
            )}
        </ChipContainer>
      </SearchResultContainer>
    </Container>
  );
};

export default SearchTab;

const Item = styled.div`
  width: 100%;
  height: 1rem;
  text-align: center;
  margin: 0.75rem 0;
  cursor: pointer;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  letter-spacing: -0.01em;
  font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
  font-size: ${FONT_STYLE.PRETENDARD_300.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_300.HEIGTH};
  margin-top: 2px;
  ::placeholder {
    text-align: left;
    letter-spacing: -0.01em;
    color: ${COLOR.GRAY300};
  }
`;

const Text = styled.p`
  font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
  font-size: ${FONT_STYLE.PRETENDARD_100.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_100.HEIGTH};
  color: ${COLOR.GRAY800};
  letter-spacing: -0.01em;
`;

const EmptyBox = styled.div`
  width: 2.5rem;
  height: 2.5rem;
`;

const ChipContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const SearchResultContainer = styled.div`
  width: 22.5rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 1.5rem;
  z-index: 2;
`;

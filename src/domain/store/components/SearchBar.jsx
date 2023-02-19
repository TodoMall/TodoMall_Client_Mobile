import { useEffect, useState } from "react";
import {
  COLOR,
  FONT_WEIGTHT,
  FONT_STYLE,
  recommendTag,
} from "../../../constants";
import { SearchIcon } from "../../../mds/icon";
import { useInput, useDebounce } from "../../../hooks";
import { useQuery } from "@apollo/client";
import { getProductListByQuery } from "../../../apollo/domain/store";
import { BasicChip } from "../../../mds/chip";
import { isNull } from "../../../utils";
import styled from "styled-components";

const SearchBar = () => {
  const [keyword, handleKeywordChange] = useInput(null);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedValue = useDebounce(keyword);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const { data: searchResult, refetch } = useQuery(getProductListByQuery, {
    variables: { query: keyword },
    skip: isNull(keyword),
  });

  useEffect(() => {
    refetch();
  }, [debouncedValue]);

  return (
    <Container>
      <InputContainer>
        <SearchIcon />
        <Input
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="찾고 싶은 투두 클래스를 입력해주세요."
          onChange={handleKeywordChange}
        />
      </InputContainer>
      {isFocused && (
        <SearchResultContainer>
          <Text>추천 검색 키워드</Text>
          <SuggestedSearch>
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
            {keyword && searchResult?.filteredProductList?.length > 0 && (
              <SearchList>
                {searchResult?.filteredProductList?.map((el) => {
                  return <SearchItem>{el.title}</SearchItem>;
                })}
              </SearchList>
            )}
          </SuggestedSearch>
        </SearchResultContainer>
      )}
    </Container>
  );
};

export default SearchBar;

const SearchItem = styled.div`
  width: 100%;
  height: 1rem;
  text-align: center;
  margin: 0.75rem 0;
  cursor: pointer;
`;
const SearchList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin-left: 1.25rem;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 22.5rem;
  height: 2.25rem;
  background-color: ${COLOR.GRAY50};
  border-radius: 1.25rem;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  letter-spacing: -0.01em;
  margin-left: 0.5rem;
  font-weight: ${FONT_WEIGTHT.PRETENDARD_REGULAR};
  font-size: ${FONT_STYLE.PRETENDARD_200.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_200.HEIGTH};
  ::placeholder {
    color: ${COLOR.GRAY400};
  }
  color: ${COLOR.GRAY900};
  text-align: left;
`;

const SearchResultContainer = styled.div`
  display: flex;
  position: fixed;
  height: auto;
  flex-direction: column;
  width: 22.5rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${COLOR.GRAY50};
  z-index: 2;
`;

const Text = styled.p`
  font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
  font-size: ${FONT_STYLE.PRETENDARD_100.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_100.HEIGTH};
  color: ${COLOR.GRAY800};
  letter-spacing: -0.01em;
`;

const SuggestedSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

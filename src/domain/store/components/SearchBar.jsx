import styled from "styled-components";
import { useEffect, useState } from "react";
import { COLOR, FONT_WEIGTHT, FONT_STYLE } from "../../../constants";
import { SearchIcon } from "../../../mds/icon";
import { useToggle, useInput } from "../../../hooks";
import { useQuery } from "@apollo/client";
import { getProductListByQuery } from "../../../apollo/domain/store";
import { BasicChip } from "../../../mds/chip";
import RowBox from "../../../mds/box/RowBox";

// TODO : 상수파일로 옮길 예정
const recommendKeyword = [
  { id: 1, title: "오피스 툴" },
  { id: 2, title: "노션" },
  { id: 3, title: "피그마" },
  { id: 4, title: "데이터" },
  { id: 5, title: "엑셀" },
  { id: 6, title: "피피티" },
  { id: 7, title: "노코드" },
  { id: 8, title: "첫 출근" },
  { id: 9, title: "첫 출근" },
  { id: 10, title: "서비스 기획" },
  { id: 11, title: "스타트업" },
];

const SearchBar = () => {
  const [keyword, handleKeywordChange] = useInput("");
  const [isOpen, setIsOpen] = useToggle(keyword.length > 0);
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => setIsFocused(true);
  const onBlur = () => setIsFocused(false);

  const { data, refetch } = useQuery(getProductListByQuery, {
    variables: keyword,
  });

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log("debounce");
      refetch();
      setIsOpen(keyword);
    }, 300);
    return () => clearTimeout(debounce);
  }, [keyword]);

  return (
    <Container>
      <Bar>
        <SearchIcon />
        <Input
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="찾고 싶은 투두 클래스를 입력해주세요."
          onChange={handleKeywordChange}
        />
      </Bar>
      {(isOpen || isFocused) && (
        <SearchResultContainer>
          <Text>추천 검색 키워드</Text>
          <ChipContainer>
            {/* FIXME : index 가 아닌 고유 id 값으로 key값을 부여할 예정 */}
            {recommendKeyword.map((el, idx) => {
              return (
                <BasicChip
                  key={el.id}
                  title={el.title}
                  fontColor={COLOR.GRAY800}
                  width={"4rem"}
                />
              );
            })}
          </ChipContainer>
        </SearchResultContainer>
      )}
    </Container>
  );
};

export default SearchBar;
const Container = styled.div``;

const Bar = styled.div`
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
  border: 1px solid;
`;

const Input = styled.input`
  all: unset;
  margin-left: 0.5rem;
  width: 100%;
  font-weight: ${FONT_WEIGTHT.PRETENDARD_REGULAR};
  font-size: ${FONT_STYLE.PRETENDARD_200.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_200.HEIGTH};
  ::placeholder {
    color: ${COLOR.GRAY400};
  }
  color: ${COLOR.GRAY900};
  text-align: left;
  letter-spacing: -0.01em;

  border: 1px solid;
`;

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20rem;
  width: 22.5rem;
  border-radius: 0.5rem;
  padding: 1.5rem;
  background-color: ${COLOR.GRAY50};
  z-index: 2;
  border: 1px solid;
`;

const Text = styled.p`
  font-weight: ${FONT_WEIGTHT.PRETENDARD_MEDIUM};
  font-size: ${FONT_STYLE.PRETENDARD_100.SIZE};
  line-height: ${FONT_STYLE.PRETENDARD_100.HEIGTH};
  color: ${COLOR.GRAY800};
  letter-spacing: -0.01em;
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

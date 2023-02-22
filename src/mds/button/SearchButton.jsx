import IconButton from "./IconButton";
import { SearchIcon } from "../icon";
import { useToggle } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { isLaptop } from "../../utils/width";

/**
 * @description 해당 파일은 SearchButton , isShowSearchArea , handleToggleSearchArea 를 return합니다
 * @description SearchButton 의 onClick event는 Current Width에 따라 변경됩니다
 * @description Current Width 가 isLaptop 일 경우 Page 이동 이벤트가 실행됩니다
 * @description Current Width 가 isLaptop 이 아닌 경우 SearchTab 을 보여주는 이벤트가 실행됩니다
 */
const SearchButton = ({ keyword }) => {
    const navigate = useNavigate();

    const [isShowSearchArea, _, handleToggleSearchArea] = useToggle(false);

    const handleSearchPage = () => {
        navigate({
            pathname: "/search",
            search: `?keyword=${keyword}`,
        });
    };

    return {
        SearchButton: (
            <IconButton
                onClick={isLaptop ? handleSearchPage : handleToggleSearchArea}
            >
                <SearchIcon />
            </IconButton>
        ),
        isShowSearchArea: isShowSearchArea,
        handleToggleSearchArea: handleToggleSearchArea,
    };
};

export default SearchButton;

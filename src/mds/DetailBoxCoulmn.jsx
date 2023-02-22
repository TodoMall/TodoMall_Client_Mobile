import { RowBox } from "./box";
import { NextArrowIcon } from "./icon";

const DetailBoxCoulmn = ({ children }) => {
    return (
        <RowBox>
            {children}
            <NextArrowIcon />
        </RowBox>
    );
};

export default DetailBoxCoulmn;

import { COLOR } from "../constants";
import { RowBox } from "./box";
import { NextArrowButton } from "./button";

const DetailBoxCoulmn = ({
    children,
    justifyContent,
    color = COLOR.GRAY800,
    onClick: handleClick = () => {},
}) => {
    return (
        <RowBox justifyContent={justifyContent}>
            {children}
            <NextArrowButton color={color} onClick={handleClick} />
        </RowBox>
    );
};

export default DetailBoxCoulmn;

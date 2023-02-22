import { RowBox } from "./box";
import { NextArrowButton } from "./button";

const DetailBoxCoulmn = ({
    children,
    justifyContent,
    onClick: handleClick = () => {},
}) => {
    return (
        <RowBox justifyContent={justifyContent}>
            {children}
            <NextArrowButton onClick={handleClick} />
        </RowBox>
    );
};

export default DetailBoxCoulmn;

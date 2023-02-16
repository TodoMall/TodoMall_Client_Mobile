import { RowBox } from "./box";
import { ArrowIcon } from "./icon";

const DetailBoxCoulmn = ({ children, isReverse }) => {
  return (
    <RowBox>
      <ArrowIcon isReverse={isReverse} />
      {children}
    </RowBox>
  );
};

export default DetailBoxCoulmn;

import { RowBox } from "./box";
import { ArrowIcon } from "./icon";

const CheckBoxItem = ({ children, isReverse }) => {
  return (
    <RowBox>
      <ArrowIcon isReverse={isReverse} />
      {children}
    </RowBox>
  );
};

export default CheckBoxItem;

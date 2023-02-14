import { RowBox } from "./box";
import { CheckIcon } from "./icon";

const CheckBoxItem = ({ children, initialValue }) => {
  return (
    <RowBox>
      <CheckIcon initialValue={initialValue} />
      {children}
    </RowBox>
  );
};

export default CheckBoxItem;

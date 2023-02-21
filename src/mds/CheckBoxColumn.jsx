import { RowBox } from "./box";
import CheckButton from "./button/CheckButton";

const CheckBoxColumn = ({ children, isChecked = false }) => {
  return (
    <RowBox>
      <CheckButton isChecked={isChecked} />
      {children}
    </RowBox>
  );
};

export default CheckBoxColumn;

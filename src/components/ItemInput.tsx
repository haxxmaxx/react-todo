import { Input } from "@mui/material";
import { FormName } from "../types";

type ItemInputProps = {
  name: FormName;
  value?: string;
  isFocused: boolean;
  isChecked: boolean;
};

const ItemInput = ({ name, value, isFocused, isChecked }: ItemInputProps) => {
  if (!isFocused && !value) {
    return null;
  }

  return (
    <Input
      className="item-input"
      size="small"
      disableUnderline
      name={name}
      defaultValue={value}
      disabled={isChecked}
      placeholder={name}
    />
  );
};

export default ItemInput;

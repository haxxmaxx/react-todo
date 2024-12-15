import { Input } from "@mui/material";
import { FormName } from "../types";

type ItemInputProps = {
  name: FormName;
  value: string;
  isChecked: boolean;
  isDetail?: boolean;
};

const ItemInput = ({ name, value, isChecked, isDetail }: ItemInputProps) => {
  const classes = `item-input ${isDetail ? "detail" : ""}`;

  return (
    <Input
      className={classes}
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

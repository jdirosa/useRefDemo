import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

const accounts = ["Primary Account", "Secondary Account", "Third Account"];

export const AccountSelect: React.FunctionComponent = () => {
  const [selectedAccountId, setSelectedAccountId] = React.useState(0);

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: any }>,
    node: any
  ) => {
    setSelectedAccountId(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        fullWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedAccountId}
        onChange={handleChange}
      >
        {accounts.map((account, index) => (
          <MenuItem value={index}>{account}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

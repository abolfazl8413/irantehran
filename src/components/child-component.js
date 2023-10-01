import {
  FormControl,
  InputLabel,
  FormControlLabel,
  MenuItem,
  Select,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material";
import React from "react";

const ChildComponent = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <br />

      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-autowidth-label">انتخاب</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="انتخاب"
        >
          <MenuItem value="">
            <em>هیچکدام</em>
          </MenuItem>
          <MenuItem value={10}>گزینه ی اولین مورد مهم و خصومت</MenuItem>
          <MenuItem value={21}>آیتم دوم</MenuItem>
          <MenuItem value={22}>آیتم سوم</MenuItem>
        </Select>
      </FormControl>

      {/* <h4>jj</h4> */}
    </div>
  );
};

export default ChildComponent;

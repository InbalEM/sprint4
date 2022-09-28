import * as React from 'react';
import { useState } from "react"

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import Box from '@mui/material/Box';

export function Calender() {
  const [value, setValue] = useState([null, null]);
  // console.log('value:', new Date(value.map(val => val.$d)))

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      
    </LocalizationProvider>
  );
}

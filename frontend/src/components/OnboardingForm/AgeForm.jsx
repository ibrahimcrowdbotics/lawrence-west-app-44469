import { FormControl, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const AgeForm = () => {
  const { control, formState: { errors } } = useFormContext();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormControl sx={{ marginBottom: '8px' }} fullWidth>
        <Controller
          name="dob"
          control={control}
          render={({ field }) => {
            return <DatePicker {...field}
            />
          }}
        />
        <Typography
          color="error"
          fontSize={10}
          margin="auto"
          p={0}
          mt={0.5}
          display="contents"
        >
          {errors?.selectedDate?.message}
        </Typography>
      </FormControl>
    </LocalizationProvider>
  )
}

export default AgeForm;
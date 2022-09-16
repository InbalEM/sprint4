import React, { useState } from "react";
import { useEffect } from "react";
import { useFormRegister } from "../hooks/useFormRegister";


export const Calender = () => {
  const [register, setStartDate, date] = useFormRegister({
    startDate: '',
    endDate: ''
  });
  // const [register, setEndDate] = useFormRegister();

  useEffect(() => {
    // console.log('startDate:', startDate)
    // console.log('endDate:', endDate)

  }, [])

  const setDate = () => {
    // setStartDate()
    const startDate = new Date(date.startDate).toLocaleDateString()
    const endDate = new Date(date.endDate).toLocaleDateString()

    console.log(startDate, endDate)
  }

  return (
    <section>
      <form onSubmit={() => setDate()}>
      <label htmlFor="start">Start date:</label>

      <input {...register('startDate', 'date')}

      />

      <label htmlFor="end">End date:</label>

      <input {...register('endDate', 'date')} />
      <button>set</button>
      </form>
    </section>
  )
};


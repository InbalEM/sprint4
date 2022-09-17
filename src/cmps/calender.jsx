import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useFormRegister } from "../hooks/useFormRegister";
import { orderService } from "../services/order.service";
import { savedOrder } from "../store/order.actions";


export const Calender = ({stay}) => {
  const [register, setStartDate, date] = useFormRegister({
    startDate: '',
    endDate: ''
  });

  
  const dispatch = useDispatch()


  // useEffect(() => { 
  //   orderService.
  // }, [])

  const setDate = (ev) => {
    ev.preventDefault()
    const startDate = new Date(date.startDate).toLocaleDateString()
    const endDate = new Date(date.endDate).toLocaleDateString()
    dispatch(savedOrder(stay._id, startDate, endDate))
  }

  return (
    <section>
      <form onSubmit={(ev) => setDate(ev)}>

        <label htmlFor="start">Start date:</label>
        <input {...register('startDate', 'date')} />

        <label htmlFor="end">End date:</label>
        <input {...register('endDate', 'date')} />

        <button>set</button>
      </form>
    </section>
  )
};


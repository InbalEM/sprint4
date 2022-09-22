import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useFormRegister } from "../hooks/useFormRegister";
// import { orderService } from "../services/order.service";
import { saveDates } from "../store/order.actions";
import { compareAsc, format } from 'date-fns'


export const Calender = ({ stay }) => {
  const [register, setStartDate, date] = useFormRegister({
    startDate: '',
    endDate: ''
  });


  const dispatch = useDispatch()

  format(new Date(2014, 1, 11), 'yyyy-MM-dd')
  //=> '2014-02-11'

  const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
  ]
  dates.sort(compareAsc)

  useEffect(() => {

  }, [])

  const setDate = (ev) => {
    ev.preventDefault()
    const startDate = new Date(date.startDate).toLocaleDateString()
    const endDate = new Date(date.endDate).toLocaleDateString()
    dispatch(saveDates(stay._id, startDate, endDate))

  }

  return (
    <section className="date-picker">
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


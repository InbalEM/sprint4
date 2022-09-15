import { useFormRegister } from '../hooks/useFormRegister'
// import { useEffect, useState } from 'react'

export const StayFilter = (props) => {

    // const [register, setStay, stays] = useFormRegister({
    const [register] = useFormRegister({
        name: '',
        maxPrice: '',
        minPrice: '',
        labels: '',
    }, props.onChangeFilter)

    return (
        <form action="">
            <h1>filter</h1>

            <label htmlFor="maxPrice">max price</label>
            <input {...register('maxPrice', 'range')}/>

            <label htmlFor="minPrice">min price</label>
            <input {...register('minPrice', 'range')}/>

            {/* <input type="button" value="Click me"/> */}

            {/* <label htmlFor="Bedrooms">Bedrooms</label>
            <input {...register('Bedrooms', 'range')}/> */}

        </form>
    )
}

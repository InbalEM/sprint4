import { useFormRegister } from '../hooks/useFormRegister'
// import { useEffect, useState } from 'react'

export const StayFilter = (props) => {

    const [register, setFilter, filterBy] = useFormRegister({
        name: '',
        maxPrice: 1610,
        minPrice: 50,
        labels: '',
    }, props.onChangeFilter)

    const { onClickFilter } = props

    return (
        <form className='stay-filter ' onSubmit={onClickFilter}>
            <h1>Price range</h1>
            <section className='range-slider'>
                <input min="0" max="1800"  {...register('minPrice', 'range')} />
                <input min="0" max="1600"  {...register('maxPrice', 'range')} />
                {/* <input type="range" min="10" max = "100" value="10"/>
                <input type="range" min="10" max = "100" value="20" /> */}
            </section>
            <div className='number-price-filter'>
                <input {...register('minPrice', 'number')} /> - <input {...register('maxPrice', 'number')} />
            </div>


            <button>show homes</button>

            {/* <label htmlFor="maxPrice">max price {filterBy.maxPrice ? filterBy.maxPrice : ''}</label>
            <input {...register('maxPrice', 'range')} />

            <label htmlFor="minPrice">min price {filterBy.minPrice ? filterBy.minPrice : ''}</label>
            <input {...register('minPrice', 'range')} /> */}

            {/* <input type="button" value="Click me"/> */}

            {/* <label htmlFor="Bedrooms">Bedrooms</label>
            <input {...register('Bedrooms', 'range')}/> */}



        </form>
    )
}

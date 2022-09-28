import { useFormRegister } from '../../hooks/useFormRegister'

export const ExpandedFilter = (props) => {

    // const [register, setFilter, filterBy] = useFormRegister({
    const [register] = useFormRegister({
        name: '',
        maxPrice: 1610,
        minPrice: 50,
        labels: '',
    }, props.onChangeFilter)

    const { onClickFilter } = props

    return (
        <form className='expanded-filter' onSubmit={onClickFilter}>
           
            <h1>Price range</h1>
            <section className='range-slider'>
                <input min="0" max="1800"  {...register('minPrice', 'range')} />
                <input min="0" max="1600"  {...register('maxPrice', 'range')} />
            </section>
            <div className='number-price-filter'>
                <input {...register('minPrice', 'number')} /> - <input {...register('maxPrice', 'number')} />
            </div>
            <button>show homes</button>
        </form>
    )
}

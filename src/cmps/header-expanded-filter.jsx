import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import search from '../assets/img/search-icon.png'
import { useFormRegister } from '../hooks/useFormRegister'
// import { saveDates } from '../store/order.actions'
import { loadStays, setFilterBy } from '../store/stay.actions'
import {  format } from 'date-fns'


export function HeaderExpandedFilter({ onFilterClicked }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadStays())
    }

    const [register, setFilter, filterBy] = useFormRegister({
        where: '',
        checkIn: '',
        checkOut: '',
        who: ''
    }, onChangeFilter)

    const onClickFilter = () => {
        // if (filterBy.checkIn && filterBy.checkOut) {
        //     dispatch(saveDates('', filterBy.checkIn, filterBy.checkOut))
        // }
        onFilterClicked()
        const checkIn = format(new Date(filterBy.checkIn), 'yyyy-MM-dd') 
        const checkOut = format(new Date(filterBy.checkOut), 'yyyy-MM-dd') 
        // console.log('checkIn:', checkIn)
        // navigate('/')
        navigate(`/${checkIn}/${checkOut}`)
    }

    // console.log('filterBy:', filterBy)
    return (
        <section className="header-filter ">
            <div className='header-expanded-filter'>
                <div className="where-filter">
                    <label htmlFor="">where</label>
                    {/* <p>where</p> */}
                    {/* <span>Search destination</span> */}
                    <input className='filter-input' placeholder='Search destination' {...register('where', 'text')} />
                </div>
                <span></span>
                {/* <div className="when-filter"> */}
                <div className="check-in">
                    <p>check in</p>
                    {/* <span>Add dates</span> */}
                    <input className='filter-input' {...register('checkIn', 'date')} />
                </div>
                <span></span>
                <div className="check-out">
                    <p> check out</p>
                    {/* <span>Add dates</span> */}
                    {/* <input className='filter-input' type="date" placeholder='Add dates' /> */}
                    <input className='filter-input' {...register('checkOut', 'date')} />
                </div>
                {/* </div> */}
                <span></span>
                <div className="who-filter">
                    <p>who</p>
                    <span>Add guests</span>
                </div>
                <button className="expanded-search-btn" onClick={onClickFilter}>
                    <div>
                        <img src={search} alt= ""/>
                        <p>search </p>
                    </div>
                </button>
            </div>
        </section>

    )
}
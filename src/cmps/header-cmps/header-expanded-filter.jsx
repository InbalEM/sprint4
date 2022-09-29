import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { format } from 'date-fns'
import { useState } from 'react'

import { loadStays, setFilterBy } from '../../store/stay.actions'
import { useFormRegister } from '../../hooks/useFormRegister'
import search from '../../assets/img/search-icon.png'
import {GustSelection} from './guests-selection'


export function HeaderExpandedFilter({ onClickHeaderFilter }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isGustSelectionOpen, setIsGustSelectionOpen] = useState(false)


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

    const onFilterClicked = () => {
        // if (filterBy.checkIn && filterBy.checkOut) {
        //     dispatch(saveDates('', filterBy.checkIn, filterBy.checkOut))
        // }
        onClickHeaderFilter()
        const checkIn = format(new Date(filterBy.checkIn), 'yyyy-MM-dd')
        const checkOut = format(new Date(filterBy.checkOut), 'yyyy-MM-dd')
        // console.log('checkIn:', checkIn)
        // navigate('/')
        navigate(`/${checkIn}/${checkOut}`)
    }

    const onOpenGuestsFilter = ()=>{
        setIsGustSelectionOpen(!isGustSelectionOpen)
    }

    console.log('isGustSelectionOpen:', isGustSelectionOpen)

    console.log('filterBy:', filterBy)
    return (
        <section className="header-filter header-filter-expanded">
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
                <div className="who-filter-container">
                    <div className="who-filter" onClick= {onOpenGuestsFilter}>
                        <p>who</p>
                        <span>Add guests</span>
                    </div>
                </div>
                <button className="expanded-search-btn" onClick={onFilterClicked}>
                    <div>
                        <img src={search} alt="" />
                        <p>search </p>
                    </div>
                </button>
            </div>
                    {isGustSelectionOpen && <GustSelection/>}
        </section>

    )
}
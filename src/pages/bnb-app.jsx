import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { loadStays, setFilterBy } from '../store/stay.actions'
import { StayList } from '../cmps/stay-list'
import { StayFilter } from '../cmps/stay-filter'
// import { stayService } from '../services/stay.service'
// import {eventBusService } from '../services/event-bus.service'

export const BnbApp = () => {
    const { stays, isFilterOpen } = useSelector(state => state.stayModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStays())
    }, [])

    const onChangeFilter = (filterBy) => {
        dispatch(setFilterBy(filterBy))
        dispatch(loadStays())
    }

    const onClickFilter = (ev) => {
        ev.preventDefault()
        dispatch({
            type: 'SET_ISOPENFILTER',
            isFilterOpen: !isFilterOpen
        })
        if (!isFilterOpen) dispatch(loadStays())
    }
    
    if (!stays) return <div>Loading...</div>
    return (
        <section className={isFilterOpen ? 'filter-open bnb-app full main-layout ' : 'bnb-app full main-layout '}>
            <div onClick={onClickFilter} className='main-screen' ></div>
            <StayFilter isFilterOpen={isFilterOpen} onChangeFilter={onChangeFilter} onClickFilter={onClickFilter} />
            <StayList stays={stays} />
        </section>
    )
}
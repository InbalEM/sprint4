import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { loadStays, setFilterBy } from '../store/stay.actions'
import { StayList } from '../cmps/stay-list'
import { StayFilter } from '../cmps/stay-filter'
import filterImg from '../assets/img/filter-btn-img.png'
// import { stayService } from '../services/stay.service'
// import {eventBusService } from '../services/event-bus.service'

export const BnbApp = () => {
    const { stays } = useSelector(state => state.stayModule)
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

    }

    // console.log('stays app:', stays)
    if (!stays) return <div>Loading...</div>
    return (
        <section className='bnbApp filter-open'>
            <div className='filter-section'>
                <button className='stay-filter-btn' onClick={onClickFilter}>
                    <img src={filterImg} />
                    Filters
                </button>
            </div>
            <StayFilter onChangeFilter={onChangeFilter} />
            <StayList stays={stays} />
        </section>
    )
}
import React, { useEffect, useState } from 'react'
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import { loadStays } from '../store/stay.actions'
import { StayList } from '../cmps/stay-list'
// import { stayService } from '../services/stay.service'
// import {eventBusService } from '../services/event-bus.service'

export const BnbApp = () => {
    const  {stays, lastRemovedStay}  = useSelector(state => state.stayModule)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadStays())
    }, [])

    console.log('stays app:', stays)
    
    if (!stays) return <div>Loading...</div>
    return (
        <section className='bnbApp'>
            {/* <StayFilter /> */}
            <StayList stays={stays} />
        </section>
    )
}
import { ExpandedFilter } from './expanded-filter'
import filterImg from '../assets/img/filter-btn-img.png'
import amazingPools from '../assets/img/vector/amazing-pools.jpg'
import amazingViews from '../assets/img/vector/amazing-views.jpg'
import sharedHomes from '../assets/img/vector/shared-homes.jpg'
import surfing from '../assets/img/vector/surfing.jpg'
import React, { useEffect, useRef } from 'react'

export const StayFilter = (props) => {
    const filter = useRef(null)
    const filterContainer = useRef(null)
    
    useEffect(() => {
        if (!filterContainer.current || !filter.current)return
        const filterObserver = new IntersectionObserver(onFilterObserved, {
            rootMargin: "-60px 0px 0px",
        });

        filterObserver.observe(filter.current)

        function onFilterObserved(entries) {
            if (!filterContainer.current || !filter.current)return
            entries.forEach((entry) => {
                console.log(entry.isIntersecting)
                filterContainer.current.className = entry.isIntersecting ? 'full main-layout' : 'fixed full main-layout';
            })
        }
    }, [])

    const { onClickFilter, onChangeFilter, isFilterOpen } = props

    return (
        <section className='stay-filter full main-layout' ref={filter}>
            <div  ref={filterContainer}> 
            <div className={isFilterOpen ? 'filter-open filter-container ' : 'filter-container '}>
                <div className='labels-container'>
                    <div><img src={amazingPools} alt=""/></div>
                    <div><img src={amazingViews} alt=""/></div>
                    <div><img src={sharedHomes} alt=""/></div>
                    <div><img src={surfing} alt=""/></div>

                </div>
                <button className='stay-filter-btn' onClick={onClickFilter}>
                    <div><img src={filterImg} /></div>
                    Filters
                </button>
                <ExpandedFilter onChangeFilter={onChangeFilter} onClickFilter={onClickFilter} />
            </div>
            </div>
        </section>
    )
}
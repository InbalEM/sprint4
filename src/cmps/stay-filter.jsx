import { ExpandedFilter } from './expanded-filter'
import filterImg from '../assets/img/filter-btn-img.png'
import React, { useEffect, useRef } from 'react'

export const StayFilter = (props) => {
    const filter = useRef(null)
    const filterContainer = useRef(null)
    
    useEffect(() => {
        if (!filterContainer.current || !filter.current)return
        const filterObserver = new IntersectionObserver(onFilterObserved, {
            rootMargin: "-100px 0px 0px",
        });

        filterObserver.observe(filter.current)

        function onFilterObserved(entries) {
            if (!filterContainer.current || !filter.current)return
            entries.forEach((entry) => {
                filterContainer.current.className = entry.isIntersecting ? 'full main-container' : 'fixed full main-container';
            })
        }
    }, [])

    const { onClickFilter, onChangeFilter, isFilterOpen } = props
    return (
        <section className='stay-filter full main-container' >
            <div ref={filter}></div>
            <div  ref={filterContainer}> 
            <div className={isFilterOpen ? 'filter-open filter-container ' : 'filter-container '}>
                <div className='labels-container'>
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
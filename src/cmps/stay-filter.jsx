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
        const filterObserver = new IntersectionObserver(onFilterObserved, {
            rootMargin: "-115px 0px 0px",
        });

        filterObserver.observe(filter.current)

        function onFilterObserved(entries) {
            entries.forEach((entry) => {
                // filterClassName =  entry.isIntersecting ? 'stay-filter full main-container' : 'stay-filter full main-container sticky'
                // filter.current.style = entry.isIntersecting ? 'background-color: green;' : 'background-color: blue;';
                filterContainer.current.className = entry.isIntersecting ? '' : 'fixed full main-container';
                // filterContainer.current.style = entry.isIntersecting ? 'position: static' : 'position: fixed';
                // filterContainer.current.style.position = entry.isIntersecting ? 'static' : 'fixed';
                // filterContainer.current.style = entry.isIntersecting ? ' box-shadow: none; position:static;' : 'box-shadow: rgb(0 0 0 / 16%) 0 0 6px; position:fixed; background-color: white; min-width:85%;  padding: 10px '
                console.log('isIntersecting:', entry.isIntersecting)
                console.log('filter.current:', filter.current)
            });
        }
    }, []);

    const { onClickFilter, onChangeFilter, isFilterOpen } = props

    return (
        <section className='stay-filter full main-container' ref={filter}>
            {/* ref={filter} */}
            <div  ref={filterContainer}> 
            <div className={isFilterOpen ? 'filter-open filter-container ' : 'filter-container '}>
                <div className='labels-container'>
                    <div><img src={amazingPools} /></div>
                    <div><img src={amazingViews} /></div>
                    <div><img src={sharedHomes} /></div>
                    <div><img src={surfing} /></div>

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
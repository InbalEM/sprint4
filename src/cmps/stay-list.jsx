import { Link } from 'react-router-dom'
import {StayPreview  } from '../cmps/stay-preview'

export function StayList({ stays }) {
    return (
        <section className="stay-list ">
            {stays.map(stay => <div key={stay._id} className='stay-preview'>
                <Link to={`/details/${stay._id}`}>
                <StayPreview stay={stay}/>
                </Link>
            </div>)}
        </section>
    )
}

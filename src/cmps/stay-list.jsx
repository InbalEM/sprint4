import { Link } from 'react-router-dom'
import {StayPreview  } from '../cmps/stay-preview'

export function StayList({ stays }) {
    console.log('stays:', stays)
    return (
        <section className="stay-list ">
<<<<<<< HEAD
            {stays.map(stay => <div key={stay._id} className='stay-preview'> <StayPreview stay={stay} /> </div>)}
=======
            {stays.map(stay => <div key={stay._id} className='stay-preview'>
                <Link to={`/details/${stay._id}`}>
                <StayPreview stay={stay}/>
                </Link>
            </div>)}
>>>>>>> 3abb5360f6b3de5269e8ce956acea577e0a1e656
        </section>
    )
}

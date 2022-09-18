import { Link } from 'react-router-dom'
import {StayPreview  } from '../cmps/stay-preview'

export function StayList({ stays }) {
    console.log('stays:', stays)
    return (
        <section className="stay-list ">
<<<<<<< HEAD
            {stays.map(stay => <div key={stay._id} className='stay-preview'> <StayPreview stay={stay} /> </div>)}
=======
            {/* {stays.map(stay => <div key={stay._id} className='stay-preview'> <StayPreview stay={stay} /> </div>)} */}
            {stays.map(stay => 
                <Link to={`/details/${stay._id}`}>
                    <div key={stay._id} className='stay-preview'>
                <StayPreview stay={stay}/>
                </div>
                </Link>
          )}
>>>>>>> 3e69fae230a774594ae6a1f9447348f25490b481
        </section>
    )
}

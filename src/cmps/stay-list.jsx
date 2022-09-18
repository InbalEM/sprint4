import { Link } from 'react-router-dom'
import { StayPreview } from '../cmps/stay-preview'

export function StayList({ stays }) {
    console.log('stays:', stays)
    return (
        <section className="stay-list ">
            {/* {stays.map(stay => <div key={stay._id} className='stay-preview'> <StayPreview stay={stay} /> </div>)} */}
            {stays.map(stay =>
                <Link to={`/details/${stay._id}`}>
                    <div key={stay._id} className='stay-preview'>
                        <StayPreview stay={stay} />
                    </div>
                </Link>
            )}
        </section>
    )
}

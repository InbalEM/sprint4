import { useState } from 'react';
import { ReactComponent as Star } from '../assets/icons/star.svg';
import { ReactComponent as User } from '../assets/icons/user.svg';

export const Review = ({ stay, avgRate }) => {   
    const getREviews = (minSize = 0, size = 6) => {
        return stay.reviews.map((review, idx) =>
            <div key= {idx} className='review'>
                <div className='review-header'>
                    <div><User /></div>
                    <div className='reviewer-details'>
                        <h3 className='reviewer-name'>{review.by.fullname}</h3>
                        <div>{review.at}</div>
                    </div>
                </div>
    
                <div className='review-body'>
                    {review.txt}
                </div>
            </div>).slice(minSize, size)
    }
    const [isOpen, setIsOpen] = useState(false)
    const toggleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <section className="reviews">
            <div className='review-header'>
                <div className=''>
                    <div><Star /></div>
                    <div>{avgRate()}</div>&middot;
                </div>
                <div>{stay.reviews.length} reviews</div>
            </div>

            <div className={`reviews-section ${isOpen}`}>
                {!isOpen ?  getREviews() : getREviews(0, stay.reviews.length)}
            </div>
            <div className='show-all-btn'>
                <div onClick={() => toggleIsOpen()}>
                    {!isOpen ?  ` Show all ${stay.reviews.length} reviews` : 'Show less'}
                   
                </div>
            </div>
        </section>
    )
}
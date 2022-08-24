import React from 'react';
import './StarRating.css';

function StarRatingReadOnly(props) {
    const rate = props.rate;
    return (
        <div className="star-read-only">
            <span
                className={rate >= 1 ? 'fa fa-star checked' : 'fa fa-star'}
            ></span>
            <span
                className={rate >= 2 ? 'fa fa-star checked' : 'fa fa-star'}
            ></span>
            <span
                className={rate >= 3 ? 'fa fa-star checked' : 'fa fa-star'}
            ></span>
            <span
                className={rate >= 4 ? 'fa fa-star checked' : 'fa fa-star'}
            ></span>
            <span
                className={rate >= 5 ? 'fa fa-star checked' : 'fa fa-star'}
            ></span>
            {props.rateCount ? (
                props.rateCount > 0 ? (
                    <p>{`(${props.rateCount})`}</p>
                ) : (
                    ''
                )
            ) : null}
        </div>
    );
}

export default StarRatingReadOnly;

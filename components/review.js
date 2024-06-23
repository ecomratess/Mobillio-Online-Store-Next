import React from 'react'

import PropTypes from 'prop-types'

const Review = (props) => {
  return (
    <>
      <div className={`review-container ${props.rootClassName} `}>
        <div className="review-container1">
          <div className="review-container2">
            <svg viewBox="0 0 1024 1024" className="review-icon">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="review-icon2">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="review-icon4">
              <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
            </svg>
          </div>
          <div className="review-container3">
            <strong className="review-reviewer-name">{props.text}</strong>
            <span className="review-date">{props.text2}</span>
          </div>
          <span>{props.text1}</span>
        </div>
      </div>
      <style jsx>
        {`
          .review-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .review-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: 0.5rem;
            align-items: flex-start;
            flex-direction: column;
          }
          .review-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .review-icon {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .review-icon2 {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .review-icon4 {
            fill: var(--dl-color-pallet-yellow);
            width: 24px;
            height: 24px;
          }
          .review-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }

          @media (max-width: 1600px) {
            .review-container1 {
              border-color: #606060;
              border-width: 1px;
              border-top-width: 0px;
              border-left-width: 0px;
              border-right-width: 0px;
              border-bottom-width: 1px;
            }
            .review-icon {
              width: 20px;
              height: 20px;
            }
            .review-icon2 {
              width: 20px;
              height: 20px;
            }
            .review-icon4 {
              width: 20px;
              height: 20px;
            }
            .review-container3 {
              height: auto;
              align-items: center;
            }
            .review-reviewer-name {
              font-size: 18px;
            }
            .review-date {
              margin-left: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

Review.defaultProps = {
  text: 'Reviewer name',
  text1: 'This product is amazing ❤',
  rootClassName: '',
  text2: '17-09-2024',
}

Review.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default Review

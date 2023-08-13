import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {persionreviews: ''}

  render() {
    const {reviewsList} = this.props
    const {persionreviews} = this.Togetpersion()
    const Result = reviewsList.filter(
      each => each.imgUrl === reviewsList.imgUrl,
    )
    console.log(Result)
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left-arrow"
          />
          <ul className="un-list">
            {reviewsList.map(eachItem => (
              <img src={eachItem.imgUrl} />
            ))}
          </ul>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right-arrow"
          />
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel

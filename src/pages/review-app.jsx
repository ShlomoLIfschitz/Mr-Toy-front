import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { loadReviews, addReview, removeReview } from '../store/actions/review.actions'
import { loadUsers } from '../store/actions/user.action'
import { toyService } from '../services/toy.service'

export function ReviewApp() {
  const dispatch = useDispatch()
  const params = useParams()
  const [reviewToEdit, setReviewToEdit] = useState({ txt: '' })
  const [toy, setToy] = useState(null)
  useEffect(() => {
    loadToy()
    dispatch(loadReviews(toyId))
    dispatch(loadUsers())
  }, [params.id])

  const { toyId } = params
  const { reviews } = useSelector((state) => state.reviewModule)
  const { user } = useSelector((state) => state.userModule)




  const handleChange = ev => {
    const { name, value } = ev.target
    setReviewToEdit({ ...reviewToEdit, [name]: value })
  }

  const loadToy = async () => {
    const toy = await toyService.getById(params.toyId)
    setToy(toy)
    setReviewToEdit({ ...reviewToEdit, toyId: toy._id })
  }

  const onAddReview = async ev => {
    ev.preventDefault()
    await dispatch(addReview(reviewToEdit))
    setReviewToEdit({ txt: '', toyId: toy._id })
  }


  const onRemove = reviewId => {
    dispatch(removeReview(reviewId))
  }

  const canRemove = review => {
    return (review?.byUser?._id === user?._id || user?.isAdmin)
  }
  return (
    <div className="review-app">
      <h1>Reviews</h1>
      {reviews && <ul className="review-list">
        {reviews.map(review => (
          <li key={review._id}>
            {canRemove(review) &&
              <button onClick={() => onRemove(review._id)}>X</button>}
            <h2>About:</h2>
            <h3>{review.txt}</h3>
          </li>
        ))}
      </ul>}
      {user &&
        <form onSubmit={onAddReview}>

          <textarea
            name="txt"
            onChange={handleChange}
            value={reviewToEdit.txt}
          ></textarea>
          <button >Submit</button>
        </form>}
      <hr />
    </div>
  )
}

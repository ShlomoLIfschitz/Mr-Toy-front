import { httpService } from '../services/http.service'
// import { storageService } from './async-storage.service'
// import { userService } from './user.service'
// import { socketService, SOCKET_EVENT_REVIEW_ADDED } from './socket.service'
import { getActionRemoveReview, getActionAddReview } from '../store/actions/review.actions'


const reviewChannel = new BroadcastChannel('reviewChannel')

export const reviewService = {
  add,
  query,
  remove,
  subscribe,
  unsubscribe,
}


function query(toyId) {
  var queryStr = (!toyId) ? '' : `?toyId=${toyId}`
  return httpService.get(`review/${queryStr}`)
  // return storageService.query('review')
}

async function remove(reviewId) {
  await httpService.delete(`review/${reviewId}`)
  // await storageService.remove('review', reviewId)
  reviewChannel.postMessage(getActionRemoveReview(reviewId))


}

async function add(review) {
  const addedReview = await httpService.post(`review`, review)
  reviewChannel.postMessage(getActionAddReview(addedReview))
  console.log('addReview: ', addedReview);
  return addedReview
}

function subscribe(listener) {
  reviewChannel.addEventListener('message', listener)
}
function unsubscribe(listener) {
  reviewChannel.removeEventListener('message', listener)
}

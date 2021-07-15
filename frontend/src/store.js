import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/userReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
function save() {
  try {
    if (store.getState().userLogin.userInfo)
      localStorage.setItem(
        'userInfo',
        JSON.stringify(store.getState().userLogin.userInfo)
      )
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
  }
}

store.subscribe(() => save())

export default store

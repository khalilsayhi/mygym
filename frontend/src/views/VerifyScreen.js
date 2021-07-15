import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import { useEffect } from 'react'
const VerifyScreen = ({ location, history }) => {
  const dispatch = useDispatch()
  const query = new URLSearchParams(location.search)
  const token = query.get('token')
  console.log(token)
  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin
  useEffect(() => {
    dispatch(login(token))
  }, [dispatch, token])

  useEffect(() => {
    if (userInfo) {
      history.push('/profile')
    }
  }, [history, userInfo])
  return <div>{error && <h1> error</h1>}</div>
}

export default VerifyScreen

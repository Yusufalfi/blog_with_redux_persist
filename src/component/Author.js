import React from 'react'
import { useSelector } from 'react-redux'

const Author = ({userId}) => {
    const selector = useSelector((state) => state.user);
    const username = selector.find((user) => user.id === Number(userId));
    console.log(username)
  return (
    <div>
        <span className='underline'>{username ? username.penulis : "penulis tidak di kenal"}</span>
    </div>
  )
}

export default Author
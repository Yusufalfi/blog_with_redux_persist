import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

const TimePost = ({timestamp}) => {
    const date = parseISO(timestamp)
    const timeAgo = formatDistanceToNow(date);
    console.log(date)
  return (
    <div>
         <p className='text-sm text-gray-500 '>{timeAgo}</p>
    </div>
  )
}

export default TimePost
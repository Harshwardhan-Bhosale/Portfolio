import React, { useEffect, useState } from 'react'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Datetime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => n.toString().padStart(2, '0')
  const dayName = weekdays[now.getDay()]
  const monthName = months[now.getMonth()]
  const dayNum = now.getDate()
  const hours = now.getHours()
  const minutes = pad(now.getMinutes())
  const formatted = `${dayName} ${monthName} ${dayNum} ${hours}:${minutes}`

  return <div>{formatted}</div>
}

export default Datetime
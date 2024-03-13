import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {id} = useParams()
  return (
    <div className="bg-slate-600 text-xl text-white p-3">User: {id}</div>
  )
}

export default User
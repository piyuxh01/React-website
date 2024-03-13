import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
      fetch('https://api.github.com/users/piyuxh01')
      .then(response => response.json())
      .then(data => {
        setData(data)
      } )
    }, [])
    
  return (
    <div className="text-center m-4 bg-gray-700 text-white p-4 text-2xl">Github followers : {data.followers}
        <img src={data.avatar_url} alt="Github Picture" width={500} />
    </div>
  )
}

export default Github
import React from 'react'

function Card({data}) {
    return (
        <div className='min-w-52 bg-blue-600 p-4 rounded-3xl shadow-lg m-4'>
            <img src={`${data.image}`} alt="" className='h-60' />
            <p>Name: {data.name}</p>
            <p>Make: {data.make}</p>
            <p>Color: {data.color}</p>
            <p>Year: {data.year}</p>
        </div>
    )
}

export default Card
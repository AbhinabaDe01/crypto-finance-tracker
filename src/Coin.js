import React from 'react'

export default function Coin({ image, name, symbol, price, volume, priceChange, marketCap}) {
  return (
    <div className='grid grid-rows-7 md:grid-cols-7 items-center border-y-2 py-4 gap-7 md:gap-0'>
        <div className=''>
            <img src={image} alt='coin image' className='h-10 w-10'/>
        </div>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <p>{symbol}</p>
        </div>
        <div>
            <p>₹{price}</p>
        </div>
        <div>
            <p>₹{volume.toLocaleString()}</p>
        </div>
        <div className='text-center'>
            {priceChange < 0 ? <p className='text-red-500'>{priceChange.toFixed(2)}%</p> : <p className='text-green-500'>{priceChange.toFixed(2)}%</p>}
        </div>
        <div>
            <p>₹{marketCap.toLocaleString()}</p>
        </div>
    </div>
  )
}

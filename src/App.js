import React, { useEffect, useState } from "react";
import axios from "axios";
import Coin from "./Coin";

function App() {

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setCoins(response.data)
      console.log(response.data)
    })
  }, [])

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App max-w-8xl">
      <div className="flex flex-col items-center gap-20">
        <div className="search mt-20 ">
          <div className="flex flex-col items-center">
            <div className="mb-5 text-4xl font-semibold text-fuchsia-600 text-center">Search a currency</div>
            <input 
              type='/text' 
              placeholder="search coin"
              className="text-lg px-5 py-2 rounded-full outline-1 shadow-xl border-1 bg-gradient-to-l from-fuchsia-600 text-black"
              onChange={event => setSearch(event.target.value)}
            />
          </div>
          
        </div>
        <div className="flex flex-row -mb-10 justify-evenly w-3/4 max-w-7xl">
          <div className="-ml-8">Image</div>
          <div className="-ml-4">Name</div>
          <div className="">Symbol</div>
          <div>Price</div>
          <div className="-mr-10">Volume</div>
          <div className="-mr-14">Price chng</div>
          <div className="-mr-2">MKT Capital</div>
        </div>
        <div className="result">
          <div>
            {filteredCoins.map(coin => (
              <Coin 
                key={coin.id} 
                name={coin.name} 
                symbol={coin.symbol}
                image={coin.image}
                price={coin.current_price}
                volume={coin.total_volume}
                priceChange={coin.price_change_percentage_24h}
                marketCap={coin.market_cap}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Crypto = () => {
    const [coin, setCoin] = useState([]);
    const [loading, setLoading]  = useState(true);
    const [error, setError] = useState(null);

    const FetchCoin = async () => {
        try {
            setLoading(true);
            const result = await axios.get (
                "https://api.coingecko.com/api/v3/coins/markets",
                {
                 params: {
                    vs_currency: "usd",
                    order: "market_cap_desc",
                    per_page:10,
                    page:1,
                    sparkline: false
                },}
            );
            setCoin(result.data);
        } catch (err) {
            setError("Failed to fetch crypto data");
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        FetchCoin();
    }, []);

    return (
        <div>
            <h2>Crypto Tracker</h2>
            {loading && ( <p>Loaing........</p>)}
            {error && (<p style={{color: 'red'}}>{error}</p>)}
            {!loading && !error && (
             <div> 
                {coin.map((coin) => (
                   <div key={coin.id}>
                      <img src={coin.image} alt={coin.name} />
                      <h2>Name:{coin.name}</h2>
                      <h2>Symbol: {coin.symbol}</h2>
                      <p>Price: ${coin.current_price.toLocaleString()}</p>
                      <p>
                        Change: {""}
                        <span style={{color: coin.price_change_percentage_24h >= 0 ?  'green' : 'red'}}>
                          {coin.price_change_percentage_24h.toFixed(2)}%
                         </span>
                      </p>
                      <p>Market Cap: ${coin.market_cap.toLocaleString()}</p>
                    </div>
                
                ))}
             </div>
              )}          
        </div>
    )
}
export default Crypto;
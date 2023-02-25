import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import { baseHTTP } from "../../services/baseHTTP";

export const getCoins = createAsyncThunk("coin/getCoins", async (currentPage) => {
    const response = await baseHTTP.get('coins/markets', { params: { page : currentPage } })
    response.data.map((coin) => {
        coin.price_change_24h= coin.price_change_24h.toFixed(3);
        coin.price_change_percentage_24h= coin.price_change_percentage_24h.toFixed(3);
        coin.current_price= Math.round(coin.current_price * 1000) / 1000;
        coin.high_24h = Math.round(coin.high_24h * 1000) / 1000;
        coin.low_24h = Math.round(coin.low_24h * 1000) / 1000;;
    })
    return response.data;
});

export const getCoinDetail = createAsyncThunk("coin/getCoin", async (id) => {
    const response = await baseHTTP.get(`coins/${id}`);
    return response.data;
});

export const getTrendingCoins = createAsyncThunk("coin/getTrendingCoins", async () => {
    const response = await baseHTTP.get('search/trending');
    response.data.coins.map((coin) => {
        coin.item.price_btc = coin.item.price_btc.toFixed(8);
    })
    return response.data.coins;
});

export const getCoinHistory = createAsyncThunk("coin/getCoinHistory", async (id,day) => {
    console.log(day)
    const response = await baseHTTP.get(`coins/${id}/market_chart`, { params: { days : 7 } });
    response.data.prices.map((coin) => {
    
        // coin[1] = coin[1].toFixed(3);
    })
    console.log(response.data.prices)
    return response.data.prices;
});

export const coinSlice = createSlice({
    name: "coin",
    initialState: {
        coinList: [],
        trackingCoins: [],
        coin : {},
        trendingCoins : [],
        coinHistory : {},
    },
    reducers: {
        addCoin: (state, action) => {
            state.trackingCoins.push(action.payload);
        },
        removeCoin: (state, action) => {
            state.trackingCoins = state.trackingCoins.filter(
                (coin) => coin.id !== action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCoins.fulfilled, (state, action) => {
            state.coinList = [...state.coinList, ...action.payload]
      });
        builder.addCase(getCoinDetail.fulfilled, (state, action) => {
            state.coin = action.payload
        });
        builder.addCase(getTrendingCoins.fulfilled, (state, action) => {
            state.trendingCoins = action.payload
        });
        builder.addCase(getCoinHistory.fulfilled, (state, action) => {
            state.coinHistory = action.payload
        }
        );
    }
});

export default coinSlice.reducer;
export const {addCoin,removeCoin} = coinSlice.actions

import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { baseHTTP } from "../../services/baseHTTP";
import { getFavoriteCoins, removeFavoriteCoin, setFavoriteCoin } from "../../services/localStorage";

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

export const getCoinHistory = createAsyncThunk("coin/getCoinHistory", async (id) => {
    const response = await baseHTTP.get(`coins/${id}/market_chart`, { params: { days : 7 } });
    return response.data.prices;
});

export const getCoinQuery = createAsyncThunk("coin/getCoinQuery", async (query) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
    return response.data.coins[0];
});
                 

export const coinSlice = createSlice({
    name: "coin",
    initialState: {
        coinList: [],
        trackingCoins: getFavoriteCoins(),
        coin : {},
        trendingCoins : [] ,
        coinHistory : {},
        searchedCoin : [],
        status : 'idle',
        statusChart : 'idle'
    },
    reducers: {
        addCoin: (state, action) => {
            state.trackingCoins.push(action.payload);
            setFavoriteCoin(action.payload)
        },
        removeCoin: (state, action) => {
            state.trackingCoins = state.trackingCoins.filter(
                (coin) => coin.id !== action.payload
            );
            removeFavoriteCoin(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCoins.pending, (state, action) => {
            state.status = 'pending'
        });
        builder.addCase(getCoins.fulfilled, (state, action) => {
            state.coinList = [...state.coinList, ...action.payload]
            state.status = 'succeeded'
        });
      builder.addCase(getCoinDetail.pending, (state, action) => {
        state.status = 'pending'
        });
        builder.addCase(getCoinDetail.fulfilled, (state, action) => {
            state.coin = action.payload
            state.status = 'succeeded'
        });
        builder.addCase(getTrendingCoins.pending, (state, action) => {
            state.status = 'pending'
            });
        builder.addCase(getTrendingCoins.fulfilled, (state, action) => {
            state.trendingCoins = action.payload
            state.status = 'succeeded'
        });
        builder.addCase(getCoinHistory.pending, (state, action) => {
            state.statusChart = 'pending'
        });
        builder.addCase(getCoinHistory.fulfilled, (state, action) => {
            state.coinHistory = action.payload
            state.statusChart = 'succeeded'
        });
        builder.addCase(getCoinQuery.pending, (state, action) => {
            state.status = 'pending'
        });
        builder.addCase(getCoinQuery.fulfilled, (state, action) => {
            state.searchedCoin = action.payload
            state.status = 'succeeded'
        });
    }
});

export default coinSlice.reducer;
export const {addCoin,removeCoin} = coinSlice.actions

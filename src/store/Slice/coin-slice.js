import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
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
    console.log(response.data);
    return response.data;
});

export const getCoin = createAsyncThunk("coin/getCoin", async (id) => {
    const response = await baseHTTP.get(`coins/${id}`);
    return response.data;
});



export const coinSlice = createSlice({
    name: "coin",
    initialState: {
        coinList: [],
        trackingCoins: [],
        coin : {},
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
        builder.addCase(getCoin.fulfilled, (state, action) => {
            state.coin = action.payload
        })

    }
});

export default coinSlice.reducer;
export const {addCoin,removeCoin} = coinSlice.actions

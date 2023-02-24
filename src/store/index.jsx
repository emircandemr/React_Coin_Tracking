import {configureStore} from '@reduxjs/toolkit';

import coinTrackingReducer from './Slice/coin-slice';

export const store = configureStore({
    reducer: {
        coinTracking: coinTrackingReducer,
    }
});


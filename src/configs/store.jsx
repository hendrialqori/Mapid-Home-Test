import { configureStore } from "@reduxjs/toolkit";
import * as configs from './index'

const store = configureStore({
    reducer: {
        token: configs.tokenReducer,
        apiData: configs.dataReducer
    }
})

export { store }
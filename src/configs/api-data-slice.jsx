import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    datas: [],
    loading: false
}

const GetApi = createAsyncThunk('layer/getLayer', async () => {
    const request = await fetch('https://geoserver.mapid.io/layers_new/get_layer?api_key=689c2279e0834a3ba82743432605e746&layer_id=628f1d7c84b953e79a7cd896&project_id=611eafa6be8a2635e15c4afc')
    const response = await request.json()

    return response.geojson.features
})

const apiDataSlice = createSlice({
    name: 'apiData',
    initialState,
    extraReducers: {
        [GetApi.fulfilled]: (state, action) => {
            state.datas = action.payload
        }
    }
    
})

export { GetApi }
export default apiDataSlice.reducer
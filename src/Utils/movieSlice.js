import { createSlice } from "@reduxjs/toolkit";

const movieSlice =createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upCommingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpCommingMovies:(state,action)=>{
            state.upCommingMovies = action.payload
        },
        addTailerVideo:(state,action)=>{
            state.trailerVideo = action.payload

        }
    }
})

export const { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpCommingMovies, addTailerVideo} =movieSlice.actions;

export default movieSlice.reducer;
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../interceptors";
import { Movie } from "../interfaces";
import { AxiosError } from "axios";

interface Metadata {
  page: number;
  total_pages: number;
  total_results: number;
}

enum ApiStatus {
  idle = "idle",
  loading = "loading",
  failed = "failed",
}
interface MovieApiState {
  movies: Movie[];
  metadata: Metadata;
  error: string | null;
  status: ApiStatus;
}

interface ApiResult extends Metadata {
  results: [];
}
const initialState: MovieApiState = {
  movies: [],
  metadata: { page: 0, total_pages: 0, total_results: 0 },
  error: null,
  status: ApiStatus.idle,
};

export const getTrendingMovies = createAsyncThunk(
  "trending",
  async (page: number, { rejectWithValue }) => {
    try {
      const response: ApiResult = await axiosInstance.get(
        `/trending/movie/day?language=en-US&page=${page}`
      );
      return response;
    } catch (err) {
      if (err instanceof AxiosError && err.response)
        return rejectWithValue(err.response.data);
      throw err;
    }
  }
);
export const getTNewMovies = createAsyncThunk(
  "new",
  async (page: number, { rejectWithValue }) => {
    try {
      const response: ApiResult = await axiosInstance.get(
        `/movie/now_playing?language=en-US&page=${page}`
      );
      return response;
    } catch (err) {
      if (err instanceof AxiosError && err.response)
        rejectWithValue(err.response.data);
      throw err;
    }
  }
);

export const getUpcomingMovie = createAsyncThunk(
  "upcoming",
  async (page: number, { rejectWithValue }) => {
    try {
      const response: ApiResult = await axiosInstance.get(
        `/movie/upcoming?language=en-US&page=${page}`
      );
      return response;
    } catch (err) {
      if (err instanceof AxiosError && err.response)
        rejectWithValue(err.response.data);
      throw err;
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrendingMovies.pending, (state) => {
      state.status = ApiStatus.loading;
      state.error = null;
      state.movies = [];
    });
    builder.addCase(
      getTrendingMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = ApiStatus.idle;
        state.error = null;
        const { results, page, total_pages, total_results } = action.payload;
        state.movies = results;
        state.metadata = {
          page: page,
          total_pages: total_pages,
          total_results: total_results,
        };
      }
    );
    builder.addCase(getTrendingMovies.rejected, (state, action) => {
      state.status = ApiStatus.failed;
      state.error = "Failed to get Data";
    });
    builder.addCase(getTNewMovies.pending, (state) => {
      state.error = null;
      state.status = ApiStatus.loading;
      state.movies = [];
    });
    builder.addCase(
      getTNewMovies.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = ApiStatus.idle;
        state.error = null;
        const { results, page, total_pages, total_results } = action.payload;
        state.movies = results;
        state.metadata = {
          page: page,
          total_pages: total_pages,
          total_results: total_results,
        };
      }
    );
    builder.addCase(
      getTNewMovies.rejected,
      (state) => {
        state.status = ApiStatus.failed;
        state.error = "Failed to get Data";
      }
    );
    builder.addCase(getUpcomingMovie.pending, (state) => {
      state.error = null;
      state.status = ApiStatus.loading;
      state.movies = [];
    });
    builder.addCase(getUpcomingMovie.fulfilled, (state, action: any) => {
      state.status = ApiStatus.idle;
      state.error = null;
      const { results, page, total_pages, total_results } = action.payload;
      state.movies = results;
      state.metadata = {
        page: page,
        total_pages: total_pages,
        total_results: total_results,
      };
    });
    builder.addCase(getUpcomingMovie.rejected, (state) => {
      state.status = ApiStatus.failed;
      state.error = "Failed to get Data";
    });
  },
});

export default movieSlice.reducer;

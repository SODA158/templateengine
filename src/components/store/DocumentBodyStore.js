import { configureStore } from '@reduxjs/toolkit';
import workstringsReducer from '../slices/DocumentDobySlice';
import { worksApi } from '../reduxApi/WorksApi';

const store = configureStore({
  reducer: {
    [worksApi.reducerPath]: worksApi.reducer,
    workstrings: workstringsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(worksApi.middleware) ,
});

export default store;
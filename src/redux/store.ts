import { configureStore } from "@reduxjs/toolkit"
import { papersReducer, filtersReducer, formReducer } from "./slices"

export const store = configureStore({
	reducer: {
		papers: papersReducer,
		filters: filtersReducer,
		form: formReducer
	}
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
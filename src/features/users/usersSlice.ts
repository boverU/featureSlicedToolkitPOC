import { createSlice, createEntityAdapter, createAsyncThunk, PayloadAction, createSelector } from "@reduxjs/toolkit";
import React from "react";
import { RootState } from "../../app/store";

type User = {
    id: 1,
    name: string,
}


const usersAdapter = createEntityAdapter<User>({
    selectId: user => user.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name)
}
)

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
    const users = (await fetch("https://jsonplaceholder.typicode.com/users")).json();
    return users;
})

export const usersSlice = createSlice({
    name: "users",
    initialState: { data: usersAdapter.getInitialState(), loading: false },
    reducers: {
        addUser(state, action) {
            usersAdapter.addOne(state.data, action.payload)
        },
        removeUser(state, action) {
            usersAdapter.removeOne(state.data, action.payload)
        },
        removeAllUsers(state) {
            usersAdapter.removeAll(state.data)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            state.loading = true
        })
            .addCase(getAllUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                usersAdapter.upsertMany(state.data, action.payload)
                state.loading = false
            });
    }
})



export const { addUser, removeUser, removeAllUsers } = usersSlice.actions;

export const { selectAll, selectById, selectIds } = usersAdapter.getSelectors<RootState>(state => state.users.data);



export default usersSlice.reducer;
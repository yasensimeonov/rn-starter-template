import type { Action, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit"
import {createAppSlice} from "./createAppSlice"
import type {AppThunk} from "./store"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import { CounterSliceState } from "./counterSlice";
import {router} from "expo-router";

export interface AuthSliceState {
    token: string | null
    status: "idle" | "loading" | "failed"
}

const initialState: AuthSliceState = {
    token: null,
    status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const authSlice = createAppSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: create => ({
        facebook_login_fail: create.reducer(state => {
            state.token = null;
        }),
        facebook_login_success: create.reducer(
            (state, action: PayloadAction<string | null>) => {
                state.token = action.payload;
                router.push("/map");
            },
        ),
        facebook_updateProgressStatus: create.reducer(
            (state, action: PayloadAction<"idle" | "loading" | "failed">) => {
                state.status = action.payload;
            },
        ),
        // The function below is called a thunk and allows us to perform async logic. It
        // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
        // will call the thunk with the `dispatch` function as the first argument. Async
        // code can then be executed and other actions can be dispatched. Thunks are
        // typically used to make async requests.
        facebook_clearTokenFromStorageAsync: create.asyncThunk(
          async () => {
            await AsyncStorage.removeItem("fb_token");
            // The value we return becomes the `fulfilled` action payload
            // return response.data
          },
          {
            pending: state => {
              state.status = "loading"
            },
            fulfilled: (state, action) => {
              state.status = "idle"
              state.token = null
            },
            rejected: state => {
              state.status = "failed"
            },
          },
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectToken: auth => auth.token,
        selectStatus: auth => auth.status,
    },
})

// Action creators are generated for each case reducer function.
export const {
    facebook_login_fail,
    facebook_login_success,
    facebook_updateProgressStatus,
    facebook_clearTokenFromStorageAsync
    // facebookLoginAsync
} = authSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {selectToken, selectStatus } = authSlice.selectors

export const facebookLogin =
    (): AppThunk =>
    async (dispatch) => {
        dispatch(facebook_updateProgressStatus("loading"));

        let token = await AsyncStorage.getItem("fb_token");

        if (token) {
            // Dispatch an action saying FB login is done
            dispatch(facebook_login_success(token));
        } else {
            // Start up FB login process
            await doFacebookLogin(dispatch);
        }

        dispatch(facebook_updateProgressStatus("idle"));
    }

const doFacebookLogin = async (dispatch: ThunkDispatch<{ auth: AuthSliceState; counter: CounterSliceState }, unknown, Action>) => {
    let result = await LoginManager.logInWithPermissions(['public_profile']);

    if (result.isCancelled) {
        return dispatch(facebook_login_fail);
    }

    // Once signed in, get the user's AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        return dispatch(facebook_login_fail);
    }

    await AsyncStorage.setItem("fb_token", data.accessToken);

    dispatch(facebook_login_success(data.accessToken));
};

import type { Action, PayloadAction, ThunkDispatch} from "@reduxjs/toolkit"
import {createAppSlice} from "./createAppSlice"
import type {AppThunk} from "./store"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import defaultTheme from "@react-navigation/native/src/theming/DefaultTheme";
import { CounterSliceState } from "./counterSlice";

export interface AuthSliceState {
    token: string | null
}

const initialState: AuthSliceState = {
    token: null,
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
                state.token = action.payload
            },
        ),
        // facebookLoginAsync: create.asyncThunk(
        //   async (dispatch) => {
        //     let token = await AsyncStorage.getItem("fb_token");
        //     if (token) {
        //         // Dispatch an action saying FB login is done
        //
        //     } else {
        //         // Start up FB login process
        //
        //     }
        //   }
        // ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectToken: auth => auth.token,
    },
})

// Action creators are generated for each case reducer function.
export const {
    facebook_login_fail,
    facebook_login_success
    // facebookLoginAsync
} = authSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const {selectToken} = authSlice.selectors

export const facebookLogin =
    (): AppThunk =>
    async (dispatch) => {
        let token = await AsyncStorage.getItem("fb_token");

        if (token) {
            // Dispatch an action saying FB login is done
            dispatch(facebook_login_success(token));
        } else {
            // Start up FB login process
            await doFacebookLogin(dispatch);
        }
    }

const doFacebookLogin = async (dispatch: ThunkDispatch<{ auth: AuthSliceState; counter: CounterSliceState; }, unknown, Action>) => {
    let result = await LoginManager.logInWithPermissions(['public_profile']);

    if (result.isCancelled) {
        return dispatch(facebook_login_fail);
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        return dispatch(facebook_login_fail);
    }

    await AsyncStorage.setItem('fb_token', data.accessToken);

    dispatch(facebook_login_success(data.accessToken));
};

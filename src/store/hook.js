import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import * as UsersActionsCreator from "./users/actions"
import * as SearchActionsCreator from "./search/actions"
import {searchReducer} from "./search/reducer";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
        ...UsersActionsCreator,
        ...SearchActionsCreator,
        ...searchReducer.actions,
    }, dispatch)
}
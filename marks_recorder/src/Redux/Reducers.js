import {
    STUDENT_ADD_POST_REQ,
    STUDENT_ADD_POST_SUCCESS,
    STUDENT_ADD_POST_FAIL,
    ONLOAD_GET_REQ,
    ONLOAD_GET_SUCCESS,
    ONLOAD_GET_FAIL,
    STUDENTDETAIL_GET_REQ,
    STUDENTDETAIL_GET_SUCCESS,
    STUDENTDETAIL_GET_FAIL,
    FILTER_ALL_REQ,
    FILTER_ALL_FAIL,
    FILTER_ALL_SUCCESS,
    CLASS_GET_REQ,
    CLASS_GET_SUCCESS,
    CLASS_GET_FAIL,
    STUDENT_DELETE_REQ,
    STUDENT_DELETE_SUCCESS,
    STUDENT_DELETE_FAIL,
    FILTER_REQ,
    FILTER_FAIL,
    FILTER_SUCCESS,
} from "./Actiontypes";

export const initStore = {
    data: [],
    filteredData: [],
    f_data: [],
    c_data: [],
    filteredonce: false,
    fil_all: false,
    f: false,
    response: '',
    error: '',
    studentData: []
};

export default (state = initStore, action) => {
    console.log('action called', action.payload);
    switch (action.type) {
        case FILTER_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_SUCCESS:
            return {
                ...state,
                f: true,
                f_data: action.payload
            };
        case FILTER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case STUDENT_DELETE_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case STUDENT_DELETE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case STUDENT_DELETE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case STUDENT_ADD_POST_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case STUDENT_ADD_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                response: action.payload
            };
        case STUDENT_ADD_POST_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case ONLOAD_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case ONLOAD_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            };
        case ONLOAD_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS_GET_SUCCESS:
            console.log('success')
            return {
                ...state,
                isLoading: false,
                c_data: action.payload.data
            };
        case CLASS_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case STUDENTDETAIL_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case STUDENTDETAIL_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                studentData: action.payload
            };
        case STUDENTDETAIL_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_ALL_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_ALL_SUCCESS:
            return {
                ...state,
                fil_all: true,
                filteredData: action.payload
            };
        case FILTER_ALL_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

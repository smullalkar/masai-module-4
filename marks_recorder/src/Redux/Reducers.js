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
    CLASS1_GET_REQ,
    CLASS1_GET_SUCCESS,
    CLASS1_GET_FAIL,
    CLASS2_GET_REQ,
    CLASS2_GET_SUCCESS,
    CLASS2_GET_FAIL,
    CLASS3_GET_REQ,
    CLASS3_GET_SUCCESS,
    CLASS3_GET_FAIL,
    CLASS4_GET_REQ,
    CLASS4_GET_SUCCESS,
    CLASS4_GET_FAIL,
    CLASS5_GET_REQ,
    CLASS5_GET_SUCCESS,
    CLASS5_GET_FAIL,
    CLASS6_GET_REQ,
    CLASS6_GET_SUCCESS,
    CLASS6_GET_FAIL,
    CLASS7_GET_REQ,
    CLASS7_GET_SUCCESS,
    CLASS7_GET_FAIL,
    CLASS8_GET_REQ,
    CLASS8_GET_SUCCESS,
    CLASS8_GET_FAIL,
    CLASS9_GET_REQ,
    CLASS9_GET_SUCCESS,
    CLASS9_GET_FAIL,
    CLASS10_GET_REQ,
    CLASS10_GET_SUCCESS,
    CLASS10_GET_FAIL,
    EXAMTYPE_FILTER_ALL,
    EXAMTYPE_FILTER_CLASS1,
    EXAMTYPE_FILTER_CLASS2,
    EXAMTYPE_FILTER_CLASS3,
    EXAMTYPE_FILTER_CLASS4,
    EXAMTYPE_FILTER_CLASS5,
    EXAMTYPE_FILTER_CLASS6,
    EXAMTYPE_FILTER_CLASS7,
    EXAMTYPE_FILTER_CLASS8,
    EXAMTYPE_FILTER_CLASS9,
    EXAMTYPE_FILTER_CLASS10
} from "./Actiontypes";

export const initStore = {
    data: [],
    filteredData: [],
    fil: false,
    response: '',
    error: '',
    studentData: [],
    class1: [],
    filteredData_c1: [],
    class2: [],
    filteredData_c2: [],
    class3: [],
    filteredData_c3: [],
    class4: [],
    filteredData_c4: [],
    class5: [],
    filteredData_c5: [],
    class6: [],
    filteredData_c6: [],
    class7: [],
    filteredData_c7: [],
    class8: [],
    filteredData_c8: [],
    class9: [],
    filteredData_c9: [],
    class10: [],
    filteredData_c10: []
};

export default (state = initStore, action) => {
    console.log('action called', action.payload);
    switch (action.type) {
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
        case CLASS1_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS1_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class1: action.payload
            };
        case CLASS1_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS2_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS2_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class2: action.payload
            };
        case CLASS2_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS3_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS3_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class3: action.payload
            };
        case CLASS3_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS4_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS4_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class4: action.payload
            };
        case CLASS4_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS5_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS5_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class5: action.payload
            };
        case CLASS5_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS6_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS6_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class6: action.payload
            };
        case CLASS6_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS7_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS7_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class7: action.payload
            };
        case CLASS7_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS8_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS8_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class8: action.payload
            };
        case CLASS8_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS9_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS9_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class9: action.payload
            };
        case CLASS9_GET_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case CLASS10_GET_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case CLASS10_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                class10: action.payload
            };
        case CLASS10_GET_FAIL:
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
        case EXAMTYPE_FILTER_ALL:
            let dat
            if(action.payload === 'All'){
                dat = state.data.data
            }
            else{
                dat = [...state.data.data].filter(item => {
                    return item.exam_type === action.payload
                })
            }
            return {
                ...state,
                filteredData: dat,
                fil: true
            }
        default:
            return state;
    }
};

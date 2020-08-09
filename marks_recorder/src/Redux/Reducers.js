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
    STUDENT_EDIT_REQ,
    STUDENT_EDIT_SUCCESS,
    STUDENT_EDIT_FAIL,
    FILTER_CLASS1_REQ,
    FILTER_CLASS1_FAIL,
    FILTER_CLASS1_SUCCESS,
    FILTER_CLASS2_REQ,
    FILTER_CLASS2_FAIL,
    FILTER_CLASS2_SUCCESS,
    FILTER_CLASS3_REQ,
    FILTER_CLASS3_FAIL,
    FILTER_CLASS3_SUCCESS,
    FILTER_CLASS4_REQ,
    FILTER_CLASS4_FAIL,
    FILTER_CLASS4_SUCCESS,
    FILTER_CLASS5_REQ,
    FILTER_CLASS5_FAIL,
    FILTER_CLASS5_SUCCESS,
    FILTER_CLASS6_REQ,
    FILTER_CLASS6_FAIL,
    FILTER_CLASS6_SUCCESS,
    FILTER_CLASS7_REQ,
    FILTER_CLASS7_FAIL,
    FILTER_CLASS7_SUCCESS,
    FILTER_CLASS8_REQ,
    FILTER_CLASS8_FAIL,
    FILTER_CLASS8_SUCCESS,
    FILTER_CLASS9_REQ,
    FILTER_CLASS9_FAIL,
    FILTER_CLASS9_SUCCESS,
    FILTER_CLASS10_REQ,
    FILTER_CLASS10_FAIL,
    FILTER_CLASS10_SUCCESS,
} from "./Actiontypes";

export const initStore = {
    data: [],
    filteredData: [],
    c_data: [],
    filteredonce: false,
    fil_all: false,
    response: '',
    error: '',
    studentData: [],
    fil1: false,
    fil2: false,
    fil3: false,
    fil4: false,
    fil5: false,
    fil6: false,
    fil7: false,
    fil8: false,
    fil9: false,
    fil10: false,
    filteredData_c1: [],
    filteredData_c2: [],
    filteredData_c3: [],
    filteredData_c4: [],
    filteredData_c5: [],
    filteredData_c6: [],
    filteredData_c7: [],
    filteredData_c8: [],
    filteredData_c9: [],
    filteredData_c10: []
};

export default (state = initStore, action) => {
    console.log('action called', action.payload);
    switch (action.type) {
        // case SORT_STAFF:
        //     console.log(payload)
        //     var dat = payload === 'asc' ? [...state.staff].sort((a, b) => Number(a.sale) - Number(b.sale)) : [...state.staff].sort((a, b) => Number(b.sale) - Number(a.sale))
        //     return {
        //         ...state,
        //         staff: dat
        //     }
        case STUDENT_EDIT_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case STUDENT_EDIT_SUCCESS:
            return {
                ...state,
                f: true,
                data: action.payload
            };
        case STUDENT_EDIT_FAIL:
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
        case FILTER_CLASS1_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS1_SUCCESS:
            return {
                ...state,
                fil1: true,
                filteredData_c1: action.payload
            };
        case FILTER_CLASS1_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS2_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS2_SUCCESS:
            return {
                ...state,
                fil2: true,
                filteredData_c2: action.payload
            };
        case FILTER_CLASS2_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS3_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS3_SUCCESS:
            return {
                ...state,
                fil3: true,
                filteredData_c3: action.payload
            };
        case FILTER_CLASS3_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS4_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS4_SUCCESS:
            return {
                ...state,
                fil4: true,
                filteredData_c4: action.payload
            };
        case FILTER_CLASS4_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS5_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS5_SUCCESS:
            return {
                ...state,
                fil5: true,
                filteredData_c5: action.payload
            };
        case FILTER_CLASS5_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS6_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS6_SUCCESS:
            return {
                ...state,
                fil6: true,
                filteredData_c6: action.payload
            };
        case FILTER_CLASS6_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS7_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS7_SUCCESS:
            return {
                ...state,
                fil7: true,
                filteredData_c7: action.payload
            };
        case FILTER_CLASS7_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS8_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS8_SUCCESS:
            return {
                ...state,
                fil8: true,
                filteredData_c8: action.payload
            };
        case FILTER_CLASS8_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS9_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS9_SUCCESS:
            return {
                ...state,
                fil9: true,
                filteredData_c9: action.payload
            };
        case FILTER_CLASS9_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FILTER_CLASS10_REQ:
            return {
                ...state,
                isLoading: true,
            };
        case FILTER_CLASS10_SUCCESS:
            return {
                ...state,
                fil10: true,
                filteredData_c10: action.payload
            };
        case FILTER_CLASS10_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

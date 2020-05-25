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

import axios from 'axios'

export const studentAddPostReq = payload => {
    return {
        type: STUDENT_ADD_POST_REQ,
        payload: payload || ""
    }
}

export const studentAddPostSuccess = payload => ({
    type: STUDENT_ADD_POST_SUCCESS,
    payload: payload
})

export const studentAddPostFail = payload => ({
    type: STUDENT_ADD_POST_FAIL,
    payload: payload
})

export const onloadGetReq = payload => {
    return {
        type: ONLOAD_GET_REQ,
        payload: payload || ""
    }
}

export const onloadGetSuccess = payload => ({
    type: ONLOAD_GET_SUCCESS,
    payload: payload
})

export const onloadGetFail = payload => ({
    type: ONLOAD_GET_FAIL,
    payload: payload
})

export const class1GetReq = payload => {
    return {
        type: CLASS1_GET_REQ,
        payload: payload || ""
    }
}

export const class1GetSuccess = payload => ({
    type: CLASS1_GET_SUCCESS,
    payload: payload
})

export const class1GetFail = payload => ({
    type: CLASS1_GET_FAIL,
    payload: payload
})

export const class2GetReq = payload => {
    return {
        type: CLASS2_GET_REQ,
        payload: payload || ""
    }
}

export const class2GetSuccess = payload => ({
    type: CLASS2_GET_SUCCESS,
    payload: payload
})

export const class2GetFail = payload => ({
    type: CLASS2_GET_FAIL,
    payload: payload
})

export const class3GetReq = payload => {
    return {
        type: CLASS3_GET_REQ,
        payload: payload || ""
    }
}

export const class3GetSuccess = payload => ({
    type: CLASS3_GET_SUCCESS,
    payload: payload
})

export const class3GetFail = payload => ({
    type: CLASS3_GET_FAIL,
    payload: payload
})

export const class4GetReq = payload => {
    return {
        type: CLASS4_GET_REQ,
        payload: payload || ""
    }
}

export const class4GetSuccess = payload => ({
    type: CLASS4_GET_SUCCESS,
    payload: payload
})

export const class4GetFail = payload => ({
    type: CLASS4_GET_FAIL,
    payload: payload
})

export const class5GetReq = payload => {
    return {
        type: CLASS5_GET_REQ,
        payload: payload || ""
    }
}

export const class5GetSuccess = payload => ({
    type: CLASS5_GET_SUCCESS,
    payload: payload
})

export const class5GetFail = payload => ({
    type: CLASS5_GET_FAIL,
    payload: payload
})

export const class6GetReq = payload => {
    return {
        type: CLASS6_GET_REQ,
        payload: payload || ""
    }
}

export const class6GetSuccess = payload => ({
    type: CLASS6_GET_SUCCESS,
    payload: payload
})

export const class6GetFail = payload => ({
    type: CLASS6_GET_FAIL,
    payload: payload
})

export const class7GetReq = payload => {
    return {
        type: CLASS7_GET_REQ,
        payload: payload || ""
    }
}

export const class7GetSuccess = payload => ({
    type: CLASS7_GET_SUCCESS,
    payload: payload
})

export const class7GetFail = payload => ({
    type: CLASS7_GET_FAIL,
    payload: payload
})

export const class8GetReq = payload => {
    return {
        type: CLASS8_GET_REQ,
        payload: payload || ""
    }
}

export const class8GetSuccess = payload => ({
    type: CLASS8_GET_SUCCESS,
    payload: payload
})

export const class8GetFail = payload => ({
    type: CLASS8_GET_FAIL,
    payload: payload
})

export const class9GetReq = payload => {
    return {
        type: CLASS9_GET_REQ,
        payload: payload || ""
    }
}

export const class9GetSuccess = payload => ({
    type: CLASS9_GET_SUCCESS,
    payload: payload
})

export const class9GetFail = payload => ({
    type: CLASS9_GET_FAIL,
    payload: payload
})

export const class10GetReq = payload => {
    return {
        type: CLASS10_GET_REQ,
        payload: payload || ""
    }
}

export const class10GetSuccess = payload => ({
    type: CLASS10_GET_SUCCESS,
    payload: payload
})

export const class10GetFail = payload => ({
    type: CLASS10_GET_FAIL,
    payload: payload
})

export const studentDetailGetReq = payload => {
    return {
        type: STUDENTDETAIL_GET_REQ,
        payload: payload || ""
    }
}

export const studentDetailGetSuccess = payload => ({
    type: STUDENTDETAIL_GET_SUCCESS,
    payload: payload
})

export const studentDetailGetFail = payload => ({
    type: STUDENTDETAIL_GET_FAIL,
    payload: payload
})

export const examTypeFilterAll = payload => {
    return {
        type: EXAMTYPE_FILTER_ALL,
        payload: payload
    }
}

export const examTypeFilterClass1 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS1,
        payload: payload
    }
}

export const examTypeFilterClass2 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS2,
        payload: payload
    }
}

export const examTypeFilterClass3 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS3,
        payload: payload
    }
}

export const examTypeFilterClass4 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS4,
        payload: payload
    }
}

export const examTypeFilterClass5 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS5,
        payload: payload
    }
}

export const examTypeFilterClass6 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS6,
        payload: payload
    }
}

export const examTypeFilterClass7 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS7,
        payload: payload
    }
}

export const examTypeFilterClass8 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS8,
        payload: payload
    }
}

export const examTypeFilterClass9 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS9,
        payload: payload
    }
}

export const examTypeFilterClass10 = payload => {
    return {
        type: EXAMTYPE_FILTER_CLASS10,
        payload: payload
    }
}

export const addStudent = (payload) => {
    console.log(payload)
    return dispatch => {
        dispatch(studentAddPostReq());
        return axios
            .post(`http://127.0.0.1:5000/addstudent`,
                {
                    name: payload.name,
                    class_of_student: payload.class_of_student,
                    roll_no: payload.roll_no,
                    section: payload.section,
                    exam_type: payload.exam_type,
                    maths: payload.maths,
                    soc_science: payload.soc_science,
                    science: payload.science,
                    english: payload.english,
                    hindi: payload.hindi,
                    second_language: payload.second_language,
                    total_min: payload.total_min,
                    total_max: payload.total_max
                }
            )
            .then(res => {
                return dispatch(studentAddPostSuccess(res));
            })
            .catch(err => dispatch(studentAddPostFail(err)));
    };
};

export const getData = (payload) => {
    return dispatch => {
        dispatch(onloadGetReq());
        return axios
            .get(`http://127.0.0.1:5000/allstudents`)
            .then(res => {
                return dispatch(onloadGetSuccess(res));
            })
            .catch(err => dispatch(onloadGetFail(err)));
    }
}

export const class1Details = (payload) => {
    return dispatch => {
        dispatch(class1GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class1`)
            .then(res => {
                return dispatch(class1GetSuccess(res));
            })
            .catch(err => dispatch(class1GetFail(err)));
    }
}

export const class2Details = (payload) => {
    return dispatch => {
        dispatch(class2GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class2`)
            .then(res => {
                return dispatch(class2GetSuccess(res));
            })
            .catch(err => dispatch(class2GetFail(err)));
    }
}

export const class3Details = (payload) => {
    return dispatch => {
        dispatch(class3GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class3`)
            .then(res => {
                return dispatch(class3GetSuccess(res));
            })
            .catch(err => dispatch(class3GetFail(err)));
    }
}

export const class4Details = (payload) => {
    return dispatch => {
        dispatch(class4GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class4`)
            .then(res => {
                return dispatch(class4GetSuccess(res));
            })
            .catch(err => dispatch(class4GetFail(err)));
    }
}

export const class5Details = (payload) => {
    return dispatch => {
        dispatch(class5GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class5`)
            .then(res => {
                return dispatch(class5GetSuccess(res));
            })
            .catch(err => dispatch(class5GetFail(err)));
    }
}

export const class6Details = (payload) => {
    return dispatch => {
        dispatch(class6GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class6`)
            .then(res => {
                return dispatch(class6GetSuccess(res));
            })
            .catch(err => dispatch(class6GetFail(err)));
    }
}

export const class7Details = (payload) => {
    return dispatch => {
        dispatch(class7GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class7`)
            .then(res => {
                return dispatch(class7GetSuccess(res));
            })
            .catch(err => dispatch(class7GetFail(err)));
    }
}

export const class8Details = (payload) => {
    return dispatch => {
        dispatch(class8GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class8`)
            .then(res => {
                return dispatch(class8GetSuccess(res));
            })
            .catch(err => dispatch(class8GetFail(err)));
    }
}

export const class9Details = (payload) => {
    return dispatch => {
        dispatch(class9GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class9`)
            .then(res => {
                return dispatch(class9GetSuccess(res));
            })
            .catch(err => dispatch(class9GetFail(err)));
    }
}

export const class10Details = (payload) => {
    return dispatch => {
        dispatch(class10GetReq());
        return axios
            .get(`http://127.0.0.1:5000/class10`)
            .then(res => {
                return dispatch(class10GetSuccess(res));
            })
            .catch(err => dispatch(class10GetFail(err)));
    }
}

export const getStudentDetails = (payload) => {
    return dispatch => {
        dispatch(studentDetailGetReq());
        return axios
            .get(`http://127.0.0.1:5000/allstudents/student/${payload}`)
            .then(res => {
                return dispatch(studentDetailGetSuccess(res));
            })
            .catch(err => dispatch(studentDetailGetFail(err)));
    }
}

// export const editData = (payload) => {
//     console.log(payload)
//     return dispatch => {
//         dispatch(userEditReq());
//         return axios
//             .post(`http://127.0.0.1:5000/users/edit/${payload.id}`,
//                 {
//                     name : payload.name,
//                     email : payload.email,
//                     mobile : payload.mobile,
//                     age : payload.age
//                 }
//             )
//             .then(res => {
//                 return dispatch(userEditSuccess(res));
//             })
//             .catch(err => dispatch(userEditFail(err)));
//     };
// };


// export const deleteUser = (payload) => {
//     return dispatch => {
//         dispatch(userDeleteReq());
//         return axios
//             .post(`http://127.0.0.1:5000/users/delete/${payload}`)
//             .then(res => {
//                 return dispatch(userDeleteSuccess(res));
//             })
//             .catch(err => dispatch(userDeleteFail(err)));
//     }
// }
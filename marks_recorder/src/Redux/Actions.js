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
    FILTER_REQ,
    FILTER_FAIL,
    FILTER_SUCCESS,
    CLASS_GET_REQ,
    CLASS_GET_SUCCESS,
    CLASS_GET_FAIL,
    STUDENT_DELETE_REQ,
    STUDENT_DELETE_SUCCESS,
    STUDENT_DELETE_FAIL,
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

export const studentDeleteReq = payload => {
    return {
        type: STUDENT_DELETE_REQ,
        payload: payload || ""
    }
}

export const studentDeleteSuccess = payload => ({
    type: STUDENT_DELETE_SUCCESS,
    payload: payload
})

export const studentDeleteFail = payload => ({
    type: STUDENT_DELETE_FAIL,
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

export const classGetReq = payload => {
    return {
        type: CLASS_GET_REQ,
        payload: payload || ""
    }
}

export const classGetSuccess = payload => ({
    type: CLASS_GET_SUCCESS,
    payload: payload
})

export const classGetFail = payload => ({
    type: CLASS_GET_FAIL,
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

export const filterAllReq = payload => {
    return {
        type: FILTER_ALL_REQ,
        payload: payload || ""
    }
}

export const filterAllSuccess = payload => ({
    type: FILTER_ALL_SUCCESS,
    payload: payload
})

export const filterAllFail = payload => ({
    type: FILTER_ALL_FAIL,
    payload: payload
})

export const filterClassReq = payload => {
    return {
        type: FILTER_REQ,
        payload: payload || ""
    }
}

export const filterClassSuccess = payload => ({
    type: FILTER_SUCCESS,
    payload: payload
})

export const filterClassFail = payload => ({
    type: FILTER_FAIL,
    payload: payload
})

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

export const clas = (payload) => {
    return dispatch => {
        dispatch(classGetReq());
        return axios
            .get(`http://127.0.0.1:5000/${payload}`)
            .then(res => {
                return dispatch(classGetSuccess(res));
            })
            .catch(err => dispatch(classGetFail(err)));
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

export const filterAll = (payload) => {
    return dispatch => {
        dispatch(filterAllReq());
        return axios
            .get(`http://127.0.0.1:5000/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterAllSuccess(res));
            })
            .catch(err => dispatch(filterAllFail(err)));
    }
}

export const filterClass = (payload) => {
    return dispatch => {
        dispatch(filterClassReq());
        return axios
            .get(`http://127.0.0.1:5000/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClassSuccess(res));
            })
            .catch(err => dispatch(filterClassFail(err)));
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


export const deleteStudent = (payload) => {
    return dispatch => {
        dispatch(studentDeleteReq());
        return axios
            .post(`http://127.0.0.1:5000/student/delete/${payload}`)
            .then(res => {
                return dispatch(studentDeleteSuccess(res));
            })
            .catch(err => dispatch(studentDeleteFail(err)));
    }
}
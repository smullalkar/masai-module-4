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

export const studentEditReq = payload => {
    return {
        type: STUDENT_EDIT_REQ,
        payload: payload || ""
    }
}

export const studentEditSuccess = payload => ({
    type: STUDENT_EDIT_SUCCESS,
    payload: payload
})

export const studentEditFail = payload => ({
    type: STUDENT_EDIT_FAIL,
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

export const filterClass1Req = payload => ({
    type: FILTER_CLASS1_REQ || "",
    payload: payload
})

export const filterClass1Success = payload => ({
    type: FILTER_CLASS1_SUCCESS,
    payload: payload
})

export const filterClass1Fail = payload => ({
    type: FILTER_CLASS1_FAIL,
    payload: payload
})

export const filterClass2Req = payload => {
    return {
        type: FILTER_CLASS2_REQ,
        payload: payload || ""
    }
}

export const filterClass2Success = payload => ({
    type: FILTER_CLASS2_SUCCESS,
    payload: payload
})

export const filterClass2Fail = payload => ({
    type: FILTER_CLASS2_FAIL,
    payload: payload
})

export const filterClass3Req = payload => {
    return {
        type: FILTER_CLASS3_REQ,
        payload: payload || ""
    }
}

export const filterClass3Success = payload => ({
    type: FILTER_CLASS3_SUCCESS,
    payload: payload
})

export const filterClass3Fail = payload => ({
    type: FILTER_CLASS3_FAIL,
    payload: payload
})

export const filterClass4Req = payload => {
    return {
        type: FILTER_CLASS4_REQ,
        payload: payload || ""
    }
}

export const filterClass4Success = payload => ({
    type: FILTER_CLASS4_SUCCESS,
    payload: payload
})

export const filterClass4Fail = payload => ({
    type: FILTER_CLASS4_FAIL,
    payload: payload
})

export const filterClass5Req = payload => {
    return {
        type: FILTER_CLASS5_REQ,
        payload: payload || ""
    }
}

export const filterClass5Success = payload => ({
    type: FILTER_CLASS5_SUCCESS,
    payload: payload
})

export const filterClass5Fail = payload => ({
    type: FILTER_CLASS5_FAIL,
    payload: payload
})

export const filterClass6Req = payload => {
    return {
        type: FILTER_CLASS6_REQ,
        payload: payload || ""
    }
}

export const filterClass6Success = payload => ({
    type: FILTER_CLASS6_SUCCESS,
    payload: payload
})

export const filterClass6Fail = payload => ({
    type: FILTER_CLASS6_FAIL,
    payload: payload
})

export const filterClass7Req = payload => {
    return {
        type: FILTER_CLASS7_REQ,
        payload: payload || ""
    }
}

export const filterClass7Success = payload => ({
    type: FILTER_CLASS7_SUCCESS,
    payload: payload
})

export const filterClass7Fail = payload => ({
    type: FILTER_CLASS7_FAIL,
    payload: payload
})

export const filterClass8Req = payload => {
    return {
        type: FILTER_CLASS8_REQ,
        payload: payload || ""
    }
}

export const filterClass8Success = payload => ({
    type: FILTER_CLASS8_SUCCESS,
    payload: payload
})

export const filterClass8Fail = payload => ({
    type: FILTER_CLASS8_FAIL,
    payload: payload
})

export const filterClass9Req = payload => {
    return {
        type: FILTER_CLASS9_REQ,
        payload: payload || ""
    }
}

export const filterClass9Success = payload => ({
    type: FILTER_CLASS9_SUCCESS,
    payload: payload
})

export const filterClass9Fail = payload => ({
    type: FILTER_CLASS9_FAIL,
    payload: payload
})

export const filterClass10Req = payload => {
    return {
        type: FILTER_CLASS10_REQ,
        payload: payload || ""
    }
}

export const filterClass10Success = payload => ({
    type: FILTER_CLASS10_SUCCESS,
    payload: payload
})

export const filterClass10Fail = payload => ({
    type: FILTER_CLASS10_FAIL,
    payload: payload
})

export const addStudent = (payload) => {
    console.log(payload)
    return dispatch => {
        dispatch(studentAddPostReq());
        return axios
            .post(`https://marksrecorderbackend.smullalkar.tech/addstudent`,
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
            .get(`https://marksrecorderbackend.smullalkar.tech/allstudents`)
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
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload}`)
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
            .get(`https://marksrecorderbackend.smullalkar.tech/allstudents/student/${payload}`)
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
            .get(`https://marksrecorderbackend.smullalkar.tech/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterAllSuccess(res));
            })
            .catch(err => dispatch(filterAllFail(err)));
    }
}

export const filterClass1 = (payload) => {
    return dispatch => {
        dispatch(filterClass1Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass1Success(res));
            })
            .catch(err => dispatch(filterClass1Fail(err)));
    }
}

export const filterClass2 = (payload) => {
    return dispatch => {
        dispatch(filterClass2Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass2Success(res));
            })
            .catch(err => dispatch(filterClass2Fail(err)));
    }
}

export const filterClass3 = (payload) => {
    return dispatch => {
        dispatch(filterClass3Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass3Success(res));
            })
            .catch(err => dispatch(filterClass3Fail(err)));
    }
}

export const filterClass4 = (payload) => {
    return dispatch => {
        dispatch(filterClass4Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass4Success(res));
            })
            .catch(err => dispatch(filterClass4Fail(err)));
    }
}

export const filterClass5 = (payload) => {
    return dispatch => {
        dispatch(filterClass5Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass5Success(res));
            })
            .catch(err => dispatch(filterClass5Fail(err)));
    }
}

export const filterClass6 = (payload) => {
    return dispatch => {
        dispatch(filterClass6Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass6Success(res));
            })
            .catch(err => dispatch(filterClass6Fail(err)));
    }
}

export const filterClass7 = (payload) => {
    return dispatch => {
        dispatch(filterClass7Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass7Success(res));
            })
            .catch(err => dispatch(filterClass7Fail(err)));
    }
}

export const filterClass8 = (payload) => {
    return dispatch => {
        dispatch(filterClass8Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass8Success(res));
            })
            .catch(err => dispatch(filterClass8Fail(err)));
    }
}

export const filterClass9 = (payload) => {
    return dispatch => {
        dispatch(filterClass9Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass9Success(res));
            })
            .catch(err => dispatch(filterClass9Fail(err)));
    }
}

export const filterClass10 = (payload) => {
    return dispatch => {
        dispatch(filterClass10Req());
        return axios
            .get(`https://marksrecorderbackend.smullalkar.tech/${payload.class_of_std}/filter/${payload.exam_type}/${payload.section}/${payload.grade}`)
            .then(res => {
                return dispatch(filterClass10Success(res));
            })
            .catch(err => dispatch(filterClass10Fail(err)));
    }
}

export const editStudent = (payload) => {
    console.log(payload)
    return dispatch => {
        dispatch(studentEditReq());
        return axios
            .post(`https://marksrecorderbackend.smullalkar.tech/student/edit/${payload.id}`,
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
                return dispatch(studentEditSuccess(res));
            })
            .catch(err => dispatch(studentEditFail(err)));
    };
};


export const deleteStudent = (payload) => {
    return dispatch => {
        dispatch(studentDeleteReq());
        return axios
            .post(`https://marksrecorderbackend.smullalkar.tech/student/delete/${payload}`)
            .then(res => {
                return dispatch(studentDeleteSuccess(res));
            })
            .catch(err => dispatch(studentDeleteFail(err)));
    }
}
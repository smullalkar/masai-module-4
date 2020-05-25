import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getStudentDetails } from '../Redux/Actions';
import Card from '@material-ui/core/Card';
import styles from '../Components/style.module.css'

class StudentDetails extends Component {

    componentDidMount = () => {
        var match_id = this.props.match.params.id
        this.props.getStudentDetails(match_id)
    }

    render() {
        const { studentData, match } = this.props
        return (
            <main>
                <Toolbar />
                {
                    studentData && studentData.map((student) => (
                        <Card variant="outlined" key={uuidv4()} className={styles.marksSheet}>
                            <div className={styles.studentDetails}>
                                <h3>Name : {student.name}</h3>
                                <h4>Class : {student.class_of_student}</h4>
                                <h4>Section : {student.section}</h4>
                                <h4>Roll Number : {student.roll_no}</h4>
                            </div>
                            <div className={styles.examtype_student_detail}>
                                <h3>Exam Type : {student.exam_type}</h3>
                                <h3>FINAL RESULT : {student.grade}</h3>
                            </div>
                            <div className={styles.marksTable}>
                                <TableContainer component={Paper}>
                                    <Table ria-label="caption table">
                                        <caption>
                                            *Marksheet of {student.name} for class {student.class_of_student}<br/>
                                            *Minimum passing percentage is 40%
                                        </caption>
                                        <TableHead>
                                            <TableRow hover style={{ backgroundColor: '#d32f2f' }}>
                                                <TableCell style={{ color: 'white' }} align="center">SUBJECT</TableCell>
                                                <TableCell style={{ color: 'white' }} align="center">MARKS OBTAINED</TableCell>
                                                <TableCell style={{ color: 'white' }} align="center">RESULT</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow hover>
                                                <TableCell align="center">Mathematics</TableCell>
                                                <TableCell align="center">{student.maths}</TableCell>
                                                {
                                                    Number(student.maths) >= Number(student.min_marks_each_sub) ? <TableCell align="center">PASS</TableCell> : <TableCell align="center">FAIL</TableCell>
                                                }
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell align="center">Social Science</TableCell>
                                                <TableCell align="center">{student.soc_science}</TableCell>
                                                {
                                                    Number(student.soc_science) >= Number(student.min_marks_each_sub) ? <TableCell align="center">PASS</TableCell> : <TableCell align="center">FAIL</TableCell>
                                                }
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell align="center">Science</TableCell>
                                                <TableCell align="center">{student.science}</TableCell>
                                                {
                                                    Number(student.science) >= Number(student.min_marks_each_sub) ? <TableCell align="center">PASS</TableCell> : <TableCell align="center">FAIL</TableCell>
                                                }
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell align="center">English</TableCell>
                                                <TableCell align="center">{student.english}</TableCell>
                                                {
                                                    Number(student.english) >= Number(student.min_marks_each_sub) ? <TableCell align="center">PASS</TableCell> : <TableCell align="center">FAIL</TableCell>
                                                }
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell align="center">Hindi</TableCell>
                                                <TableCell align="center">{student.hindi}</TableCell>
                                                {
                                                    Number(student.hindi) >= Number(student.min_marks_each_sub) ? <TableCell align="center">PASS</TableCell> : <TableCell align="center">FAIL</TableCell>
                                                }
                                            </TableRow>
                                            <TableRow hover>
                                                <TableCell align="center">Second Language</TableCell>
                                                <TableCell align="center">{student.second_language}</TableCell>
                                                {
                                                    Number(student.second_language) >= Number(student.min_marks_each_sub) ? <TableCell align="center">PASS</TableCell> : <TableCell align="center">FAIL</TableCell>
                                                }
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Card>
                    ))
                }
            </main>
        )
    }
}

const mapStateToProps = state => {
    console.log('student details ', state.studentData.data)
    return {
        studentData: state.studentData.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getStudentDetails: a => dispatch(getStudentDetails(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentDetails);
import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import styles from './style.module.css';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import { editStudent } from '../Redux/Actions';

class EditStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            class_of_student: '',
            roll_no: '',
            section: '',
            exam_type: '',
            maths: '',
            soc_science: '',
            science: '',
            english: '',
            hindi: '',
            second_language: '',
            total_min: '',
            total_max: '',
            id: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleUpdate = (payload) => {
        const{history, editStudent} = this.props
        editStudent(payload)
        setTimeout(()=>{
            history.push('/allstudents');
        },100);
    }

    componentDidMount = () => {
        var match_id = this.props.match.params.id
        this.props.studentData && this.props.studentData.map(item => (
            this.setState({
                name: item.name,
                class_of_student: item.class_of_student,
                roll_no: item.roll_no,
                section: item.section,
                exam_type: item.exam_type,
                maths: item.maths,
                soc_science: item.soc_science,
                science: item.science,
                english: item.english,
                hindi: item.hindi,
                second_language: item.second_language,
                total_min: item.total_min,
                total_max: item.total_max,
                id: item.id
            })
        ))

    }

    render() {
        const section = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const examType = ['Monthly', 'Midterm', 'Finals', 'Internals', 'Externals']
        const class_std = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const { editStudent } = this.props
        // console.log('state ', this.state)
        return (
            <div>
                <Toolbar />
                <div className={styles.addStudent}>
                    <div className={styles.studentInfo}>
                        <div>
                            <h3>STUDENT'S INFORMATION</h3>
                            <TextField
                                name='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Student's Name"
                            />
                        </div>
                        <div>
                            <FormControl style={{ width: '300px' }} >
                                <InputLabel id="demo-simple-select-label">Class</InputLabel>
                                <Select
                                    name='class_of_student'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.class_of_student}
                                    onChange={this.handleChange}
                                >
                                    {
                                        class_std.map((cl) => (
                                            <MenuItem key={cl} value={cl}>{cl}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                name='roll_no'
                                value={this.state.roll_no}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Roll Number"
                            />
                        </div>
                        <div>
                            <FormControl style={{ width: '300px' }} >
                                <InputLabel id="demo-simple-select-label">Section</InputLabel>
                                <Select
                                    name='section'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.section}
                                    onChange={this.handleChange}
                                >
                                    {
                                        section.map((section) => (
                                            <MenuItem key={section} value={section}>{section}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl style={{ width: '300px' }} >
                                <InputLabel id="demo-simple-select-label">Exam Type</InputLabel>
                                <Select
                                    name='exam_type'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.exam_type}
                                    onChange={this.handleChange}
                                >
                                    {
                                        examType.map((exam) => (
                                            <MenuItem key={exam} value={exam}>{exam}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className={styles.subjects}>
                        <div>
                            <h3>MARKS OBTAINED</h3>
                            <TextField
                                name='maths'
                                value={this.state.maths}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Mathematics"
                            />
                        </div>
                        <div>
                            <TextField
                                name='soc_science'
                                value={this.state.soc_science}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Social Science"
                            />
                        </div>
                        <div>
                            <TextField
                                name='science'
                                value={this.state.science}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Science"
                            />
                        </div>
                        <div>
                            <TextField
                                name='english'
                                value={this.state.english}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="English"
                            />
                        </div>
                        <div>
                            <TextField
                                name='hindi'
                                value={this.state.hindi}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Hindi"
                            />
                        </div>
                        <div>
                            <TextField
                                name='second_language'
                                value={this.state.second_language}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Second Language"
                            />
                        </div>
                        <div>
                            <TextField
                                name='total_min'
                                value={this.state.total_min}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Total Minimun Marks"
                            />
                        </div>
                        <div>
                            <TextField
                                name='total_max'
                                value={this.state.total_max}
                                onChange={this.handleChange}
                                id="standard-basic"
                                style={{ width: '300px' }}
                                label="Total Maximum Marks"
                            />
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <Button
                            onClick={(e) => {
                                this.props.history.goBack()
                            }}
                            variant="contained"
                            style={{ background: '#d32f2f', marginRight:'15px' }}
                        >
                            CANCEL
                        </Button>
                        <Button
                            onClick={(e) => {
                                this.handleUpdate(this.state)                                
                            }}
                            variant="contained"
                            style={{ background: '#d32f2f' }}
                        >
                            UPDATE
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('student details Edit', state.studentData.data)
    return {
        studentData: state.studentData.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        editStudent: a => dispatch(editStudent(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditStudent);
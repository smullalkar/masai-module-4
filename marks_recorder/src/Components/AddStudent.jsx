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
import { addStudent } from '../Redux/Actions';

class AddStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            class_of_student:'',
            roll_no: '',
            section: '',
            exam_type: '',
            maths: '',
            soc_science: '',
            science: '',
            english: '',
            hindi: '',
            second_language: '',
            grades: '',
            total_min: '',
            total_max: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        const section = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const examType = ['Monthly', 'Midterm', 'Finals', 'Internals', 'Externals']
        const class_std = [1,2,3,4,5,6,7,8,9,10]
        const { addStudent } = this.props
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
                                e.preventDefault()
                                addStudent(this.state)
                                this.setState({
                                    name: '',
                                    class_of_student:'',
                                    roll_no: '',
                                    section: '',
                                    exam_type: '',
                                    maths: '',
                                    soc_science: '',
                                    science: '',
                                    english: '',
                                    hindi: '',
                                    second_language: '',
                                    grades: '',
                                    total_min: '',
                                    total_max: ''
                                })
                            }}
                            variant="contained"
                            style={{ background: '#d32f2f' }}
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('data', state)
    return {
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addStudent: a => dispatch(addStudent(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStudent);
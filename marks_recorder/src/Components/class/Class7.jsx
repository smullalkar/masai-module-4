import React, { Component } from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { clas, filterClass, deleteStudent } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from '../style.module.css'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class Class7 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            section: 'all',
            exam_type: 'all',
            grade: 'all',
            class_of_std: '7'
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount = () => {
        this.props.clas(this.state.class_of_std)
    }
    render() {
        const { c_data, match, filterClass, f, f_data, deleteStudent } = this.props
        const section = ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const examType = ['all', 'Monthly', 'Midterm', 'Finals', 'Internals', 'Externals']
        const grades = ['all', 'O', 'A', 'B', 'C', 'D', 'E', 'PASS', 'FAIL']
        if (!f) {
            return (
                <main>
                    <Toolbar />
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <Box p={1} bgcolor="grey.300">
                            <FormControl style={{ width: '100px' }}>
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
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <FormControl style={{ width: '100px' }}>
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
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <FormControl style={{ width: '100px' }}>
                                <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                                <Select
                                    name='grade'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.grade}
                                    onChange={this.handleChange}
                                >
                                    {
                                        grades.map((section) => (
                                            <MenuItem key={section} value={section}>{section}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <Button
                            onClick={() => { filterClass(this.state) }}
                            variant="contained"
                            color="secondary">
                            Apply
                            </Button>
                    </Box>
                    <br />
                    <TableContainer component={Paper}>
                        <Table ria-label="caption table">
                            <caption>*Marks list of all the students</caption>
                            <TableHead>
                                <TableRow hover style={{ backgroundColor: '#d32f2f' }}>
                                    <TableCell style={{ color: 'white' }}>Name</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Class</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Exam Type</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Section</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Roll Number</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Grade</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {c_data && c_data.map((row) => (
                                    <TableRow hover key={uuidv4()} style={{ backgroundColor: row.grade === 'FAIL' ? '#c5cae9' : 'none' }}>

                                        <TableCell component="th" scope="row">
                                            <Link to={`${match.url}/${row.id}`} style={{ textDecoration: 'none' }}>{row.name}</Link>
                                        </TableCell>

                                        <TableCell align="right">{row.class_of_student}</TableCell>
                                        <TableCell align="right">{row.exam_type}</TableCell>
                                        <TableCell align="right">{row.section}</TableCell>
                                        <TableCell align="right">{row.roll_no}</TableCell>
                                        <TableCell align="right">{row.grade}</TableCell>
                                        <TableCell align="right">
                                            <DeleteIcon
                                                onClick={() =>
                                                    deleteStudent(row.id)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
            )
        }
        else {
            return (
                <main>
                    <Toolbar />
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <Box p={1} bgcolor="grey.300">
                            <FormControl style={{ width: '100px' }}>
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
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <FormControl style={{ width: '100px' }}>
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
                        </Box>
                        <Box p={1} bgcolor="grey.300">
                            <FormControl style={{ width: '100px' }}>
                                <InputLabel id="demo-simple-select-label">Grade</InputLabel>
                                <Select
                                    name='grade'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.grade}
                                    onChange={this.handleChange}
                                >
                                    {
                                        grades.map((section) => (
                                            <MenuItem key={section} value={section}>{section}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
                        <Button
                            onClick={() => { filterClass(this.state) }}
                            variant="contained"
                            color="secondary">
                            Apply
                            </Button>
                    </Box>
                    <br />
                    <TableContainer component={Paper}>
                        <Table ria-label="caption table">
                            <caption>*Marks list of all the students</caption>
                            <TableHead>
                                <TableRow hover style={{ backgroundColor: '#d32f2f' }}>
                                    <TableCell style={{ color: 'white' }}>Name</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Class</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Exam Type</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Section</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Roll Number</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Grade</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {f_data && f_data.map((row) => (
                                    <TableRow hover key={uuidv4()} style={{ backgroundColor: row.grade === 'FAIL' ? '#c5cae9' : 'none' }}>

                                        <TableCell component="th" scope="row">
                                            <Link to={`${match.url}/${row.id}`} style={{ textDecoration: 'none' }}>{row.name}</Link>
                                        </TableCell>

                                        <TableCell align="right">{row.class_of_student}</TableCell>
                                        <TableCell align="right">{row.exam_type}</TableCell>
                                        <TableCell align="right">{row.section}</TableCell>
                                        <TableCell align="right">{row.roll_no}</TableCell>
                                        <TableCell align="right">{row.grade}</TableCell>
                                        <TableCell align="right">
                                            <DeleteIcon
                                                onClick={() =>
                                                    deleteStudent(row.id)
                                                }
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </main>
            )
        }
    }
}

const mapStateToProps = state => {
    console.log('all students data', state.c_data)
    return {
        c_data: state.c_data,
        f: state.f,
        f_data: state.f_data.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clas: a => dispatch(clas(a)),
        filterClass: a => dispatch(filterClass(a)),
        deleteStudent: a => dispatch(deleteStudent(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Class7);

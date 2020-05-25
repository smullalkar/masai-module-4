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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import { getData, examTypeFilterAll } from '../Redux/Actions';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from './style.module.css'
import FilterListIcon from '@material-ui/icons/FilterList';
import Box from '@material-ui/core/Box';

class AllStudents extends Component {
    constructor(props) {
        super(props)

        this.state = {
            section: '',
            exam_type: '',
            grades: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount = () => {
        this.props.getData()
    }
    render() {
        const { data, match, examTypeFilterAll, fil, filteredData } = this.props
        const section = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        const examType = ['All', 'Monthly', 'Midterm', 'Finals', 'Internals', 'Externals']
        const grades = ['O', 'A', 'B', 'C', 'D', 'E', 'PASS', 'FAIL']
        if (!fil) {
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
                                    name='grades'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.grades}
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
                            onClick={() => { examTypeFilterAll(this.state.exam_type) }}
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
                                    <TableCell align="right" style={{ color: 'white' }}>Roll Number</TableCell>
                                    <TableCell style={{ color: 'white' }} align="right">Grade</TableCell>
                                    <TableCell align="right" style={{ color: 'white' }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data && data.map((row) => (
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
                                            // onClick={() =>
                                            //     removeItem(row[0].id)
                                            // }
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
                                    name='grades'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={this.state.grades}
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
                            onClick={() => { examTypeFilterAll(this.state.exam_type) }}
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
                                    <TableCell style={{ color: 'white' }} align="right"></TableCell>>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData && filteredData.map((row) => (
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
                                            // onClick={() =>
                                            //     removeItem(row[0].id)
                                            // }
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
    console.log('all students data', state)
    return {
        data: state.data.data,
        fil: state.fil,
        filteredData: state.filteredData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData: a => dispatch(getData(a)),
        examTypeFilterAll: a => dispatch(examTypeFilterAll(a))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllStudents);

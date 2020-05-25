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
import { class9Details } from '../../Redux/Actions';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import styles from '../style.module.css'

class Class9 extends Component {
    componentDidMount = () => {
        this.props.class9Details()
    }
    render() {
        const { class9, match } = this.props
        return (
            <main>
                <Toolbar />
                <TableContainer component={Paper}>
                    <Table ria-label="caption table">
                        <caption>*Marks list of all the students</caption>
                        <TableHead>
                            <TableRow hover style={{ backgroundColor: '#d39f9f' }}>
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
                            {class9 && class9.map((row) => (
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

const mapStateToProps = state => {
    console.log('all students data', state.class9.data)
    return {
        class9: state.class9.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        class9Details: a => dispatch(class9Details(a)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Class9);

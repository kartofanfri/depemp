import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchDepartments} from '../actions/departments';
import {fetchEmployees} from '../actions/employees';


class App extends Component {

    constructor(props) {
        super(props);
        this.props.fetchDepartments();
        this.props.fetchEmployees();
    }

    render() {
        return (
            <div>
                <h1>departments</h1>
                {this.props.departments.map((itemDep, indexDep) =>
                    <div key={indexDep}>
                        <div className='department-container'>
                            <h2 className='department-container__name'>{itemDep.name}</h2>
                            <p className='department-container__location'>{itemDep.location}</p>
                            <ul className='department-container__employees employees'>
                                {this.props.employees.filter((itemEmp) =>
                                    itemEmp.DepartmentId == itemDep.id
                                ).map((itemEmp, indexEmp) =>
                                    <li className='employees__item item' key={indexEmp}>
                                        <div className='item__info'>
                                            <div className='item__info_name'>{itemEmp.name}</div>
                                            <div className='item__info_job'>{itemEmp.job} ({itemEmp.salary}$)</div>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </div>

                    </div>
                )}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    departments: state.departments,
    employees: state.employees
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchDepartments,
    fetchEmployees
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
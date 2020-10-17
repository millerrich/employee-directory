import React, { Component } from "react";
import SearchForm from "./Search";
import ResultList from "./Result";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        search: "",
        employee: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        API.getEmployees()
            .then(res => {
                console.log(res);
                const data = res.data.results;
                const employeeRecords = [];
                for (var i = 0; i < data.length; i++) {
                    employeeRecords.push({
                        firstName: data[i].name.first,
                        lastName: data[i].name.last,
                        email: data[i].email,
                        picture: data[i].picture.thumbnail,
                        phone: data[i].cell
                    });
                }
                this.setState({ employee: employeeRecords, results: employeeRecords });
                this.sortEmployees();
            })
            .catch((err) => console.log(err));
    }

    sortEmployees() {
        const employees = this.state.results;

        employees.sort(function (a, b) {
            var nameA = a.firstName.toLowerCase();
            var nameB = b.firstName.toLowerCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        }).then(
            this.setState({ employee: employees })
        );
    };

    searchEmployee = (value) => {
        const employees = this.state.results;
        const empSearch = [];
        const search = value;
        console.log(search);
        for (var i = 0; i < employees.length; i++) {
            if (employees[i].firstName.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                console.log(employees[i].firstName);
                empSearch.push(employees[i]);
            }
        }
        this.setState({ employee: empSearch });
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            search: value
        });

        return this.searchEmployee(value);
    };


    render() {
        return (
            <div className="container-fluid bg-dark" style={{ height: '100vh', overflow: 'scroll' }}>
                <h1 style={{ textAlign: 'center', color: '#ff8c00' }}>Employee Directory</h1>
                <SearchForm
                    handleInputChange={this.handleInputChange}
                />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <h2>searching for:</h2>
                    <span style={{ color: '#ff8c00' }}>{this.state.search}</span>
                </div>
                <table className="table table-bordered table-striped table-dark table-responsive-sm">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employee.map((employee, key) => {
                            return (<ResultList
                                firstName={employee.firstName}
                                lastName={employee.lastName}
                                email={employee.email}
                                phone={employee.phone}
                                picture={employee.picture}
                                key={key}
                            />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SearchResultContainer;
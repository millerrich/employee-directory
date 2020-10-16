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
        })
        .catch((err) => console.log(err));
    }

  searchEmployee = () => {
    // API.getEmployees()
    //   .then(res => this.setState({ results: res.data.data }))
    //   .then(console.log(this.state.results))
    //   .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // const name = event.target.name;
    const value = event.target.value;
    this.setState({
      search: value
    });
  };


  render() {
    return (
      <div>
          <h1>searching for {this.state.search}</h1>
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
                <table>
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
            {this.state.employee.map((employee, key)=> {
              return (<ResultList 
                firstName = {employee.firstName}
                lastName = {employee.lastName}
                email = {employee.email}
                phone = {employee.phone}
                picture = {employee.picture}
                key = {key}
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
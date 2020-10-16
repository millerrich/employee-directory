import React, { Component } from "react";
import SearchForm from "./Search";
import ResultList from "./Result";
import API from "../utils/API";

class SearchResultContainer extends Component {
    state = {
        searchField: "",
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
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
                <table>
          <thead>
            <tr>
            <th></th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employee.map((record, key)=> {
              return (<ResultList 
                firstName = {record.firstName}
                lastName = {record.lastName}
                email = {record.email}
                phone = {record.phone}
                picture = {record.picture}
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
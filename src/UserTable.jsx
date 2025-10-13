import React, { Component } from "react";
import "./UserTable.css"; 

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            search: "",
            sortBy: "asc",
            loading: true
        };
    }

    componentDidMount() {
        console.log("Component mounted!");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => this.setState({ users: data, loading: false }))
            .catch((err) => console.error(err));
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.users !== this.state.users ||
            prevState.search !== this.state.search ||
            prevState.sortBy !== this.state.sortBy
        ) {
            console.log("Data updated!");
        }
    }

    handleSearch = (e) => this.setState({ search: e.target.value });

    handleSort = () =>
        this.setState((prevState) => ({
            sortBy: prevState.sortBy === "asc" ? "desc" : "asc"
        }));

    render() {
        const { users, search, sortBy, loading } = this.state;

        if (loading) return <p>Loading users...</p>;

        const filteredUsers = users
            .filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) =>
                sortBy === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name)
            );

        return (
            <div className="user-table-container">
                <h2>User Table</h2>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={search}
                    onChange={this.handleSearch}
                />
                <button onClick={this.handleSort}>
                    Sort ({sortBy === "asc" ? "A–Z" : "Z–A"})
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserTable;

import React, { Component } from 'react'
import UserAxiosService from '../../service/UserAxiosService';

class UserListComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeSearchNameUser = this.onChangeSearchNameUser.bind(this);
        this.retrieveUsers = this.retrieveUsers.bind(this);
        this.refreshListUsers = this.refreshListUsers.bind(this);
        this.setActiveUser = this.setActiveUser.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            users: [],
            currentUser: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount() {
        this.retrieveUsers();
    }

    onChangeSearchNameUser(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveUsers() {
        UserAxiosService.getUsers()
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshListUsers() {
        this.retrieveUsers();
        this.setState({
            currentUser: null,
            currentIndex: -1
        });
    }

    setActiveUser(user, index) {
        this.setState({
            currentUser: user,
            currentIndex: index
        });
    }

    searchName() {
        UserAxiosService.findByName(this.state.searchName)
            .then(response => {
                this.setState({
                    users: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    editUser(idOfUser) {
        this.props.history.push(`/updateUser/${idOfUser}`);
    }

    addUser(){
        this.props.history.push('/addUser');
    }

    render() {
        const {searchName, users, currentUser, currentIndex} = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Поиск по Логину"
                            value={searchName}
                            onChange={this.onChangeSearchNameUser}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchName}>Поиск
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Список зарегистрированных пользователей</h4>
                    <ul className="list-group">
                        {users &&
                       users.map((user, index) => (
                            <li
                                className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                                onClick={() => this.setActiveUser(user, index)}
                                key={index}
                            >
                                {user.loginOfUser}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="m-3 btn btn-sm btn-success"
                        onClick={ () => this.addUser()}>
                        Добавить
                    </button>
                </div>

                <div className="col-md-6">
                    {currentUser ? (
                        <div>
                            <h4>Выбранный пользователь</h4>
                            <div>
                                <label>
                                    <strong>№:</strong>
                                </label>{" "}
                                {currentUser.idOfUser}
                            </div>
                            <div>
                                <label>
                                    <strong>Фамилия:</strong>
                                </label>{" "}
                                {currentUser.surnameOfUser}
                            </div>
                            <div>
                                <label>
                                    <strong>Имя:</strong>
                                </label>{" "}
                                {currentUser.nameOfUser}
                            </div>
                            <div>
                                <label>
                                    <strong>Логин:</strong>
                                </label>{" "}
                                {currentUser.loginOfUser}
                            </div>
                            <div>
                                <label>
                                    <strong>Электронная почта:</strong>
                                </label>{" "}
                                {currentUser.emailOfUser}
                            </div>
                            <button onClick={ () => this.editUser(currentUser.idOfUser)}
                                    className="btn btn-sm btn-info">Изменить
                            </button>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Выберите пользователя...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default  UserListComponent
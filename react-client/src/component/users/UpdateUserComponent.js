import React, {Component} from 'react'
import UserAxiosService from '../../service/UserAxiosService';

class UpdateUserComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeSurnameOfUser = this.onChangeSurnameOfUser.bind(this);
        this.onChangeNameOfUser = this.onChangeNameOfUser.bind(this);
        this.onChangeLoginOfUser = this.onChangeLoginOfUser.bind(this);
        this.onChangePassOfUser = this.onChangePassOfUser.bind(this);
        this.onChangeEmailOfUser = this.onChangeEmailOfUser.bind(this);
        this.getUser = this.getUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);

        this.state = {
            currentCoffeeType: {
                idOfUser: null,
                surnameOfUser: "",
                nameOfUser: "",
                loginOfUser: "",
                passOfUser: "",
                emailOfUser: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getUser(this.props.match.params.id);
    }

    onChangeSurnameOfUser(e) {
        const surnameOfUser = e.target.value;

        this.setState(function (prevState) {
            return {
                currentUser: {
                    ...prevState.currentUser,
                    surnameOfUser: surnameOfUser
                }
            };
        });
    }

    onChangeNameOfUser(e) {
        const nameOfUser = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                nameOfUser: nameOfUser
            }
        }));
    }

    onChangeLoginOfUser(e) {
        const loginOfUser = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                loginOfUser: loginOfUser
            }
        }));
    }

    onChangePassOfUser(e) {
        const passOfUser = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                passOfUser: passOfUser
            }
        }));
    }

    onChangeEmailOfUser(e) {
        const emailOfUser = e.target.value;

        this.setState(prevState => ({
            currentUser: {
                ...prevState.currentUser,
                emailOfUser: emailOfUser
            }
        }));
    }

    getUser(idOfUser) {
        UserAxiosService.getUserById(idOfUser)
            .then(response => {
                this.setState({
                    currentUser: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateUser() {
        UserAxiosService.updateUser(
            this.state.currentUser.idOfUser,
            this.state.currentUser
            )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Обновление прошло успешно!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteUser() {
        UserAxiosService.deleteUser(this.state.currentUser.idOfUser)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/users')
            })
            .catch(e => {
                console.log(e);
            });
    }

    cancel() {
        this.props.history.push('/users');
    }

    render() {
        const {currentUser} = this.state;

        return (
            <div>
                {currentUser ? (
                    <div className="edit-form">
                        <h4>Выбранный пользователь</h4>
                        <form>
                            <div className="form-group">
                                <label>Фамилия:</label>
                                <input type="text" className="form-control" id="surnameOfUser"
                                       value={currentUser.surnameOfUser} onChange={this.onChangeSurnameOfUser}/>
                            </div>
                            <div className="form-group">
                                <label>Имя:</label>
                                <input type="text" className="form-control" id="nameOfUser"
                                       value={currentUser.nameOfUser} onChange={this.onChangeNameOfUser}/>
                            </div>
                            <div className="form-group">
                                <label>Логин:</label>
                                <input type="text" className="form-control" id="loginOfUser"
                                       value={currentUser.loginOfUser} onChange={this.onChangeLoginOfUser}/>
                            </div>
                            <div className="form-group">
                                <label>Пароль:</label>
                                <input type="text" className="form-control" id="passOfUser"
                                       value={currentUser.passOfUser} onChange={this.onChangePassOfUser}/>
                            </div>
                            <div className="form-group">
                                <label>Электронная почта:</label>
                                <input type="text" className="form-control" id="emailOfUser"
                                       value={currentUser.emailOfUser} onChange={this.onChangeEmailOfUser}/>
                            </div>
                        </form>

                        <button
                            type="submit"
                            className="btn btn-sm btn-success"
                            onClick={this.updateUser}>
                            Обновить
                        </button>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={this.deleteUser} style={{marginLeft: "10px"}}>
                            Удалить
                        </button>

                        <button className="btn btn-sm btn-danger"
                                onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Отмена
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Выберите нужного пользователя...</p>
                    </div>
                )}
            </div>
        )
    }
}

export default  UpdateUserComponent
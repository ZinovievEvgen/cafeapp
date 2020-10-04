import React, {Component} from 'react'
import UserAxiosService from '../../service/UserAxiosService';

class CreateUserComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeSurnameOfUser = this.onChangeSurnameOfUser.bind(this);
        this.onChangeNameOfUser = this.onChangeNameOfUser.bind(this);
        this.onChangeLoginOfUser = this.onChangeLoginOfUser.bind(this);
        this.onChangePassOfUser = this.onChangePassOfUser.bind(this);
        this.onChangeEmailOfUser = this.onChangeEmailOfUser.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.newUser = this.newUser.bind(this);

        this.state = {
            idOfUser: null,
            surnameOfUser: "",
            nameOfUser: "",
            loginOfUser: "",
            passOfUser: "",
            emailOfUser: "",


            submitted: false
        };
    }

    onChangeSurnameOfUser(e) {
        this.setState({
            surnameOfUser: e.target.value
        });
    }

    onChangeNameOfUser(e) {
        this.setState({
            nameOfUser: e.target.value
        });
    }

    onChangeLoginOfUser(e) {
        this.setState({
            loginOfUser: e.target.value
        });
    }

    onChangeEmailOfUser(e) {
        this.setState({
            emailOfUser: e.target.value
        });
    }

    onChangePassOfUser(e) {
        this.setState({
            passOfUser: e.target.value
        });
    }

    saveUser() {
        var data = {
            surnameOfUser: this.state.surnameOfUser,
            nameOfUser: this.state.nameOfUser,
            loginOfUser: this.state.loginOfUser,
            passOfUser: this.state.passOfUser,
            emailOfUser: this.state.emailOfUser
        };

        UserAxiosService.createUser(data)
            .then(response => {
                this.setState({
                    idOfUser: response.data.idOfUser,
                    surnameOfUser: response.data.surnameOfUser,
                    nameOfUser: response.data.nameOfUser,
                    loginOfUser: response.data.loginOfUser,
                    passOfUser: response.data.passOfUser,
                    emailOfUser: response.data.emailOfUser,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newUser() {
        this.setState({
            idOfUser: null,
            surnameOfUser: "",
            nameOfUser: "",
            loginOfUser: "",
            passOfUser: "",
            emailOfUser: "",

            submitted: false
        });
    }

    cancel() {
        this.props.history.push('/users');
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Информация сохранена!</h4>
                        <button className="btn btn-success" onClick={this.newUser}>
                            Добавить
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Фамилия:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="surnameOfUser"
                                required
                                value={this.state.surnameOfUser}
                                onChange={this.onChangeSurnameOfUser}
                                name="surnameOfUser"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Имя:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nameOfUser"
                                required
                                value={this.state.nameOfUser}
                                onChange={this.onChangeNameOfUser}
                                name="nameOfUser"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Логин:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="loginOfUser"
                                required
                                value={this.state.loginOfUser}
                                onChange={this.onChangeLoginOfUser}
                                name="loginOfUser"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Пароль:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="passOfUser"
                                required
                                value={this.state.passOfUser}
                                onChange={this.onChangePassOfUser}
                                name="passOfUser"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Электронная почта:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="emailOfUser"
                                required
                                value={this.state.emailOfUser}
                                onChange={this.onChangeEmailOfUser}
                                name="emailOfUser"
                            />
                        </div>

                        <button onClick={this.saveUser} className="btn btn-success">
                            Сохранить
                        </button>
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>
                            Отмена </button>
                    </div>
                )}
            </div>
        )
    }

}

export default  CreateUserComponent
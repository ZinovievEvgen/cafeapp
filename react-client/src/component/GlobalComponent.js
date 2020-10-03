import React, {Component} from 'react'
import {Tabs} from "@feuer/react-tabs";
import UserService from '../service/UserAxiosService';

class GlobalComponent extends Component {

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
            roles: null,

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

    onChangePassOfUser(e) {
        this.setState({
            passOfUser: e.target.value
        });
    }

    onChangeEmailOfUser(e) {
        this.setState({
            emailOfUser: e.target.value
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

        UserService.createUser(data)
            .then(response => {
                this.setState({
                    idOfUser: response.data.idOfUser,
                    surnameOfUser: response.data.surnameOfUser,
                    nameOfUser: response.data.nameOfUser,
                    loginOfUser: response.data.loginOfUser,
                    passOfUser: response.data.passOfUser,
                    emailOfUser: response.data.emailOfUser,
                    roles: response.data.roles,

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
            roles: null,

            submitted: false
        });
    }


    render() {
        return (
            <div>
                <Tabs activeTab={{id: "tab1"}}>
                    <Tabs.Tab id="tab1" title="Информация">
                        <div style={{ padding: 10 }}>Инфомрация о проекте</div>
                    </Tabs.Tab>

                    <Tabs.Tab id="tab2" title="Регистрация">
                        <div className="submit-form">
                            {this.state.submitted ? (
                                <div>
                                    <button className="btn btn-info" onClick={this.newUser}>
                                        Информация сохранена
                                    </button>
                                </div>
                            ) : (
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="surnameOfUser">Фамилия:</label>
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
                                        <label htmlFor="nameOfUser">Имя:</label>
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
                                        <label htmlFor="loginOfUser">Логин:</label>
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
                                    <label htmlFor="passOfUser">Пароль:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="passOfUser"
                                        required
                                        value={this.state.passOfUser}
                                        onChange={this.onChangePassOfUser}
                                        name="passOfUser"
                                    />
                                </div>

                                    <div className="form-group">
                                        <label htmlFor="emailOfUser">Адрес электронной почты:</label>
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
                                        Регистрация
                                    </button>
                                </div>
                            )}
                        </div>
                    </Tabs.Tab>

                    <Tabs.Tab id="tab3" title="Авторизация">
                        <div style={{ padding: 10 }}>Авторизация</div>
                    </Tabs.Tab>
                </Tabs>
            </div>
        )
    }

}
export default  GlobalComponent
import React, { Component } from 'react'
import RoleAxiosService from '../../service/RoleAxiosService';

class UpdateRoleComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeNameOfRole = this.onChangeNameOfRole.bind(this);
        this.getRole = this.getRole.bind(this);
        this.updateRole = this.updateRole.bind(this);
        this.deleteRole = this.deleteRole.bind(this);

        this.state = {
            currentRole: {
                id: null,
                name: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getRole(this.props.match.params.id);
    }

    onChangeNameOfRole(e) {
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRole: {
                    ...prevState.currentRole,
                    name: name
                }
            };
        });
    }

    getRole(id) {
        RoleAxiosService.getRoleById(id)
            .then(response => {
                this.setState({
                    currentRole: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRole() {
        RoleAxiosService.updateRole(
            this.state.currentRole.id,
            this.state.currentRole
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

    deleteRole() {
        RoleAxiosService.deleteRole(this.state.currentRole.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/roles')
            })
            .catch(e => {
                console.log(e);
            });
    }

    cancel() {
        this.props.history.push('/roles');
    }

    render() {
        const {currentRole} = this.state;

        return (
            <div>
                {currentRole ? (
                    <div className="edit-form">
                        <h4>Выбранная роль пользователя</h4>
                        <form>
                            <div className="form-group">
                                <label>Название:</label>
                                <input type="text" className="form-control" id="name"
                                       value={currentRole.name} onChange={this.onChangeNameOfRole}/>
                            </div>
                        </form>

                        <button
                            type="submit"
                            className="btn btn-sm btn-success"
                            onClick={this.updateRole}>
                            Обновить
                        </button>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={this.deleteRole} style={{marginLeft: "10px"}}>
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
export default UpdateRoleComponent
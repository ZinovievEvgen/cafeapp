import React, {Component} from 'react'
import RoleAxiosService from '../../service/RoleAxiosService';

class CreateRoleComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeNameOfRole = this.onChangeNameOfRole.bind(this);
        this.saveRole = this.saveRole.bind(this);
        this.newRole = this.newRole.bind(this);

        this.state = {
            id: null,
            name: "",
            
            submitted: false
        };
    }

    onChangeNameOfRole(e) {
        this.setState({
            name: e.target.value
        });
    }

    saveRole() {
        var data = {
            name: this.state.name
        };

        RoleAxiosService.createRole(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newRole() {
        this.setState({
            id: null,
            name: "",

            submitted: false
        });
    }

    cancel() {
        this.props.history.push('/roles');
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Информация сохранена!</h4>
                        <button className="btn btn-success" onClick={this.newRole}>
                            Добавить
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Наименование:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeNameOfRole}
                                name="nameOfRole"
                            />
                        </div>

                        <button onClick={this.saveRole} className="btn btn-success">
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
export default CreateRoleComponent
import React, {Component} from 'react'
import RoleAxiosService from '../../service/RoleAxiosService';

class RoleListComponent extends Component {
    constructor(props) {
        super(props);
        this.onChangeSearchNameRole = this.onChangeSearchNameRole.bind(this);
        this.retrieveRoles = this.retrieveRoles.bind(this);
        this.refreshListRoles = this.refreshListRoles.bind(this);
        this.setActiveRole = this.setActiveRole.bind(this);
        this.searchName = this.searchName.bind(this);

        this.state = {
            roles: [],
            currentRole: null,
            currentIndex: -1,
            searchName: ""
        };
    }

    componentDidMount() {
        this.retrieveRoles();
    }

    onChangeSearchNameRole(e) {
        const searchName = e.target.value;

        this.setState({
            searchName: searchName
        });
    }

    retrieveRoles() {
        RoleAxiosService.getRoles()
            .then(response => {
                this.setState({
                    roles: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshListRoles() {
        this.retrieveRoles();
        this.setState({
            currentRole: null,
            currentIndex: -1
        });
    }

    setActiveRole(role, index) {
        this.setState({
            currentRole: role,
            currentIndex: index
        });
    }

    searchName() {
        RoleAxiosService.findByName(this.state.searchName)
            .then(response => {
                this.setState({
                    roles: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    editRole(idOfRole) {
        this.props.history.push(`/updateRole/${idOfRole}`);
    }

    addRole() {
        this.props.history.push('/addRole');
    }

    render() {
        const {searchName, roles, currentRole, currentIndex} = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Поиск по названию"
                            value={searchName}
                            onChange={this.onChangeSearchNameRole}
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
                    <h4>Список ролей пользователей</h4>
                    <ul className="list-group">
                        {roles &&
                        roles.map((role, index) => (
                            <li
                                className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                                onClick={() => this.setActiveRole(role, index)}
                                key={index}
                            >
                                {role.name}
                            </li>
                        ))}
                    </ul>
                    <button
                        className="m-3 btn btn-sm btn-success"
                        onClick={ () => this.addRole()}>
                        Добавить
                    </button>
                </div>
                <div className="col-md-6">
                    {currentRole ? (
                        <div>
                            <h4>Выбранная роль</h4>
                            <div>
                                <label>
                                    <strong>Наименование:</strong>
                                </label>{" "}
                                {currentRole.name}
                            </div>
                            <button onClick={ () => this.editRole(currentRole.id)}
                                    className="btn btn-sm btn-info">Изменить
                            </button>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Выберите необходимую роль...</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default RoleListComponent
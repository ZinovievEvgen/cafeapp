import http from "../http-common";

class RoleAxiosService {
    getRoles() {
        return http.get("/roles/allRoles");
    }

    createRole(role) {
        return http.post("/roles/create", role);
    }

    getRoleById(roleId) {
        return http.get(`/roles/get/${roleId}`);
    }

    deleteRole(roleId) {
        return http.delete(`/roles/delete/${roleId}`);
    }

    updateRole(roleId, role) {
        return http.put(`/roles/update/${roleId}`, role);
    }

    findByName(name) {
        return http.get(`/rolesFind?name=${name}`);
    }
}
export default new RoleAxiosService();
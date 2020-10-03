import http from "../http-common";

class UserAxiosService {
    getUsers() {
        return http.get("/users/allUsers");
    }

    createUser(user) {
        return http.post("/users/create", user);
    }

    getUserById(userId) {
        return http.get(`/users/get/${userId}`);
    }

    deleteUser(userId) {
        return http.delete(`/users/delete/${userId}`);
    }

    updateUser(userId, user) {
        return http.put(`/users/update/${userId}`, user);
    }

    findByName(name) {
        return http.get(`/usersFind?name=${name}`);
    }
}
export default new UserAxiosService();
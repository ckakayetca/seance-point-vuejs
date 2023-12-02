import axios from "axios";
const BASE_URL = 'http://localhost:3000'

// error handling interceptor
axios.interceptors.request.use(
    function(config) {
        config.withCredentials = true;
        config.baseURL = BASE_URL;

        return config
    },
    function(error) {
        // implement error handling
        console.log(error)
    }
);

// GET /seances
export async function getAllSeances() {
    return await axios.get('/seances');
}

// GET /seances/:id
export async function getSeance(id) {
    return await axios.get(BASE_URL + `/seances/${id}`);
}

// GET /seances/:id/reviews
export async function getReviews(id) {
    return await axios.get(BASE_URL + `/seances/${id}/reviews`);
}

// POST /seances
export async function createSeance(data) {
    return await axios.post(BASE_URL + '/seances', data);
}

// GET /seances/my-seances
export async function getMySeances() {
    return await axios.get(BASE_URL + '/seances/my-seances');
}

// PUT /seances/:id
export async function editSeance(id, data) {
    return await axios.put(BASE_URL + `/seances/${id}`, data);
}

// DELETE /seances/:id
export async function deleteSeance(id) {
    return await axios.delete(BASE_URL + `/seances/${id}`);
}

// POST /seances/:id/appointments
export async function appoint(id, date) {
    return await axios.post(BASE_URL + `/seances/${id}/appointments`, date);
}

// POST /seances/:id/reviews
export async function postReview(id, data) {
    return await axios.post(BASE_URL + `/seances/${id}/reviews`, data);
}

// PUT /seances/:id/reviews/:reviewId
export async function editReview(seanceId, reviewId, data) {
    return await axios.put(BASE_URL + `/seances/${seanceId}/reviews/${reviewId}`, data);
}

// DELETE /seances/:id/reviews/:reviewId
export async function deleteReview(seanceId, reviewId) {
    return await axios.delete(BASE_URL + `/seances/${id}/reviews/${reviewId}`);
}

// POST /users/login
export async function login(data) {
    return await axios.post(BASE_URL + `/users/login`, data);
}

// POST /users/register
export async function register(data) {
    return await axios.post(BASE_URL + `/users/register`, data);
}

// GET /users/logout
export async function logout() {
    return await axios.get(BASE_URL + `/users/logout`);
}

// GET /users/profile -- used to retrieve profile data & authenticate the user
export async function getProfile(){
    return await axios.get(BASE_URL + `/users/profile`);
}

// PUT /users/profile
export async function editProfile(){
    return await axios.put(BASE_URL + `/users/profile`);
}

// GET /my-appointments
export async function getAppointments(){
    return await axios.get(BASE_URL + `/my-appointments`);
}

// DELETE /my-appointments/:id
export async function deleteAppointment(id) {
    return await axios.delete(BASE_URL + `/my-appointments/${id}`);
}

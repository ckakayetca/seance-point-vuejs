import moment from "moment/moment";

// util to transform dates from backend into readable dates
// i will use momentjs
// https://momentjs.com/

export function dateFromNow(date) {
    return moment(date).fromNow();
}

export function fullDate(date) {
    return moment(date).format('MMMM Do YYYY, hh:mm A');
}

// empty user object

export let emptyUser = {
    username: '',
    email: '',
    tel: '',
    created_at: '',
    reviews: [],
    appointments: [],
    seances: [],
    _id: '',
}
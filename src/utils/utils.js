import moment from "moment/moment";

// util to transform dates from backend into readable dates
// i will use momentjs
// https://momentjs.com/

export function dateFromNow(date) {
    return moment(date).fromNow()
}
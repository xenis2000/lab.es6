//class
export default class MyLogger {
    constructor(props) {
        this.lectures = ['java', 'iOS'];
    }
    getLectures() {
        return this.lectures;
    }
    getTime() {
        return Date.now();
    }
    getCurrentHour() {
        return (new Date).getHours();
    }
}
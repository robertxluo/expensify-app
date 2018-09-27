import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters.js";

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});

test("should generate set text filter object with text value", () => {
    const action = setTextFilter("Hello");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Hello"
    });
});

test("should generate set text filter object with default value", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test("should generate action object for sort by date", () => {
    expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate action object for sort by amount", () => {
    expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
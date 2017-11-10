import moment from 'moment';

export const createMomentDate = date => moment(date);

export const getDateDifferenceWithCurrentDate = (date) => {
    const currentDate = moment();

    return moment(date).diff(currentDate, 'days') + 1; // plus current day
};

// input date format hh-DD-MM-YYYY

import EventEmitter from 'events';
import moment from 'moment';
import 'moment-precise-range-plugin';

const emitter = new EventEmitter();
const DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
const [ inputDate ] = process.argv.slice(2);
const [ hour, day, month, year ] = inputDate.split('-');
const timerDate = moment(new Date(Date.UTC(year, month - 1, day, hour)), DATE_FORMAT);

const showTimer = (timerDate) => {
	const currentDate = moment(new Date, DATE_FORMAT);

	if(timerDate > currentDate) {
		console.clear();
		console.log(moment.preciseDiff(currentDate, timerDate));
	} else {
		emitter.emit ('stopTimer');
	}
}

const timerId = setInterval(() => {
	emitter.emit('showTimer', timerDate);
  }, 1000)

const stopTimer = (timerId) => {
clearInterval(timerId);
console.log('Таймер истек');
};

emitter.on('showTimer', showTimer);
emitter.on('stopTimer', () => {stopTimer(timerId)});



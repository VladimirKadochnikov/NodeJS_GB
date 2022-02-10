import fs from 'fs';
import readline from 'readline';

const path = '../../access.log'
const getIP_1 = '89.123.1.41';
const getIP_2 = '34.48.240.111';

const readstream = fs.createReadStream(path, {
	encoding: 'utf-8',
	// end: 100 * 1024,
});

const writeNewLogForIp1 = fs.createWriteStream(`./${getIP_1}_requests.log`, {
	encoding: 'utf-8',
	flags: 'a'
})

const writeNewLogForIp2 = fs.createWriteStream(`./${getIP_2}_requests.log`, {
	encoding: 'utf-8',
	flags: 'a'
})

const readLog = readline.createInterface ({
	input: readstream,
})

readLog.on('line', (input) => {
	if(input.includes(`${getIP_1}`)) {
		writeNewLogForIp1.write(input + '\n')
	} else if (input.includes(`${getIP_2}`)) {
		writeNewLogForIp2.write(input + '\n')
	} 
})

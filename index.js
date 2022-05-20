// function to execute program
const util = require('util');

const exec_program = (prog_name, args) => {
	  const exec = util.promisify(require('child_process').exec);
  return exec(`${prog_name} ${args ? args : ''}`);
}

const after_exec = (res, err) => {
	if (err) {
	console.log(`error: ${err}`);
	return ;
}
  console.log(res.stdout);
  console.log(`stderr: ${res.stderr}`);
}

exec_program('echo', "hi").then(after_exec);

const generate_range = (size) => {
	range = [...Array(size).keys()];
	cur_indx = size;
	rand_indx;
	while (cur_indx > 0) {
		rand_indx = Math.floor(Math.random() * cur_indx);
		cur_indx--;
		[range[cur_indx], range[rand_indx]] = [range[rand_indx], range[cur_indx]];
	}
	return range.join(' ');
}

const get_program_input = (size) => {
	let res = {};
	res.size = size;
	if (size)
		res.arg = generate_range(size);
	exec_program('./push_swap', res.arg).then(after_exec);

}
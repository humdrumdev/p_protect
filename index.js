const util = require('util');

result = {
	error: null,
	stdout: null,
	stderr: null,
	size: null,
};

const exec_program = async (prog_name, args) => {
	  const exec = util.promisify(require('child_process').exec);
  return await exec(`${prog_name} ${args ? args : ''}`);
}

const generate_range = (size) => {
	range = [...Array(size).keys()];
	let cur_indx = size;
	let rand_indx;
	while (cur_indx > 0) {
		rand_indx = Math.floor(Math.random() * cur_indx);
		cur_indx--;
		[range[cur_indx], range[rand_indx]] = [range[rand_indx], range[cur_indx]];
	}
	return "\"" + range.join(' ') + "\"";
}

const get_program_input = async (size) => {
	result.size = size;
	result.arg = null;
	if (size)
		result.arg = generate_range(size);
	ret = await exec_program('echo', result.arg);
	if (ret.error)
		result.error = err.message;
	else
	{
		result.error = null;
		result.stdout = ret.stdout;
		result.stderr = ret.stderr;
	}
	return result;
}

get_program_input(100).then(console.log);
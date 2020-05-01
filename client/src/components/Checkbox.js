import React from 'react';
import PropTypes from 'prop-types';

function Checkbox({
	type = 'checkbox',
	name,
	label,
	checked = false,
	onChange,
}) {
	return (
		<p className='input'>
			<label>
				{label}
				<input type={type} name={name} checked={checked} onChange={onChange} />
			</label>
		</p>
	);
}

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

export default Checkbox;

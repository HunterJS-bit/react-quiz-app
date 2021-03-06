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
		<div className={`ck-button ${checked ? 'active' : '' }`}>
			<label>
				{label}
				<input type={type} name={name} checked={checked} onChange={onChange} />
			</label>
		</div>
	);
}

Checkbox.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	onChange: PropTypes.func.isRequired,
};

export default Checkbox;

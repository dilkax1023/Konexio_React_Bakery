import React from 'react';
import RCSlider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(RCSlider);

export default ({ onChange, value }) => (
	<div className=''>
		<SliderWithTooltip min={1} max={10} onChange={onChange} value={value} />
	</div>
);

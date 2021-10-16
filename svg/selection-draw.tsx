import React, { useState } from 'react';

const style = {
	transition: 'stroke-dashoffset 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s',
};

const SelectionDraw = () => {
	return (
		<svg width="100" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
			<path
				d="M40.6067 11.2099C36.7764 10.83 33.1595 11.6609 29.4983 12.7878C20.282 15.6244 10.9219 19.9697 5.8063 28.6562C0.983748 36.8451 0.180891 48.3192 6.70033 55.8399C14.6856 65.0516 29.4468 68.2106 41.009 67.9892C50.9976 67.798 63.0621 64.8519 69.3053 56.2006C76.26 46.5633 72.4328 32.1759 65.7738 23.517C57.4211 12.6557 43.2573 6.16932 30.2806 3.18555C25.1129 1.99732 19.9507 1.48133 14.8584 2.68966"
				stroke="white"
				strokeWidth="4"
				strokeLinecap="round"
				fill="black"
				className="draw-selection"
			></path>
		</svg>
	);
};

export default SelectionDraw;

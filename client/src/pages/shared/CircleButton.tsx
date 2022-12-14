import React, { FunctionComponent } from 'react';
import './styles/circlebutton.css';

interface CircleButtonProps {
	symbol: string;
	clickFunction?: any;
}

const CircleButton: FunctionComponent<CircleButtonProps> = () => {
	return <button className="circlebutton"></button>;
};

export default CircleButton;

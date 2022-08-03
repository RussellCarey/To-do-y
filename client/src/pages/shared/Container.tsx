import React, { FunctionComponent } from 'react';
import './styles/container.css';

interface ContainerProps {
	children?: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
	return (
		<div className="container">
			<div className="mobile-container">{children}</div>
		</div>
	);
};

export default Container;

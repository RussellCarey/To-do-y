import { FunctionComponent } from 'react';
import './styles/longbutton.css';

interface LongButtonProps {
	color: string;
	text: string;
	clickFunction?: any;
}

const LongButton: FunctionComponent<LongButtonProps> = ({ color, text, clickFunction }) => {
	return (
		<button onClick={clickFunction} className={`longbutton ${color === 'orange' ? 'lb-orange' : 'lb-blue'}`}>
			{text}
		</button>
	);
};

export default LongButton;

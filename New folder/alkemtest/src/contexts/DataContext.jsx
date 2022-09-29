import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [child, setChild] = useState('');

	const handleClose = () => {
		setChild('');
		setShow(false);
	};
	const handleShow = (enterChild) => {
		setChild(enterChild);
		setShow(true);
	};

	const value = {
		show,child,
		handleClose,
		handleShow,
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

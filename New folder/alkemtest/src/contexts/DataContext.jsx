import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [show, setShow] = useState(false);
	const [child, setChild] = useState('');
	const [userId, setUserId] = useState(null);

	const handleClose = () => {
		setChild('');
		setShow(false);
	};
	const handleShow = (enterChild) => {
		setChild(enterChild);
		setShow(true);
	};

	const handleUserId = (enterId) => {
		setUserId(enterId)
	};

	const value = {
		show,child,userId,
		handleClose,
		handleShow,
		handleUserId
	};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [firstdata, setFirstData] = useState([]);
	const [show, setShow] = useState(false);
	const [child, setChild] = useState("")

	const handleClose = () => {
		setChild("")
		setShow(false)
	};
	const handleShow = (enterChild) => {
		setChild(enterChild)
		setShow(true)
	};

	const handleFirstData = (data) => {
		setFirstData(data);
	};

	const value = { firstdata, handleFirstData, show, handleClose, handleShow , child};

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

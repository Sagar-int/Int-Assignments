import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
	const [firstdata, setFirstData] = useState([]);
	const [show, setShow] = useState(false);
	const [child, setChild] = useState("")
	const [editFlag, setEditFlag] = useState(true)

	const handleClose = () => {
		setChild("")
		setShow(false)
	};
	const handleShow = (enterChild) => {
		setChild(enterChild)
		setShow(true)
	};

	const handleEditButton = (flag_value) => {
		setEditFlag(flag_value)
	};

	const handleFirstData = (data) => {
		setFirstData(data);
	};

	const value = { firstdata, handleFirstData, show, handleClose, handleShow , child, editFlag, handleEditButton };

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

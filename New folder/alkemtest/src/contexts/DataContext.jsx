import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [child, setChild] = useState("");
  const [distributor, setDistributor] = useState(null);
  const [division, setDivision] = useState(null);
  const [depot, setDepot] = useState(null);
  const [prodList, setProdList] = useState("");

  const handleClose = () => {
    setChild("");
    setShow(false);
  };
  const handleShow = (enterChild) => {
    setChild(enterChild);
    setShow(true);
  };

  const handleDistributor = (enterId) => {
    if (enterId !== null) {
      setDistributor(enterId);
    } else {
      setDistributor(null);
      setDivision(null);
      setDepot(null);
      setProdList(null);
    }
  };
  const handleDivision = (enterId) => {
    setDivision(enterId);
  };
  const handleDepot = (enterId) => {
    setDepot(enterId);
  };

  const value = {
    show,
    child,
    distributor,
    division,
    depot,
    prodList,
    handleClose,
    handleShow,
    handleDistributor,
    handleDivision,
    handleDepot,
    setProdList
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

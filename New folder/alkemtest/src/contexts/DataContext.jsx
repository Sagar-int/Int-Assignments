import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  const [child, setChild] = useState("");
  const [distributor, setDistributor] = useState(null);
  const [division, setDivision] = useState(null);
  const [depot, setDepot] = useState(null);
  const [prodList, setProdList] = useState("");
  const [listCount, setListCount] = useState(null);
  const [text, setText] = useState("");
  const [priceIndex, setPriceIndex] = useState(null);

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
      setShow(false);
    } else {
      setDistributor(null);
    }
    setDivision(null);
    setDepot(null);
    setProdList(null);
    setListCount(null);
    setText("");
  };
  const handleDivision = (enterId) => {
    if (enterId !== null) {
      setDivision(enterId);
      setShow(false);
    } else {
      setDivision(null);
    }
    setDepot(null);
    setProdList(null);
    setListCount(null);
    setText("");
  };
  const handleDepot = (enterId) => {
    if (enterId !== null) {
      setDepot(enterId);
      setShow(false);
      setText("");
    } else {
      setDepot(null);
      setProdList(null);
      setListCount(null);
      setText("");
    }
  };

  const value = {
    show,
    child,
    distributor,
    division,
    depot,
    prodList,
    listCount,
    text,
    priceIndex,
    handleClose,
    handleShow,
    handleDistributor,
    handleDivision,
    handleDepot,
    setProdList,
    setListCount,
    setText,
    setShow,
    setPriceIndex,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

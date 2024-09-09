import { createContext, useEffect, useState } from "react";
import {v4 as uuidv4} from "uuid";

export const State = createContext();

export default function StateContext({ children }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [cState,setCState] = useState("");
  const [pan,setPan] = useState("");
  const [gst,setGst] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [width] = useState(641);
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [off, setOff] = useState(0);
  const [sadd1,setSAdd1] = useState("");
  const [sState,setSState] = useState("");
  const [sPin,setSPin] = useState("");
  const [bAdd1,setBAdd1] = useState("");
  const [bState,setBState] = useState("");
  const [bPin,setBPin] = useState("");
  const [taxType,setTaxType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      alert("Empty States");
    } else {
      console.log(cState + " " + sState);
      setTaxType((cState === sState && (cState !== "")) ? "IGST" : ["CGST","SGST"]);
      console.log(taxType);
      const newItems = {
        id:uuidv4(),
        description,
        quantity,
        price,
        amount,
        taxType,
        discount
      };
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setDiscount(0);
      setList([...list, newItems]);
      setIsEditing(false);
      console.log(list);
    }
  };

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price - discount + (quantity*price*18/100));
    };

    calculateAmount(amount);
  }, [amount, price, quantity, setAmount]);

  const calculateTotal = () => {
    const total = list.reduce((acc, item) => acc + item.quantity*item.price - item.discount + (item.quantity*item.price*18/100), 0);
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  });

  // editing row
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setDiscount(editingRow.discount);
  };

  // delete rwo
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    // CalcSum();
    setShowModal(false);
  };
  const context = {
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    phone,
    setPhone,
    bankName,
    setBankName,
    bankAccount,
    setBankAccount,
    website,
    setWebsite,
    clientName,
    setClientName,
    pan,
    setPan,
    gst,
    setGst,
    clientAddress,
    setClientAddress,
    invoiceNumber,
    setInvoiceNumber,
    invoiceDate,
    setInvoiceDate,
    dueDate,
    setDueDate,
    notes,
    setNotes,
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    list,
    setList,
    total,
    setTotal,
    isEditing,
    setIsEditing,
    discount,
    setDiscount,
    off,
    setOff,
    width,
    showModal,
    setShowModal,
    deleteRow,
    editRow,
    handleSubmit,
    sadd1,
    setSAdd1,
    sState,
    setSState,
    sPin,
    setSPin,
    bAdd1,
    setBAdd1,
    bState,
    setBState,
    bPin,
    setBPin,
    taxType,
    cState,
    setCState
  };

  return <State.Provider value={context}>{children}</State.Provider>;
}

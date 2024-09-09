import React, { useContext, useState, useEffect, useRef } from "react";
import { State } from "./Context/stateContext";
import { useReactToPrint } from "react-to-print";
// Import other necessary components
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import Header from "./Header";

function App() {
  const printRef = useRef();
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const {
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
    gst,
    setGst,
    pan,
    setPan,
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
    cState,
    setCState
  } = useContext(State);
  const [isSameAsShipping, setIsSameAsShipping] = useState(false);

  useEffect(() => {
    if (isSameAsShipping) {
      setBAdd1(sadd1);
      setBState(sState);
      setBPin(sPin);
    } else {
      setBAdd1("");
      setBState("");
      setBPin("");
    }
  }, [isSameAsShipping, sadd1, sState, sPin]);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <>
      <main
        className="m-5 p-5 xl:grid grid-cols-2 gap-10 xl:items-start"
        style={{
          maxWidth: "1920px",
          margin: "auto",
        }}
      >
        <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    maxLength={56}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    maxLength={96}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="flex flex-col mt-10">
                {/* Shipping Address */}
                <div className="flex flex-col w-full px-2">
                  <label htmlFor="shippingAddress">
                    Enter your Shipping Address
                  </label>
                  <input
                    type="text"
                    name="shippingAddress"
                    id="shippingAddress"
                    placeholder="Enter your shipping address"
                    maxLength={56}
                    autoComplete="off"
                    value={sadd1}
                    onChange={(e) => setSAdd1(e.target.value)}
                    className="mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Shipping State and PIN */}
                <div className="flex flex-wrap w-full mt-4">
                  <div className="flex flex-col w-full md:w-1/2 px-2">
                    <label htmlFor="shippingState">Enter your State</label>
                    <select
                      id="shippingState"
                      name="shippingState"
                      className="mt-2 p-2 border border-gray-300 rounded"
                      value={sState}
                      onChange={(e) => setSState(e.target.value)}
                    >
                      <option value="" disabled>
                        Select your state
                      </option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-1/2 px-2">
                    <label htmlFor="PIN">Enter your PIN</label>
                    <input
                      type="number"
                      name="PIN"
                      id="PIN"
                      placeholder="Enter your PIN Code"
                      maxLength={56}
                      autoComplete="off"
                      value={sPin}
                      onChange={(e) => setSPin(e.target.value)}
                      className="mt-2 p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </article>

              <article className="flex flex-col mt-10">
                {/* Checkbox to copy shipping address */}
                <div className="flex items-center px-2 mb-4">
                  <button
                    type="button"
                    className={`px-4 py-2 border border-gray-300 rounded ${
                      isSameAsShipping
                        ? "bg-green-500 text-white"
                        : "bg-transparent text-black"
                    }`}
                    onClick={() => {
                      setIsSameAsShipping(!isSameAsShipping);
                    }}
                  >
                    Same as Shipping Address
                  </button>
                </div>

                {/* Billing Address */}
                <div className="flex flex-col w-full px-2">
                  <label htmlFor="billingAddress">
                    Enter your Billing Address
                  </label>
                  <input
                    type="text"
                    name="billingAddress"
                    id="billingAddress"
                    placeholder="Enter your billing address"
                    maxLength={56}
                    autoComplete="off"
                    value={bAdd1}
                    disabled={isSameAsShipping}
                    onChange={(e) => setBAdd1(e.target.value)}
                    className="mt-2 p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Billing State and PIN */}
                <div className="flex flex-wrap w-full mt-4">
                  <div className="flex flex-col w-full md:w-1/2 px-2">
                    <label htmlFor="billingState">Enter your State</label>
                    <select
                      id="billingState"
                      name="billingState"
                      className="mt-2 p-2 border border-gray-300 rounded"
                      value={bState}
                      onChange={(e) => setBState(e.target.value)}
                      disabled={isSameAsShipping}
                    >
                      <option value="" disabled>
                        Select your state
                      </option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col w-full md:w-1/2 px-2">
                    <label htmlFor="billingPIN">Enter your PIN</label>
                    <input
                      type="number"
                      name="billingPIN"
                      id="billingPIN"
                      placeholder="Enter your PIN Code"
                      maxLength={56}
                      autoComplete="off"
                      value={bPin}
                      onChange={(e) => setBPin(e.target.value)}
                      disabled={isSameAsShipping}
                      className="mt-2 p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-8 md:mt-20">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <select
                    id="clientAddress"
                    name="clientAddress"
                    value={cState} onChange={(e)=>setCState(e.target.value)} 
                    className="mt-2 p-2 border border-gray-300 rounded"
                  >
                    <option disabled>
                      Select your client's state
                    </option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter your client's PAN</label>
                  <input
                    type="text"
                    name="PAN"
                    id="PAN"
                    placeholder="Enter your client's PAN"
                    maxLength={96}
                    autoComplete="off"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">Enter your client's GST</label>
                  <input
                    type="text"
                    name="gst"
                    id="gst"
                    placeholder="Enter your client's GST"
                    maxLength={96}
                    autoComplete="off"
                    value={gst}
                    onChange={(e) => setGst(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Order Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Order Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
              {
                <article>
                  <TableForm />
                </article>
              }

              <label htmlFor="notes">Additional Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                maxLength={500}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Invoice Preview */}
        <div className="invoice__preview bg-white p-5 rounded-2xl border-4 border-blue-200">
          <button onClick={handlePrint} className="print-button">
            Print Content
          </button>
          <div className="p-5" ref={printRef}>
            {/* Uncomment these components if you want to use them */}
            <Header />
            <MainDetails />
            <div className="flex flex-row justify-between">
              <ClientDetails />
              <Dates />
            </div>
            <Notes />
            <Table />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

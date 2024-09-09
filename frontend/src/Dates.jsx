import { useContext } from "react";
import { State } from "./Context/stateContext";

export default function Dates() {
  const { invoiceNumber, invoiceDate, dueDate, sadd1, sState, sPin, bAdd1, bState, bPin, cState } = useContext(State);

  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Invoicer number:</span> {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Invoice date:</span> {invoiceDate}
          </li>
          <li className="p-1 ">
            <span className="font-bold">Order date:</span> {dueDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Shipping Address:</span>
            <p>{sadd1}</p>
            <p>{sState}</p>
            <p>{sPin}</p>
          </li>
          <li className="p-1">
            <span className="font-bold">
              Billing Address:
            </span>
            <p>{bAdd1}</p>
            <p>{bState}</p>
            <p>{bPin}</p>
          </li>
          <li className="p-1">
            <span className="font-bold">Place of Delivery:</span>
            <a>{sState}</a>
          </li>
          <li className="p-1">
            <span className="font-bold">Place of Supply:</span>
            <a>{cState}</a>
          </li>
        </ul>
      </article>
    </>
  );
}

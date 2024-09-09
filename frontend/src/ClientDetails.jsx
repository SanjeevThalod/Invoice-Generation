import { useContext } from "react";
import { State } from "./Context/stateContext";

export default function ClientDetails() {
  const { clientName, clientAddress, pan, gst } = useContext(State);

  return (
    <>
      <section className="mt-10">
        Sold by:
        <h2 className="text-2xl uppercase font-bold mb-1 mt-15">{clientName}</h2>
        <p>{clientAddress}</p>
        <h6><b>PAN:</b>{pan}</h6>
        <h6><b>GST:</b>{gst}</h6>
      </section>
    </>
  );
}

import React, { useContext } from "react";
import { State } from "./Context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);

  function numberToWords(num) {
    if (num === 0) return "Zero";
  
    const belowTwenty = [
      "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
      "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen",
      "Seventeen", "Eighteen", "Nineteen"
    ];
  
    const tens = [
      "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
  
    const thousands = ["", "Thousand", "Million", "Billion"];
  
    function helper(n) {
      if (n === 0) return "";
      else if (n < 20) return belowTwenty[n] + " ";
      else if (n < 100) return tens[Math.floor(n / 10)] + " " + helper(n % 10);
      else return belowTwenty[Math.floor(n / 100)] + " Hundred " + helper(n % 100);
    }
  
    let result = "";
    let i = 0;
  
    while (num > 0) {
      if (num % 1000 !== 0) {
        result = helper(num % 1000) + thousands[i] + " " + result;
      }
      num = Math.floor(num / 1000);
      i++;
    }
  
    return result.trim();
  }
  
  

  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Tax</td>
            <td className="font-bold">Discount</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount, discount, taxType }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{taxType === "IGST" ? "IGST(18%)" : "SGST(9%) + CGST(9%)"}</td>
                <td>-{discount}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
        ₹ {total.toLocaleString()}
        </h2>
      </div>

      <h2><span className="font-bold">Total in words: </span>{numberToWords(Math.floor(total))}</h2>
    </>
  );
}

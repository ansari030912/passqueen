"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const InvoicesPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [invoiceDetails, setInvoiceDetails] = useState(null);

  const fetchData = async (page) => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(`${Base_URL}/v1/account/invoices`, {
        headers: {
          "x-api-key": X_API_Key,
          Authorization: `Bearer ${loginResponse._token}`,
        },
      });
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Ensure loading is stopped in case of error
    }
  };

  const fetchInvoiceDetails = async (invoiceId) => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(
        `${Base_URL}/v1/account/invoice/${invoiceId}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setInvoiceDetails(response.data);
    } catch (error) {
      console.error("Error fetching invoice details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-coolGray-50 py-4">
      <div className="container px-4 mx-auto">
        <div className="my-6 text-3xl font-bold border-b pb-8">
          <div className="bg-clip-text text-transparent w-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h2>Purchase Invoices</h2>
          </div>
        </div>
        {data.length <= 0 ? (
          <div className="my-6 text-3xl font-bold text-red-500 text-center h-80 flex flex-col justify-center pb-8">
            <h2>There Is No Purchase Invoice In Your Account History.</h2>
          </div>
        ) : (
          <div className="p-3 mx-auto rounded-md shadow-dashboard">
            <div className="-m-2">
              {loading ? (
                <p className="text-center font-bold text-xl flex justify-center w-full my-28 items-center">
                  Loading...
                </p>
              ) : (
                data.map((item, i) => (
                  <div key={i}>
                    <div className="mb-2.5 bg-neutral-50 border shadow-lg border-neutral-100 rounded-xl">
                      <div className="px-5 py-1">
                        <div className="w-full overflow-x-auto">
                          <table className="w-full min-w-max">
                            <tbody>
                              <tr>
                                <td className="py-3 pr-4">
                                  <div className="flex flex-wrap items-center -m-2.5">
                                    <div className="w-auto p-2.5">
                                      <img
                                        src="/PDF-TE.png"
                                        alt=""
                                        className="h-16"
                                      />
                                    </div>
                                    <div className="w-auto p-2.5">
                                      <span
                                        onClick={() =>
                                          fetchInvoiceDetails(item.invoice_id)
                                        }
                                        className="block mb-1 text-blue-500 cursor-pointer text-sm font-semibold"
                                      >
                                        # {item.invoice_id}
                                      </span>
                                      <span className="block text-xs text-neutral-500">
                                        {moment
                                          .utc(item.invoice_date)
                                          .format("MMM DD yyyy : hh:mm A")}
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="py-3 pl-4">
                                  <div className="flex items-center justify-end">
                                    <div
                                      className={`flex items-center mr-5 px-2 py-1.5 rounded-lg ${
                                        item.invoice_paid
                                          ? "bg-green-500 bg-opacity-10"
                                          : "bg-red-500 bg-opacity-10"
                                      }`}
                                    >
                                      <svg
                                        className="mr-1.5"
                                        width="16"
                                        height="17"
                                        viewBox="0 0 16 17"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d={
                                            item.invoice_paid
                                              ? "M7.99961 14.9C11.5342 14.9 14.3996 12.0346 14.3996 8.50001C14.3996 4.96538 11.5342 2.10001 7.99961 2.10001C4.46499 2.10001 1.59961 4.96538 1.59961 8.50001C1.59961 12.0346 4.46499 14.9 7.99961 14.9ZM10.9653 7.46569C11.2777 7.15327 11.2777 6.64674 10.9653 6.33432C10.6529 6.0219 10.1463 6.0219 9.83392 6.33432L7.19961 8.96863L6.16529 7.93432C5.85288 7.6219 5.34634 7.6219 5.03392 7.93432C4.7215 8.24674 4.7215 8.75327 5.03392 9.06569L6.63392 10.6657C6.94634 10.9781 7.45288 10.9781 7.76529 10.6657L10.9653 7.46569Z"
                                              : "M8 16C11.866 16 15 12.866 15 9C15 5.13401 11.866 2 8 2C4.13401 2 1 5.13401 1 9C1 12.866 4.13401 16 8 16ZM8 14C5.23858 14 3 11.7614 3 9C3 6.23858 5.23858 4 8 4C10.7614 4 13 6.23858 13 9C13 11.7614 10.7614 14 8 14ZM10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L9.41421 9L11.7071 11.2929C12.0976 11.6834 12.0976 12.3166 11.7071 12.7071C11.3166 13.0976 10.6834 13.0976 10.2929 12.7071L8 10.4142L5.70711 12.7071C5.31658 13.0976 4.68342 13.0976 4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L6.58579 9L4.29289 6.70711C3.90237 6.31658 3.90237 5.68342 4.29289 5.29289C4.68342 4.90237 5.31658 4.90237 5.70711 5.29289L8 7.58579L10.2929 5.29289Z"
                                          }
                                          fill={
                                            item.invoice_paid
                                              ? "#20C43A"
                                              : "#FF0000"
                                          }
                                        />
                                      </svg>
                                      <span
                                        className={`text-xs font-medium ${
                                          item.invoice_paid
                                            ? "text-green-500"
                                            : "text-red-500"
                                        }`}
                                      >
                                        {item.invoice_paid ? "Paid" : "Unpaid"}
                                      </span>
                                    </div>
                                    <a
                                      className="inline-block text-blue-500 text-sm hover:text-blue-700 font-medium cursor-pointer"
                                      onClick={() =>
                                        fetchInvoiceDetails(item.invoice_id)
                                      }
                                    >
                                      View
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Invoice Details Modal */}
        {invoiceDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white px-6 pt-4 pb-2 rounded-lg w-11/12 md:w-1/2">
              <h3 className="text-xl font-bold text-blue-500  mb-4">
                Invoice Details
              </h3>
              <h4 className="text-xl text-gray-700  font-semibold mb-2">
                Products:
              </h4>
              <ul className="list-disc text-blue-500 list-inside">
                {invoiceDetails.invoice_products.map((product, i) => (
                  <li key={i} className="mb-1">
                    <strong>{product.title}</strong>: {product.name} (
                    {product.description})
                  </li>
                ))}
              </ul>

              <p className="mb-2 font-semibold text-gray-600 ">
                Invoice ID: {invoiceDetails.invoice_id}
              </p>
              <p className="mb-2 font-semibold text-gray-600 ">
                Invoice Date :{" "}
                {moment
                  .utc(invoiceDetails.invoice_date)
                  .format("MMM DD yyyy : hh:mm A")}
              </p>
              <p className="mb-2 font-semibold text-gray-600 ">
                Status :{" "}
                <span
                  className={`font-bold ${
                    invoiceDetails.invoice_paid
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {invoiceDetails.invoice_paid ? "Paid" : "Unpaid"}
                </span>
              </p>
              <p className="mb-2 font-semibold text-gray-600 ">
                Amount :{" "}
                <span className="text-green-500">
                  ${invoiceDetails.invoice_amount}
                </span>
              </p>
              <div className="border-t flex justify-end border-gray-400 ">
                <button
                  onClick={() => setInvoiceDetails(null)}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InvoicesPage;

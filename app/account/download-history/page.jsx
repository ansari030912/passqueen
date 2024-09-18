"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import moment from "moment";

const DownloadHistory = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10); // Adjust the rows per page as needed
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async (page) => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(
        `${Base_URL}/v1/account/download-history`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
          params: {
            page: page,
            limit: rowsPerPage,
          },
        }
      );
      setData(response.data.history);
      setTotalPages(response.data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false); // Ensure loading is stopped in case of error
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
    setLoading(true);
  };

  return (
    <section className="bg-coolGray-50 py-4">
      <div className="container px-4 mx-auto">
        <div className="my-6 text-3xl font-bold text-blue-500 border-b pb-8">
          <h2>Download History</h2>
        </div>
        {data.length <= 0 ? (
          <div className="my-6 text-3xl font-bold text-red-500 text-center h-80 flex flex-col justify-center pb-8">
            <h2>There Is No Download Product In Your Account History.</h2>
          </div>
        ) : (
          <div className="p-3 mx-auto bg-white rounded-md shadow-xl">
            <div className="flex flex-wrap -m-2">
              {loading ? (
                <p className="text-center font-bold text-xl flex justify-center w-full my-28 items-center">
                  Loading...
                </p>
              ) : (
                data.map((item, i) => (
                  <div key={i} className="w-full p-2">
                    <h3 className="mb-1 font-medium text-lg text-gray-700 flex">
                      <div className="flex text-3xl flex-col justify-center">
                        <p className="text-lg font-medium text-blue-500">
                          {item.title}
                        </p>
                        <p className="text-base font-medium text-green-500">
                          {item.name}
                        </p>
                      </div>
                    </h3>
                    <div className="flex flex-wrap items-center -m-2">
                      <div className="w-auto p-2">
                        <div className="font-medium text-lg flex">
                          <div className="flex flex-col text-sm text-gray-500 justify-center">
                            IP Address : {item.ip}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center pb-4 -m-2">
                      <div className="w-auto p-2">
                        <div className="font-medium text-lg flex">
                          <div className="w-auto flex flex-col justify-center">
                            <p className="text-xs font-medium text-blue-500">
                              <span className="text-gray-600">
                                Purchase Date :{" "}
                              </span>
                              {moment
                                .utc(item.date)
                                .format("MMM DD yyyy : hh:mm A")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-b border-coolGray-100"></div>
                  </div>
                ))
              )}
            </div>
            <div className="flex justify-center mt-4">
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={page}
                  onChange={handlePageChange}
                  variant="outlined"
                  color="primary"
                />
              </Stack>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DownloadHistory;

/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Avatar, Card, Grid, Typography, Button } from "@mui/material";
import moment from "moment";
import Link from "next/link";
import React from "react";

const RecentlyUpdatedCards = async () => {
  const response = await fetch(`${Base_URL}/v1/recently-updated`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  return (
    <section>
      <div className="container mx-auto py-12 px-6">
        <Grid container spacing={4}>
          {data.slice(0, 20).map((item, i) => {
            return (
              <Grid sx={{ width: "100%" }} key={i} item lg={3} md={6} sm={12}>
                <Card
                  sx={{
                    border: "none",
                    boxShadow: "none",
                    minHeight: "245px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  className="p-6 rounded-xl bg-white group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <Avatar
                        alt={item.exam_vendor_title}
                        src={item.exam_vendor_img}
                        variant="square"
                        className="h-16 w-20"
                      />

                      <Typography
                        variant="body2"
                        className="bg-blue-100 px-2 py-1 font-bold text-indigo-500 rounded-lg"
                      >
                        {moment(item.exam_update_date).format("DD MMM YYYY")}
                      </Typography>
                    </div>
                    <hr className="mb-2 border-0 h-1 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300" />
                    <Typography
                      sx={{ fontSize: "15px" }}
                      className="mt-4 font-semibold text-indigo-500"
                    >
                      {item.exam_title}
                    </Typography>
                  </div>
                  <br />
                  <div className="flex justify-between mt-auto">
                    <Typography
                      sx={{ fontSize: "14px" }}
                      variant="body2"
                      className="text-gray-600 font-black"
                    >
                      {item.exam_vendor_title}
                    </Typography>
                    <Typography
                      sx={{ fontSize: "14px" }}
                      variant="body2"
                      className="text-gray-600 font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    >
                      {item.exam_code}
                    </Typography>
                  </div>
                  <div className="absolute inset-0 bg-indigo-50 bg-opacity-70 backdrop-blur-sm flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      style={{ fontSize: "14px" }}
                      href={"/"}
                      className="bg-indigo-500 opacity-90 px-6 py-3 font-black rounded-lg shadow-lg border-indigo-400 text-white shadow-neutral-300 border-2"
                    >
                      Buy Now
                    </Link>
                  </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default RecentlyUpdatedCards;

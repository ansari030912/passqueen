/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Card, Grid, Typography, ButtonGroup, Button } from "@mui/material";
import Link from "next/link";

const ExamPageHotExam = ({ data }) => {
  const [view, setView] = useState("monthly");

  const exams = view === "monthly" ? data.month : data.week;

  return (
    <section className="bg-white">
      <div className="container py-12 flex justify-center mx-auto px-4 lg:px-0">
        <Grid
          container
          className="flex justify-center lg:justify-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <div className="text-center mb-18">
              <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                PASSQUEEN.COM
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span>Hot Exams</span>
                <span
                  className={`font-serif italic cursor-pointer ${
                    view === "monthly" ? "text-blue-500" : ""
                  }`}
                  onClick={() => setView("monthly")}
                >
                  {" "}
                  Monthly
                </span>{" "}
                &{" "}
                <span
                  className={`font-serif italic cursor-pointer ${
                    view === "weekly" ? "text-blue-500" : ""
                  }`}
                  onClick={() => setView("weekly")}
                >
                  Weekly
                </span>
              </h1>
              {/* <p className="text-gray-500">
                Risus viverra justo sagittis vestibulum metus.
              </p> */}
            </div>
          </Grid>
          {exams.slice(0, 9).map((exam) => (
            <Grid
              sx={{ width: "100%" }}
              item
              sm={12}
              md={6}
              lg={4}
              key={exam.exam_id}
            >
              <Card
                sx={{
                  borderRadius: "8px",
                  boxShadow: "none",
                  paddingX: "20px",
                  paddingY: "8px",
                  position: "relative",
                  overflow: "hidden",
                  "&:hover .overlay": {
                    opacity: 1,
                  },
                  minHeight: "100px",
                }}
                className="bg-gray-50"
              >
                <div className="flex">
                  <div className="py-5  w-full">
                    <Typography
                      sx={{ fontSize: "12px" }}
                      className="text-gray-700 flex justify-between mb-2 text-base"
                    >
                      <span>
                        <span className="">{exam.vendor_title} </span>
                        {" - "}
                        <span
                          style={{ fontWeight: 600 }}
                          className="bg-clip-text font-black text-transparent bg-gradient-to-r text-base from-indigo-500 via-purple-500 to-pink-500 mb-2"
                        >
                          {exam.exam_code}
                        </span>
                      </span>
                    </Typography>

                    <Typography className="text-gray-500 text-sm">
                      {exam.exam_title}
                    </Typography>
                    <div className="absolute inset-0 bg-indigo-50 bg-opacity-70 backdrop-blur-sm flex justify-center items-center opacity-0 transition-opacity duration-300 overlay">
                      <Link
                        style={{ fontSize: "14px" }}
                        href={`/exam-training/${exam.vendor_perma}/${exam.exam_perma}`}
                        className="bg-indigo-500 opacity-90 px-6 py-3 font-bold rounded-lg shadow-lg border-indigo-400 text-white shadow-neutral-300 border-2"
                      >
                        BUY NOW <span className="font-base">({exam.exam_code})</span>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <img
                      src="/product2.png"
                      style={{ maxheight: "45px", maxWidth: "75px" }}
                      alt=""
                    />
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default ExamPageHotExam;

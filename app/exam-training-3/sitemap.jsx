export default async function sitemap() {
  const response = await fetch("https://certsgang.com/v1/sitemap/exams/3", {
    headers: {
      "x-api-key": "6c9178c3-fe06-46db-bec7-bb63d5f91211",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  

  return data?.exams?.map((item) => ({
    url: `https://passqueen.com/exam-training/${item?.vendor_perma}/${item?.exam_perma}`,
    lastModified: "2024-09-17",
    priority: 0.6,
  }));
}

import CustomInvoiceCart from "../CustomInvoiceCart";

export async function generateMetadata({ params }) {
  return {
    title: `Pass Queen Discount Invoice`,
    description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
    referrer: "no-referrer",
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://passqueen.com/custom-invoice/${params.invoice_perma}`,
        },
      ],
    },
  };
}

const page = ({ params }) => {
  return <CustomInvoiceCart params={params} />;
};

export default page;

import CartCard from "./CartCard";

const Page = () => {
  return <CartCard />;
};

export default Page;

export async function generateMetadata() {
  return {
    title: `Updated Exam Training by Tech Professionals`,
    description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
    referrer: "no-referrer",
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://passqueen.com/cart`,
        },
      ],
    },
  };
}

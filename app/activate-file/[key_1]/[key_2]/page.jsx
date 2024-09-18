import MasterKeyCard from "@/app/components/Pricing/MasterKeyCard";

const page = ({ params }) => {
  return <MasterKeyCard params={params} />;
};

export default page;
export async function generateMetadata({ params }) {
  return {
    title: `Test Engine Master Activation Key`,
    description: `PassQueen is a premium provider of Real and Valid Exam Training of IT certification Exams. Pass your certification exam easily with pdf and test engine exams in 2024.`,
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://passqueen.com/activate-file/${params.key_1}/${params.key_2}`,
        },
      ],
    },
  };
}

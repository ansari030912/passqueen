import MasterKeyCard from "@/app/components/Pricing/MasterKeyCard";

const page = ({ params }) => {
  return <MasterKeyCard params={params} />;
};

export default page;
export async function generateMetadata({ params }) {
  return {
    title: `TEST ENGINE Master Key`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: false,
    },
    icons: {
      other: [
        {
          rel: "canonical",
          url: `https://study4pass.com/activate-file/${params.key_1}/${params.key_2}`,
        },
      ],
    },
  };
}

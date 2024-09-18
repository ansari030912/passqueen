/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const AboutUs = async () => {
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();
  return (
    <>
      <section className="pt-6 px-6">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <section
        className="py-4"
        style={{
          backgroundImage: `url('/pattern-white.png')`,
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -mx-4">
            <div className="w-full md:w-12/12 px-4">
              <h2 className="mb-4 text-2xl md:text-3xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold tracking-tighter">
                About - Committed to Your IT Certification Success
              </h2>

              <p className="mb-4 text-base md:text-lg font-medium text-gray-500">
                PassQueen.com is dedicated to providing candidates with
                comprehensive study materials for all types of IT
                certifications. We guarantee that our resources not only help
                you pass your exams but also deepen your understanding of the
                respective subjects. While there are many companies in the
                certification industry, PassQueen.com stands out for its unique
                approach and commitment to quality.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:flex-1 px-4">
              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Latest Study Materials
              </h3>
              <p className="pb-4 text-lg text-gray-500 border-gray-100">
                At PassQueen.com, you’ll find the latest and most accurate
                study materials for all kinds of IT certification exams. Whether
                you&apos;re pursuing certifications from IBM, Microsoft, Cisco
                (CCNA/CCDA/CCNP), VMware VCP510, Checkpoint CCSE, CompTIA
                A+/Network+, or others, we help you pass any IT exam on your
                first try.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Accurate and Up-to-Date
              </h3>
              <p className="mb-4 pb-4 text-lg text-gray-500 border-b border-gray-100">
                Our focus is on accuracy and relevance. We offer fewer questions
                at a reasonable price because we prioritize quality over
                quantity. For example, while some companies might offer 800+
                questions for the CCNA exam, we provide only 300 questions,
                carefully curated to ensure you’re studying only the most
                relevant material. This saves you time and ensures you&apos;re
                well-prepared for the real exam.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Quality Over Quantity
              </h3>
              <p className="mb-4 text-lg text-gray-500">
                Our study materials include high-quality questions, verified
                answers, and professional explanations that cover all the
                essential knowledge points. With an emphasis on the main topics
                and concise summaries, our materials cover at least 95% of the
                exam questions, giving you the best chance of success.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Continuous Updates
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                We continuously monitor changes in the certification exams and
                update our products accordingly. Any changes made by the exam
                vendors are quickly reflected in our materials, ensuring that
                you always have access to the most current and effective study
                tools.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Make an Informed Choice
              </h3>
              <p className="mb-8 text-lg font-medium text-gray-500">
                With these advantages, you can make an informed choice about
                your study materials. If you have any questions or need further
                information, feel free to contact us at sales@passqueen.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

export async function generateMetadata() {
  return {
    title: `Study4Pass About`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://passqueen.com/about",
    },
  };
}

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";

const PrivacyPolicy = async () => {
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
          <div className="flex flex-wrap lg:items-center  -mx-4">
            <div className="w-full md:w-12/12 px-4">
              <h2 className="mb-4 text-2xl md:text-3xl leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold tracking-tighter">
                Welcome to the PassQueen.com Privacy Center
              </h2>

              <p className="mb-4 text-base md:text-xl font-medium text-gray-500">
                PassQueen.com respects your privacy. Through this notice, we
                commit to protecting your privacy and ensuring that your data is
                handled responsibly.
              </p>
              <p className=" mb-4 text-base md:text-xl font-medium text-gray-500">
                In the following sections, we explain how your data is collected
                and used.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:flex-1 px-4">
              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Scope of Privacy Notice
              </h3>
              <p className="pb-6 text-lg text-gray-500 border-gray-100">
                This privacy notice explains how PassQueen.com handles personal
                identification information shared by users and business entities
                when visiting https://passqueen.com and its associated servers.
                By registering as a member of PassQueen.com, you agree to the
                terms of this privacy notice.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                User Email and Password
              </h3>
              <p className="mb-4 pb-6 text-lg text-gray-500 border-b border-gray-100">
                When registering at PassQueen.com, you are required to provide
                an effective email address and create a password. Your email
                address will serve as your username, and the password is the key
                to accessing your account. It is important to choose a strong
                password and keep it secure. If you forget your password, you
                can recover it using the provided tools or by contacting our
                support team. PassQueen.com holds no responsibility for any
                damage caused by a lost password due to individual mistakes or
                improper use of the Member&apos;s Area.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Information Collection
              </h3>
              <p className="mb-2 text-lg text-gray-500">
                PassQueen.com collects personal identification information
                during registration and when you use our products or services.
                This includes your name, email address, and other details
                necessary for providing our services. If you choose to use our
                Products Delivery Service, additional information such as your
                address, phone number, and postal code will be required.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Use of Information
              </h3>
              <p className="mb-2 text-lg text-gray-500">
                The information collected is used to offer you personalized
                services and to improve the quality of our products. After
                becoming a member, you may receive information about promotions,
                new products, services, and other updates. You may also request
                assistance from our support team using the information provided.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Sharing Information
              </h3>
              <p className="mb-2 text-lg text-gray-500">
                PassQueen.com does not share, sell, rent, or disclose your
                personal information to third parties, except under the
                following circumstances:
              </p>
              <ul className="list-disc pl-5 text-lg text-gray-500">
                <li>With your explicit permission.</li>
                <li>
                  When necessary to provide the products or services you have
                  requested.
                </li>
                <li>When required by law or government authorities.</li>
                <li>
                  When we determine that you have violated our service terms or
                  other agreements.
                </li>
              </ul>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Cookies
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                PassQueen.com uses cookies to enhance your browsing experience
                by storing data related to your visits. Cookies help us
                recognize you on subsequent visits and allow us to tailor our
                services to your preferences. You can choose to accept or refuse
                cookies by adjusting your browser settings. Refusing cookies may
                limit your ability to use certain features of our website.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Credit Card Information
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                For online payments, PassQueen.com requires you to enter your
                credit card information on secure payment processor websites. We
                do not store any payment information on our servers. Our online
                payments are handled through secure third-party gateways, and we
                use SSL encryption to protect data transmission. If our payment
                gateway detects potential fraud, you may receive an inquiry
                email requesting additional information to verify your identity.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                External Links
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                PassQueen.com may contain links to external websites. We are
                not responsible for the privacy practices or content of these
                external sites. Any related company websites added to
                PassQueen.com will only receive general information, and your
                personal identification information will not be disclosed.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Privacy Policy Revisions
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                PassQueen.com is committed to continuously improving our
                privacy practices. As our services expand, we will update this
                privacy policy as necessary. You can review the most current
                version of the policy at any time. We will not notify users of
                updates unless there is a significant change in how we handle
                personal information.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Contact PassQueen.com
              </h3>
              <p className="mb-8 text-lg md:text-xl font-medium text-gray-500">
                If you have any questions about our privacy practices, please
                contact us at sales@passqueen.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;

export async function generateMetadata() {
  return {
    title: `Study4Pass privacy-policy`,
    description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
    robots: {
      index: true,
    },
    alternates: {
      canonical: "https://passqueen.com/privacy-policy",
    },
  };
}

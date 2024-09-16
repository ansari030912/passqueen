/* eslint-disable @next/next/no-img-element */
import React from "react";
const testimonials = [
  {
    text: "I aced my Amazon certification thanks to the detailed practice exams on PassQueen.",
    name: "Jane Smith",
    country: "USA",
    mail: "jane.s@outlook.com",
    gender: "Female",
  },
  {
    text: "The best resource for Microsoft certification prep. PassQueen's test engine is unmatched!",
    name: "Robert Johnson",
    country: "UK",
    mail: "rjohnson_cert@certmail.com",
    gender: "Male",
  },
  {
    text: "Dell certification was a breeze with PassQueen. Their test engine is simply the best.",
    name: "Emily Davis",
    country: "Canada",
    mail: "emily.d@examresources.ca",
    gender: "Female",
  },
  {
    text: "PMI exams were tough, but PassQueen made it manageable. Fantastic test engine!",
    name: "Michael Wilson",
    country: "Australia",
    mail: "m.wilson@mail.com",
    gender: "Male",
  },
  {
    text: "The Riverbed exam was easy to tackle with the help of PassQueen's thorough test engine.",
    name: "Jessica Taylor",
    country: "Germany",
    mail: "jtaylor123@riverbedprep.de",
    gender: "Female",
  },
  {
    text: "RSA certifications felt easier with Pass Queen outstanding practice tests.",
    name: "William Martinez",
    country: "France",
    mail: "william.martinez@franceprep.fr",
    gender: "Male",
  },
  {
    text: "I highly recommend PassQueen for SAFe certification prep. Their test engine is the best!",
    name: "Linda Anderson",
    country: "Brazil",
    mail: "linda.anderson001@passbr.com",
    gender: "Female",
  },
  {
    text: "Salesforce certification exams are well covered on PassQueen. Excellent test engine!",
    name: "Christopher Thomas",
    country: "India",
    mail: "chris_t@salesforceprep.in",
    gender: "Male",
  },
  {
    text: "SANS certification prep was simplified with PassQueen. Great resource!",
    name: "Susan Jackson",
    country: "Japan",
    mail: "susan.j@sansprep.jp",
    gender: "Female",
  },
  {
    text: "SAP exams are extensive, but PassQueen's test engine covered everything I needed.",
    name: "Charles White",
    country: "Italy",
    mail: "charles.white@sapitaly.it",
    gender: "Male",
  },
  {
    text: "PassQueen helped me pass my SAS Institute exams with ease. Their test engine is superb!",
    name: "Patricia Harris",
    country: "South Africa",
    mail: "p.harris@prepza.co.za",
    gender: "Female",
  },
  {
    text: "The Scaled Agile exam was tough, but PassQueen's practice tests made it manageable.",
    name: "Daniel Lewis",
    country: "Netherlands",
    mail: "dlewis@scaledprep.nl",
    gender: "Male",
  },
  {
    text: "Scrum certification prep was straightforward with Pass Queen excellent test engine.",
    name: "Barbara Clark",
    country: "Sweden",
    mail: "barbara@passcert.se",
    gender: "Female",
  },
  {
    text: "SDI exam prep was a breeze with PassQueen. Highly recommend their test engine!",
    name: "Paul Robinson",
    country: "Norway",
    mail: "p.robinson78@sdi-cert.no",
    gender: "Male",
  },
  {
    text: "ServiceNow certification was made easier with PassQueen. The test engine is top-notch!",
    name: "Nancy Walker",
    country: "Mexico",
    mail: "nancy_walk@servicenow.mx",
    gender: "Female",
  },
  {
    text: "Sitecore exam prep is fantastic on PassQueen. Great test engine!",
    name: "Kevin Hall",
    country: "Argentina",
    mail: "khall@sitecoreprep.com",
    gender: "Male",
  },
  {
    text: "Six Sigma certification was achievable thanks to PassQueen's thorough test engine.",
    name: "Karen Young",
    country: "Russia",
    mail: "karen.young@sigmaprep.ru",
    gender: "Female",
  },
  {
    text: "Slack certification was smooth with the help of Pass Queen excellent test engine.",
    name: "Donald Hernandez",
    country: "Chile",
    mail: "donald.h@slackprep.cl",
    gender: "Male",
  },
  {
    text: "PassQueen made SNIA certification prep simple and effective. Highly recommended!",
    name: "Betty King",
    country: "New Zealand",
    mail: "betty.king@sniaprep.co.nz",
    gender: "Female",
  },
  {
    text: "If you're looking for the best test engine for Cisco exams, PassQueen is the answer!",
    name: "Thomas Wright",
    country: "Singapore",
    mail: "twright@passqueen.sg",
    gender: "Male",
  },
  {
    text: "RSA certification was easy to achieve with Pass Queen thorough practice exams.",
    name: "Kenneth Gonzalez",
    country: "Austria",
    mail: "kenneth_g@rsa.at",
    gender: "Male",
  },
];

const testimonialsTwo = [
  {
    text: "Salesforce certification was manageable thanks to Pass Queen great test engine.",
    name: "Matthew Carter",
    country: "Belgium",
    mail: "m.carter@certify.be",
    gender: "Male",
  },
  {
    text: "PassQueen's test engine is the best for SANS certification prep. Highly recommended!",
    name: "Betty Mitchell",
    country: "Finland",
    mail: "betty.mitchell@prepfi.fi",
    gender: "Female",
  },
  {
    text: "I passed my SAP exams with ease thanks to PassQueen. Great test engine!",
    name: "Steven Perez",
    country: "Malaysia",
    mail: "steven@passqueen.my",
    gender: "Male",
  },
  {
    text: "SAS Institute certification was easy with the help of Pass Queen detailed practice tests.",
    name: "Linda Roberts",
    country: "Indonesia",
    mail: "linda_roberts@pass.id",
    gender: "Female",
  },
  {
    text: "PassQueen made Scaled Agile exam prep straightforward and effective.",
    name: "George Turner",
    country: "Thailand",
    mail: "george.turner@agileprep.th",
    gender: "Male",
  },
  {
    text: "Scrum certification was simple with PassQueen. Their test engine is top-notch!",
    name: "Sarah Phillips",
    country: "Israel",
    mail: "sarah.p@scrumcert.il",
    gender: "Female",
  },
  {
    text: "SDI exam prep was efficient with Pass Queen excellent test engine.",
    name: "Edward Campbell",
    country: "Denmark",
    mail: "edward_camp@sdi.dk",
    gender: "Male",
  },
  {
    text: "ServiceNow certification was easier with PassQueen. Their resources are fantastic.",
    name: "Deborah Parker",
    country: "Poland",
    mail: "deborah.p@servicenow.pl",
    gender: "Female",
  },
  {
    text: "Sitecore exam prep was effective with the help of Pass Queen test engine.",
    name: "Joseph Evans",
    country: "Czech Republic",
    mail: "joseph.evans@sitecore.cz",
    gender: "Male",
  },
  {
    text: "PassQueen's test engine made Six Sigma certification a smooth process.",
    name: "Dorothy Edwards",
    country: "Turkey",
    mail: "dorothy.edwards@sigma.tr",
    gender: "Female",
  },
  {
    text: "Slack certification was straightforward with Pass Queen detailed practice exams.",
    name: "Larry Collins",
    country: "Hungary",
    mail: "larry_collins@slackprep.hu",
    gender: "Male",
  },
  {
    text: "SNIA exam prep was simplified with Pass Queen fantastic test engine.",
    name: "Sandra Stewart",
    country: "Greece",
    mail: "sandra.stewart@sniaprep.gr",
    gender: "Female",
  },
  {
    text: "Cisco certification was manageable with the help of PassQueen. Excellent test engine!",
    name: "Raymond Morris",
    country: "Iceland",
    mail: "raymond@passqueen.is",
    gender: "Male",
  },
  {
    text: "Amazon exams were easier with Pass Queen thorough test engine. Highly recommend!",
    name: "Sharon Rogers",
    country: "Portugal",
    mail: "sharon.rogers@amazonprep.pt",
    gender: "Female",
  },
  {
    text: "I passed my Microsoft certification thanks to PassQueen. Their test engine is the best!",
    name: "Jerry Reed",
    country: "Bulgaria",
    mail: "jreed@microsoftprep.bg",
    gender: "Male",
  },
  {
    text: "Pass Queen test engine is incredibly user-friendly and effective for Riverbed exams.",
    name: "Sarah Hill",
    country: "Romania",
    mail: "s.hill@riverbed.ro",
    gender: "Female",
  },
  {
    text: "The RSA practice exams on PassQueen are top-notch. The test engine is unparalleled!",
    name: "Brian Scott",
    country: "Slovakia",
    mail: "brian_scott@rsaprep.sk",
    gender: "Male",
  },
  {
    text: "I passed my SAFe certification with flying colors thanks to PassQueen.",
    name: "Laura Green",
    country: "Lithuania",
    mail: "laura.green@safecert.lt",
    gender: "Female",
  },
  {
    text: "Pass Queen test engine made my Salesforce certification preparation a breeze!",
    name: "Kevin Adams",
    country: "Latvia",
    mail: "kevin.adams@salesforce.lv",
    gender: "Male",
  },
  {
    text: "The SANS exam prep on PassQueen is outstanding.",
    name: "Lisa Baker",
    country: "Estonia",
    mail: "lisa.baker@sansprep.ee",
    gender: "Female",
  },
  {
    text: "PassQueen has the best test engine for SAP certifications. I passed with ease!",
    name: "Eric Nelson",
    country: "Luxembourg",
    mail: "eric_nelson@sapcert.lu",
    gender: "Male",
  },
  {
    text: "I’m so grateful for Pass Queen test engine!",
    name: "Kimberly Carter",
    country: "Malta",
    mail: "kimberly.carter@passmt.com",
    gender: "Female",
  },
];

const duplicatedTestimonials = testimonials.concat(testimonials);
const duplicatedTestimonialsTwo = testimonialsTwo.concat(testimonialsTwo);

const keyframesScrollLeft = `
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const keyframesScrollRight = `
  @keyframes scroll-right {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const TestimonialsSection = () => {
  return (
    <>
      <style>
        {keyframesScrollLeft}
        {keyframesScrollRight}
      </style>

      <section
        className="bg-gray-50"
        style={{
          padding: "60px 0",
          overflow: "hidden",
        }}
      >
        <div>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.25rem",
              fontWeight: "bold",
              marginBottom: "25px",
              // color: "#1f2937",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Testimonials from Our Users
            </span>
          </h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.125rem",
              marginBottom: "45px",
              color: "#4b5563",
            }}
          >
            Study4Pass made my certification exam prep easy and successful!
          </p>

          <div className="row">
            {/* First row - scrolling from left to right */}
            <div
              style={{
                display: "flex",
                width: "max-content",
                animation: "scroll-left 55s linear infinite",
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    width: "420px",
                    margin: "0 12px",
                    backgroundColor: "#ffffff",
                    padding: "30px",
                    borderRadius: "6px",
                    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                    // backgroundImage: "url(/bg-cut-3.png)",
                  }}
                  className="bg-cover "
                >
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4b5563",
                        marginBottom: "20px",
                      }}
                    >
                      <span className="text-xl text-blue-500">&quot;</span>
                      <i>{testimonial.text}</i>
                      <span className="text-xl text-blue-500">&quot;</span>
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={`${testimonial.gender}.png`}
                        alt={testimonial.name}
                        style={{
                          width: "55px",
                          height: "55px",
                          borderRadius: "50%",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                          }}
                        >
                          {testimonial.name}
                        </h3>
                        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                          {testimonial.mail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <br />

            <div
              style={{
                display: "flex",
                width: "max-content",
                animation: "scroll-right 55s linear infinite",
              }}
            >
              {duplicatedTestimonialsTwo.map((testimonial, index) => (
                <div
                  key={index}
                  style={{
                    width: "420px",
                    margin: "0 12px",
                    backgroundColor: "#ffffff",
                    padding: "30px",
                    borderRadius: "6px",
                    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.05)",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                    // backgroundImage: "url(/bg-cut-3.png)",
                  }}
                  className="bg-cover "
                >
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "#4b5563",
                        marginBottom: "20px",
                      }}
                    >
                      <span className="text-xl text-blue-500">&quot;</span>
                      <i>{testimonial.text}</i>
                      <span className="text-xl text-blue-500">&quot;</span>
                    </p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={`${testimonial.gender}.png`}
                        alt={testimonial.name}
                        style={{
                          width: "55px",
                          height: "55px",
                          borderRadius: "50%",
                          marginRight: "15px",
                        }}
                      />
                      <div>
                        <h3
                          style={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#1f2937",
                          }}
                        >
                          {testimonial.name}
                        </h3>
                        <p style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                          {testimonial.mail}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;

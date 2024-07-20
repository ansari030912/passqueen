/* eslint-disable @next/next/no-img-element */
// "use client";

// const frameworks = [
//   { name: "HTML", icon: "path/to/html-icon.png" },
//   { name: "Vue 3", icon: "path/to/vue3-icon.png" },
//   { name: "NuxtJS", icon: "path/to/nuxtjs-icon.png" },
//   { name: "NextJS 14", icon: "path/to/nextjs-icon.png", selected: true },
//   { name: "Laravel", icon: "path/to/laravel-icon.png" },
//   { name: "Vue + Laravel", icon: "path/to/vue-laravel-icon.png" },
//   { name: ".Net Core", icon: "path/to/netcore-icon.png" },
//   { name: "Django", icon: "path/to/django-icon.png" },
//   { name: "Figma", icon: "path/to/figma-icon.png" },
// ];

// const FrameworkCard = ({ framework, isSelected }) => (
//   <div
//     className={`flex flex-col items-center p-4 ${
//       isSelected ? "border-2 border-indigo-500" : "border border-gray-300"
//     } rounded-lg`}
//   >
//     <img src={framework.icon} alt={framework.name} className="h-10 w-10 mb-2" />
//     <span>{framework.name}</span>
//   </div>
// );

const HomePage = () => {
  return (
    <section className="lg:-mt-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 p-4 lg:pt-20">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Efficiently Conquer Your Next Certification Exam!
            </h1>
            <p className="mt-4 text-gray-600">
              Easily pass your exams and certifications with courses certified
              by IT professionals. Achieve excellence with expert-approved
              training programs.
            </p>
            <div className="flex flex-wrap mt-8 space-y-6 space-x-3 md:space-y-3 lg:-ml-4 md:space-x-4">
              <div className="text-center text-transparent"></div>
              <div className="text-center p-4 border-white border-2 rounded-lg shadow-md w-full sm:w-1/2 md:w-auto flex-grow">
                <span className="block text-2xl font-bold">20K+</span>
                <span className="text-gray-600">Trust Vuexy</span>
              </div>
              <div className="text-center p-4 border-white border-2 rounded-lg shadow-md w-full sm:w-1/2 md:w-auto flex-grow">
                <span className="block text-2xl font-bold">5,000+</span>
                <span className="text-gray-600">Resolved Tickets</span>
              </div>
              <div className="text-center p-4 border-white border-2 rounded-lg shadow-md w-full sm:w-1/2 md:w-auto flex-grow">
                <span className="block text-2xl font-bold">5,000+</span>
                <span className="text-gray-600">Resolved Tickets</span>
              </div>
              <div className="text-center p-4 border-white border-2 rounded-lg shadow-md w-full sm:w-1/2 md:w-auto flex-grow">
                <span className="block text-2xl font-bold">600+</span>
                <span className="text-gray-600">5★ Reviews</span>
              </div>
              <div className="text-center p-4 border-white border-2 rounded-lg shadow-md w-full sm:w-1/2 md:w-auto flex-grow">
                <span className="block text-2xl font-bold">600+</span>
                <span className="text-gray-600">5★ Reviews</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 p-4 flex items-center justify-center">
            <img
              src="/examprince-herosection.png"
              alt="Dashboard"
              className=""
            />
          </div>
        </div>
        {/* <div className="mt-10 flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
          {frameworks.map((framework) => (
            <FrameworkCard
              key={framework.name}
              framework={framework}
              isSelected={framework.selected}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default HomePage;

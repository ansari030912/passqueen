"use client";
/* eslint-disable @next/next/no-img-element */
import IconButton from "@mui/material/IconButton";
import { useEffect, useState } from "react";

const CertificationHome = () => {
  const exams = [
    {
      name: "Developer Associate",
      image: "2",
      perma: "aws-certified-developer-associate-certification",
      vendor: "AWS",
      vendorPerma: "aws",
      rating: 4.3,
    },
    {
      name: "Solution Architect Associate",
      perma: "aws-certified-solutions-architect-associate-certification",
      image: "3",
      vendor: "AWS",
      vendorPerma: "aws",
      rating: 4.5,
    },
    {
      name: "Solution Architect Professional",
      perma: "aws-certified-solutions-architect-professional-certification",
      image: "6",
      vendor: "AWS",
      vendorPerma: "aws",
      rating: 5,
    },
    {
      name: "SysOps Administrator - Associate",
      perma: "aws-certified-sysops-administrator-associate-certification",
      image: "7",
      vendor: "AWS",
      vendorPerma: "aws",
      rating: 4.2,
    },
    {
      name: "CCNA",
      perma: "ccna",
      image: "11",
      vendor: "Cisco",
      vendorPerma: "cisco",
      rating: 4.6,
    },
    {
      name: "CCNP - Enterprise",
      perma: "ccnp-enterprise",
      image: "12",
      vendor: "Cisco",
      vendorPerma: "cisco",
      rating: 5,
    },
    {
      name: "CCIE - Enterprise Wireless",
      perma: "ccna-enterprise-wireless",
      image: "13",
      vendor: "Cisco",
      vendorPerma: "cisco",
      rating: 4.9,
    },
    {
      name: "Azure Solutions Architect Expert",
      perma: "azure-solutions-architect-expert",
      image: "14",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.5,
    },
    {
      name: "Azure Fundamentals",
      perma: "azure-fundamentals",
      image: "15",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.3,
    },
    {
      name: "Enterprise Administrator - Expert",
      perma: "Microsoft-365-certified-enterprise-administrator-expert",
      image: "16",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.4,
    },
    {
      name: "Azure Administrator - Associate",
      perma: "azure-administrator-associate",
      image: "17",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.8,
    },
    {
      name: "MCSA Windows Server 2016",
      perma: "mcsa-windows-server-2016",
      image: "18",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.1,
    },
    {
      name: "MCSE",
      perma: "mcse-Microsoft-certified-solutions-expert",
      image: "20",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 5,
    },
    {
      name: "MCSA Web Applications",
      perma: "mcsa-web-applications",
      image: "21",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.6,
    },
    {
      name: "MCSA SQL 2016 Database Administration",
      perma: "mcsa-sql-2016-database-administration",
      image: "22",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.5,
    },
    {
      name: "MCSE Core Infrastructure",
      perma: "mcse-core-infrastructure",
      image: "23",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4,
    },
    {
      name: "MCSE Productivity Solutions",
      perma: "mcse-productivity-solutions-expert",
      image: "24",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.7,
    },
    {
      name: "MCSE Data Management and Analytics",
      perma: "mcse-data-management-and-analytics",
      image: "25",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
      rating: 4.9,
    },
    {
      name: "CompTIA CASP",
      perma: "cmcse-core-infrastructure",
      image: "26",
      vendor: "CompTIA",
      vendorPerma: "comptia",
      rating: 4,
    },
    {
      name: "CompTIA A+",
      perma: "comptia-a-plus-certification",
      image: "27",
      vendor: "CompTIA",
      vendorPerma: "comptia",
      rating: 4.8,
    },
    {
      name: "CompTIA Linux+",
      perma: "comptia-linux-plus-certification",
      image: "28",
      vendor: "CompTIA",
      vendorPerma: "comptia",
      rating: 4.5,
    },
    {
      name: "CompTIA Network+",
      perma: "comptia-network",
      image: "29",
      vendor: "CompTIA",
      vendorPerma: "comptia",
      rating: 4.7,
    },
    {
      name: "CompTIA Security+",
      perma: "comptia-security",
      image: "30",
      vendor: "CompTIA",
      vendorPerma: "comptia",
      rating: 4.6,
    },
    {
      name: "CCA-V Professional Virtualization",
      perma: "cca-v",
      image: "32",
      vendor: "Citrix",
      vendorPerma: "citrix",
      rating: 4.4,
    },
    {
      name: "CCP-V Expert Virtualization",
      perma: "ccp-v-certification",
      image: "34",
      vendor: "citrix",
      vendorPerma: "citrix",
      rating: 4.8,
    },
    {
      name: "CISM",
      perma: "cism-certification",
      image: "35",
      vendor: "Isaca",
      vendorPerma: "isaca",
      rating: 5,
    },
    {
      name: "CISSP",
      perma: "cissp-certification",
      image: "37",
      vendor: "Isc",
      vendorPerma: "isc",
      rating: 4.9,
    },
    {
      name: "Google Cloud Certified",
      perma: "google-cloud-certified",
      image: "38",
      vendor: "Google",
      vendorPerma: "google",
      rating: 4.7,
    },
    {
      name: "Checkpoint CCSA R80",
      perma: "ccsa-r80",
      image: "39",
      vendor: "Checkpoint",
      vendorPerma: "checkpoint",
      rating: 4.3,
    },
    {
      name: "CCSE R80",
      perma: "ccse-update",
      image: "40",
      vendor: "Checkpoint",
      vendorPerma: "checkpoint",
      rating: 5,
    },
    {
      name: "CEH Certified Ethical Hacker",
      perma: "ceh-certification",
      image: "41",
      vendor: "Eccouncil",
      vendorPerma: "eccouncil",
      rating: 4.8,
    },
    {
      name: "LPIC Level 1",
      perma: "lpic-level-1",
      image: "42",
      vendor: "Lpi",
      vendorPerma: "lpi",
      rating: 4.5,
    },
    {
      name: "LPIC Level 2",
      perma: "lpic-level-2-certification",
      image: "43",
      vendor: "Lpi",
      vendorPerma: "lpi",
      rating: 4.4,
    },
    {
      name: "LPIC Level 3",
      perma: "lpic-level-3-certification",
      image: "44",
      vendor: "Lpi",
      vendorPerma: "lpi",
      rating: 5,
    },
    {
      name: "PCNSE",
      perma: "pcnse",
      image: "45",
      vendor: "Poloalto Networks",
      vendorPerma: "poloalto-networks",
      rating: 4.6,
    },
    {
      name: "JNCIA Junos",
      perma: "jncia-junos-certification",
      image: "46",
      vendor: "Juniper",
      vendorPerma: "juniper",
      rating: 4.7,
    },
    {
      name: "TOGAF 9 Certified",
      perma: "togaf-9-certified-certification",
      image: "47",
      vendor: "The Open Group",
      vendorPerma: "the-open-group",
      rating: 4.5,
    },
    {
      name: "VCAP6-DCV Design",
      perma: "vcap6-dcv-design",
      image: "48",
      vendor: "VMWare",
      vendorPerma: "vmware",
      rating: 4.3,
    },
    {
      name: "VCP6.5-DCV",
      perma: "vcp6-5-dcv",
      image: "49",
      vendor: "VMWare",
      vendorPerma: "vmware",
      rating: 4.8,
    },
    {
      name: "Project Management Professional",
      perma: "pmp-certification",
      image: "9",
      vendor: "PMP",
      vendorPerma: "pmp",
      rating: 4.6,
    },
    {
      name: "ACP",
      perma: "pmi-acp",
      image: "10",
      vendor: "PMP",
      vendorPerma: "pmp",
      rating: 4.5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(5);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(3);
      } else {
        setItemsToShow(1);
      }
    };

    window.addEventListener("resize", updateItemsToShow);
    updateItemsToShow();

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? exams.length - itemsToShow : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === exams.length - itemsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-white relative">
      <div className="container mx-auto p-6 relative">
        <IconButton
          onClick={handlePrevSlide}
          className="hidden lg:flex text-gray-500 p-2 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414z"
              />
            </g>
          </svg>
        </IconButton>
        <IconButton
          onClick={handleNextSlide}
          className="hidden lg:flex text-gray-500 p-2 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414z"
              />
            </g>
          </svg>
        </IconButton>
        <div className="grid grid-cols-1 lg:px-12 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {exams
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((deal, index) => (
              <div
                key={index}
                className="p-4 relative transition-shadow duration-300 ease-in-out rounded-xl hover:bg-gray-50 hover:shadow-lg"
              >
                <img
                  src={`/certs/${deal.image}.png`}
                  alt={deal.name}
                  className="w-full h-72 md:h-52 mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-105"
                />
                <p className="text-gray-900 text-center font-semibold text-sm mb-2 transition-colors duration-300 ease-in-out hover:text-black">
                  {deal.name}
                </p>
                <div className="flex justify-center items-center mb-2">
                  <div className="text-yellow-400 text-center">
                    {"★".repeat(Math.floor(deal.rating))}
                    {"☆".repeat(5 - Math.floor(deal.rating))}
                  </div>
                  <span className="ml-2 text-gray-500">{deal.rating}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="lg:hidden flex justify-between items-center mt-4">
          <button
            onClick={handlePrevSlide}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNextSlide}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationHome;

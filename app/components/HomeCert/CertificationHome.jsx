"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

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
        setItemsToShow(6);
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
    <section style={{ backgroundColor: "white", position: "relative" }}>
      <div className="container mx-auto"
        style={{
          // maxWidth: "1200px",
          margin: "0 auto",
          padding: "24px",
          position: "relative",
        }}
      >
        <Grid container spacing={2} style={{ paddingLeft: "48px", paddingRight: "48px" }}>
          {exams
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((deal, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                <div
                  style={{
                    padding: "16px",
                    position: "relative",
                    transition: "box-shadow 300ms ease-in-out",
                    borderRadius: "16px",
                    backgroundColor: "white",
                    hoverBackgroundColor: "#f8f8f8",
                    hoverBoxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    src={`/certs/${deal.image}.png`}
                    alt={deal.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginBottom: "16px",
                      borderRadius: "8px",
                      transition: "transform 300ms ease-in-out",
                      hoverTransform: "scale(1.05)",
                    }}
                  />
                  <p
                    style={{
                      color: "#1a202c",
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "14px",
                      marginBottom: "8px",
                      transition: "color 300ms ease-in-out",
                      hoverColor: "black",
                    }}
                  >
                    {deal.name}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ color: "#f6ad55", textAlign: "center" }}>
                      {"★".repeat(Math.floor(deal.rating))}
                      {"☆".repeat(5 - Math.floor(deal.rating))}
                    </div>
                    <span style={{ marginLeft: "8px", color: "#a0aec0" }}>
                      {deal.rating}
                    </span>
                  </div>
                </div>
              </Grid>
            ))}
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handlePrevSlide}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextSlide}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationHome;

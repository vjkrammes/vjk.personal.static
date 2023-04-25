import { useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import HideWidget from "../Widgets/HideWidget/HideWidget";
import SkillList from "../Widgets/SkillList/SkillList";
import "./SkillsPage.css";

export default function SkillsPage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="heading">Skills</div>
        <button
          className="primarybutton headerbutton-left"
          onClick={() => navigate("/")}
        >
          <span>
            <MdHome /> Home
          </span>
        </button>
      </div>
      <div className="content">
        <h2>Data Network Engineering</h2>
        <HideWidget
          label="L1"
          content="Connection Technologies"
          initialState="closed"
        >
          <SkillList
            items={[
              {
                label: "Ethernet",
                description:
                  "10/100/1000 over Twisted Pair, Coax or Fiber Optics",
              },
              {
                label: "Frame Relay",
                description: "Packet switched WAN technology",
              },
              { label: "ISDN", description: "BRI and PRI" },
              {
                label: "MPLS",
                description:
                  "Multiprotocol WAN technology supporting circuit-based and packet-switched traffic",
              },
              {
                label: "Telecom point-to-point",
                description: "DS0/DS1/DS3/OC3/OC12",
              },
              { label: "WiFi", description: "Wireless connections" },
            ]}
          />
        </HideWidget>
        <HideWidget
          label="L2"
          content="Layer 2 Switching"
          initialState="closed"
        >
          <SkillList
            items={[
              {
                label: "Channeling",
                description:
                  "Technologies for combining multiple physical connections into a single logical connection",
              },
              {
                label: "Design",
                description:
                  "Fault tolerant network design at layer 2 with two- and three-tier layouts",
              },
              {
                label: "Spanning Tree",
                description: "Protocol used to avoid loops",
              },
              {
                label: "Switches",
                description:
                  "Managed and unmanaged switches from Cisco (including Linksys), D-Link and others",
              },
              {
                label: "Traffic Management",
                description: "Traffic Policing and Shaping",
              },
              { label: "VLAN", description: "Virtual LAN" },
            ]}
          />
        </HideWidget>
        <HideWidget
          label="L3"
          content="Layer 3 Switching and Routing"
          initialState="closed"
        >
          <SkillList
            items={[
              {
                label: "Design",
                description:
                  "Fault tolerant network and internetwork design at layers three and above",
              },
              {
                label: "Routing",
                description:
                  "Managing traffic between networks using layer 3 switches and / or routers",
              },
              {
                label: "Routing Protocols",
                description: "IGRP, EIGRP, OSPF, BGP",
              },
              {
                label: "Traffic Management",
                description:
                  "Policy-based routing, AS prepend, Access Control Lists",
              },
            ]}
          />
        </HideWidget>
        <HideWidget label="Cert" content="Certifications" initialState="closed">
          <SkillList
            items={[
              { label: "Note - none of these are currently active" },
              { label: "CCNA Routing and Switching", description: "10+ years" },
              { label: "CCNA Voice", description: "8+ years" },
              { label: "CCNP Routing and Switching", description: "8+ years" },
              {
                label: "Cisco Rich Media Communications Specialist",
                description: "8+ years",
              },
            ]}
          />
        </HideWidget>
        <HideWidget label="Misc" content="Miscellaneous" initialState="closed">
          <SkillList
            items={[
              {
                label: "Access Control",
                description:
                  "Managing access to network devices using TACACS or other access control software",
              },
              {
                label: "Linux",
                description:
                  "Installation and configuration of Linux hosts for use with logging (SYSLOG) and file storage (FTP/TFTP)",
              },
              {
                label: "Log file Analysis",
                description:
                  "Analysis of log files for usage or troubleshooting",
              },
              {
                label: "Protocol Analysis",
                description:
                  "Troubleshooting network errors using Wireshark or other protocol analysis tool(s)",
              },
            ]}
          />
        </HideWidget>
        <h2>Information Security Engineering</h2>
        <HideWidget label="FW" content="Firewalls" initialState="closed">
          <SkillList
            items={[
              {
                label: "Access Control",
                description:
                  "Access Control Lists based on addressing, protocol, DNS name, or combinations of the above; Black/White Listing",
              },
              {
                label: "Manufacturers",
                description: "Cisco, Checkpoint, Palo Alto, Netgate",
              },
              {
                label: "Traffic Isolation",
                description: "DMZ, Sandboxing, Honeypot",
              },
              {
                label: "Troubleshooting",
                description: "Use of logging and / or protocol analysis",
              },
            ]}
          />
        </HideWidget>
        <HideWidget
          label="VPN"
          content="Virtual Private Networking"
          initialState="closed"
        >
          <SkillList
            items={[
              {
                label: "B2B",
                description: "Business-to-business site-to-site VPN",
              },
              {
                label: "End User",
                description:
                  "Allow employees secure access to internal network resources",
              },
            ]}
          />
        </HideWidget>
        <h2>Application Development</h2>
        <HideWidget label="Lang" content="Languages" initialState="closed">
          <SkillList
            items={[
              { label: "C" },
              { label: "C#" },
              { label: "COBOL" },
              { label: "Java" },
              { label: "JavaScript / Truescript" },
              { label: "Kotlin" },
              { label: "PHP" },
              { label: "Python" },
            ]}
          />
        </HideWidget>
        <HideWidget
          label="Back"
          content="Back End Technologies"
          initialState="closed"
        >
          <SkillList
            items={[
              { label: "ASP.Net Core API" },
              { label: "ASP.Net Core MVC" },
              { label: "ASP.Net Core server-side Blazor" },
              { label: "ORM", description: "Dapper, Entity Framework Core" },
              { label: "PHP" },
              { label: "SQL", description: "MS SQL, MySQL, Sqlite" },
            ]}
          />
        </HideWidget>
        <HideWidget
          label="Front"
          content="Front End Technologies"
          initialState="closed"
        >
          <SkillList
            items={[
              { label: "ASP.Net Core client-side Blazor" },
              { label: "CSS", description: "Hand crafted or using Bootstrap" },
              { label: "JavaScript" },
              {
                label: "Native Android",
                description: "Using Kotlin and Jetpack Compose",
              },
              {
                label: "React functional components",
                description: "Version 18+",
              },
            ]}
          />
        </HideWidget>
        <HideWidget
          label="Full"
          content="Full Stack Technologies"
          initialState="closed"
        >
          <SkillList
            items={[
              { label: "ASP.Net Core Server-side Blazor" },
              { label: "ASP.Net Core MVC" },
            ]}
          />
        </HideWidget>
        <HideWidget label="Misc" content="Miscellaneous" initialState="closed">
          <SkillList
            items={[
              {
                label: "Azure",
                description: "Web App, Static Web App, Function, BLOB storage",
              },
              {
                label: "DevOps",
                description: "Azure DevOps, Static Web App, Ansible",
              },
              { label: "Source Control", description: "Git/GitHub" },
            ]}
          />
        </HideWidget>
      </div>
    </div>
  );
}

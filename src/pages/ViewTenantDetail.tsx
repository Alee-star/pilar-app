import { useLocation } from "react-router-dom";
import TenantDetails from "../components/TenantDetails";

const ViewTenantDetails = () => {
  const location = useLocation();
  const { tenantId } = location.state || {};

  const titles = [
    "Unit details",
    "Tenant details",
    "Onboarding Information",
    "Contract",
    "Other Documents",
  ];

  return (
    <>
      {titles.map((title, index) => (
        <TenantDetails key={index} title={title} tenantId={tenantId} />
      ))}
    </>
  );
};

export default ViewTenantDetails;

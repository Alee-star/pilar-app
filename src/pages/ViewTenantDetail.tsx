import { useLocation } from "react-router-dom";
import UnitDetails from "../components/UnitDetails";
import TenantDetailsPage from "../components/TenantDetailsPage";
import OnboardingInfo from "../components/OnboardingInfo";
import Contract from "../components/Contract";
import Document from "../components/Document";
import React from "react";

const ViewTenantDetail: React.FC = () => {
  const location = useLocation();
  const tenantId = location.state?.tenantId || null;

  return (
    <>
      <UnitDetails tenantId={tenantId} />
      <TenantDetailsPage tenantId={tenantId} />
      <OnboardingInfo tenantId={tenantId} />
      <Contract tenantId={tenantId} />
      <Document tenantId={tenantId} />
    </>
  );
};

export default ViewTenantDetail;

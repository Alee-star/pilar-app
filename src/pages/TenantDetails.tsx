import { useLocation } from "react-router-dom";
import UnitDetails from "../components/UnitDetails";
import TenantDetailsPage from "../components/TenantDetailsTable";
import OnboardingInfo from "../components/OnboardingInfo";
import Contract from "../components/Contract";
import Document from "../components/Document";
import React, { useEffect, useState } from "react";
import { User } from "../types/TableTypes";

const TenantDetails: React.FC = () => {
  const location = useLocation();
  const tenantId = location.state?.tenantId || null;

  const [tenant, setTenant] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTenantDetailData = async () => {
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: User[] = await response.json();
        const selectedTenant = data.find((tenant) => tenant.id === tenantId);
        setTenant(selectedTenant || null);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      }
    };

    if (tenantId) {
      fetchTenantDetailData();
    }
  }, [tenantId]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!tenant) {
    return <p className="text-gray-500">Nothing to show yet</p>;
  }

  return (
    <>
      <UnitDetails tenant={tenant} />
      <TenantDetailsPage tenant={tenant} />
      <OnboardingInfo tenant={tenant} />
      <Contract tenant={tenant} />
      <Document tenant={tenant} />
    </>
  );
};

export default TenantDetails;

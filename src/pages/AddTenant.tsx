import { useEffect, useState } from "react";
import Button from "../components/Button";
import NewTenantHeader from "../components/NewTenantHeader";

const AddTenant = () => {
  const [isTenantDetailsAdded, setIsTenantDetailsAdded] = useState<boolean>(
    () => {
      const savedState = localStorage.getItem("tenantDetailAdded");
      return savedState === "true";
    }
  );

  const handleContinueClick = () => {
    setIsTenantDetailsAdded(true);
    localStorage.setItem("tenantDetailsAdded", "true");
  };

  useEffect(() => {
    localStorage.setItem("tenantDetailsAdded", String(isTenantDetailsAdded));
  }, [isTenantDetailsAdded]);

  return (
    <div className="bg-gray-100 h-screen">
      <NewTenantHeader isTenantDetailsAdded={isTenantDetailsAdded} />
      <Button label="continue" onClick={handleContinueClick} />
    </div>
  );
};

export default AddTenant;

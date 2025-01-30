import { useState } from "react";
import Button from "../components/Button";
import NewTenantHeader from "../components/NewTenantHeader";

const AddTenant = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleContinueClick = () => {
    setIsCompleted(true);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <NewTenantHeader isCompleted={isCompleted} />
      <Button label="continue" onClick={handleContinueClick} />
    </div>
  );
};

export default AddTenant;

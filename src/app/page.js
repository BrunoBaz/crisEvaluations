"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { EVPAAR } from "@/utils/EVPAAR";
import { MECV } from "@/utils/MECV";
import { VPCFG } from "@/utils/VPCFG";
import { HDOF } from "@/utils/HDOF";
import { FormComponent } from "@/components/FormComponent";
import { MECVFormComponent } from "@/components/MECVFormComponent";
import { VPCFGFormComponent } from "@/components/VPCFGFormComponent";
import { HDOFFormComponent } from "@/components/HDOFFormComponent";

export default function Home() {
  const [currentForm, setCurrentForm] = useState("EVPAAR");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedForm = localStorage.getItem("selectedForm");
    if (savedForm) {
      setCurrentForm(savedForm);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem("selectedForm", currentForm);
    }
  }, [currentForm, isClient]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const forms = {
    EVPAAR: EVPAAR,
    MECV: MECV,
    VPCFG: VPCFG,
    HDOF: HDOF,
  };

  const renderForm = () => {
    switch (currentForm) {
      case "MECV":
        return <MECVFormComponent data={forms[currentForm]} />;
      case "VPCFG":
        return <VPCFGFormComponent data={forms[currentForm]} />;
      case "HDOF":
        return <HDOFFormComponent data={forms[currentForm]} />;
      default:
        return <FormComponent data={forms[currentForm]} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4 mb-6">
        <div className="max-w-6xl mx-auto">
          <ul className="flex space-x-8 justify-center">
            {Object.keys(forms).map((formName) => (
              <li key={formName}>
                <button
                  onClick={() => setCurrentForm(formName)}
                  className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                    isClient && currentForm === formName
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {formName}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow">{renderForm()}</main>
    </div>
  );
}

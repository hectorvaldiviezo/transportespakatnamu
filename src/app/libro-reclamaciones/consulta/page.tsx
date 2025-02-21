"use client";
import ComplaintQuery from "@/components/complaints/components/ComplaintQuery";
import { useComplaintStore } from "@/components/complaints/lib/complaint.store";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { MILLA_BASE } from "@/lib/config";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";
export default function Page() {
  const params = useSearchParams();
  const [complaintCode, setComplaintCode] = useState<string | undefined>(
    undefined
  );
  const [error, setError] = useState<string | undefined>(undefined);
  useEffect(() => {
    const complaintCodeParam = params.get("complaintCode");
    if (complaintCodeParam) {
      setComplaintCode(complaintCodeParam);
    }
  }, [params]);

  useEffect(() => {
    const errorParam = params.get("error");
    if (errorParam) {
      setError(errorParam);
    }
  }, [params]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header heightToScroll={250} />
      <main>
        <Hero
          title="LIBRO DE RECLAMACIONES"
          subtitle=""
          description=""
          src={
            MILLA_BASE +
            "/transportes/administradorweb/hero_libro_reclamaciones.png"
          }
          height="h-[400px]"
          gradient={true}
        />
        <ComplaintQuery complaintCodeParam={complaintCode} error={error} />
      </main>
      <Footer />
    </div>
  );
}

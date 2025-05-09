"use client";
import ComplaintQuery from "@/components/complaints/components/ComplaintQuery";
import Hero from "@/components/Hero";
import { MILLA_BASE } from "@/lib/config";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

function ComponentConsultaReclamaciones() {
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

  return <ComplaintQuery complaintCodeParam={complaintCode} error={error} />;
}

function Skeleton() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-pulse bg-gray-300 h-10 w-1/2 rounded"></div>
      <div className="mt-4 animate-pulse bg-gray-300 h-10 w-1/4 rounded"></div>
      <div className="mt-4 animate-pulse bg-gray-300 h-10 w-1/4 rounded"></div>
    </div>
  );
}

export default function Page() {
  return (
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
      <Suspense fallback={<Skeleton />}>
        <ComponentConsultaReclamaciones />
      </Suspense>
    </main>
  );
}

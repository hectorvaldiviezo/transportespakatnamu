"use client";
import ComplaintQuery from "@/components/complaints/components/ComplaintQuery";
import { useComplaintStore } from "@/components/complaints/lib/complaint.store";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export const dynamic = "force-dynamic";
export default function Page() {
  const params = useSearchParams();
  const [complaintCode, setComplaintCode] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    const complaintCodeParam = params.get("complaintCode");
    if (complaintCodeParam) {
      setComplaintCode(complaintCodeParam);
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
          src="/cascadiablue.jpg"
          height="h-[400px]"
          gradient={true}
        />
        <ComplaintQuery complaintCodeParam={complaintCode} />
      </main>
      <Footer />
    </div>
  );
}

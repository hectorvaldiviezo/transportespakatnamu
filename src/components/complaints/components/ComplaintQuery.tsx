"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Clock, Download, Plus, XCircle } from "lucide-react";
import { errorToast, successToast } from "@/lib/core.function";
import { useComplaintStore } from "../lib/complaint.store";
import { timeAgo } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ComplaintQuery({
  complaintCodeParam,
}: {
  complaintCodeParam?: string;
}) {
  const {
    complaintCode,
    complaintQuery: reclamo,
    setComplaintCode,
    loadComplaint,
  } = useComplaintStore();

  const navigate = useRouter();

  useEffect(() => {
    if (complaintCodeParam && !complaintCode) {
      setComplaintCode(complaintCodeParam);
      loadComplaint();
    } else if (!complaintCode) {
      loadComplaint();
    }
  }, [complaintCodeParam]);

  const handleSearch = () => {
    setComplaintCode(complaintCode);
    loadComplaint();
  };

  return (
    <div className="bg-gray-100 px-4 font-roboto py-10 md:py-20">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <CardTitle className="text-xl md:text-2xl font-bold text-navy">
                Consulta de Reclamo
              </CardTitle>
              <CardDescription>
                Consulta el estado de tu reclamo ingresando el ID del reclamo.
              </CardDescription>
            </div>
            <div>
              <Button
                variant="secondary"
                onClick={() => navigate.push("/libro-reclamaciones")}
              >
                <Plus className="max-w-3.5 max-h-3.5 mr-2" />
                Nuevo Reclamo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-6">
          <div className="space-y-6">
            {/* Sección de búsqueda */}
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Ingrese el ID del reclamo"
                className="flex-grow"
                value={complaintCode}
                onChange={(e) => setComplaintCode(e.target.value)}
              />
              <Button
                disabled={!complaintCode}
                onClick={handleSearch}
                className="bg-navy hover:bg-navy/90 text-white"
              >
                Buscar
              </Button>
            </div>

            {reclamo && (
              <div className="grid grid-cols-1 gap-6  text-xs md:text-base">
                {/* Información del reclamo */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-xl font-semibold mb-2">Reclamo</h2>
                  <div className="flex md:flex-row flex-col justify-between md:items-center">
                    <span className="text-danger font-bold md:text-lg">
                      N° {reclamo.complaintCode}
                    </span>
                    <span className="text-gray-600 text-xs md:text-base">
                      {reclamo.isVirtual
                        ? reclamo.sedeVirtualName
                        : reclamo.sedeName}
                    </span>
                  </div>
                </div>

                {/* Avance del reclamo */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2 text-base text-navy">
                    Avance
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="text-gray-400" size={20} />
                    <span className="text-gray-600">
                      Última actualización{" "}
                      {timeAgo(reclamo.updated_at.toString())}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {reclamo.filed && reclamo.dateFiled && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="text-green-500" size={24} />
                        <div>
                          <div className="font-semibold">ARCHIVADO</div>
                          <div className="text-sm text-gray-600">
                            {reclamo.dateFiled.toString()}
                          </div>
                        </div>
                      </div>
                    )}
                    {reclamo.rejected && reclamo.dateRejected && (
                      <div className="flex items-center space-x-2">
                        <XCircle className="text-red-500" size={24} />
                        <div>
                          <div className="font-semibold">RECHAZADO</div>
                          <div className="text-sm text-gray-600">
                            {reclamo.dateRejected.toString()}
                          </div>
                        </div>
                      </div>
                    )}
                    {reclamo.attended && reclamo.dateAttended && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="text-green-500" size={24} />
                        <div>
                          <div className="font-semibold">ATENDIDO</div>
                          <div className="text-sm text-gray-600">
                            {reclamo.dateAttended.toString()}
                          </div>
                        </div>
                      </div>
                    )}
                    {reclamo.inProcess && reclamo.dateInProcess && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="text-green-500" size={24} />
                        <div>
                          <div className="font-semibold">EN PROCESO</div>
                          <div className="text-sm text-gray-600">
                            {reclamo.dateInProcess.toString()}
                          </div>
                        </div>
                      </div>
                    )}
                    {reclamo.confirmed && reclamo.dateConfirmed && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="text-green-500" size={24} />
                        <div>
                          <div className="font-semibold">CONFIRMADO</div>
                          <div className="text-sm text-gray-600">
                            {reclamo.dateConfirmed.toString()}
                          </div>
                        </div>
                      </div>
                    )}
                    {reclamo.verified && reclamo.dateVerified && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle2 className="text-green-500" size={24} />
                        <div>
                          <div className="font-semibold">VERIFICADO</div>
                          <div className="text-sm text-gray-600">
                            {reclamo.dateVerified.toString()}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Respuesta */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-2 text-base text-navy">
                    Respuesta
                  </h3>
                  <p className="text-gray-700 mb-2">
                    {reclamo.answer || "Sin respuesta aún"}
                  </p>
                  <div className="flex justify-end">
                    <Button variant="outline" disabled={!reclamo.answer}>
                      <Download className="max-w-3.5 max-h-3.5 mr-2" />
                      Descargar Copia
                    </Button>
                  </div>
                </div>

                {/* Hoja de Reclamo */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-4 text-base text-navy">
                    Hoja de Reclamo
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between flex-col md:flex-row md:items-center">
                      <span className="font-semibold">{reclamo.fullName}</span>
                      <span>
                        <strong>{reclamo.typeDocument}</strong>{" "}
                        {reclamo.documentNumber}
                      </span>
                      <span>
                        {reclamo.phone.replace(
                          /(\d{1})\d+(\d{1})/,
                          "$1*******$2"
                        )}
                      </span>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">
                        Asignado a:
                      </Label>
                      <div>
                        {reclamo.isVirtual
                          ? reclamo.sedeVirtualName
                          : reclamo.sedeName}
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">
                        Fecha evento:
                      </Label>
                      <div>{reclamo.date.toString()}</div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Hora:</Label>
                      <div>{reclamo.time}</div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Registro:</Label>
                      <div>mié 25 sep 19:50 2024</div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Motivo:</Label>
                      {reclamo.motive.map((m, i) => (
                        <li key={i + m}>{m}</li>
                      ))}
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">
                        Descripción:
                      </Label>
                      <div>{reclamo.description}</div>
                    </div>
                    {/* <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold mr-2">Sí</span>
                        intentaron solución previa.
                      </div>
                      <div>
                        Solicité <span className="font-semibold">Sí</span>{" "}
                        enviar notificaciones de avance.
                      </div>
                    </div> */}
                  </div>
                  <div className="flex w-full justify-end">
                    <Button variant="outline">
                      <Download className="max-w-3.5 max-h-3.5 mr-2" />
                      Descargar hoja de reclamación
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

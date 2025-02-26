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
import {
  CheckCircle2,
  Clock,
  Download,
  FileDown,
  Plus,
  XCircle,
} from "lucide-react";
import { useComplaintStore } from "../lib/complaint.store";
import { timeAgo } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { errorToast } from "@/lib/core.function";

export default function ComplaintQuery({
  complaintCodeParam,
  error,
}: {
  complaintCodeParam?: string;
  error?: string;
}) {
  const {
    complaintCode,
    complaintQuery: reclamo,
    setComplaintCode,
    loadComplaint,
  } = useComplaintStore();

  const navigate = useRouter();

  useEffect(() => {
    if (!reclamo) {
      if (complaintCodeParam) {
        if (!complaintCode) {
          setComplaintCode(complaintCodeParam);
          loadComplaint();
        } else {
          loadComplaint();
        }
      } else {
        if (complaintCode) {
          loadComplaint();
        }
      }
    }
  }, [complaintCodeParam]);

  useEffect(() => {
    if (error) {
      errorToast(error);
    }
  }, [error]);

  const handleDownloadComplaint = (pdfComplaint: string) => {
    window.open(pdfComplaint, "_blank");
  };

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
                  <h2 className="text-xl font-semibold mb-2">{reclamo.type}</h2>
                  <div className="flex md:flex-row flex-col justify-between md:items-center">
                    <span className="text-danger font-bold md:text-lg">
                      N° {reclamo.complaintCode}
                    </span>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-600 text-xs md:text-base mb-0 font-bold">
                        {reclamo.sedeName}
                      </p>
                      <p className="text-gray-600 text-xs md:text-base mb-0">
                        {reclamo.isVirtual ? reclamo.sedeVirtualName : ""}
                      </p>
                    </div>
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
                  <p className="text-gray-700 mb-2 break-words">
                    {reclamo.answer || "Sin respuesta aún"}
                  </p>

                  {reclamo.fileAnswer && (
                    <div>
                      <Label className="text-sm text-gray-600">Archivos</Label>
                      <div className="flex gap-2">
                        {reclamo.fileAnswer && (
                          <a
                            href={reclamo.fileAnswer}
                            target="_blank"
                            className="text-blue-500 underline"
                          >
                            <Button
                              variant="default"
                              size="icon"
                              className="p-0"
                            >
                              <FileDown className="max-w-3.5 max-h-3.5" />
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hoja de Reclamo */}
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-semibold mb-4 text-base text-navy">
                    Hoja de Reclamo
                  </h3>
                  <div className="space-y-2">
                    <div>
                      <Label className="text-sm text-gray-600">
                        Nombre Completo
                      </Label>
                      <div>{reclamo.fullName}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-600">
                          {reclamo.typeDocument}
                        </Label>
                        <div>{reclamo.documentNumber}</div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">
                          Teléfono
                        </Label>
                        <div>
                          {reclamo.phone.replace(
                            /(\d{1})\d+(\d{1})/,
                            "$1*******$2"
                          )}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Correo</Label>
                      <div>{reclamo.email}</div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">
                        Asignado a
                      </Label>
                      <div>{reclamo.sedeName}</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-600">
                          Fecha evento
                        </Label>
                        <div>{reclamo.date.toString()}</div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600">Hora</Label>
                        <div>{reclamo.time}</div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600">Motivo</Label>
                      {reclamo.motive.map((m, i) => (
                        <li className="break-words" key={i + m}>
                          {m}
                        </li>
                      ))}
                    </div>
                    <div>
                      <Label className="text-sm text-gray-600 break-words">
                        Descripción
                      </Label>
                      <div className="break-words">{reclamo.description}</div>
                    </div>
                    {reclamo.request && (
                      <div>
                        <Label className="text-sm text-gray-600 break-words">
                          Pedido
                        </Label>
                        <div className="break-words">{reclamo.request}</div>
                      </div>
                    )}
                    {reclamo.amount > 0 && (
                      <div>
                        <Label className="text-sm text-gray-600">Monto</Label>
                        <div>S/ {reclamo.amount.toFixed(2)}</div>
                      </div>
                    )}
                    {(reclamo.file1 || reclamo.file2) && (
                      <div>
                        <Label className="text-sm text-gray-600">
                          Archivos
                        </Label>
                        <div className="flex gap-2">
                          {reclamo.file1 && (
                            <a
                              href={reclamo.file1}
                              target="_blank"
                              className="text-blue-500 underline"
                            >
                              <Button
                                variant="default"
                                size="icon"
                                className="p-0"
                              >
                                <FileDown className="max-w-3.5 max-h-3.5" />
                              </Button>
                            </a>
                          )}
                          {reclamo.file2 && (
                            <a
                              href={reclamo.file2}
                              target="_blank"
                              className="text-blue-500 underline"
                            >
                              <Button
                                variant="default"
                                size="icon"
                                className="p-0"
                              >
                                <FileDown className="max-w-3.5 max-h-3.5" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex w-full justify-end py-4">
                    <Button
                      className="bg-navy hover:bg-navy/90 text-white"
                      onClick={() =>
                        handleDownloadComplaint(reclamo.pdfComplaint)
                      }
                    >
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

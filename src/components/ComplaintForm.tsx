"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import Link from "next/link";
import { Switch } from "./ui/switch";
import { format } from "date-fns";
import {
  Banknote,
  BookText,
  Building,
  Calendar1,
  CalendarIcon,
  Clock,
  CloudUpload,
  ListTodo,
  LoaderPinwheel,
  Search,
  Text,
  Truck,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { searchByDNI } from "@/lib/search.actions";
import { useState } from "react";
import { errorToast, successToast } from "@/lib/core.function";
import { ComplaintRequest } from "@/components/complaints/lib/complaint.interface";
import { useSedes } from "./sedes/lib/sedes.hook";
import { Skeleton } from "./ui/skeleton";
import { createComplaint } from "./complaints/lib/complaint.actions";
const FormComplaint = z.object({
  sedeId: z.string().min(1, "Seleccione una sede."),
  type: z.string().min(1, "Seleccione un tipo."),
  date: z.date({
    required_error: "Seleccione una fecha.",
  }),
  time: z.string().min(1, "Seleccione una hora."),
  description: z.string().min(1, "Ingrese una descripción."),
});
const FormWell = z.object({
  typeWell: z.string().min(1, "Seleccione un tipo."),
  motive: z
    .array(z.string())
    .min(1, "Seleccione al menos un motivo.")
    .max(2, "Seleccione máximo dos motivos.")
    .refine((value) => value.some((item) => item), {
      message: "Seleccione al menos un motivo.",
    }),
  amount: z.string().optional(),
});
const FormCustomer = z.object({
  typeDocument: z.enum(["DNI", "RUC"]),
  documentNumber: z
    .string()
    .min(8, "Ingrese un DNI válido.")
    .max(8, "Ingrese un DNI válido.")
    .refine((value) => /^\d+$/.test(value), {
      message: "Ingrese un DNI válido.",
    }),
  fullName: z.string().min(1, "Ingrese un nombre."),
  email: z.string().email("Ingrese un correo válido."),
  phone: z.string().min(1, "Ingrese un teléfono."),
  address: z.string().min(1, "Ingrese una dirección."),
});

const motives = [
  {
    id: "trato-profesional",
    label:
      "Trato profesional en la atención: la persona que te atendió no lo hizo de forma adecuada.",
  },
  {
    id: "tiempo",
    label: "Tiempo: hubo demora antes y/o durante la atención que recibiste.",
  },
  {
    id: "procedimiento",
    label:
      "Procedimiento: no se siguió el procedimiento de atención o no estás de acuerdo con este.",
  },
  {
    id: "infraestructura",
    label:
      "Infraestructura: el ambiente en el que se realizó la atención y/o mobiliario no están en buen estado, no hay rutas accesibles que faciliten el desplazamiento de las personas o el local queda en un sitio inseguro.",
  },
  {
    id: "informacion",
    label:
      "Información: la orientación sobre el servicio fue inadecuada, insuficiente o imprecisa.",
  },
  {
    id: "resultado",
    label:
      "Resultado: no se pudo obtener un resultado concreto como parte del servicio y/o no se justifica la negativa en la atención del servicio.",
  },
  {
    id: "confianza",
    label:
      "Confianza: ocurrió una situación que afectó la confianza y credibilidad de la entidad.",
  },
  {
    id: "disponibilidad",
    label:
      "Disponibilidad: el medio de atención (virtual, presencial o telefónico) por el que se brinda el servicio no responde a tus expectativas o tiene horarios restringidos.",
  },
];

export default function ComplaintForm() {
  const formComplaint = useForm<z.infer<typeof FormComplaint>>({
    resolver: zodResolver(FormComplaint),
    defaultValues: {
      sedeId: "",
      type: "",
      date: undefined,
      time: "",
      description: "",
    },
  });

  const formWell = useForm<z.infer<typeof FormWell>>({
    resolver: zodResolver(FormWell),
    defaultValues: {
      typeWell: "",
      motive: [],
      amount: "",
    },
  });

  const formCustomer = useForm<z.infer<typeof FormCustomer>>({
    resolver: zodResolver(FormCustomer),
    defaultValues: {
      typeDocument: "DNI",
      documentNumber: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const [loadingSearch, setLoadingSearch] = useState(false);
  const tabs = ["complaint", "well", "customer"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [submitting, setSubmitting] = useState(false);

  const validateDocumentNumber = async () => {
    setLoadingSearch(true);
    const documentNumber = formCustomer.getValues("documentNumber");
    await searchByDNI(documentNumber)
      .then((response) => {
        if (response.status === 200) {
          formCustomer.setValue("fullName", response.data.nombre);
        }
      })
      .catch((error: any) => {
        errorToast(error.response.data.message);
      })
      .finally(() => {
        setLoadingSearch(false);
      });
  };

  const onSubmit = async () => {
    const data: ComplaintRequest = {
      sedeId: Number(formComplaint.getValues("sedeId")),
      type: formComplaint.getValues("type"),
      date: format(formComplaint.getValues("date"), "yyyy-MM-dd"),
      time: formComplaint.getValues("time"),
      description: formComplaint.getValues("description"),
      typeWell: formWell.getValues("typeWell"),
      amount: formWell.getValues("amount")
        ? Number(formWell.getValues("amount"))
        : 0,
      typeDocument: formCustomer.getValues("typeDocument"),
      documentNumber: formCustomer.getValues("documentNumber"),
      fullName: formCustomer.getValues("fullName"),
      email: formCustomer.getValues("email"),
      phone: formCustomer.getValues("phone"),
      address: formCustomer.getValues("address"),
    };

    await createComplaint(data)
      .then((response) => {
        successToast(response.message);
      })
      .catch((error: any) => {
        errorToast(error.response.data.message);
      });
  };

  const handleNext = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const virtuales = [
    {
      id: "telefono",
      label: "Teléfono",
    },
    {
      id: "chat",
      label: "Chat",
    },
    {
      id: "pagina-web",
      label: "Página Web",
    },
    {
      id: "redes-sociales",
      label: "Redes Sociales",
    },
    {
      id: "correo-electronico",
      label: "Correo Electrónico",
    },
  ];

  const sedes = useSedes(1);

  const [virtual, setVirtual] = useState(false);

  const handleToggleVirtual = () => {
    setVirtual(!virtual);
    formComplaint.setValue("sedeId", "");
  };

  return (
    <div className="w-full py-20 px-2 flex justify-center items-center bg-muted">
      <div className="container max-w-screen-xl flex items-center justify-center">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full max-w-screen-md flex flex-col gap-4"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger
              className="font-roboto uppercase py-1.5"
              value="complaint"
              disabled
            >
              Paso 1
            </TabsTrigger>
            <TabsTrigger
              className="font-roboto uppercase py-1.5"
              value="well"
              disabled
            >
              Paso 2
            </TabsTrigger>
            <TabsTrigger
              className="font-roboto uppercase py-1.5"
              value="customer"
              disabled
            >
              Paso 3
            </TabsTrigger>
          </TabsList>
          <Form {...formComplaint}>
            <form
              action=""
              className="container max-w-screen-xl flex items-center justify-center"
              onSubmit={formComplaint.handleSubmit(onSubmit)}
            >
              <TabsContent value="complaint" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-roboto uppercase font-bold text-navy">
                      Información del reclamo
                    </CardTitle>
                    <CardDescription>
                      Complete los siguientes campos para registrar su reclamo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 gap-6">
                    <FormField
                      control={formComplaint.control}
                      name="sedeId"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="uppercase font-roboto font-bold flex items-center gap-2 text-darknavy">
                            1. Sede
                          </FormLabel>
                          {sedes.isLoading ? (
                            <Skeleton className="h-9 w-full" />
                          ) : (
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              disabled={virtual}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecciona una sede" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {sedes.data!.map((sede) => (
                                  <SelectItem
                                    key={sede.id}
                                    value={sede.id.toString()}
                                  >
                                    {sede.razon_social} - {sede.suc_abrev}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="virtual"
                              checked={virtual}
                              onCheckedChange={handleToggleVirtual}
                            />
                            <label
                              htmlFor="virtual"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              El problema no ocurrió en una sede física
                            </label>
                          </div>
                          {virtual && (
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                {virtuales.map((virtual) => (
                                  <FormItem
                                    key={virtual.id}
                                    className="flex items-center space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={virtual.id} />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {virtual.label}
                                    </FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                          )}

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formComplaint.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            2. ¿Queja o Reclamo?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Queja" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Queja
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Reclamo" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Reclamo
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={formComplaint.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                              3. Fecha
                            </FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? (
                                      format(field.value, "dd/MM/yyyy")
                                    ) : (
                                      <span>Seleccione una fecha</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={formComplaint.control}
                        name="time"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                              4. Hora
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="time"
                                placeholder="hora"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={formComplaint.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            5. Descripción
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describa su reclamo"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Label
                      htmlFor="files"
                      className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy"
                    >
                      6. Archivos
                    </Label>
                    <Input id="files" type="file" multiple />
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button
                      className="bg-navy hover:bg-navy/95"
                      disabled={!formComplaint.formState.isValid}
                      onClick={handleNext}
                    >
                      Siguiente
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </form>
          </Form>
          <Form {...formWell}>
            <form
              action=""
              className="container max-w-screen-xl flex items-center justify-center"
              onSubmit={formWell.handleSubmit(onSubmit)}
            >
              <TabsContent value="well" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-roboto uppercase font-bold text-navy">
                      Información del bien contratado
                    </CardTitle>
                    <CardDescription>
                      Complete los siguientes campos para registrar su reclamo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 gap-6">
                    <FormField
                      control={formWell.control}
                      name="typeWell"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            7. ¿Bien o Servicio?
                          </FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Bien" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Bien
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Servicio" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Servicio
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={formWell.control}
                      name="motive"
                      render={() => (
                        <FormItem className="space-y-1">
                          <div className="mb-4">
                            <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                              8. Identifica el motivo del reclamo. Puedes
                              seleccionar máximo 2 opciones.
                            </FormLabel>
                          </div>
                          {motives.map((motive) => (
                            <FormField
                              key={motive.id}
                              control={formWell.control}
                              name="motive"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={motive.id}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(
                                          motive.id
                                        )}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([
                                                ...field.value,
                                                motive.id,
                                              ])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== motive.id
                                                )
                                              );
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm font-normal">
                                      {motive.label}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={formWell.control}
                      name="amount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            9. Monto reclamado
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="100"
                              type="number"
                              step={0.01}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      className="bg-navy hover:bg-navy/95"
                      onClick={handlePrev}
                    >
                      Atrás
                    </Button>
                    <Button
                      className="bg-navy hover:bg-navy/95"
                      disabled={!formWell.formState.isValid}
                      onClick={handleNext}
                    >
                      Siguiente
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </form>
          </Form>
          <Form {...formCustomer}>
            <form
              action=""
              className="container max-w-screen-xl flex items-center justify-center"
              onSubmit={formCustomer.handleSubmit(onSubmit)}
            >
              <TabsContent value="customer" className="w-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-roboto uppercase font-bold text-navy">
                      Información del Cliente
                    </CardTitle>
                    <CardDescription>
                      Complete los siguientes campos para registrar su reclamo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 gap-6">
                    <FormField
                      control={formCustomer.control}
                      name="documentNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                            10. DNI
                          </FormLabel>
                          <div className="flex gap-4">
                            <FormControl>
                              <Input
                                placeholder="54718590"
                                maxLength={8}
                                {...field}
                              />
                            </FormControl>
                            <Button
                              className="flex items-center gap-2"
                              type="button"
                              disabled={loadingSearch}
                              onClick={validateDocumentNumber}
                            >
                              {loadingSearch ? (
                                <LoaderPinwheel className="w-4 h-4 animate-spin" />
                              ) : (
                                <Search className="w-4 h-4" />
                              )}
                              <span>Validar DNI</span>
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCustomer.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            11. Nombre Completo
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Valide su Documento"
                              disabled
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCustomer.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            12. Correo Electrónico
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="example@gmail.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCustomer.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            13. Teléfono
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="936852147" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formCustomer.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="uppercase font-bold font-roboto flex items-center gap-2 text-darknavy">
                            14. Dirección
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Calle Nueva 123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      className="bg-navy hover:bg-navy/95"
                      onClick={handlePrev}
                    >
                      Atrás
                    </Button>
                    <Button
                      type="submit"
                      className="bg-navy hover:bg-navy/95"
                      disabled={
                        !formComplaint.formState.isValid ||
                        !formWell.formState.isValid ||
                        !formCustomer.formState.isValid ||
                        submitting
                      }
                      onClick={(e) => {
                        setSubmitting(true);
                        formCustomer.handleSubmit(onSubmit)(e);
                      }}
                    >
                      Enviar
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </form>
          </Form>
        </Tabs>
      </div>
    </div>
  );
}

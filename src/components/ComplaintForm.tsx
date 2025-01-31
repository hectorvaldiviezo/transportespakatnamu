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
  Search,
  Text,
  Truck,
} from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { searchByDNI } from "@/lib/search.actions";
const FormSchema = z.object({
  sedeId: z.string({ required_error: "Please select a sede." }),
  type: z.string({ required_error: "Please select a type." }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({ required_error: "Please select a time." }),
  description: z.string({ required_error: "Please enter a description." }),
  typeWell: z.string({ required_error: "Please select a type." }),
  amount: z.string({ required_error: "Please enter an amount." }),
  motive: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  typeDocument: z.enum(["dni", "run"]),
  documentNumber: z.string({
    required_error: "Please enter a document number.",
  }),
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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sedeId: "",
      type: "",
      date: undefined,
      time: "",
      description: "",
      typeWell: "",
      amount: "",
      motive: [],
      typeDocument: "dni",
      documentNumber: "",
    },
  });

  const validateDocumentNumber = async () => {
    const documentNumber = form.getValues("documentNumber");
    try {
      const response = await searchByDNI(documentNumber);
      console.log(response);
    } catch (error) {}
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="w-full py-20 px-2 flex justify-center items-center bg-muted">
      <Form {...form}>
        <form
          action=""
          className="container max-w-screen-xl flex items-center justify-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Tabs
            defaultValue="customer"
            className="w-full max-w-screen-md flex flex-col gap-4"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                className="font-roboto uppercase py-1.5"
                value="customer"
              >
                Paso 1
              </TabsTrigger>
              <TabsTrigger
                className="font-roboto uppercase py-1.5"
                value="well"
              >
                Paso 2
              </TabsTrigger>
              <TabsTrigger
                className="font-roboto uppercase py-1.5"
                value="complaint"
              >
                Paso 3
              </TabsTrigger>
            </TabsList>
            <TabsContent value="customer">
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
                    control={form.control}
                    name="sedeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                          <Building className="w-4 h-4" />
                          Sede
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una sede" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Sede Lambayeque</SelectItem>
                          </SelectContent>
                        </Select>
                        <div className="flex items-center space-x-2">
                          <Switch id="other-sede" />
                          <Label htmlFor="other-sede">
                            No ocurrió en una sede física
                          </Label>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="type"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                          <BookText className="w-4 h-4" />
                          ¿Queja o Reclamo?
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
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                            <Calendar1 className="w-4 h-4" />
                            Fecha
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
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                            <Clock className="w-4 h-4" />
                            Hora
                          </FormLabel>
                          <FormControl>
                            <Input type="time" placeholder="hora" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                          <Text className="w-4 h-4" />
                          Descripción
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
                    className="uppercase font-roboto flex items-center gap-2 text-darknavy"
                  >
                    <CloudUpload className="w-4 h-4" />
                    Archivos
                  </Label>
                  <Input id="files" type="file" multiple />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button className="bg-navy hover:bg-navy/95">
                    Siguiente
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="well">
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
                    control={form.control}
                    name="typeWell"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                          <Truck className="w-4 h-4" />
                          ¿Bien o Servicio?
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
                    control={form.control}
                    name="motive"
                    render={() => (
                      <FormItem className="space-y-1">
                        <div className="mb-4">
                          <FormLabel className="uppercase font-roboto flex items-center gap-2 text-darknavy">
                            <ListTodo className="w-4 h-4" />
                            Identifica el motivo del reclamo. Puedes seleccionar
                            máximo 2 opciones.
                          </FormLabel>
                        </div>
                        {motives.map((motive) => (
                          <FormField
                            key={motive.id}
                            control={form.control}
                            name="motive"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={motive.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(motive.id)}
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
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-roboto font-normal uppercase flex items-center gap-2 text-darknavy">
                          <Banknote className="w-4 h-4" />
                          Monto reclamado
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
                  <Button className="bg-navy hover:bg-navy/95">Atrás</Button>
                  <Button className="bg-navy hover:bg-navy/95">
                    Siguiente
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="complaint">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-roboto uppercase font-bold text-navy">
                    Información del Cliente
                  </CardTitle>
                  <CardDescription>
                    Complete los siguientes campos para registrar su reclamo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <FormField
                    control={form.control}
                    name="documentNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-roboto font-normal uppercase flex items-center gap-2 text-darknavy">
                          <Banknote className="w-4 h-4" />
                          DNI
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
                            onClick={validateDocumentNumber}
                          >
                            <Search className="w-4 h-4" />
                            Validar DNI
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-roboto font-normal uppercase flex items-center gap-2 text-darknavy">
                          <Banknote className="w-4 h-4" />
                          DNI
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="54718590"
                            maxLength={8}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button>Save password</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </form>
      </Form>
    </div>
  );
}

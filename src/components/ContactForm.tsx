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
import { CalendarIcon } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
const FormSchema = z.object({
  document: z.string().nonempty(),
  fullName: z.string().nonempty(),
  email: z.string().email(),
  phone: z.string().nonempty(),
  telephone: z.string().nonempty(),
  product: z.string().nonempty(),
  origin: z.string().nonempty(),
  destination: z.string().nonempty(),
  typeFreight: z.enum(["viaje", "tonelada"], {
    required_error: "Debes seleccionar un tipo de flete",
  }),
  numberTravels: z.number().int().positive(),
  freightProposal: z.string().nonempty(),
  includeDelivery: z.enum(["si", "no"], {
    required_error: "Debes seleccionar si incluye entrega",
  }),
  includeLoadingOrUnloading: z.enum(
    ["no", "solo-carga", "solo-descarga", "ambos"],
    {
      required_error: "Debes seleccionar si incluye carga o descarga",
    }
  ),
  reference: z.string().nonempty(),
  observations: z.string().nonempty(),
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

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      document: "",
      fullName: "",
      email: "",
      phone: "",
      telephone: "",
      product: "",
      origin: "",
      destination: "",
      typeFreight: "viaje",
      numberTravels: 0,
      freightProposal: "",
      includeDelivery: "no",
      includeLoadingOrUnloading: "no",
      reference: "",
      observations: "",
    },
  });

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
          className="container flex items-center justify-center w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col justify-center max-w-screen-md">
            <div>
              <div className="text-xl font-roboto uppercase font-bold">
                Información de Contacto
              </div>
              <div className="text-sm text-muted-foreground">
                Complete los siguientes campos para poder establecer contacto
              </div>
            </div>
            <div className="grid grid-cols-1 gap-1 py-4 w-full">
              <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">DNI o RUC</FormLabel>
                    <FormControl>
                      <Input placeholder="11111111" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Razon social o Nombre completo
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Transportes Pakatnamu SAC"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Celular</FormLabel>
                      <FormControl>
                        <Input placeholder="982648215" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="048483" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Producto | Descripción de la carga
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Productos de ..." {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="origin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Punto de Partida
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Lambayeque" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="destination"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Punto de Llegada
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Lima" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  control={form.control}
                  name="typeFreight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Tipo de Flete
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="viaje">Por Viaje</SelectItem>
                          <SelectItem value="tonelada">Por Tonelada</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="numberTravels"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Numero de Viajes
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="2" type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="freightProposal"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Flete Propuesto
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="4000" type="number" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="includeDelivery"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Incluir Reparto
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="si">Incluir</SelectItem>
                          <SelectItem value="no">No Incluir</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="includeLoadingOrUnloading"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Incluir Carga o Descarga
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="no">No Incluir</SelectItem>
                          <SelectItem value="solo-carga">
                            Incluir Solo Carga
                          </SelectItem>
                          <SelectItem value="solo-descarga">
                            Incluir Solo Descarga
                          </SelectItem>
                          <SelectItem value="ambos">Incluir Ambos</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Referencia del viaje
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Debe ser..." {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="observations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      Observaciones de la carga
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="La Carga lleva..." {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <CardFooter className="p-0">
              <Button>Siguiente</Button>
            </CardFooter>
          </div>
        </form>
      </Form>
    </div>
  );
}

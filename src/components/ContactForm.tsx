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
import { Separator } from "./ui/separator";
import { useEffect } from "react";
const FormSchema = z.object({
  document: z.string().nonempty("Debes ingresar tu DNI o RUC"),
  fullName: z.string().nonempty("Debes ingresar tu nombre completo"),
  email: z.string().email("Debes ingresar un email válido"),
  phone: z.string().nonempty("Debes ingresar tu número de celular"),
  telephone: z.string(),
  product: z.string().nonempty("Debes ingresar la descripción del producto"),
  origin: z.string().nonempty("Debes ingresar el punto de partida"),
  destination: z.string().nonempty("Debes ingresar el punto de llegada"),
  typeFreight: z.enum(["viaje", "tonelada"], {
    required_error: "Debes seleccionar un tipo de flete",
  }),
  numberTravels: z
    .string()
    .nonempty("Debes ingresar el número de viajes")
    .refine((value) => !isNaN(Number(value)), {
      message: "Debes ingresar un número válido",
    })
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: "Debes ingresar un número mayor a 0",
    }),
  freightProposal: z.string().nonempty("Debes ingresar el flete propuesto"),
  includeDelivery: z.enum(["si", "no"], {
    required_error: "Debes seleccionar si incluye entrega",
  }),
  includeLoadingOrUnloading: z.enum(
    ["no", "solo-carga", "solo-descarga", "ambos"],
    {
      required_error: "Debes seleccionar si incluye carga o descarga",
    }
  ),
  reference: z.string().nonempty("Debes ingresar la referencia del viaje"),
  observations: z.string(),
});

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

  useEffect(() => {
    const dept = sessionStorage.getItem("selectedDepartment");
    if (dept) {
      form.setValue("origin", dept);
      sessionStorage.removeItem("selectedDepartment");
    }
  }, []);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
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
          <div className="w-full flex flex-col justify-center max-w-screen-md bg-background p-6 rounded-xl shadow-lg">
            <div className="border-l-4 border-danger px-2">
              <div className="text-2xl font-roboto uppercase font-bold text-danger">
                Información de Contacto
              </div>
              <div className="text-sm text-muted-foreground">
                Complete los siguientes campos para poder establecer contacto
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 py-4 w-full">
              <FormField
                control={form.control}
                name="document"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darknavy font-semibold">
                      DNI o RUC
                      <span className="text-destructive ml-1">*</span>
                    </FormLabel>
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
                    <FormLabel className="text-darknavy font-semibold">
                      Razon social o Nombre completo
                      <span className="text-destructive ml-1">*</span>
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
                    <FormLabel className="text-darknavy font-semibold">
                      Email
                      <span className="text-destructive ml-1">*</span>
                    </FormLabel>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Celular
                        <span className="text-destructive ml-1">*</span>
                      </FormLabel>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Teléfono
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="048483" {...field} />
                      </FormControl>
                      <FormDescription></FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Separator className="w-full my-4" />
              <FormField
                control={form.control}
                name="product"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darknavy font-semibold">
                      Producto | Descripción de la carga
                      <span className="text-destructive ml-1">*</span>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Punto de Partida
                        <span className="text-destructive ml-1">*</span>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Punto de Llegada
                        <span className="text-destructive ml-1">*</span>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Tipo de Flete
                        <span className="text-destructive ml-1">*</span>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Numero de Viajes
                        <span className="text-destructive ml-1">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="1" type="number" {...field} />
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
                      <FormLabel className="text-darknavy font-semibold">
                        Flete Propuesto
                        <span className="text-destructive ml-1">*</span>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Incluir Reparto
                        <span className="text-destructive ml-1">*</span>
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
                      <FormLabel className="text-darknavy font-semibold">
                        Incluir Carga o Descarga
                        <span className="text-destructive ml-1">*</span>
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
              <Separator className="w-full my-4" />
              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darknavy font-semibold">
                      Referencia del viaje
                      <span className="text-destructive ml-1">*</span>
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
                    <FormLabel className="text-darknavy font-semibold">
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
            <CardFooter className="p-0 flex justify-end">
              <Button className="bg-navy hover:bg-navy/95">Enviar</Button>
            </CardFooter>
          </div>
        </form>
      </Form>
    </div>
  );
}

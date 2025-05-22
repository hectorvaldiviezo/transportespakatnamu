"use client";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { LoaderPinwheel, Search, Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { errorToast, successToast } from "@/lib/core.function";
import { searchByDNI, searchByRUC } from "@/lib/search.actions";
import { QuotationRequest } from "./lib/quotation.interface";
import { sendQuotation } from "./lib/quotation.actions";

const FormSchema = z.object({
  document: z
    .string()
    .nonempty("Debes ingresar tu DNI o RUC")
    .regex(/^\d+$/, { message: "Solo se permiten números" }) // Solo números
    .refine((val) => val.length === 8 || val.length === 11, {
      message: "Debes ingresar un DNI (8 dígitos) o un RUC (11 dígitos)",
    }),
  fullName: z.string().nonempty("Debes ingresar tu nombre completo"),
  email: z.string().email("Debes ingresar un email válido"),
  phone: z.string().nonempty("Debes ingresar tu número de celular"),
  telephone: z.string(),
  product: z
    .string()
    .nonempty("Debes ingresar la descripción del producto")
    .min(50, "Mínimo 50 caracteres")
    .max(1000, "Máximo 1000 caracteres."),
  origin: z.string().nonempty("Debes ingresar el punto de partida"),
  destination: z.string().nonempty("Debes ingresar el punto de llegada"),
  includeDelivery: z.enum(["si", "no"], {
    required_error: "Debes seleccionar si incluye entrega",
  }),
  includeLoadingOrUnloading: z.enum(
    ["no", "solo-carga", "solo-descarga", "ambos"],
    {
      required_error: "Debes seleccionar si incluye carga o descarga",
    }
  ),
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
      includeDelivery: "no",
      includeLoadingOrUnloading: "no",
      observations: "",
    },
    mode: "onChange", // Valida en cada cambio
    criteriaMode: "all",
  });

  const [loadingSearch, setLoadingSearch] = useState(false);
  const [loadgingSubmit, setLoadingSubmit] = useState(false);

  const validateDocumentNumber = async () => {
    setLoadingSearch(true);
    const documentNumber = form.getValues("document");
    if (documentNumber.length === 8) {
      await searchByDNI(documentNumber)
        .then((response) => {
          if (response.status === 200) {
            form.setValue("fullName", response.data.nombre);
          }
        })
        .catch((error: any) => {
          errorToast(error.response.data.message);
        })
        .finally(() => {
          setLoadingSearch(false);
        });
    } else if (documentNumber.length === 11) {
      await searchByRUC(documentNumber)
        .then((response) => {
          if (response.status === 200) {
            form.setValue("fullName", response.data.nombre_o_razon_social);
          }
        })
        .catch((error: any) => {
          errorToast(error.response.data.message);
        })
        .finally(() => {
          setLoadingSearch(false);
        });
    } else {
      errorToast("Debes ingresar un documento válido.");
      setLoadingSearch(false);
    }
  };

  useEffect(() => {
    const dept = sessionStorage.getItem("selectedDepartment");
    if (dept) {
      form.setValue("origin", dept);
      sessionStorage.removeItem("selectedDepartment");
    }
  }, []);

  async function onSubmit() {
    setLoadingSubmit(true);
    const data = await form.getValues();

    const quotationRequest: QuotationRequest = {
      document: data.document,
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      telephone: data.telephone,
      product: data.product,
      origin: data.origin,
      destination: data.destination,
      includeDelivery: data.includeDelivery === "si",
      includeLoadingOrUnloading: data.includeLoadingOrUnloading,
      observations: data.observations,
    };

    await sendQuotation(quotationRequest)
      .then((response) => {
        if (response.status === 200) {
          successToast(response.message);
        } else {
          errorToast(response.message);
        }
      })
      .catch((error: any) => {
        errorToast(error.response.data.message);
      })
      .finally(() => {
        setLoadingSubmit(false);
        form.reset();
      });
    setLoadingSubmit(false);
  }

  return (
    <div className="w-full py-20 px-2 flex justify-center items-center bg-muted">
      <Form {...form}>
        <form
          action=""
          className="container max-w-screen-xl flex items-center justify-center w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col justify-center max-w-screen-md bg-background p-6 rounded-xl shadow-lg">
            <div className="border-l-4 border-danger px-2">
              <div className="text-2xl font-poppins uppercase font-bold text-danger">
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
                    <div className="flex gap-4">
                      <FormControl>
                        <Input
                          placeholder="11111111"
                          minLength={8}
                          maxLength={11}
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
                        <span>Validar Documento</span>
                      </Button>
                    </div>
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
                        disabled
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
                name="observations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-darknavy font-semibold">
                      Puntos a tener en cuenta
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
              <Button
                className="bg-navy hover:bg-navy/95 flex gap-2"
                disabled={loadgingSubmit}
              >
                {loadgingSubmit ? (
                  <LoaderPinwheel className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                Solicitar Cotización
              </Button>
            </CardFooter>
          </div>
        </form>
      </Form>
    </div>
  );
}

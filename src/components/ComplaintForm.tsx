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
const FormSchema = z.object({
  sedeId: z.string({ required_error: "Please select a sede." }),
  type: z.string({ required_error: "Please select a type." }),
  date: z.date({
    required_error: "Please select a date.",
  }),
  time: z.string({ required_error: "Please select a time." }),
  description: z.string({ required_error: "Please enter a description." }),
});

export default function ComplaintForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      sedeId: "",
      type: "",
      date: undefined,
      time: "",
      description: "",
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
    <div className="w-full py-20 px-2 flex justify-center items-center bg-primary">
      <Form {...form}>
        <form
          action=""
          className="container flex items-center justify-center"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Tabs defaultValue="customer" className="w-full max-w-screen-md">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger className="font-anton uppercase" value="customer">Paso 1</TabsTrigger>
              <TabsTrigger className="font-anton uppercase" value="well">Paso 2</TabsTrigger>
              <TabsTrigger className="font-anton uppercase" value="complaint">Paso 3</TabsTrigger>
            </TabsList>
            <TabsContent value="customer">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-anton uppercase font-normal">Información del reclamo</CardTitle>
                  <CardDescription>
                    Complete los siguientes campos para registrar su reclamo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-4">
                  <FormField
                    control={form.control}
                    name="sedeId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="uppercase font-anton">Sede</FormLabel>
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
                        <FormLabel className="uppercase font-anton">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel className="uppercase font-anton">Fecha</FormLabel>
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
                          <FormLabel>Hora</FormLabel>
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
                        <FormLabel className="uppercase font-anton">Descripción</FormLabel>
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
                  <Label htmlFor="files" className="uppercase font-anton">Archivos</Label>
                  <Input id="files" type="file" multiple/>
                </CardContent>
                <CardFooter>
                  <Button>Siguiente</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="well">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password here. After saving, you'll be logged
                    out.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="current">Current password</Label>
                    <Input id="current" type="password" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                  </div>
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

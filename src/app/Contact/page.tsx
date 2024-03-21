"use client";
import React, { FormEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { sendMessage } from "./sendMessage";
import { toast } from "@/components/ui/use-toast";
const formSchema = z.object({
  nome: z.string().min(2, {
    message: "Nome deve conter pelo menos 2 caracteres.",
  }),
  email: z.string().email({ message: "Digite o email correto" }),
  mensagem: z.string().min(10, { message: "Digite pelo menos 10 caracteres" }),
});

export default function Contact() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      mensagem: "",
    },
  });

  async function SendMessageIntermedi(formData: FormData) {
    // if (form.formState.isValid == false) {
    //   return;
    // }
    await sendMessage(formData);
    toast({
      title: "Mensagem enviada",
      description: `Você enviou uma mensagem deiaxando o email: ${formData.get(
        "email"
      )} como contato as ${new Date().toLocaleString("pt-BR")}`,
    });
    form.reset();
  }

  // 2. Define a submit handler.

  return (
    <Form {...form}>
      <form
        action={SendMessageIntermedi}
        className="space-y-8 w-80 flex flex-col m-auto mt-11 "
      >
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome" {...field} />
              </FormControl>
              <FormDescription>
                Seu nome que vai aparecer no email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu email" {...field} />
              </FormControl>
              <FormDescription>
                o email que ira aparecer para que haja retorno
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Input placeholder="Digite sua mensagem" {...field} />
              </FormControl>
              <FormDescription>Sua mensagem para mim</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-20" type="submit">
          Enviar
        </Button>
      </form>
    </Form>
  );
}

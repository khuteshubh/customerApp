"use client"


import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import formSchema from "@/Schema/index";


export default function Home() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      mobileNo: "",
    }
  });
  const router = useRouter();
  
  const handleSubmit =(data: z.infer<typeof formSchema>) =>{
    
    localStorage.setItem('formData', JSON.stringify(data));
    router.push("/Page2" )

    
  }
  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md w-full flex-col gap-4">
        <FormField
        control={form.control}
        name="userName"
        render={({field}) => {
          return <FormItem>
            <FormLabel>Customer Name</FormLabel>
            <FormControl>
              <Input  placeholder="Name" {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        }}
        />
        <FormField
        control={form.control}
        name="mobileNo"
        render={({field}) => {
          return <FormItem>
            <FormLabel>Mobile Number</FormLabel>
            <FormControl>
              <Input  placeholder="Mobile No" {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
        }}
        />
        <Button type="submit" className="w-full mt-4" >Next</Button>
      </form>
    </Form>

    
    

  </main>
  
 
  
    
    
  );
}

"use client";

import { finalSchema } from '@/Schema';
import { setServerSideData } from '@/app/action/add-formData-action';

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {  useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import toast from 'react-hot-toast';
import { useRouter} from "next/navigation";






const page3 = () => {
   
  
  var  values = JSON.parse(localStorage.getItem("formData") || '{}');

  
  // console.log(values);
  const form = useForm<z.infer<typeof finalSchema>>({
    resolver : zodResolver(finalSchema),
    defaultValues :{
      userName : values.userName,
      mobileNo: values.mobileNo,
      vehicleName: values.vehicleName,

    }
    

  });
  
  
  const router = useRouter();
  const handleSubmit = async (data1: z.infer<typeof finalSchema> ) =>{
    console.log(data1);
    
    const response = await setServerSideData(data1);

    if(response.success){
      toast.success(response.success, {
            position: "top-center",
            duration : 2000,
            });
            router.push("/");

    }
    if(response.error){
      toast.error(response.error);
    }
    
    localStorage.setItem("formData",JSON.stringify(data1));
    
    

    

  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
    <Form {...form}>
      <form  onSubmit = {form.handleSubmit(handleSubmit)} className="max-w-md w-full flex-col gap-4">
        <FormField
        control={form.control}
        name="userName"
        render={({field}) => {
          return <FormItem>
            <FormLabel>Customer Name</FormLabel>
            <FormControl>
              <Input  placeholder="Name" {...field}  />
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
              <Input  placeholder="Mobile No" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
        }}
        />
        <FormField
        control={form.control}
        name="vehicleName"
        render={({field}) =>(
          <FormItem>
            <FormLabel>Vehicle Name</FormLabel>
            <Select  onValueChange={field.onChange} defaultValue={field.value} >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select vehicle"/>
                </SelectTrigger>
              </FormControl>
              <SelectContent >
                <SelectItem value="Tata">Tata</SelectItem>
                <SelectItem value="Mahindra">Mahindra</SelectItem>
                <SelectItem value="Bajaj">Bajaj</SelectItem>
                <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                <SelectItem value="Hero">Hero</SelectItem>
                <SelectItem value="Honda">Honda</SelectItem>
                <SelectItem value="Toyota">Toyota</SelectItem>
                <SelectItem value="Ford">Ford</SelectItem>
                <SelectItem value="BMW">BMW</SelectItem>
                <SelectItem value="Tesla">Tesla</SelectItem>


              </SelectContent>

            </Select>
            <FormMessage/>
          </FormItem>
 
        )}
        />
        <Button type="submit" className="w-full mt-4" >Send</Button>
      </form>
    </Form>

    
    

  </main>
  
  )
}

export default page3
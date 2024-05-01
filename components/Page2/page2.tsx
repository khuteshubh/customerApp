"use client"
import React from 'react'

import * as z from "zod";
import {formSchema2} from "@/Schema/index";
import { useEffect } from 'react';
import { useForm} from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {Form,FormField, FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const page2 = () => {
  const form = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    
  });
  var localvalue: any;

  useEffect(() => {
    localvalue = JSON.parse(localStorage.getItem("formData") || '{}');
    // console.log(localvalue);

  })
  
  
  const router = useRouter();

  const handleSubmit2 = (data:z.infer<typeof formSchema2>) =>{

    
      localStorage.setItem('formData', JSON.stringify({...data,...localvalue}));
      router.push("/Page3" )

      console.log(data);
    
    
    // localStorage.setItem('formData', JSON.stringify({...data,...localvalue}));
    // router.push("/Page3" )

    // console.log(data);
    
  };
  return (<main className='flex min-h-screen flex-col items-center justify-between p-24'>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit2)}  className="w-2/3 space-y-6 ">
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
        <Button type='submit' className="w-full mt-4" >Next</Button>
        

      </form>
    </Form>
    
  </main>
  );
}

export default page2
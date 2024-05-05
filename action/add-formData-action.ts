"use server"



import { supabase} from '@/lib/Supabase/createClient';
import { finalSchema } from '@/Schema/index';
import { revalidatePath } from 'next/cache';

export const setServerSideData = async (data1: any)=>{
    
    
    
        const {data,error} = await supabase
            .from("customerData")
            .insert({
                userName: data1.userName,
                mobileNo: data1.mobileNo,
                vehicleName: data1.vehicleName,
            });

        if(data){revalidatePath("/");}
        if(error){console.log(error);}

    
    
    // Server-side-validation

    const result = finalSchema.safeParse(data1);
    if(result.success){
        
        return{
            success : "Data send successfully!",
        }
      
    }
    else{
      let errorMessage = " ";
      result.error.issues.forEach((issue) =>{
        errorMessage = errorMessage + issue.path[0] + ":" + issue.message + '.';

      });
    
      return{
        error : errorMessage,
      }

    }

    

    };
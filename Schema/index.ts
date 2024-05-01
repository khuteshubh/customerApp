import * as z from "zod";
const formSchema = z.object({
    userName: z.string().min(2, {
      message: "Please enter a your name.",
    }),
    mobileNo : z.string().min(2,{
      message:"Please Enter a valid Phone Number.",
    }).max(10,{
      message:"Please Enter a valid Phone Number.",
    }),
    
  });

export const formSchema2 = z.object({
vehicleName : z.string({
    required_error: "Please select an Vehicle Name to display.",
    }),
});

export const finalSchema = z.object({
  userName: z.string().min(2, {
    message: "Please enter a your name.",
  }),
  mobileNo : z.string().min(2,{
    message:"Please Enter a valid Phone Number.",
  }).max(10,{
    message:"Please Enter a valid Phone Number.",
  }),
  vehicleName : z.string({
    required_error: "Please select an Vehicle Name to display.",
    }),

})

 


  export default formSchema;
  
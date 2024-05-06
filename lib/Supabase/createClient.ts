
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,);


// export default async function handler(req: { method: string; body: any; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; } | null): void; new(): any; }; }; }) {
//     if (req.method === 'POST') {
//       try {
//         const { data, error } = await supabase
//           .from('customerData')
//           .insert(req.body);
  
//         if (error) {
//           throw error;
//         }
//         res.status(200).json(data);
//       } catch (error) {
//         console.error('Error inserting data:', "error.message");
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
//     } else {
//       res.status(405).json({ error: 'Method Not Allowed' });
//     }
//   }
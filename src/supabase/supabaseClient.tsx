import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPA_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function uploadFileForCategory(
    categoryName: string,
    imageFile: any,
    imageName: string,
): Promise<void>{
    const { data, error } = await supabase.storage
        .from('gym-workout-imgs')
        .upload(imageName, imageFile);
    
        if(data){
            const imgPath = supabase
                .storage
                .from('gym-workout-imgs')
                .getPublicUrl(data.path);
            
            const {error} = await supabase
                .from('categories')
                .insert({categoryName, imgUrl: imgPath.data.publicUrl})

            if(error){
                console.log("Table insert fail.")
            } else {
                console.log("Success")
            }
        
        } 
}
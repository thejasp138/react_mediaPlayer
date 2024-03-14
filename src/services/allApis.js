import commanApi from "./commanApi";
import { BASE_URL } from "./base_url";

export const uploadVideo=async(data)=>{
   return await commanApi("POST",`${BASE_URL}/allvideos`,data)
}

 export const getVideos=async()=>{
  return await commanApi("GET",`${BASE_URL}/allvideos`,"")
}

export const deletVideo=async(id)=>{
    return await commanApi("DELETE",`${BASE_URL}/allvideos/${id}`,{})
}


export const addCategory=async(data)=>{
  return await commanApi("POST",`${BASE_URL}/category`,data)
}


     export const getCategories=async()=>{
      return await commanApi("GET",`${BASE_URL}/category`,"")
    }

    export const deletCat=async(id)=>{
      return await commanApi("DELETE",`${BASE_URL}/category/${id}`,{})
  }


  export const addHistory=async (data)=>{
    return await commanApi ("POST",`${BASE_URL}/histtory`,data)
  }


  export const getHistory=async ()=>{
    return await commanApi ("GET",`${BASE_URL}/histtory`,"")

    
  }

  export const deletHis=async(id)=>{
    return await commanApi ("DELETE",`${BASE_URL}/histtory/${id}`,{})


  } 

  export const getSpecificVideo=async (id)=>{
    return await commanApi ("GET",`${BASE_URL}/allvideos/${id}`,"")
  }

  export const updatecategory=async (data,id)=>{
    return await commanApi ("PUT",`${BASE_URL}/category/${id}`,data)
  }

 

  


  



 
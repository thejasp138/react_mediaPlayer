import axios from "axios"

const commanApi=async(reqMethd,apiUrl,body)=>{
    const reqConfig={
        method:reqMethd,
        url:apiUrl,
        data:body,
        headers:{'Content-Type':'application/json'}
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })

}
export default commanApi
import axios from "axios";

const _get = (requestData: any, callback: any) => {
    const request: any = axios.get(requestData.url,{

    }).then(response => {
        return response;
    })
    // const request: any = axios.get(requestData.url,{
    //     params: requestData.param
    // }).then(response => {
    //     return response;
    // })
    return null;
}

const _post = (requestData: any) => {
    const request: any = axios.post(requestData.url, requestData.data)
        .then(response => {return response});

        return null;
}


export default _get;
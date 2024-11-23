export function createXMLHttpRequest( method, url, success, error, data = null){
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax(){
        // console.log(xhr.readyState)
        // console.log(xhr.status)
        // console.log(xhr.response)
        // console.log(xhr.responseText)

        if(xhr.readyState === 4){
            if(xhr.status < 400){
                const json = JSON.parse(xhr.responseText)
               
                if(typeof success === "function"){
                    success(json)
                }else if(typeof error === "function"){
                    error("Algo deu errado com a conexão")
                }
            }
        } 
        
    }

}
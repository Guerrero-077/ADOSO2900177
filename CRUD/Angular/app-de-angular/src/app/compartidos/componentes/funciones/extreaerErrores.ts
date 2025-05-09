export function extraerErrores(obj:any):string[] {
    const err = obj.error.errors;

    let mensajeDeErrores: string[] = [];

    for (let campo in err) {
        const mensajesConCampos = err[campo].map((mensaje:string)=>`${campo}: ${mensaje}`);
        mensajeDeErrores = mensajeDeErrores.concat(mensajesConCampos);
    }
    return mensajeDeErrores;
}
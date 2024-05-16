import data from './dataProduct.json';
export const productos = data

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(data);
        }, 1000);
    })
}

export const getProductsById = (id) => {
    return new Promise ((resolve, reject) =>{
        
        const item = data.find(
            (prod) => prod.id === id
        );
        if (item){
            setTimeout(()=>{
                resolve(item);
            }, 1000);
        }else{
            reject({
                Error: "No se encontro el producto"
            })
        }
    })
}

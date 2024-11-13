import { data } from "../data/database"

export function getAllProducts(){
    return data.products;
}

export function getProductById(pId:number){
    return data.products.find(item=>item.id===pId);
}
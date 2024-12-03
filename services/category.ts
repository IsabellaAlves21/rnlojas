import { data } from "../data/database"

export function getAllCategories(){
    return data.categories;
}

export function getCategoryById(pId:number){
    return data.categories.find(item=>item.id===pId);
}
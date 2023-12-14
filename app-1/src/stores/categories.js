import { useDispatch } from "react-redux";

export function loadCategories(){
    let dispatch = useDispatch();
    return (function(){
		fetch("https://fakestoreapi.com/products/categories")
		.then((res)=>{
			return res.json();
		})
		.then((response)=>{
            dispatch({type:"LOAD_CATEGORIES_DONE",payload:response});
            console.log(response);
			// setCategories(response);
			// setLoading(false);
		});
	});
}

function CategoriesReducer(state={categories:{}},action){
    console.log("Categories Reducer");
    switch(action.type){
        case "LOAD_CATEGORIES_DONE":{
            return {
                ...state,
                categories:action.payload
            }
        }
        default:{
            return state;
        }
    }   
}
export default CategoriesReducer;
// import { useEffect,useState } from "react";
import { loadCategories } from "../../stores/categories";
import { useDispatch, useSelector } from "react-redux";

function Categories(){
    // let [categories,setCategories] = useState([]);
    // useEffect(,[])
    const dispatch = useDispatch();
    dispatch(loadCategories());
    const categories = useSelector((state) => {
        return state.categories.categories;
    });
    // console.log(categories);

    return (
        <ul>
        {
            categories.map((item)=>(
                 <li key={item}>{item}</li>)
            )
        }
        </ul>
    )
}
export default Categories;
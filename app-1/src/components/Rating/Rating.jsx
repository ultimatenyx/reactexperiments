import Icon from "@mdi/react";
import {mdiStar} from "@mdi/js";
import "./Rating.css";
import classNames from 'classnames/bind';

function Rating({rating,maxRating}){
    return (
        <div>
        
        {rating}/{maxRating}
        {
            new Array(maxRating).fill(0).map((_,index)=>{
                const isActive = rating>=index+1;
                
                return <Icon 
                        path={mdiStar} 
                        size={1.2} 
                        className={classNames("rating__star",{"rating__star--active":isActive})}
                        key={index}
                        />
                
            })
        }
        </div>
        );
}

export default Rating;
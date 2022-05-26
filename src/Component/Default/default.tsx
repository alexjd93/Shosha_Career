import React from "react";
import Title from '../Header/header';
import Global from '../Globa/global';
const defaultSection:React.FC<{data:any}> = ({data}) => {
    console.log(data)
    return(
        <div>
            <Title title="Personal information"/>
            {data.map((element:any) => 
                <Global element={element}/>
            )}
        </div>
    )
}

export default defaultSection;
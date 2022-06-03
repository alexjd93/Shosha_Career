import styled from "styled-components";
import * as react from "react";
const Progress = ({ scroll }: any) => {
    return(
        <div style={{
            backgroundColor:"#f9f9f9",
            position:"sticky",
            width: "100%",
            height: "6px",
            backgroundImage:`linear-gradient(to right, #FF6347 ${scroll}, transparent 0)`,
            maxWidth: '100%',
            maxHeight: '4px',
            zIndex:'3',
            top:'0px',

            
        }}></div>
    )
};

export default Progress;

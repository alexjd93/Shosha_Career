import React from "react";
type Props = {
    element: {
        fieldName: string,
        fieldId: string,
        fieldType: string
    }
}
const Global = ({element}:Props) => {
    let component = <div></div>
    switch(element.fieldType){
        case 'text':
            component = <div> </div>
    }
    return (
        <div>
            <label>
                <span>*</span> {element.fieldName}
            </label>
        </div>
    )
}

export default Global
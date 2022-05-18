import React from 'react';

export default props =>{
    const Url = ` https://retoolapi.dev/KPGCEN/data`;
    return (
        <div style={{display:'flex', justifyContent:'center', padding: '50px 0'}}>
            <button onClick={()=>props.onSelect(Url)} className="btn btn-success">show elements</button>
        </div>
    )
}
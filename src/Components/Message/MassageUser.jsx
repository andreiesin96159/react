import m from './Message.module.css';
import React from 'react';







const MassageUser = (props) => {

    return (
        <div>
             <div className={m.massageUser}>
            {props.massage}
            <button className={m.edit}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="m9.49 3.95 2.56 2.56-6.14 6.14a4.82 4.82 0 0 1-2 1.2l-2.1.64a.24.24 0 0 1-.3-.3l.64-2.1a4.82 4.82 0 0 1 1.2-2L9.5 3.95Zm3.67-2.13 1.02 1.02c.4.4.42 1.03.08 1.45l-1.17 1.18-2.56-2.56 1.1-1.1c.42-.42 1.1-.42 1.53 0Z"></path></svg></button>
        </div>
       
        </div>
       
    )
}
export default MassageUser;

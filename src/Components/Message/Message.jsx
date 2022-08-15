import m from './Message.module.css';
import MassageUser from './../Message/MassageUser.jsx';
import NameUser from './../Message/NameUsers.jsx'
import React from 'react';
import { ADD_MASSAGES } from '../../State/UsersPage';

const Message = (props) => {
    
const UsersMap = props.users.map((user)=> <NameUser name={user.name} id={user.id} />);
const MassagesMap = props.massage.map((mas)=>  <MassageUser massage={mas.massage}/>);

const buttonClick = () => {
    let addMassage = hrefTextareaUserMassage.current.value;
    props.dispatch(ADD_MASSAGES(addMassage))
}

let hrefTextareaUserMassage = React.createRef();

    return (
        <div className={m.blockMasag}>
            <div className={m.flexNameUser}>
                {UsersMap}
            </div>
            <div>
               {MassagesMap}
            </div>
            <div className={m.massageSetBlock}>
                <textarea className={m.textareaName} ref={hrefTextareaUserMassage}></textarea>
                <button className={m.buttonName} onClick={buttonClick}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="send_24__Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="send_24__send_24"><path id="send_24__Rectangle-76" d="M0 0h24v24H0z"></path><path d="M5.74 15.75a39.14 39.14 0 0 0-1.3 3.91c-.55 2.37-.95 2.9 1.11 1.78 2.07-1.13 12.05-6.69 14.28-7.92 2.9-1.61 2.94-1.49-.16-3.2C17.31 9.02 7.44 3.6 5.55 2.54c-1.89-1.07-1.66-.6-1.1 1.77.17.76.61 2.08 1.3 3.94a4 4 0 0 0 3 2.54l5.76 1.11a.1.1 0 0 1 0 .2L8.73 13.2a4 4 0 0 0-3 2.54Z" id="send_24__Mask" fill="currentColor"></path></g></g></svg></button>
            </div>
        </div>
    )
}

export default Message;





// import m from './Message.module.css';
// import NameUser from './../Message/NameUsers.jsx'
// import MassageUser from './MassageUser'
// import React from 'react';



// // const Message = (props) => {

//     const UsersMap = props.users.map((user) => <NameUser name={user.name} id={user.id} />);
//     const MassagesMap = props.massage.map((mas) => <MassageUser massages={mas.massage} />);

//     const buttonClick = () => {
//         let text = hrefTextareaUserMassage.current.value;
//         props.addUserMassge(text);
//     }

//     let hrefTextareaUserMassage = React.createRef();

//     return (
//         <div className={m.blockMasag}>
//             <div className={m.flexNameUser}>
//                 {UsersMap}
//             </div>
//             <div className={m.flexNameUser}>
//                 {MassagesMap}
//             </div>
//             <div className={m.massageSetBlock}>
//                 <textarea className={m.textareaName} ref={hrefTextareaUserMassage}></textarea>
//                 <button className={m.buttonName} onClick={buttonClick}> Отправить</button>
//             </div>
//         </div>
//     )
// }

// export default Message;
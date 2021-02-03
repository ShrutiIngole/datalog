import { useState } from 'react';
import store from './store/store';

const Person = ({tag}) => {
    const [style, setStyle] = useState("person-inactive")
    const handleClick = (e) => {
        var stat = store.getState().filled[tag]
        store.dispatch({
            type: "TOGGLE",
            tag: tag,
            status: !stat
        })
        (style === "person-inactive")
        ?
        (setStyle("person-active"))
        :
        (setStyle("person-inactive"))
    }
    return (
        <div className={style} onClick={e=>{handleClick(e)}}></div>
    )
}

export default Person;
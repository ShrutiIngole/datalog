import store from './store/store';

const Buttons = () => {
    const handleSetDest = (val) => {
        console.log(val)
        if(!store.getState().current.moving){
            store.dispatch({
                type: "SET_FLOOR",
                floor: val
            })
        }
        else {
            window.alert("Elevator is moving, cannot use any buttons ")
        }
    }

    const handleChange = (e) => {
        store.dispatch({type: "SET_PEOPLE", people: e.target.value})
    }
    const handleGo = async (e) => {
        const data = store.getState().current
        if (!data.moving && data.people>0) {
            if (data.floor !== data.dest) {
                await store.dispatch({type: "START"})
                store.dispatch({type: "END"})
            }
            else {
                window.alert("please enter correct floors")
            }
        }
        else {
            window.alert("Cannot use any buttons while elevator is moving or with zero passengers")
        }
    }
    return (
        <div>
            <div id="button-grid">
                <div className="fl-button" name="fl10" onClick={e=>handleSetDest(10)}>10</div>
                <div className="fl-button" name="fl9" onClick={e=>handleSetDest(9)}>9</div>
                <div className="fl-button" name="fl8" onClick={e=>handleSetDest(8)}>8</div>
                <div className="fl-button" name="fl7" onClick={e=>handleSetDest(7)}>7</div>
                <div className="fl-button" name="fl6" onClick={e=>handleSetDest(6)}>6</div>
                <div className="fl-button" name="fl5" onClick={e=>handleSetDest(5)}>5</div>
                <div className="fl-button" name="fl4" onClick={e=>handleSetDest(4)}>4</div>
                <div className="fl-button" name="fl3" onClick={e=>handleSetDest(3)}>3</div>
                <div className="fl-button" name="fl2" onClick={e=>handleSetDest(2)}>2</div>
                <div className="fl-button" name="fl1" onClick={e=>handleSetDest(1)}>1</div>
                <div className="fl-button" onClick={e=>{handleGo(e)}}>GO</div>
                <div><input type="number" onChange={e=>handleChange(e)} placeholder="Passengers" min="1" max="10"/></div>
            </div>

            
        </div>
    )
}

export default Buttons;
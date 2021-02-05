import store from './store/store';

const Buttons = () => {

    const sleep = (sec) => {return new Promise(resolve => setTimeout(resolve, sec*1000))}
    const moving = () => {store.dispatch({type: "START"})}
    const goUp = (i, floor) => {store.dispatch({type: "COUNTER", val: floor + i})}
    const goDown = (i, floor) => {store.dispatch({type: "COUNTER", val: floor - i})}

    const handleSetDest = (val) => {
        console.log("floor value in the component: ", val)
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

        //if already moving, do nothing
        if (!data.moving) {
            //if not moving and there are people on the elevator
            if (data.people>0) {
                //if floor != dest, elevator can move
                if (data.floor !== data.dest) {
                    //motion start------------------------
                    moving()
                    //down
                    if(data.floor > data.dest) {
                        store.dispatch({type: "ARROW_DOWN"})
                        for(let i = 1; i < data.floor-data.dest; i++) {
                            await sleep(2)
                            goDown(i, data.floor)
                        }
                    }
                    //up
                    else {
                        store.dispatch({type: "ARROW_UP"})
                        for(let i = 1; i < data.dest-data.floor; i++) {
                            await sleep(2)
                            goUp(i, data.floor)
                        }
                    }
                    //floor == dest and set end
                    await sleep(2)
                    store.dispatch({type: "END"})
                    //motion end--------------------------
                }
                else {
                    window.alert("please enter correct floors")
                }
            }
            else {
                window.alert("Cannot use any buttons with no passengers.")
            }
        }
        else {
            window.alert("Cannot use any buttons while elevator is moving.")
        }
    }
    return (
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
    )
}

export default Buttons;
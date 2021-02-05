import store from './store/store'

const Elevator = () => {
    return (
        <div id="elevator">
            <div className="floor" id={store.getState().current.moving.toString()}>#{store.getState().counter} <i className={store.getState().arrow} /></div>
            <div>Passengers: {store.getState().current.people}</div>
            <div>From floor #{store.getState().current.floor} to floor #{store.getState().current.dest}</div>
        </div>
    )
}

export default Elevator;
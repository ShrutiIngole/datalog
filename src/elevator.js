import store from './store/store'

const Elevator = () => {
    const data = store.getState().current
    return(
            (data.moving)
            ?
            (
                <div>
                    <div>Passengers: {data.people}</div>
                    <div>{data.time}</div>
                    {(data.from > data.to)
                    ?
                    (<i></i>)
                    :
                    (<i></i>)}
                </div>
            )
            :
            (
                <div className="floor-ind">Only 10 or less people allowed.</div>
            )
    )
}

export default Elevator;
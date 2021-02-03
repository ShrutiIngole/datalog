import store from './store/store';

const Logs = () => {
    const data = store.getState().logs
    console.log(data)
    const display = data.map(each=> {
        return (
            <div key={each.time}>
                <div>Time: {each.time}</div>
                <div>To floor #{each.end}</div>
                <div>Passengers: {each.people}</div>
                <br />
            </div>
        )
    })

    return(
        <div>
            {display}
        </div>
    )
}

export default Logs;
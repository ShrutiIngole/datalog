const reducer = (state, action) => {
    var today = new Date();
    switch (action.type) {
        case "SET_FLOOR": {
            console.log("Current var: ", state.current)
            return {
                ...state,
                current: {
                    ...state.current,
                    dest: action.floor
                }
            }
        }

        case "SET_PEOPLE": {
            return {
                ...state,
                current: {
                    ...state.current,
                    people: action.people
                }
            }
        }

        case "START": {
            console.log(today)
            return {
                ...state,
                current: {
                    ...state.current,
                    moving: true,
                    start: state.current.floor,
                    time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
                }
            }
        }

        case "END": {
            console.log(state.arrow)
            console.log("Ended")
            return {
                ...state,
                current: {
                    ...state.current,
                    moving: false,
                    floor: state.current.dest,
                    dest: ""
                },
                counter: state.current.dest,
                logs: [...state.logs,
                    {
                        time: state.current.time,
                        end: state.current.dest,
                        people: state.current.people
                    }
                ],
                arrow: " "
            }
        }

        case "COUNTER": {
            return {
                ...state,
                counter: action.val
            }
        }

        case "ARROW_DOWN": {
            console.log(state.arrow)
            return{
                ...state,
                arrow: "fas fa-angle-double-down"
            }
        }

        case "ARROW_UP": {
            console.log(state.arrow)
            return{
                ...state,
                arrow: "fas fa-angle-double-up"
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;
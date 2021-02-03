const reducer = (state, action) => {
    var today = new Date();
    switch (action.type) {
        case "SET_FLOOR": {
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
            console.log("Ended")
            return {
                ...state,
                current: {
                    ...state.current,
                    moving: false,
                    people: 0,
                    floor: state.current.dest,
                },
                logs: [...state.logs,
                    {
                        time: state.current.time,
                        end: state.current.dest,
                        people: state.current.people
                    }
                ]
            }
        }

        default: {
            return state;
        }
    }
}

export default reducer;
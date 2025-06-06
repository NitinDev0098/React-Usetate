const initialSate = 20;

const changeTheNumber = (state= initialSate, actions) => {
    switch (actions.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}

export default changeTheNumber;
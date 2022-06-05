const initialValue = 10;

const ChangeNum = (state = initialValue, action) => {
    switch (action.type) {
        case 'INC_NUM': return state + 1;
        case 'DEC_NUM': return state - 1;
        default:
            return state;
    }

}

export default ChangeNum;


export const setData = (data) => {
    return {type: 'SET_DATA', payload: data}
}

export const setDataError = (dataErr) => {
    return {type: 'SET_DATA_ERR', payload: dataErr}
}
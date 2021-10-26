
export const testAction = (data) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        console.log("working")
        const firestore = getFirestore();
        firestore.collection('test').add({
            createdAt: new Date(),
            ...data,
            hobby: 'Jiu-Jitsu'
        }).then(()=>{
            dispatch({type: 'TEST_ACTION', data})
        }).catch((err)=>{
            dispatch({type: 'TEST_ERROR', err})
        })
    }
}


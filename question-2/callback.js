const delayedSuccess = () => {
    setTimeout(() => {
        let success = { 'messaege': 'delayed success!' }
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delated exception');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}

delayedSuccess()
delayedException()
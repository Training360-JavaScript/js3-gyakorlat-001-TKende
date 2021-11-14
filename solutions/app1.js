function removeDuplicatesFromArray(arr) {
    let result = [];
    arr.forEach((elem) => {
        if (!result.includes(elem)) {
            result.push(elem);
        }
    });

    return result;
}

export default removeDuplicatesFromArray
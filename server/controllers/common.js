

export const getErrorText = (err) => {
    var matches = err.stack.split('\n');
    return matches[0];
}


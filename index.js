var isValid = function(s) {
    if (s.length % 2 !== 0){return false}
    
    let k = []
    
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    
    for (let i= 0; i < s.length; i++) {
        if (s[i] in map) {
            k.push(s[i])
        } else {
            let opening = k.pop()
            if (map[opening] !== s[i]) {
                return false
            }
        }
    }
    
    return k.length !== 0 ? false : true
};
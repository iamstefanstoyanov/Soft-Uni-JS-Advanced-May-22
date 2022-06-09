function validator(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let urlRegRex = /^[\w.]+$/;
    if (!(obj.method && validMethods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (!(obj.uri && (obj.uri == '*' || urlRegRex.test(obj.uri)))) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (!(obj.version && validVersions.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version')
    }
    let messageRegEx = /^[^<>\\&\'\"]+$/
    if (!(obj.hasOwnProperty('message') && (obj.message == '' || messageRegEx.test(obj.message)))) {
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj
}
console.log(validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}))
console.log(validator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}))
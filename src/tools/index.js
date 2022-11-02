export const queryStringToObj = (queryString) => {
    const query = {}

    queryString.split('?')[1].split('&').forEach(v => {
        const arr = v.split('=')
        query[arr[0]] = decodeURIComponent(arr[1])
    })

    return query
}
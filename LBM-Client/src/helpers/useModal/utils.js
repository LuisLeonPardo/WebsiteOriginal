export const sort = (data, ascendant) => {
    return data.sort((a, b) => {
        if(ascendant){
            return a.price > b.price ? -1 : 1
        } else {
            return a.price < b.price ? -1 : 1
        }
    })
}
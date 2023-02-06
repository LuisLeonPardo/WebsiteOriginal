export const sort = (data, order) => {
    return data.sort((a, b) => {
        if(order === 'Price: high to low'){
            return a.price > b.price ? -1 : 1
        } else if (order === 'Price: low to high') {
            return a.price < b.price ? -1 : 1
        } else if (order === 'Recently listed'){}
    })
}
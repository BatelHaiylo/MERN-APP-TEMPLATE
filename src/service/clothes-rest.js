baseUrl = 'http://localhost:4000/users'

export const getAllClothes = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAClotheById = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const getAClotheByParam = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const addAClothe = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const updateAClothe = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};

export const deleteAClothe = async() => {
    try{
        return await fetch(baseUrl)
        .then(res => res)
    }catch(e){console.log(e)}
};
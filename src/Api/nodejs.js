const url = 'https://rocketfund.herokuapp.com';

function handleErrors(response) {
    //console.log(response)
    if (!response.ok) {
       switch(response.status){
           case 403:
           return Promise.reject("No tienes permiso");
           case 400:
           return Promise.reject("Hay un error en los datos");
           case 401:
           return Promise.reject("Facebook rechazo la petición");
           default:
            return Promise.reject(response.statusText);

       }
    }
    return response.json();
}




//admin 
//users
export const getUsersAdmin = ()=>{
    return fetch(url + '/users/admin',{
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(handleErrors)
    .then(items=>items);
};

export const updateUserAdmin = (user) => {
    return fetch(url + `/users/admin/${user._id}`, {
        method:'PATCH',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json',
            'Authorization' : retrieveToken()
        }
    })
    .then(handleErrors)
    .then(user=>{
        return user;
    })
}
//admin
//projects
export const getProjectsAdmin = () => {
    return fetch(url + '/projects/admin',{
        headers:{
            "Authorization": retrieveToken()
        }
    })
    .then(handleErrors)
    .then(items=>items);
}

export const getProjectAdmin = (id) => {
    return fetch(url + `/projects/admin/${id}`,{
        headers:{
            "Authorization" : retrieveToken()
        }
    })
    .then(handleErrors)
    .then(item=>item)
}

export const updateProjectAdmin = (project) => {
    return fetch(url + `/projects/admin/${project._id}`, {
        method:'PATCH',
        body:JSON.stringify(project),
        headers:{
            'Content-Type':'application/json',
            'Authorization' : retrieveToken()
        }
    })
    .then(handleErrors)
    .then(project=>{
        return project;
    })
}









//projects

export const updateProject = (project) => {
    return fetch(url + `/projects/own/${project._id}`, {
        method:'PATCH',
        body:JSON.stringify(project),
        headers:{
            'Authorization' : retrieveToken(),
            "Content-Type":"application/json"
        }
    })
    .then(handleErrors)
    .then(item=>item);
};

export const getProjects = ()=>{
    return fetch(url + '/projects')
    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return res.json();
    })
    .then(items=>items);
};

export const getOwnProject = (id) => {
    return fetch(url + `/projects/own/${id}`, {
        headers:{
            'Authorization' : retrieveToken()
        }
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res.statusText);
        return res.json();
    })
    .then(item=>item);
};

export const getOwnProjects = () => {
    return fetch(url + `/projects/own/`, {
        headers:{
            'Authorization' : retrieveToken()
        }
    })
    .then(handleErrors)
    .then(items=>items);
};

//new project
export const saveProject = (project) => {
    return fetch(url + `/projects/own/`, {
        method:'POST',
        body:JSON.stringify(project),
        headers:{
            'Authorization' : retrieveToken(),
            "Content-Type":"application/json"
        }
    })
    .then(handleErrors)
    .then(item=>{
        console.log(item)
        return item
    });
};

export const deleteProject = (id) => {
    return fetch(url + `/projects/own/${id}`, {
        method:'DELETE',
        headers:{
            'Authorization' : retrieveToken(),
            "Content-Type":"application/json"
        }
    })
    .then(handleErrors)
    .then(item=>item);
};




//auth
export const loginWithEmail = (auth) => {
    return fetch(url + '/login', {
        method:'POST',
        body:JSON.stringify(auth),
        headers:{
            'Content-Type':'application/json',
        }
    })
    // .then(res=>{
    //     console.log(res)
    //     if(!res.ok) return Promise.reject(res.json())
    //     return res.json();
    // })
    .then(handleErrors)
    .then(r=>{
        console.log(r)
        saveToken(r.access_token);
        saveUser(r.user);
        return r.user;
    }) 

};

export const facebookLogin = (access_token) => {
    return fetch(url + '/auth/facebook/token', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + access_token
        }
    })
    // .then(res=>{
    //     console.log(res)
    //     if(!res.ok) return Promise.reject(res.json())
    //     return res.json();
    // })
    .then(handleErrors)
    .then(r=>{
        console.log(r)
        saveToken(r.access_token);
        saveUser(r.user);
        return r.user;
    }) 
};

export const googleLogin = (access_token) => {
    return fetch(url + '/auth/google/token', {
        method:'POST',
        body: JSON.stringify({access_token}),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer ' + access_token
        }
    })
    // .then(res=>{
    //     console.log(res)
    //     if(!res.ok) return Promise.reject(res.json())
    //     return res.json();
    // })
    .then(handleErrors)
    .then(r=>{
        console.log(r)
        saveToken(r.access_token);
        saveUser(r.user);
        return r.user;
    }) 
};

//user
//update
export const updateUser = (user) => {
    return fetch(url + '/self', {
        method:'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json',
            'Authorization' : retrieveToken()
        }
    })
    // .then(res=>{
    //     console.log(res)
    //     if(!res.ok) return Promise.reject(res.json())
    //     return res.json();
    // })
    .then(handleErrors)
    .then(user=>{
        console.log(user)
        //saveToken(r.access_token);
        saveUser(user);
        return user;
    })

    

    

};


export const fullUser = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return fetch(url + '/self', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization' : token
        }
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res.json());
        return res.json();
    })
    .then(user=>{
        return user;
    })
    .catch(res=>{
        console.log(res)
        return res;
    });
};



//categories
export const getCategories = () => {
    return fetch(url + '/categories', {
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization' : retrieveToken()
        }
    })
    .then(handleErrors)
    .then(items=>{
        return items;
    })
};


//rewards

export const deleteReward = (item) => {
    return fetch(url + `/rewards/${item._id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            'Authorization' : retrieveToken()
        }
    })
.then(handleErrors)
.then(item=>item)
}

export const saveReward = (item) => {

    if(item._id){
        return fetch(url + `/rewards/${item._id}`, {
            method:'PATCH',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Authorization' : retrieveToken()
            }
        })
        .then(handleErrors)
        .then(item=>item)


    }
    return fetch(url + '/rewards', {
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json',
                'Authorization' : retrieveToken()
            }
        })
    .then(handleErrors)
    .then(item=>item)
};


//aux

function saveToken(token){
    localStorage.setItem('token',token);
}

function saveUser(user){
    localStorage.setItem('user', JSON.stringify(user));
}

function retrieveToken(){
    return localStorage.getItem('token');
}



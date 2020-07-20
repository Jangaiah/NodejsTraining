export class CommonFunctions{
    private slNo=0;
    addUser(user){
        return {
            ...user,
            id:++this.slNo + '',
            isDeleted:false
        }
    }
    markDeleted(id,data){
        data.forEach((ele,i) => {
            if(ele.id == id) ele.isDeleted = true;
        });
    }

    getAutoSuggestUsers(subString, data){
        const users = this.getUsers(data);        
        return this.getSortedUsers(users.filter((ele) => ele.login.toLowerCase().includes(subString.toLowerCase())));
    }
    getUsers(data){
        return data.filter((ele) => !ele.isDeleted);
    }
    getSortedUsers(data){
        return data.sort((a,b) => { return (a.login<b.login)? -1 : ((a.login == b.login)? 0 : 1)})
    }

    updateUser(id, payload,data){
        data.forEach((ele,i) => {
            if(ele.id == id) {
                data[i] = {
                    ...ele,
                    ...payload
                }
            }            
        });
    }
}
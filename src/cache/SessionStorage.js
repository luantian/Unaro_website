class SessionStorage {

    static setItem(key, val) {
        let v = JSON.stringify(val);
        sessionStorage.setItem(key, v);
    }

    static getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }

    static removeItem(key){
        return sessionStorage.removeItem(key); 
    }
}

export default SessionStorage;

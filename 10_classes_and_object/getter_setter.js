class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}chiku`
    }

    set password(value){
        this._password = value
    }
}

const chiku = new User("chiku@007.ai", "abc")
console.log(chiku.email);
// (2) here constructor or singleton
const instaUser = new Object();

console.log(instaUser);  // empty object

instaUser.id = "123abc";
instaUser.name = "rahul";
instaUser.isLoggedIn = false

console.log(instaUser);  // object with key and values


// nested objects

const fbUser = {
email: "some@gmail.com",
fullName: {
    userFullNane: {
        firstName: "raghav",
        lastName: "raghav"
    }
}

}

console.log(fbUser.fullName);
console.log(fbUser.fullName.userFullNane.firstName);



// merge or combiend objects 

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'a',
    4: 'b'
}


const obj3 = {obj1, obj2} 

console.log(obj3); // object ke ander dono obj {obj1{}, obj2{}}

// Object.assign(target, source)  return the target object thay why hold this
const obj4 = Object.assign(obj1, obj2);  // single obj merge successfull
const obj5 = Object.assign({}, obj1, obj2);  // same but prefer this one


// spread operator (...)
const obj6 = {...obj1,...obj2} // this is mostly use by us for merge object


// see more syntax Like source, perameter, destination, cloning obj ==>>


// when values comes from database

const users = [ // comes array of objects
    
    {
        id: 1,
        email: "raghav@gmail.com"
    },
    {
        id: 1,
        email: "raghav@gmail.com"
    },
    {
        id: 1,
        email: "raghav@gmail.com"
    },

] 

// for acces
console.log(user[1].email);

// one more intrusting or imp thing

const XUser = new Object();
XUser.id = "123abc";
XUser.name = "rahul";
XUser.isLoggedIn = false
console.log(XUser);  //  obj with his values

// we need sometimes some methods ==>>

// Objects.Keys(obj name)
console.log(Objects.Keys(XUser)); // acces all keys
console.log(typeof Objects.Keys(XUser));  // array object

// Objects.Values(obj name)
console.log(Objects.Values(XUser)); // acces all values
console.log(typeof Objects.Values(XUser));  // array object


// Objects.entries(obj name)
console.log(Objects.entries(XUser)); // Array under array key&value into Array
console.log(typeof Objects.entries(XUser));  // array object


// Objects.hasOwnProperty(key) // for check key is exist or not
console.log(Objects.hasOwnProperty(isLoggedIn)); // true
console.log(typeof Objects.hasOwnProperty(isLogIn));  // false

// protoType methods ==>>>>>>








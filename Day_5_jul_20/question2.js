/*
Create a Class User with properties as name, age & email.
He can login and logout
Create another class Moderator which has all the features
of User,plus additional functionality to Add coins and 
remove coins.
Create one more class Admin which has all the features of
Moderator plus additional features like add a Course and 
delete a particular course for a user.
*/
console.log('%c Question 2','color:green;font-size:20px');
class User {
    constructor(name,age,email){
        this.name = name;
        this.age = age;
        this.mail_id = email;
        this.coin = 0;
        this.course = [];
    }
    login(){
        console.log(`login..welcome ${this.name}`)
    }
    log_out(){
        console.log(`log out...`)
    }
}

class Moderator extends User{
    constructor(name,age,email){
        super(name,age,email);
    }
    addCoins(user,coins){
        user.coin += coins;
        console.log(`adding ${coins} coins...`);
        console.log(`${user.name}'s coins : ${user.coin}`);

    }
    removeCoins(user,coins){
        user.coin -= coins;
        console.log(`removing ${coins} coins`);
        console.log(`${user.name}'s coins : ${user.coin}`);


    }

}

class Admin extends Moderator {
    constructor(name,age,email){
        super(name,age,email);
    }
    addCourse(user,course){
        console.log(`Adding course ${course} to user ${user.name}`);
        user.course.push(course)
        console.log(`courses of ${user.name} : ${user.course} `);

    }
    removeCourse(user,course){
        console.log(`Removing the course ${course} of the user ${user.name}`);
        // user.course.pop(course)
        let pos;
        user.course.forEach((value,index) => {
            // console.log(`${course} == ${value}`);
            if(course == value){
                pos = index;
        
            }
            
        }             
        );
        // console.log(pos);
        user.course.splice(pos,1);
        console.log(`courses of ${user.name} : ${user.course} `);

    }

}

let usr_varun = new User('varun',19,'varun@gmail.com');

let mod_anuj = new Moderator('anuj',28,'anuj@gmail.com');

mod_anuj.addCoins(usr_varun,30);
mod_anuj.removeCoins(usr_varun,10);

let usr_anakha = new User('anakha',20,'anakaha@gmail.com');
let admin_afsal = new Admin('afsal',30,'afsal@admin.com');
admin_afsal.addCourse(usr_anakha,'java');
admin_afsal.addCourse(usr_anakha,'c#');
admin_afsal.addCourse(usr_anakha,'python');
admin_afsal.addCourse(usr_anakha,'R');
admin_afsal.addCourse(usr_anakha,'Golang');
admin_afsal.removeCourse(usr_anakha,'python');
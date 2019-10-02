class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        console.log("Hello, my name is " + this.firstName);
    }
}

class NewStudent extends Person {
    constructor(stundentID, firstName, lastName){
        super(firstName, lastName);
        this.stundentID = stundentID;
    }

    studentInfo(){
        console.log(this.stundentID + " " + this.firstName + ", " + this.lastName);
    }
}

let student = new NewStudent(12, "John", "Smith");
student.greeting();
student.studentInfo();
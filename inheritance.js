class parent{
    constructor(){
        this.fatherName="Patrik";
    }
}

class child extends parent{
    constructor(){
        super();
        this.childName="James";
    }
    getFullName(){
        return this.childName +" "+this.fatherName;
    }

}
const baby=new child();
console.log(baby);
console.log(baby.getFullName());

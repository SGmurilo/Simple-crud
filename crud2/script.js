
class List{
    constructor(){
        this.array = [];

    }

    save(){
        this.obj = {}

        const student = this.getData(this.obj);
        const objStudent = this.insertMedia(student);
        const studentData = this.insertStatus(objStudent);

        if(this.verifyData(studentData)){
            this.insertArray(studentData);
        }


    }

    getData(obj){

        const name = document.getElementById("student-name").value;
        const semester1 = document.getElementById("semester1").value;
        const semester2 = document.getElementById("semester2").value;

        obj.name = name;
        obj.semester1 = semester1;
        obj.semester2 = semester2;

        return obj;
    }

    insertMedia(obj){

        const semester1 = parseFloat(obj.semester1);
        const semester2 = parseFloat(obj.semester2);

        const calcMedia = (semester1+semester2) /2;

        obj.avg = calcMedia;

        return obj;

    }

    insertStatus(obj){

        const okay = "Aprovado!";
        const disapproved = "Reprovado!";

         if(obj.avg >= 5){
            obj.status = okay;
        }else{
            obj.status = disapproved;
        }

        return obj;

    }

    verifyData(obj){

        const values = Object.values(obj);

        var verify = true

        for(var i = 0; i < values.length; i++){
          
            if(values[i] == ""){
                verify = false   
            };

         
        }

        if(verify == false){
            alert("Preencha os campos abaixo.");
        }


        return verify

        
    }

    insertArray(obj){

    this.array.push(obj);

    console.log(this.array);

    }

}
const list = new List();
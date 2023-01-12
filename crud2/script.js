
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

            this.insertTable(studentData);


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

        obj.avg = JSON.stringify(calcMedia);



        

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

    insertTable(obj){

        const tbody = document.getElementById("tbody");
        
        const qtdLine = tbody.rows.length;
        const line = tbody.insertRow(qtdLine);
        
        const imgDel = document.createElement("img");
        imgDel.src = "./trash.png";

        
        

        const name = obj.name
        const semester1 = obj.semester1;
        const semester2 = obj.semester2;
        const avg = obj.avg;
        const status = obj.status;




        line.insertCell(0).innerHTML = qtdLine;
        line.insertCell(1).innerHTML = name;
        line.insertCell(2).innerHTML = semester1;
        line.insertCell(3).innerHTML = semester2;
        line.insertCell(4).innerHTML = avg;
        line.insertCell(5).innerHTML = status;
        line.insertCell(6).innerHTML = imgDel;


        


        
    }

}
const list = new List();
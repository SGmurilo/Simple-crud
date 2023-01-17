
class List{
    constructor(){
        this.array = [];

    }

    save(){
        this.obj = {}

        const student = this.getData(this.obj);

        if(student){

        const objStudent = this.insertMedia(student);
        const studentData = this.insertStatus(objStudent);

        if(this.verifyData(studentData)){
            this.insertArray(studentData);

            this.insertTable(studentData);


        }
        this.cancel();
        }

        // this.cancel();
      


    }

    getData(obj){

        var verify = true;
        var msg;

        const name = document.getElementById("student-name").value;
        const semester1 = document.getElementById("semester1").value;
        const semester2 = document.getElementById("semester2").value;

        const s1 = parseFloat(semester1);
        const s2 = parseFloat(semester2);

        if(s1 <0 || s1 >10){
            msg = "insira as notas de 0 a 10";
            verify = false;
             
        }
        
        if(s2 <0 || s2 >10){
            msg = "insira as notas de 0 a 10";
            verify = false;
             
        }

        obj.name = name;
        obj.semester1 = semester1;
        obj.semester2 = semester2;

            
        if(verify){
            return obj;
        }else{
            alert(msg);
            return false;
        }
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
    const tr = tbody.insertRow();
    const qtdR = tbody.rows.length;

    const imgDel = document.createElement("img");
    imgDel.src = "img/trash.png";
    imgDel.setAttribute("onclick", "list.delete("+ qtdR +")");

    const imgEdit = document.createElement("img");
    imgEdit.src = "img/edit (2).png";
    imgEdit.setAttribute("onclick", "list.delete(qtdR)");

    const id = tr.insertCell();
    const name = tr.insertCell();
    const semester1 = tr.insertCell();
    const semester2 = tr.insertCell();
    const avg = tr.insertCell();
    const status = tr.insertCell();
    const acoes = tr.insertCell();

    acoes.appendChild(imgDel);
    acoes.appendChild(imgEdit);
    

    id.innerText = qtdR
    name.innerText = obj.name;
    semester1.innerText = obj.semester1;
    semester2.innerText = obj.semester2;
    avg.innerText = obj.avg;
    status.innerText = obj.status;
        
    }

    delete(id){

        console.log(id);
    }

    cancel(){

          document.getElementById("student-name").value = "";
          document.getElementById("semester1").value = "";
          document.getElementById("semester2").value = "";

    }

    



}
const list = new List();
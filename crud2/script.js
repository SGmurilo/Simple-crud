class List{
    constructor(){
        this.array = [];
        this.id = 1;
        this.editId = null

    }

    save(){
        this.obj = {};

        const student = this.getData(this.obj);

        

        if(student){

        if(this.editId == null){

        const objStudent = this.insertMedia(student);
        const studentData = this.insertStatus(objStudent);

        if(this.verifyData(studentData)){
            this.insertArray(studentData);

            this.insertTable();

            this.cancel();
        }
    }

        else{

            this.att(this.editId);

            this.insertTable();

            this.editId = null;
            
            this.cancel();
        }
    }
        
        
       console.log(this.array);
    
        
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
        obj.id = this.id;
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



    }

    insertTable(){
    
    document.getElementById("btn-main").innerText = "Salvar";

    var tbody = document.getElementById("tbody");
    
    tbody.innerText = "";

    

    
    for (var i = 0; i < this.array.length ; i++){
        

        const tr = tbody.insertRow();
        

        
         const id = tr.insertCell();
         const name = tr.insertCell();
         const semester1 = tr.insertCell();
         const semester2 = tr.insertCell();
         const avg = tr.insertCell();
         const status = tr.insertCell();
         const acoes = tr.insertCell();


        id.innerText = this.array[i].id;
        name.innerText = this.array[i].name;
        semester1.innerText = this.array[i].semester1;
        semester2.innerText = this.array[i].semester2;
        avg.innerText = this.array[i].avg;
        status.innerText = this.array[i].status;

        const imgDel = document.createElement("img");
        imgDel.src = "img/trash.png";
        imgDel.setAttribute("onclick", "list.delete("+JSON.stringify(this.array[i].id)+")")
        
        const imgEdit = document.createElement("img");
        imgEdit.src = "img/edit (2).png";
        imgEdit.setAttribute("onclick", "list.editImg("+JSON.stringify(this.array[i])+")");
       
        
        acoes.appendChild(imgDel);
        acoes.appendChild(imgEdit);

        this.idSum()
    }
    }

    idSum(){
        this.id = this.array[this.array.length-1].id + 1
    }
    
    

    delete(id){
        for(var i = 0; i< this.array.length; i++){

            if(this.array[i].id == id){
                
                
                if(confirm("deseja excluir o ID "+id+" da lista?")){
                this.array.splice(i,1);

                this.insertTable()
                }
            
                
            }

        }

    }

    editImg(i){
        
        document.getElementById("student-name").value = i.name;
        document.getElementById("semester1").value = i.semester1;
        document.getElementById("semester2").value = i.semester2;

        

        document.getElementById("btn-main").innerText = "Atualizar";


        this.editId = i.id;

    }

    att(id){
        const array1 = [];
        var aceppt = true;

        const name = document.getElementById("student-name").value; 
        const semester1 = document.getElementById("semester1").value; 
        const semester2 = document.getElementById("semester2").value; 

        array1.push(name,semester1,semester2);

        for(var i = 0; i < array1.length; i++){

            if(array1[i] == ""){
                alert("Os campos não estão preenchido corretamente!");

                aceppt = false;

                console.log("rodou!");
            }

        }
        
        if(aceppt){
            for(var i = 0; i < this.array.length; i++){
                if(this.array[i].id == id){
                    
                   this.array[i].name = name;
                   this.array[i].semester1 = semester1;
                   this.array[i].semester2 = semester2; 

                   this.insertMedia(this.array[i]);
                   this.insertStatus(this.array[i]);
    
                }
        }
    }


    }

    cancel(){

          document.getElementById("student-name").value = "";
          document.getElementById("semester1").value = "";
          document.getElementById("semester2").value = "";

    }

    storage(){
        const reform = JSON.stringify(this.array)

        const local = localStorage.setItem( "array",reform);

        alert("Sua lista foi salva!");


    }

    reList(){

        const listAgain = localStorage.getItem("array");
        const newArray = JSON.parse(listAgain)

        this.array = newArray;
         
        this.insertTable()

        alert("Lista recuperada!");

    }


    



}
const list = new List();


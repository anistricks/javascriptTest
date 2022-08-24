import {DEFAULT_PROPOSALS} from '../../utils/default-proposals';
import { Redirect } from "../Router/Router";
const LEVEL_OPTIONS = ['submitted', 'accepted', 'refused','done'];
const Demande = () => { 
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML =  `
    <h5 >Voici les demandes et leurs status :</h5>
    <br>
    
   
    
     
    `
  
    pageDiv.innerHTML += `<div class="table-responsive p-5">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id </th>
      <th scope="col">proposal </th>
      <th scope="col">status</th>    
    </tr>
  </thead>
  <tbody>`;
   
 



    DEFAULT_PROPOSALS.forEach(demande => {
    pageDiv.className="text-center";
    pageDiv.innerHTML+=`
    
    
    <table class="table">
  <thead>
    <tr>
      <td  scope="col">${demande.id} </td>
      <td scope="col">${demande.proposal} </td>
      <td scope="col">
     
      <td scope="col">
 
      <form name='formulaire'>
      <select   id='selectOption'  >
      <option >${demande.status}</option>"
      

       <option> ${LEVEL_OPTIONS[0]} </option>
  
      
       <option id='selectOption'  value="3"> ${LEVEL_OPTIONS[1]} </option>
   
      
       <option id='selectOption'  value="4"> ${LEVEL_OPTIONS[2]} </option>
     
      
       <option id='selectOption' value="5"> ${LEVEL_OPTIONS[3]} </option>
     
      
       </form>
        </select >
      
                           </td>
                          
      `
/*
 <select  id='selectOption'>
<option  value="${demande.id}">${demande.status}</option>"
       <option  value="${demande.id}"> ${LEVEL_OPTIONS[0]} </option>
       <option value="${demande.id}"> ${LEVEL_OPTIONS[1]} </option>
       <option value="${demande.id}"> ${LEVEL_OPTIONS[2]} </option>
       <option value="${demande.id}"> ${LEVEL_OPTIONS[3]} </option>
                           </td>
*/
     
    /*  pageDiv.innerHTML+= "<select  id='levelListAdd'>"
                       
                        + "    <option> "+ LEVEL_OPTIONS[0] +"</option>"
                        + "    <option> "+ LEVEL_OPTIONS[1] +"</option>"
                        + "    <option> "+ LEVEL_OPTIONS[2] +"</option>"
                        + "    <option> "+ LEVEL_OPTIONS[3] +"</option>"

                */
 


   pageDiv.innerHTML+=`   </td>
    </tr>
  </thead>
  <tbody>


    `
    });
    document.getElementById("selectOption").onchange = function(){
      var value = document.getElementById("selectOption").value;//si value grand ou petei changer 
      console.log(value);
      DEFAULT_PROPOSALS[0].status=LEVEL_OPTIONS[value-2];
      console.log(DEFAULT_PROPOSALS);
      console.log(DEFAULT_PROPOSALS[0]);
      console.log(value);
     
      


      
      console.log(DEFAULT_PROPOSALS);
      pageDiv.innerHTML="";
      pageDiv.innerHTML =  `
      <h5 >Voici les demandes et leurs status :</h5>
      <br>
      
     
      
       
      `
     
      pageDiv.innerHTML += `<div class="table-responsive p-5">
      <table class="table">
    <thead>
      <tr>
        <th scope="col">id </th>
        <th scope="col">proposal </th>
        <th scope="col">status</th>    
      </tr>
    </thead>
    <tbody>`;

       DEFAULT_PROPOSALS.forEach(demande => {
    pageDiv.className="text-center";
    pageDiv.innerHTML+=`
    
    
    <table class="table">
  <thead>
    <tr>
      <td  value="${demande.id}" scope="col">${demande.id} </td>
      <td scope="col">${demande.proposal} </td>
      <td scope="col">
      <select  id='selectOption'>
      <option  value="${demande.id}">${demande.status}</option>"
       <option  value="${demande.id}"> ${LEVEL_OPTIONS[0]} </option>
       <option value="${demande.id}"> ${LEVEL_OPTIONS[1]} </option>
       <option value="${demande.id}"> ${LEVEL_OPTIONS[2]} </option>
       <option value="${demande.id}"> ${LEVEL_OPTIONS[3]} </option>
                           </td>
                           <div id="change"> </div>
    
      `


    
     
    /*  pageDiv.innerHTML+= "<select  id='levelListAdd'>"
                       
                        + "    <option> "+ LEVEL_OPTIONS[0] +"</option>"
                        + "    <option> "+ LEVEL_OPTIONS[1] +"</option>"
                        + "    <option> "+ LEVEL_OPTIONS[2] +"</option>"
                        + "    <option> "+ LEVEL_OPTIONS[3] +"</option>"

                */
 

                        
   pageDiv.innerHTML+=`   </td>
  
   
    </tr>
  </thead>
  <tbody>


    `
   
    
    });
    pageDiv.innerHTML+=` <div><h3> valeur id : ${DEFAULT_PROPOSALS[value-2].id} changer en ${DEFAULT_PROPOSALS[value-2].status}</h3> </div>` ;

  
/*
      if(status.selectedIndex==0 ||status.selectedIndex==1){
        LEVEL_OPTIONS[0];
        console.log("1");
        console.log(status.options[status.selectedIndex].value);
        console.log("id : "+ status.value+"choix : "+status.options[status.selectedIndex].value);

      }
      if(status.selectedIndex==2){
        LEVEL_OPTIONS[1];
        console.log("2");
        console.log(status.options[status.selectedIndex].value);
        console.log("id : "+ status.value+"choix : "+status.options[status.selectedIndex].value);
      }
      if(status.selectedIndex==3){
        LEVEL_OPTIONS[2];
        console.log("3");
        console.log(status.options[status.selectedIndex].value);
        console.log("id : "+ status.value+"choix : "+status.options[status.selectedIndex].value);
      }
      if(status.selectedIndex==4){
        LEVEL_OPTIONS[3];
        console.log("4");
        console.log(status.options[status.selectedIndex].value);
        
      }

      */
   
     

    
  };

    
 
   
  };
  
  
  
  export default Demande;
  
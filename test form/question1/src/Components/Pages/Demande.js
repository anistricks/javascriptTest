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

 
  pageDiv.innerHTML +=`<select id="comboA">
 
  
  <option  onchange='${load()}' value="">   Select combo   </option>
  <option value="Value1">Text1</option>
  <option value="Value2">Text2</option>
  <option value="Value3">Text3</option>
  </select>


 

`;
  function load(){
    pageDiv.innerHTML +="hello";
  }



document.getElementById("comboA").onchange = handleChange;

function handleChange(evt){
   var value = evt.target.value;
};
   
  
  
}
  export default Demande;
  
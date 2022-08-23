

const AddDemande = () => { 
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML =  `
    <h5 >Je pose une demande :</h5>
    <textarea id='texte' rows='5' cols='84'></textarea>
    <input type='submit' class='btn btn-primary mb-2' id='textSubmit' name=textSubmit value='Envoyer'/>
    
     
    `


  };
  
  
  
  export default AddDemande;
  
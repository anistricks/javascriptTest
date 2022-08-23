import { Redirect } from "../Router/Router";

const HomePage = () => { 
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "";
  let poser =document.querySelector("#poser");
  let voir =document.querySelector("#voir");






  voir.addEventListener("click", () => {
    Redirect("/voir");
  });

  poser.addEventListener("click", () => {
    Redirect("/add");
  });
};



export default HomePage;

import React from "react";
import { useEffect } from "react";
import { TreeView } from '@material-ui/lab';

const App = () => {
  /*useEeffect(() => {
    const fetchProject = async () => 
    {
      const response = await fetch("localhost:9000/project");
      const content = await response.json()
      console.log(content);
    };
  });*/

  useEffect(() => {
    function initDossierDeplier(){
      var oArbo = document.getElementById('arbo-dossier-2'),
          aDossier = oArbo.getElementsByTagName('input');
      for(var i = 0; i <aDossier.length; i++){
        aDossier[i].checked=true;
      }//for
    }//fct
    function initDossierDeplierJs(id){
      var oArbo = document.getElementById('arbo-dossier-'+id),
          aDossier = oArbo.getElementsByTagName('span');
      for(var i = 0; i <aDossier.length; i++){
        var oUl = aDossier[i].parentNode.getElementsByTagName('ul')
        if(oUl.length == 0){
          continue;
        } //if
        aDossier[i].addEventListener('click',function(oEvent){
          var oBt = oEvent.currentTarget,
              sClass="show",
              bHasClass= oBt.classList.contains(sClass);
          if(bHasClass){
            oBt.classList.remove(sClass);
          }else{
            oBt.classList.add(sClass);
          }//else
        });
      }//for
    }//fct
    document.addEventListener('DOMContentLoaded',function(){
      initDossierDeplier();
      initDossierDeplierJs(3)
      initDossierDeplierJs(4)
    });
  });
  return (
    <div className="Arbolescence">
    <div id="arbo-dossier-1">
      <ul>
        <li><input type="checkbox" id="parent-0"/><label for="parent-0"> Parent 0</label></li>
        <ul>
            <li><input type="checkbox" id="fils-exp1-0_0"/><label for="fils-exp1-0_0">fils 0_0</label></li>
        </ul>
      </ul>
    </div>
    </div>
  );
};

export default App;
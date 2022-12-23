function vetement (id,nom,couleur,description,prix){
    this.id= id; 
     this.nom=nom; 
    this.couleur=couleur; 
    this.description=description; 
    this.prix=prix;
}
vetement.prototype.calculerPrixEnEuro=function(){
 return this.prix*0.09;
}
vetement.prototype.calculerPrixEnDollar=function(){
    return this.prix*0.095;
   }
   

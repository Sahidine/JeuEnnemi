
console.log('Bienvenue dans le jeu d\'ennemi');
console.log('********MENU GENERAL************')

console.log('1 - Jouer');
console.log('2 - quitter');

  
  		let choix = Number(prompt('Veuillez selectionner un chiffre'));
  		let nomJoueur;

  		
 



//Creation Objet**********************************
function Armes(){
	this.nomObjet = ['couteau','marteau'];
}

 //Creation Ennemi********************************
 function EnnemiJeu(nomEnnemi, raceEnnemi,forceEnnemi,vieEnnemi){
 	this.nom = nomEnnemi;
 	this.race = raceEnnemi;
 	this.force = forceEnnemi;
 	this.vie = vieEnnemi;
 }

 EnnemiJeu.prototype.decrireEnnemi = function(){
 		let decritEnnemi ;
 	     return decritEnnemi;
 	};
const ennemi = new EnnemiJeu('Zozor', 'Zombie', 50, 20);
//console.log('je suis l\'ennemie ' + ennemi.nom + ' et de race ' + ennemi.race); 

//Creation de l'Objet "Clef"************************
function Clef(){
	this.nomClef = 'maClef';
}
	//-----Les methodes de l'objet "Clef"----------
	Clef.prototype.ouvrir = function(){
			if(Piece.etatPorte == false){
				console.log(Clef.nomClef + ' ouvre la porte de la piece ' + Piece.nomPiece);
			}else{
				console.log('La porte est ouverte');
			}
	}
	
//Creation de l'Objet Piece********************************
function Piece (nomPiece,ennemiPiece){
 	this.nomPiece = nomPiece;
 	this.contientObjet = [];
 	this.etatPorte = false;
 	this.ennemiPiece = ennemiPiece;
 }
//----Les methodes de l'Objet "Piece"----
Piece.prototype.fermer = function(){

}
Piece.prototype.entrer = function(){
		let temoin = true;
		if(Clef.ouvrir() == temoin){
			console.log(joueur.nom + ' est dans la piece ' + ' ' + Piece.nomPiece);
		}
}

 //+++ Ajouter une piece +++
const piece1 = new Piece('Jardin','');
	  		 piece1.contientObjet = ' ';
	  		 piece1.etatPorte = true;
const piece2 = new Piece('Suite',ennemi.nom);
			 piece2.contientObjet.push(Armes.nomObjet);
			 piece2.etatPorte = false;
const piece3 = new Piece('Fontaine','');
			 piece3.contientObjet.push(Armes.nomObjet);
			 piece3.etatPorte = false;
const piece4 = new Piece('Rivière', ennemi.nom);
			 piece4.contientObjet.push(Armes.nomObjet);
			 piece4.etatPorte = false;
const piece5 = new Piece('Centrale','');
			 piece5.contientObjet.push(Armes.nomObjet);
			 piece5.etatPorte = false;

//Creation de la personne (joueur)++--

function Personnage(monNom,maVie,maForce) {
	this.nom = monNom;
	this.vie = maVie;
	this.force = maForce;
    this.objets = [];

}
	Personnage.prototype.decrire = function(){
		const decritJoueur = 'Le joueur ' + this.nom + ' à la vie ' + this.vie + ' et une force ' + this.force ;
		return decritJoueur;
	};
	Personnage.prototype.deplacer = function(){

	}
	Personnage.prototype.combattre = function(){
		
	}
	Personnage.prototype.prendreObjet = function(){

	}
	//Creation de joueur
	const joueur = new Personnage('Sahidine',50,20);
	 		let contenu = joueur.objets.push('couteau','marteau');
	 		let affiche =' ';
	 		for(var i = 0; i < contenu.length; i++ ){
		 		affiche += contenu[i]; 
		 		console.log(joueur.decrire() + ' et les objets  qu\'il detient ' + (1 + i) + ' ' + affiche[i]);

	 		}

switch(choix){
  			case 1: 
  				console.log('---Pour commencer le jeu, inscriver vous');
  				console.log('-- Le nom de joueur --');		
  				let NomduJour = prompt('Le nom du joueur');
  					if(NomduJour){
  						joueur.nom = NomduJour;
  						console.log('Le nom du joueur est : ' + joueur.nom);
  					}
  					let choixPiece = Number(prompt('Choisissez une piece de 1 à 5 pour debuter la partie'));
  					if(choixPiece === 1){
  						if(piece1.etatPorte == true)
  						{
  							
  						}
  						console.log('vous etes  dans la piece ' + piece1.nomPiece);
  					}
  					/*switch(choixPiece){
  						case 1: 
  						console.log('1 - Piece ' + ' ' + piece1.nomPiece);
  						console.log('2 - Piece ' + ' ' + piece2.nomPiece);
  						console.log('3 - Piece ' + ' ' + piece3.nomPiece);
  						console.log('4 - Piece ' + ' ' + piece4.nomPiece);
  						console.log('5 - Piece ' + ' ' + piece5.nomPiece);

  					}*/
  				break;
  			case 2: 
  				console.log('2 -lqksjdflqjsdl');
  				break;
  			default :
  				console.log('le chiffre ' + choix + ' ' + 'n\'est pas dans le menu'); 
  				console.log('application fermée');
  			
}













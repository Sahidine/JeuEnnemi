
console.log('Bienvenue dans le jeu d\'ennemi');
console.log('********MENU GENERAL************')

console.log('1 - Jouer');
console.log('2 - quitter');

  
  		let choix = Number(prompt('Veuillez selectionner un chiffre'));
  		let NomduJour;
  		let temoin = true;



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

 
//Creation de l'Objet Piece********************************
function Piece (nomPiece,ennemiPiece,nomjoueur){
 	this.nomPiece = nomPiece;
 	this.contientObjet = [];
 	this.etatPorte = false;
 	this.ennemiPiece = ennemiPiece;
 	this.JoueurPiece = nomjoueur;
 }
//----Les methodes de l'Objet "Piece"----
Piece.prototype.fermer = function(){

}
Piece.prototype.entrer = function(){
		let temoin = true;
		if(Clef.ouvrir() == temoin){
			//console.log(joueur.nom + ' est dans la piece ' /*+ ' ' + Piece.nomPiece*/);
		}
}

 

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
	Personnage.prototype.deplacer = function(pieceDepart,pieceDarrivee){
			if((pieceDarrivee.etatPorte == true) && (pieceDarrivee.JoueurPiece == '')){
				pieceDarrivee.JoueurPiece = joueur.nom;
				pieceDepart.JoueurPiece = '';
				console.log('Nous sommes dans le if');
			}
			return pieceDarrivee.JoueurPiece;
	}
	Personnage.prototype.combattre = function(){
		
	}
	Personnage.prototype.prendreObjet = function(){

	}
	//Creation de joueur
	let joueur = new Personnage('',50,20);

//+++ Ajouter une piece +++
let piece1 = new Piece('Jardin','',joueur.nom);
	  		 piece1.contientObjet = ' ';
	  		 piece1.etatPorte = true;
let piece2 = new Piece('Suite',ennemi.nom,'');
			 piece2.contientObjet.push(Armes.nomObjet);
			 piece2.etatPorte = true;
let piece3 = new Piece('Fontaine','','');
			 piece3.contientObjet.push(Armes.nomObjet);
			 piece3.etatPorte = false;
let piece4 = new Piece('Rivière', ennemi.nom,'');
			 piece4.contientObjet.push(Armes.nomObjet);
			 piece4.etatPorte = false;
let piece5 = new Piece('Centrale','','');
			 piece5.contientObjet.push(Armes.nomObjet);
			 piece5.etatPorte = false;

function Clef(maCle){
	this.nomClef = maCle;
	this.etatPorteClef = true;
}

	//-----Les methodes de l'objet "Clef"----------
	Clef.prototype.ouvrir = function(piece){
			if(piece.etatPorte == false){
				clefMagic.etatPorteClef == piece.etatPorte;
			}else{
				console.log('La porte ' + ' ' + piece.nomPiece + ' ' + ' est ouverte');
			}
	}
	const clefMagic = Clef('maClefMigic',true);

switch(choix){
  			case 1: 
  				console.log('---Pour commencer le jeu, inscriver vous');
  				console.log('-- Le nom de joueur --');		
  				let NomduJour = prompt('Le nom du joueur');
  					if(NomduJour){
  						joueur.nom = NomduJour;
  						console.log('Le nom du joueur est : ' + joueur.decrire() + ' et vous etes dans la piece ' + piece1.nomPiece);
  					}
  					console.log('2 - Piece ' + piece2.nomPiece);
  					console.log(' 3 - Piece ' + piece3.nomPiece);
  					console.log('4 - Piece ' + piece4.nomPiece);
  					console.log('5 - Piece ' + piece5.nomPiece);

  					let choixPiece = Number(prompt('Choisissez une piece de 2 à 5 pour vous deplacer'));
  						piece1.JoueurPiece = NomduJour;
  						if(choixPiece >= 1 && choixPiece <= 5){
  							if(choixPiece === 1 && piece1.JoueurPiece === joueur.nom){
		  						console.log('Oupss!!!!! Le joueur ' + joueur.nom + ' ' + ' se trouve deja dans cette piece ' + piece1.nomPiece);
		  					}else if((choixPiece === 2) && (piece2.etatPorte === true) && (piece2.JoueurPiece == '')){
		  						console.log('nous sommes dans le premier if');
		  						joueur.deplacer(piece1,piece2);
  								console.log(piece2.JoueurPiece + ' ' + ' se trouve dans la piece' + piece2.nomPiece)
	  						}
  						}
  						else{
			  					console.log('nombre ' + choixPiece + ' ne se trouve pas dans l\'interval');
	  					}
  		    break;
  						
  			case 2: 
  				console.log('application fermée');

  				break;
  			default :
  				console.log('le chiffre ' + choix + ' ' + 'n\'est pas dans le menu'); 
  			
}













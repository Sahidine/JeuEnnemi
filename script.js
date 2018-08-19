
console.log('Bienvenue dans le jeu d\'ennemi');
console.log('********MENU GENERAL************')

console.log('1 - Jouer');
console.log('2 - quitter');

  
  		let choix = Number(prompt('Veuillez selectionner un chiffre'));
  		let NomduJour;
  		let temoin = true;



//Creation Objet**********************************
function Armes(){
	this.nomObjet = [];
}

const monArme = new Armes();
	monArme.nomObjet= ['couteau','marteau'];
 //Creation Ennemi********************************
 function EnnemiJeu(nomEnnemi, raceEnnemi,forceEnnemi,vieEnnemi){
 	this.nomEnnemi = nomEnnemi;
 	this.race = raceEnnemi;
 	this.forceEnnemi = forceEnnemi;
 	this.vieEnnemi = vieEnnemi;
 }

 EnnemiJeu.prototype.decrireEnnemi = function(){
 		let decritEnnemi = 'l\'ennemi ' +  this.nomEnnemi + ' est present ' + this.vieEnnemi + ' et une force ' + this.forceEnnemi ; ;
 	     return decritEnnemi;
 	};
let ennemi = new EnnemiJeu('Gongoli', 'Zombie', 50, 20);
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

Piece.prototype.decrirePiece = function(){
	var description = ' les objects : ' + this.contientObjet + ',  l\'etat de la porte ' + this.etatPorte  + ' et son ennemi' + ' ' + this.ennemiPiece ;
	 return description;
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
	this.vieJoueur = maVie;
	this.forceJoueur = maForce;
    this.objets = [];

}
	Personnage.prototype.decrire = function(){
		const decritJoueur = 'Le joueur ' + this.nom + ' à la vie ' + this.vieJoueur + ' et une force ' + this.forceJoueur ;
		return decritJoueur;
	};
	Personnage.prototype.deplacer = function(pieceDepart,pieceDarrivee){
			if((pieceDarrivee.etatPorte == true) && (pieceDarrivee.JoueurPiece == '')){
				pieceDarrivee.JoueurPiece = joueur.nom;
				pieceDepart.JoueurPiece = '';
			}
			return pieceDarrivee.JoueurPiece;
	}
	
	Personnage.prototype.prendreObjet = function(nomPiece){

		if(nomPiece.contientObjet){
		    joueur.objets.push(monArme.nomObjet) ;
		    console.log('le joueur ' + joueur.nom + ' à pris les armes : ' + joueur.objets);
		}else {
			joueur.objets.push('');
		    console.log('le joueur ' + joueur.nom + ' à : 0 arme ');
		}
		
	}
	//Creation de joueur
	let joueur = new Personnage('',30,10);

//+++ Ajouter une piece +++
let piece1 = new Piece('Jardin','',joueur.nom);
	  		 piece1.contientObjet = ' ';
	  		 piece1.etatPorte = true;
let piece2 = new Piece('Suite',ennemi.nom,'');
			 piece2.contientObjet = '';
			 piece2.etatPorte = true;
let piece3 = new Piece('Fontaine','','');
			 piece3.contientObjet = '';
			 piece3.etatPorte = false;
let piece5 = new Piece('Centrale',ennemi.nom,'');
			 piece5.contientObjet.push(monArme.nomObjet);
			 piece5.etatPorte = true;

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


//function pour pour le menu
function menu(){
		console.log('2 - Piece ' + piece5.nomPiece);
  		console.log('3 - Piece ' + piece2.nomPiece);
		console.log('4 - Piece ' + piece3.nomPiece);
}

function combattre(nomPiece){
		if((monArme.nomObjet == nomPiece.contientObjet) || (ennemi.forceEnnemi <= joueur.forceJoueur)){
			ennemi.vieEnnemi = ennemi.vieEnnemi + (joueur.vieJoueur - 10);
			console.log(ennemi.nomEnnemi + ' attaque et tue ' + joueur.nom + ' . sa nouvelle vie est : ' + ennemi.vieEnnemi);
			console.log('********************** GAME OVER ***********************');
		}
		else{
				joueur.objets = nomPiece.contientObjet;
				joueur.vieJoueur += ennemi.vieEnnemi - 10;
				console.log(joueur.nom + ' attaque et tue ' + ennemi.nomEnnemi);	
		}
	
}

function deplacement(){
	let choixPiece = Number(prompt('Choisissez une piece de 2 à 5 pour vous deplacer'));
  		piece1.JoueurPiece = NomduJour;
  		if(choixPiece >= 1 && choixPiece <= 5){
	
	  		if((choixPiece === 2) && (piece5.etatPorte === true) && (piece5.JoueurPiece == '')){
			   joueur.deplacer(piece1,piece5);
	  		   console.log(piece5.JoueurPiece  + ' ' + 'quitte la piece ' + piece1.nomPiece + ' se trouve maintenant dans la piece ' + piece5.nomPiece + 
	  		   '\n\nDescription : ' + '  ' + piece5.decrirePiece());	
	  		   		joueur.prendreObjet(piece5);
	  		   		combattre(piece5);
			}
	  		else if((choixPiece === 3) && (piece2.etatPorte === true) && (piece2.JoueurPiece == '')){
			  	joueur.deplacer(piece1,piece2);
			  	console.log(piece2.JoueurPiece  + ' ' + 'quitte la piece ' + piece1.nomPiece + ' se trouve maintenant dans la piece ' + piece2.nomPiece + 
	  		   '\nDescription : ' + '  ' + piece2.decrirePiece());	
	  		   		joueur.prendreObjet(piece2);
	  		   		combattre(piece2);
	  		}

	  		else if((choixPiece === 4) && (piece3.etatPorte === true) && (piece3.JoueurPiece == '')){
				joueur.deplacer(piece1,piece3);
				console.log(piece3.JoueurPiece  + ' ' + 'quitte la piece ' + piece3.nomPiece + ' se trouve maintenant dans la piece ' + piece3.nomPiece + 
	  		   '\nDescription : ' + '  ' + piece2.decrirePiece());	
	  		   		joueur.prendreObjet(piece3);
	  		   		combattre(piece3);
	  		}

	  		else{
	  			console.log('le jour de gloire est arrivée');
	  		}
	  	}
	  	else{
		 		console.log('nombre ' + choixPiece + ' ne se trouve pas dans l\'interval');
	  	}
}

switch(choix){
  			case 1: 
  				console.log('---Pour commencer le jeu, inscriver vous');
  				console.log('-- Le nom de joueur --');		
  				let NomduJour = prompt('Le nom du joueur');

  				if(NomduJour){
  					joueur.nom = NomduJour;
  					console.log('Le nom du joueur est : ' + joueur.decrire() + ' et vous etes dans la piece ' + piece1.nomPiece);
  				}
  					menu();
  					deplacement();
  						
  		    break;
  						
  			case 2: 
  				console.log('application fermée');
  			break;
  			default :
  				console.log('le chiffre ' + choix + ' ' + 'n\'est pas dans le menu'); 
  			
}













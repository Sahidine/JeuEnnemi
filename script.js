
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
//Creation de l'Objet Piece********************************
function Piece (nomPiece,ennemiPiece,nomjoueur){
 	this.nomPiece = nomPiece;
 	this.ennemiPiece = ennemiPiece;
 	this.JoueurPiece = nomjoueur;
 	this.contientObjet = [];
 	this.etatPorte = false;
 }
//----Les methodes de l'Objet "Piece"----

Piece.prototype.decrirePiece = function(){
	var description = ' les objects : ' + this.contientObjet == true ? this.contientObjet : " 0 armes" + ',  l\'etat de la porte ' + this.etatPorte  + ' et son ennemi' + ' ' + this.ennemiPiece ;
	 return description;
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
	let joueur = new Personnage('',40,80);

//+++ Ajouter une piece +++
let piece1 = new Piece('Jardin','',joueur.nom);
	  		 piece1.contientObjet = ' ';
	  		 piece1.etatPorte = true;
let piece2 = new Piece('Centrale',ennemi.nomEnnemi,'');
			 piece2.contientObjet.push(monArme.nomObjet);
			 piece2.etatPorte = true;
let piece3 = new Piece('Suite','','');
			 piece3.contientObjet = '';
			 piece3.etatPorte = true;
let piece4 = new Piece('Fontaine',ennemi.nomEnnemi,'');
			 piece4.contientObjet.push(monArme.nomObjet);
			 piece4.etatPorte = false;


	//-----La fonction---------
	function ouvrir(maPiece){
		temoinClef = true;
		if(maPiece.etatPorte == false){
			 maPiece.etatPorte = temoinClef;
			console.log('La porte ' + ' ' + maPiece.nomPiece + ' ' + ' est maintenant ouverte');
		}else{
			console.log('ne pas passé');
		}
	}
	
//function pour pour le menu
function menu(){
	console.log('2 - Piece ' + piece2.nomPiece);
  	console.log('3 - Piece ' + piece3.nomPiece);
  	console.log('4 - Piece ' + piece4.nomPiece);
}
function combattre(nomPiece){
	if(nomPiece.ennemiPiece == ennemi.nomEnnemi){
		if((monArme.nomObjet == nomPiece.contientObjet) || (ennemi.forceEnnemi >= joueur.forceJoueur)){
			ennemi.vieEnnemi = ennemi.vieEnnemi + (joueur.vieJoueur - 10);
		    console.log(ennemi.nomEnnemi + ' attaque et tue ' + joueur.nom + ' . sa nouvelle vie est : ' + ennemi.vieEnnemi);
			console.log('********************** GAME OVER ***********************');
		}
		else{
				joueur.objets = nomPiece.contientObjet;
				joueur.vieJoueur += ennemi.vieEnnemi - 10;
				console.log(joueur.nom + ' attaque et tue ' + ennemi.nomEnnemi + '. sa nouvelle vie est : ' + joueur.vieJoueur);			    
	   }

	}else{
		console.log('Ennemi n\'existe pas dans cette piece ' + nomPiece.nomPiece);
	}	
}

function deplacement(){
	let choixPiece = Number(prompt('Choisissez une piece de 2 à 5 pour vous deplacer'));

  		piece1.JoueurPiece = NomduJour;
  		if((choixPiece >= 1) && (choixPiece <= 5)){
	
	  		if((choixPiece === 2) && (piece2.etatPorte === true) && (piece2.JoueurPiece == '')){
			   joueur.deplacer(piece1,piece2);
	  		   console.log(piece2.JoueurPiece  + ' ' + 'quitte la piece ' + piece1.nomPiece + ' se trouve maintenant dans la piece ' + piece2.nomPiece + 
	  		   '\n\nDescription : ' + '  ' + piece2.decrirePiece());	
	  		   		joueur.prendreObjet(piece2);
	  		   		combattre(piece2);
			}
	  		else if((choixPiece === 3) && (piece3.etatPorte === true) && (piece3.JoueurPiece == '')){
			  	joueur.deplacer(piece1,piece3);
			  	console.log(piece3.JoueurPiece  + ' ' + 'quitte la piece ' + piece1.nomPiece + ' se trouve maintenant dans la piece ' + piece3.nomPiece + 
	  		   '\nDescription : ' + '  ' + piece3.decrirePiece());	
	  		   		joueur.prendreObjet(piece3);
	  		   		combattre(piece3);
	  		}

	  		else if((choixPiece === 4) && (piece4.JoueurPiece == '')){
				joueur.deplacer(piece1,piece4);
					if(piece4.etatPorte === true){
						console.log(piece4.JoueurPiece  + ' ' + ' se trouve maintenant dans la piece ' + piece4.nomPiece + 
	  		  			 '\nDescription : ' + '  ' + piece3.decrirePiece());	
	  		   			joueur.prendreObjet(piece4);
	  		   			combattre(piece4);
					}
					else{
						console.log('la porte est fermée. ');
							console.log('      1 - OUI ' + '\n     2 - NON');
							let choisir = Number(prompt('voulez vous l\'ouvrir?? '));
							if(choisir === 1){
								ouvrir(piece4);
								console.log(piece4.JoueurPiece  + ' ' + 'quitte la piece ' + piece4.nomPiece + ' se trouve maintenant dans la piece ' + piece4.nomPiece + 
	  		  			        '\nDescription : ' + '  ' + piece4.decrirePiece());	
	  		   			         joueur.prendreObjet(piece4);
	  		   			         combattre(piece4);
							}else if(choisir === 2){

							}

					}	
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
  			let option =[piece1,piece2,piece3,piece4];
  			
			for(let i = 0; i < option.length ; i++){
  					menu();
  					deplacement();
  			}	
  		    break;
  						
  			case 2: 
  				console.log('application fermée');
  			break;
  			default :
  				console.log('le chiffre ' + choix + ' ' + 'n\'est pas dans le menu'); 
  			
}













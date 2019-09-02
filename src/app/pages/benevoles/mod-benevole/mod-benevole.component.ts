import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BenevolesService } from '../benevoles.service';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mod-benevole',
  templateUrl: './mod-benevole.component.html',
  styleUrls: ['./mod-benevole.component.scss']
})
export class ModBenevoleComponent implements OnInit {
  id;
  benevole$: Observable<any>;

  constructor(  private route: ActivatedRoute, private _bs:BenevolesService, private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id
    this.benevole$ = this._bs.getBenevole(id)
  }
  modifier(nom, prenom, adresse, email, telephone, nom_etablissement, nom_association,exp_assoc ){
    const benevole = {
      nom: nom,
      prenom: prenom,
      adresse: adresse,
      email: email,
      nom_etablissement: nom_etablissement,
      telephone: telephone,
      nom_association: nom_association,
      exp_domaine_association: exp_assoc
    }
    this._bs.modifyBenevole(this.id,benevole).subscribe(
      noError => {
        this.openSnackBar("les modifications sont envoyées ", "Ok !")
      },
      err => {
        if (err.error.code == 11000) {
          this.openSnackBar("l'email que vous avez modifié est déja inscrit ", "Ok !")
        }
        console.log(err)
      })
  }
}

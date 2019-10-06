import { Component, OnInit } from '@angular/core';
import { BenevolesService } from './benevoles.service'
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-benevoles',
  templateUrl: './benevoles.component.html',
  styleUrls: ['./benevoles.component.scss']
})
export class BenevolesComponent implements OnInit {
  selectedBenevole
  benevoles$: Observable<any>;
  benevoles;
  dataSource
  constructor(private _benevoleService: BenevolesService) { }

  ngOnInit() {
    this.benevoles$ = this._benevoleService.getdata();
    this.benevoles$.subscribe(data => {
      this.benevoles = data;
      this.dataSource = new MatTableDataSource(this.benevoles)
    })
    // this._benevoleService.getdata().subscribe(data=>{
    //   this.benevoles = data;
    //   this.dataSource = new MatTableDataSource(this.benevoles)
    // })
  }

  supprimer(item) {
    this._benevoleService.supprimerBenevole(item).subscribe(err => { console.log(err) }, res => { console.log(res) });
    this.ngOnInit();
  }
  displayedColumns: string[] = ['position', 'Nom', 'Prenom', 'E-mail', 'adresse', 'telephone', "nom_association", "nom_etablissement", "exp_assoc", "changes"];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}

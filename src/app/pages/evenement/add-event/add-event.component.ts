import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { EvenementService } from '../evenement.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

  constructor(private eventsService:EvenementService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      panelClass: ['blue-snackbar']
    });
  }

  eventForm = new FormGroup({
    date: new FormControl('', Validators.required),
    title_en: new FormControl('', Validators.required),
    title_fr: new FormControl('', Validators.required),
    description_en: new FormControl('', Validators.required),
    description_fr: new FormControl('', Validators.required)
  })

  getDateError() {
    return this.eventForm.controls['date'].hasError('required') ? 'you must enter a value' : '';
  }
  getTitle_enError() {
    return this.eventForm.controls['title_en'].hasError('required') ? 'you must enter a value' : '';
  }
  getTitle_frError() {
    return this.eventForm.controls['title_fr'].hasError('required') ? 'you must enter a value' : '';
  }
  getDescription_enError() {
    return this.eventForm.controls['description_en'].hasError('required') ? 'you must enter a value' : '';
  }
  getDescription_frError() {
    return this.eventForm.controls['description_fr'].hasError('required') ? 'you must enter a value' : '';
  }

  // this method check if all of forms has no invalid error (just to be sure XD)
  checkForms() {
    if (this.eventForm.controls['date'].hasError('required') || this.eventForm.controls['title_en'].hasError('required') || this.eventForm.controls['title_fr'].hasError('required') || this.eventForm.controls['description_en'].hasError('required') || this.eventForm.controls['description_fr'].hasError('required')) {

      // returning false if there is invalid error
      return false;
    }
    else {

      // returning true if there is no invalid error
      return true
    }
  }

  onSubmit() {
    if (this.checkForms()) {
      const event = {
        title: {
          en: this.eventForm.controls['title_en'].value,
          fr: this.eventForm.controls['title_fr'].value
        },
        description: {
          en: this.eventForm.controls['description_en'].value,
          fr: this.eventForm.controls['description_fr'].value
        },
        date: new Date(this.eventForm.controls['date'].value)
      }

      this.eventsService.addEvent(event).subscribe(
        result=>{console.log(result); this.openSnackBar("l'évenement a été créé avec succès ", "Ok !")},
        err=>{console.error(err); if(err.error.code==11000){this.openSnackBar("l'évenement est déja exist ", "Ok !")}}
        )

      console.log(event);
    }
    else {
      console.error('there is an error in forms value validation')
    }
  }


}

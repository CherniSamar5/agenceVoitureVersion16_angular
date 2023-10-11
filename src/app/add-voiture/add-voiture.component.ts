import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Marque } from '../model/marque.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newVoiture = new Voiture();
  showMessage: boolean = false;
  message! :String;

  marques! : any ;
  newIdMarq! : number;
  newMarque! : Marque;
  constructor(private voitureService : VoitureService , private router :Router) {}



  ngOnInit(): void {
        this.voitureService.listeMarques().subscribe(marqs => {console.log(marqs);
          this.marques = marqs;
        });
    }




  addVoiture(){
    this.showMessage = true;
    this.newVoiture.marque = this.marques.find((marq: { idMarque: number; }) => marq.idMarque == this.newIdMarq)!;
    this.voitureService.ajouterVoiture(this.newVoiture).subscribe(voit => {
    console.log(voit);
    this.router.navigate(['voitures']);
    });
    }

}

import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures?  : Voiture[];


  constructor(private voitureService: VoitureService , public authService: AuthService) {

    }


    chargerVoitures(){
      this.voitureService.listeVoiture().subscribe(voits => {
        console.log(voits);
        this.voitures = voits;
        });
    }
  ngOnInit(): void {
    this.chargerVoitures();  }



  supprimerVoiture(v: Voiture)
  {
   // console.log(v);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.voitureService.supprimerVoiture(v.idVoiture!).subscribe(() => {
      console.log("voiture supprimée");
      this.chargerVoitures();

})}


}

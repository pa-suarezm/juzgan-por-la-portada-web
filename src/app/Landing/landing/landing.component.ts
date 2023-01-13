import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  data: Organization[] = [
    {
      name: "Instituto Distrital de Protección y Bienestar Animal (IDPYBA)",
      image: "https://www.animalesbog.gov.co/sites/all/themes/govi_tema_bt/assets/imagenes/logoIDPYBA.svg",
      description: "",
      url: "https://www.animalesbog.gov.co/"
    },
    {
      name: "Fundación Tepa",
      image: "https://www.fundaciontepa.org/wp-content/uploads/2017/09/tepa-logo-horizontal.png",
      description: "",
      url: "https://www.fundaciontepa.org/"
    },
    {
      name: "Dejando Huella - Fundación de Protección Animal",
      image: "https://static.wixstatic.com/media/22a254_6feac5f1088940be926475eb478d3c90~mv2.png/v1/fill/w_469,h_90,al_c,lg_1,q_85,enc_auto/letraslogo.png",
      description: "",
      url: "https://www.fundacionanimaldejandohuella.com/"
    },
    {
      name: "Fundación Corazón Peludito",
      image: "https://www.corazonpeludito.org/wp-content/uploads/2021/04/fundacioncorazon.png",
      description: "",
      url: "https://www.corazonpeludito.org/"
    }
  ];

  currentData: Organization = this.data[0];

  displayStyle: string = "none";

  constructor() { }

  ngOnInit(): void { }

  public openPopup(index: number): void {
    this.currentData = this.data[index];
    this.displayStyle = "block";
  }

  public closePopup(): void {
    this.displayStyle = "none";
  }

  public openUrl(url: string): void {
    window.location.href = url;
  }
}

class Organization {
  public name: string = "";
  public image: string = "";
  public description: string = "";
  public url: string = "";
}
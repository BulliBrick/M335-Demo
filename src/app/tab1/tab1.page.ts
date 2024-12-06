import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IonSelectOption, IonList, IonToast, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonRange, IonSelect, IonLabel, IonItem, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonSelectOption,
     
    IonText, 
    IonItem, 
    IonLabel, 
    IonList,
    IonToast,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonInput, 
    IonRange, 
    IonSelect
  ],
})
export class Tab1Page {
  isToastOpen = false;
  color: string = '';
  formData = {
    text: '',
    range: 5
  };
  
  constructor() {}

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  setColor(e: {detail : {value : string};}) {
    this.color = e.detail.value;
    this.setOpen(true);
  }
}
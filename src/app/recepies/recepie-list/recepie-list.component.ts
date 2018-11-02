import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Paranths', 'This is a test Paratha', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUykjLKJEqkG4RMwI1CyG1pFHRyFD6x0s5IXU25zjivMkltF_g'),
    new Recipe('Jalebi', 'Yummy Jalebi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrdDDMWh8tn0IyMDbTB8lvS5pxULDpCeIPRURd5GGADT3QTWy')
  ];
  constructor() { }

  ngOnInit() { 
  }

}

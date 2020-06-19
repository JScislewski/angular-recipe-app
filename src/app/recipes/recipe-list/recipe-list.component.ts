import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is test',
      'https://cdn.pixabay.com/photo/2019/11/13/10/40/burger-4623235_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

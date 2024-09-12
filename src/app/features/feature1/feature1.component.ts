import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-feature1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './feature1.component.html',
  styleUrl: './feature1.component.css'
})
export class Feature1Component {

}

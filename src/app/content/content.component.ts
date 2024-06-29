import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  userId!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['userId'];
    });
  }
    jashuva = [
    "https://www.youtube.com/live/clbIvi8vLp8?si=b1Pzt64DEebFmrZb",
    "https://www.youtube.com/live/KxQN--QUt1g?si=q2nkML4mInMNiSh_"

    // Add more video source URLs as needed
];
das=[
  "https://youtu.be/nM7Gfhc9uq0?si=9qwFhtWUIgD-ryh7",
  "https://youtu.be/nM7Gfhc9uq0?si=9qwFhtWUIgD-ryh7"
]

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  statusUpdates: string[] = [
    "Learning and growing every day in software development.",
    "Overcoming challenges to become a better coder.",
    "Finding new ways to improve our software.",
    "Collaborating with the team to make our code stronger.",
    "Listening to feedback to make our apps even better.",
    "Keeping up with the latest in tech trends.",
    "Fixing bugs to keep our apps running smoothly.",
    "Sharing ideas to improve our development process.",
    "Adapting quickly to changes in our projects.",
    "Always striving to improve and succeed in my role."
  ];

  constructor() { }

  ngOnInit() {
  }

}

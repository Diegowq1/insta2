import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'insta';

  ngOnInit(): void {

    const firebaseConfig = {
      apiKey: "AIzaSyCiHBHQk5qBI4xwFznd0JUfHyDMAZYD96w",
      authDomain: "insta-68789.firebaseapp.com",
      projectId: "insta-68789",
      storageBucket: "insta-68789.appspot.com",
      messagingSenderId: "72488983713",
      appId: "1:72488983713:web:604babcf38ebfd8a0964e0"
    };
      firebase.initializeApp(firebaseConfig);    

  }
}

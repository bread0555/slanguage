import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent implements OnInit{

  constructor (private http: HttpClient) {}

  getApiTranslate(): Observable<any> {
    return this.http.get("http://127.0.0.1:5000/translate/german/what does barbie mean?")
  }
  slangQuestions: { Question: string; Options: string[]; Answer: string, Completed: boolean }[] = [];
  ngOnInit(): void {
    this.getApiTranslate().subscribe((data: any) => {
      console.log(data.translation)
    })

    this.slangQuestions = [
      {
        Question: "What does ‘Barbie’ mean?",
        Options: ["Brilliant", "Barbeque", "Someone", "Drama"],
        Answer: "Barbeque",
        Completed: false,
      },
      {
        Question: "What does ‘Brekkie’ mean?",
        Options: ["Breakfast", "Break", "Bolster", "Tragedy"],
        Answer: "Breakfast",
        Completed: false,
      },
      {
        Question: "What is a ‘Bottle-o’?",
        Options: ["Bottle Recycling Facility", "Bottle", "Bottle of Beer", "Alcohol Shop"],
        Answer: "Alcohol Shop",
        Completed: false,
      },
      {
        Question: "What is ‘Chrissy’?",
        Options: [
          "The nickname for someone called Christina",
          "A Christian",
          "Christmas",
          "An annoying thing",
        ],
        Answer: "Christmas",
        Completed: false,
      },
      {
        Question: "What does ‘Daggy’ mean?",
        Options: ["Cheap", "Loose", "Scruffy/Unfashionable", "A Dog"],
        Answer: "Scruffy/Unfashionable",
        Completed: false,
      },
      {
        Question: "What is an ‘Esky’?",
        Options: ["Portable cooler container", "A Husky (dog)", "Element", "Scruffy"],
        Answer: "Portable cooler container",
        Completed: false,
      },
      {
        Question: "What does ‘G’day’ mean?",
        Options: ["Hello", "Good Day", "Hi", "Hey"],
        Answer: "Hello",
        Completed: false,
      },
      {
        Question: "What is ‘Maccas’?",
        Options: ["McDonald’s", "A Nickname", "A place", "Magnificent"],
        Answer: "McDonald’s",
        Completed: false,
      },
      {
        Question: "What does ‘She’ll be right’ mean?",
        Options: ["It'll be okay", "Your friend will be okay", "What could go wrong?", "That's not correct"],
        Answer: "It'll be okay",
        Completed: false,
      },
      {
        Question: "What does ‘Ripper’ mean?",
        Options: ["Something rips/tears", "Excellent", "A fart", "Well done"],
        Answer: "Excellent",
        Completed: false,
      },
      {
        Question: "What is a ‘Servo’?",
        Options: ["A motor", "A service station/gas station", "A type of Australian food", "A roundabout"],
        Answer: "A service station/gas station",
        Completed: false,
      },
      {
        Question: "What are ‘Thongs’?",
        Options: ["Underwear", "A type of footwear", "A tradition", "A food"],
        Answer: "A type of footwear",
        Completed: false,
      },
      {
        Question: "What is a ‘Ute’?",
        Options: ["Utility vehicle", "A type of tent", "A nickname", "Underground"],
        Answer: "Utility vehicle",
        Completed: false,
      },
      {
        Question: "What is a ‘Yabby’?",
        Options: ["A nickname", "A car", "A person who likes Sydney", "A type of freshwater crayfish"],
        Answer: "A type of freshwater crayfish",
        Completed: false,
      },
      {
        Question: "What is a ‘Breather’?",
        Options: ["A tool to help asthmatics", "A short break", "A sleep", "A difficult task"],
        Answer: "A short break",
        Completed: false,
      },
      {
        Question: "What is a ‘Dunny’?",
        Options: ["A bad situation", "A Dream", "A toilet", "A town in eastern Sydney"],
        Answer: "A toilet",
        Completed: false,
      },
      {
        Question: "What is ‘Footy’?",
        Options: ["Football (Generally AFL or NRL)", "Soccer", "A fireman", "Your foot"],
        Answer: "Football (Generally AFL or NRL)",
        Completed: false,
      },
      {
        Question: "What does ‘Mate’ mean?",
        Options: ["A nickname", "Your mum", "Maternal", "Friend"],
        Answer: "Friend",
        Completed: false,
      },
      {
        Question: "What is an ‘Op Shop’?",
        Options: ["Thrift store", "Opportunity", "Options", "A supermarket"],
        Answer: "Thrift store",
        Completed: false,
      },
      {
        Question: "What is a ‘Bogan’?",
        Options: ["An alcoholic", "An unsophisticated person", "A beer", "A broken tree branch"],
        Answer: "An unsophisticated person",
        Completed: false,
      },
      {
        Question: "What are ‘Coppers’?",
        Options: ["A metal", "An Australian dish", "A town in Melbourne", "Police Officers"],
        Answer: "Police Officers",
        Completed: false,
      },
      {
        Question: "What does ‘Grog’ mean?",
        Options: ["Alcohol", "Grungy", "Dirty", "Grimey"],
        Answer: "Alcohol",
        Completed: false,
      },
      {
        Question: "What is a ‘Joey’?",
        Options: ["A jelly bean", "A baby kangaroo", "A jumping spider", "A jump rope/skipping rope"],
        Answer: "A baby kangaroo",
        Completed: false,
      },
      {
        Question: "What is a ‘Mozzie’?",
        Options: ["Food", "Mother", "Mosquito", "Many"],
        Answer: "Mosquito",
        Completed: false,
      },
      {
        Question: "What are ‘Snags’?",
        Options: ["Problems", "Sausages", "Signs", "Singers"],
        Answer: "Sausages",
        Completed: false,
      },
      {
        Question: "What is a ‘Tinnie'?",
        Options: ["A can of beer", "A small boat (generally aluminum)", "A large sheet of Tin", "A tin can"],
        Answer: "Both A can of beer and A small boat (generally aluminum)",
        Completed: false,
      },
      {
        Question: "What would you be doing if you ‘Chuck a sickie’?",
        Options: ["Puking", "Throwing a ball", "Taking a fake sick day", "Dying"],
        Answer: "Taking a fake sick day",
        Completed: false,
      },
    ]
  }

  questionAnswered(correct: boolean): void {
    if (correct) {
      this.slangQuestions.shift()
    }
  }
}

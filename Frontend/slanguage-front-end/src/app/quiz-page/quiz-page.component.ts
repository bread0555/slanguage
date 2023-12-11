import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent implements OnInit{

  constructor (private http: HttpClient, public userService: UserService, private translationService: TranslationService) {}
 
  slangQuestions: { Question: string; Options: string[]; Answer: string, Completed: boolean }[] = [];
  percentageCompleted: number = 0
  
  ngOnInit(): void {

    this.percentageCompleted = Math.round((this.userService.activeUser.Points / 27) * 100)

    this.slangQuestions = [
      {
        Question: "What slang word means ‘Barbeque’?",
        Options: ["Brillo", "Barbie", "Snag", "Dunny"],
        Answer: "Barbie",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Breakfast’?",
        Options: ["Bretho", "Brekkie", "Bonza", "Trago"],
        Answer: "Brekkie",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Alcohol Shop’?",
        Options: ["Bottle-o", "Shop O Beer", "Beero", "Wine Tuck Shop"],
        Answer: "Bottle-o",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Christmas’?",
        Options: ["Chrissy", "Jingle Bells", "Christday", "Massy"],
        Answer: "Chrissy",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Scruffy/Unfashionable’?",
        Options: ["Cheapo", "Loosy", "Daggy", "Darned"],
        Answer: "Daggy",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Portable cooler container’?",
        Options: ["Esky", "Chiller Box", "Colder", "Freezer"],
        Answer: "Esky",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Good Day’?",
        Options: ["Hello", "G’Day", "Sunny", "By’by"],
        Answer: "G’Day",
        Completed: false,
      },
      {
        Question: "What slang word means ‘McDonalds’?",
        Options: ["Maccas", "A Nickname", "Mickey D’s", "MCDs"],
        Answer: "Maccas",
        Completed: false,
      },
      {
        Question: "What slang word means ‘It’ll be okay’?",
        Options: ["Fully right", "She’ll be right", "Fine as", "Unworryable"],
        Answer: "She’ll be right",
        Completed: false,
      },
      {
        Question: "What slang word means ‘fart’?",
        Options: ["Farten", "Rippo", "Ripper", "Gaso"],
        Answer: "Ripper",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Service Station’?",
        Options: ["Servo", "Gaso", "Station O Serves", "Servico"],
        Answer: "Servo",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Shoes you wear to the beach’?",
        Options: ["Thongs", "Flipos", "Sandals", "Beach shoes"],
        Answer: "Thongs",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Utility vehicle’?",
        Options: ["Veco", "Ute", "Servo", "Undo"],
        Answer: "Ute",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Crayfish’?",
        Options: ["Fisho Cray", "Seacrayo", "Yabby", "Crayo"],
        Answer: "Yabby",
        Completed: false,
      },
      {
        Question: "What slang word means ‘A short break’?",
        Options: ["Resto", "Breather", "Shortie", "Breako"],
        Answer: "Breather",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Toilet’?",
        Options: ["Dunny", "Toilo", "Loo", "Bathroo"],
        Answer: "Dunny",
        Completed: false,
      },
      {
        Question: "What slang word means ‘AFL/NRL’?",
        Options: ["Footsol", "Socco", "Footy", "The RLs"],
        Answer: "Footy",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Friend’?",
        Options: ["Mate", "Brutha", "Compo", "Cuz"],
        Answer: "Mate",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Thrift Store’?",
        Options: ["Thrift-o", "Op-shop", "Marko", "Shop-op"],
        Answer: "Op-shop",
        Completed: false,
      },
      {
        Question: "What slang word means ‘an unsophisticated person’?",
        Options: ["Ranga", "Unsopho", "Bogan", "Lamo"],
        Answer: "Bogan",
        Completed: false,
      },
      {
        Question: "What slang word means ‘police’?",
        Options: ["Popo", "Coppers", "Polico", "Cops"],
        Answer: "Coppers",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Alcohol’?",
        Options: ["Grog", "Alco", "Spirits", "Vodo"],
        Answer: "Grog",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Mosquito’?",
        Options: ["Smazzos", "Mozzas", "Mossie", "Quitos"],
        Answer: "Mozzie",
        Completed: false,
      },
      {
        Question: "What slang word means ‘Sausages’?",
        Options: ["Sausos", "Snags", "Sigos", "Servo"],
        Answer: "Snags",
        Completed: false,
      },
      {
        Question: "What slang word means ‘can of beer or a small boat’?",
        Options: ["Alum-tin-ium", "Beerboato", "Tinnie", "Alumo"],
        Answer: "Beerboato",
        Completed: false,
      },
      {
        Question: "What slang word means ‘taking a fake sick day’?",
        Options: ["Puko", "Chucking a sickie", "Fakie", "Sicko"],
        Answer: "Chucking a sickie",
        Completed: false,
      },
    ];

    let questionsCompleted = this.userService.activeUser.Points

    while (questionsCompleted > 0) {
      this.slangQuestions.shift()
      questionsCompleted -= 1
    }
  }

  questionAnswered(correct: boolean): void {
    if (correct) {
      this.slangQuestions.shift()
      this.userService.activeUser.Points += 1

      for (let i = 0; i < this.userService.users.length; i++) {
        const element = this.userService.users[i];
        if (element.Id == this.userService.activeUser.Id) {
          this.userService.users[i] = this.userService.activeUser
        }
      }

      this.userService.putUsers(this.userService.users)
      this.percentageCompleted = Math.round((this.userService.activeUser.Points / 27) * 100)
    }
  }

  language: string = "english"

  translateQuestion(lang: string): void {
    this.language = lang.toLowerCase()

    this.translationService.getTranslation(this.language, this.slangQuestions[0].Question).subscribe((translation: any) => {
      this.slangQuestions[0].Question = translation.translation
    })
  }


}

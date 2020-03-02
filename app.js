class CuriousGirl {
    constructor() {
        this.startBtn = document.getElementById('start-btn');
        this.firstLayer = document.getElementById('1stlayer');
        this.secondLayer= document.getElementById('2ndlayer');
        this.buttonYes = document.getElementById('button-yes');
        this.buttonNo = document.getElementById('button-no');
        this.msgYes = document.getElementById('msgyes');
        this.endcategoryMsg=document.getElementById('endcategorymsg');
        this.endMsg = document.getElementById('end-message-div');
        this.tellMeBtn = document.getElementById ('tell-me');
        this.buttonsYesNo = document.getElementById('buttons-yes-no-div');
        this.finalMsgText = document.getElementById('final-msg');
        this.buttonNext = document.getElementById('button-next-div');
        this.whereToDisplayQuestion = document.getElementById('where-to-display-questions');
        this.items = [
         ["red", "blue", "white","black","purple","green","pink","orange","fucsia","yellow","brown","grey","beige"],
         ["horse","dog","cat", "hedgehog","dolphin","goat","sheep","pig","donkey","tiger","lion","rabbit","cow"],
         ["football", "tennis", "ski","basketball","volleyball","baseball","swimming","karate"],
         ["rock","pop","classic","latino","metal","folk","electronic"]
        ];
        this.categories = ["color", "animal", "sport", "music"];
        this.currentQuestionItemsIndex = 0;
        this.currentQuestionArrayIndex = 0;
        this.currentCategoryIndex = 0;
        this.savedInputs=[];
    }

    startGame(){
        this.startBtn.classList.add('hide');
        this.firstLayer.classList.add('hide');
        this.secondLayer.classList.remove('hide');
        this.displayQuestions();
    }

    displayQuestions(){
        this.whereToDisplayQuestion.innerText = `¿Is/Are ${this.items[this.currentQuestionArrayIndex][this.currentQuestionItemsIndex]} your favourite ${this.categories[this.currentCategoryIndex]}?`;
        this.buttonsYesNo.classList.remove('hide');
    }

    displayMsgYes(){
        this.secondLayer.classList.add('hide');
        this.msgYes.classList.remove('hide');
        this.buttonsYesNo.classList.add('hide');
        this.buttonNext.classList.remove('hide');
        this.savedInputs.push(this.items[this.currentQuestionArrayIndex][this.currentQuestionItemsIndex]);
        this.currentCategoryIndex++;
        console.log(this.savedInputs);
        
    }

    displayNextItem() {
        this.currentQuestionItemsIndex++;
        if (this.items[this.currentQuestionArrayIndex].length > this.currentQuestionItemsIndex) {
        this.whereToDisplayQuestion.innerText = `¿Is/Are ${this.items[this.currentQuestionArrayIndex][this.currentQuestionItemsIndex]} your favourite ${this.categories[this.currentCategoryIndex]}?`;
        } else {
        this.currentQuestionItemsIndex = 0;
        this.whereToDisplayQuestion.innerText = `¿Is/Are ${this.items[this.currentQuestionArrayIndex][this.currentQuestionItemsIndex]} your favourite ${this.categories[this.currentCategoryIndex]}?`;
            }
    }

    displayNextCategory() {
        this.currentQuestionArrayIndex++;
        if (this.currentQuestionArrayIndex >= this.categories.length) {
            this.endcategoryMsg.classList.remove('hide');
            this.msgYes.classList.add('hide');
            this.buttonNext.classList.add('hide');
            this.tellMeBtn.classList.remove('hide');
        } else {
            this.secondLayer.classList.remove('hide');
            this.msgYes.classList.add('hide');
            this.buttonNext.classList.add('hide');
            this.displayQuestions();
        }
    }  

    finalMsg(){
        this.endcategoryMsg.classList.add("hide");
        this.tellMeBtn.classList.add("hide");
       this.finalMsgText.innerText = `Your favourite color is ${this.savedInputs[0]}, this means you are bright and full of energy.
                                      Your favourite animal is ${this.savedInputs[1]}, this means you are warm and love your closest ones.
                                      Your favourite sport is ${this.savedInputs[2]}, this means you are determined and focused in your
                                      goals.
                                      Your favourite music is ${this.savedInputs[3]}, this means you take your time for reflexion but
                                      also like to enjoy a good party sometimes`
                    
    }
}  


if (document.readyState === "loading") {
    document.addEventListener('DOMcontentLoaded', ready);
    } else {
        ready();
    }

function ready(){
    let cg = new CuriousGirl();
    const startBtn = document.getElementById("start-btn");
    const buttonYes = document.getElementById('button-yes');
    const buttonNo = document.getElementById('button-no');
    const buttonNext = document.getElementById('button-next-div');
    const tellMeBtn = document.getElementById ('tell-me');
    
    startBtn.addEventListener('click', () => {
        cg.startGame()
    });

    buttonYes.addEventListener('click', () => {
        cg.displayMsgYes();
   });

   buttonNo.addEventListener('click', () => {
    cg.displayNextItem();
   });

   buttonNext.addEventListener('click', () => {
       cg.displayNextCategory();
   });

   tellMeBtn.addEventListener('click', () => {
       cg.finalMsg();
   });

}
    
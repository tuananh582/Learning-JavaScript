const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerAnswer(){
        //Get answers
        const answers=Number( prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`))
        
        typeof answers === 'number' && answers<this.answers.length &&this.answers[answers]++;

      this.displayResults()
      this.displayResults('string')
        },
     displayResults(type = 'array' ){
        if(type==='array'){
            console.log(this.answers)
        }
        else if(type ==='string'){
            console.log(`Poll results are ${this.answers.join(',')}`)
        }
     }

 }

// poll.registerAnswer()

document.querySelector('.pool').addEventListener('click',poll.registerAnswer.bind(poll))

poll.displayResults.call({answers:[5,2,3]},'string') // beacause we don't have object answers in method so we creat a new object
poll.displayResults.call({answers:[1,5,3,5,6,7,2]},'string') 

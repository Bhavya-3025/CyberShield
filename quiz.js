const quiz = [
{
    question:"Which password is strongest?",
    answers:["password123","12345678","Qw#9Lm!2@Ks","myname"],
    correct:2,
    explanation:"A strong password contains uppercase letters, lowercase letters, numbers and special characters."
},
{
    question:"What is phishing?",
    answers:["A hacking game","A fake email scam","A firewall","Antivirus"],
    correct:1,
    explanation:"Phishing tricks users into giving passwords or personal information."
},
{
    question:"HTTPS means",
    answers:["Secure website","Gaming website","Email service","Virus"],
    correct:0,
    explanation:"HTTPS encrypts communication between your browser and the website."
},
{
    question:"2FA stands for",
    answers:["Two Factor Authentication","Two File Access","Two Firewall Action","Two Function App"],
    correct:0,
    explanation:"2FA adds an extra layer of security."
},
{
    question:"Public Wi-Fi is",
    answers:["Always safe","Can be risky","Encrypted always","Impossible to hack"],
    correct:1,
    explanation:"Public Wi-Fi can expose your personal data if it isn't secure."
}
];

quiz.sort(() => Math.random() - 0.5);

let current = 0;
let score = 0;
let selected = false;
let time = 60;

const question = document.getElementById("question");
const answers = document.getElementById("answers");
const scoreText = document.getElementById("score");
const timer = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const explanation = document.getElementById("explanation");

function loadQuestion(){

    selected = false;

    nextBtn.style.display = "none";

    explanation.style.display = "none";

    question.textContent = quiz[current].question;

    answers.innerHTML = "";

    quiz[current].answers.forEach((answer,index)=>{

        const btn = document.createElement("button");

        btn.className = "answer";

        btn.textContent = answer;

        btn.onclick = () => choose(index,btn);

        answers.appendChild(btn);

    });

    document.getElementById("progressBar").style.width =
    ((current+1)/quiz.length)*100+"%";

}

function choose(index,button){

    if(selected) return;

    selected = true;

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(btn=>btn.disabled=true);

    buttons[quiz[current].correct].style.background="#22c55e";
    buttons[quiz[current].correct].style.color="white";

    if(index!==quiz[current].correct){

        button.style.background="#ef4444";
        button.style.color="white";

    }else{

        score++;

        scoreText.textContent = score;

    }

    explanation.style.display="block";

    explanation.innerHTML="<strong>Explanation:</strong><br>"+quiz[current].explanation;

    nextBtn.style.display="inline-block";
    nextBtn.disabled = false;

}

nextBtn.onclick=function(){

    current++;

    if(current>=quiz.length){

        finishQuiz();

        return;

    }

    loadQuestion();

}

function finishQuiz(){

    clearInterval(countdown);

    let best=Math.max(score,Number(localStorage.getItem("bestScore"))||0);

    localStorage.setItem("bestScore",best);

    document.body.innerHTML=`

    <section style="padding:100px;text-align:center;color:white">

    <h1>🎉 Quiz Completed</h1>

    <h2>Your Score</h2>

    <h1>${score}/${quiz.length}</h1>

    <h2>Best Score : ${best}</h2>

    <a href="quiz.html">

    <button style="padding:15px 40px;margin-top:25px;cursor:pointer">

    Play Again

    </button>

    </a>

    </section>

    `;

}

const countdown=setInterval(()=>{

    time--;

    timer.innerHTML=time;

    if(time<=0){

        time = 0;

timer.textContent = 0;

        finishQuiz();

    }

},1000);

loadQuestion();
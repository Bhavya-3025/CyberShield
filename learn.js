const lessons = [

{

title:"Password Security",

description:"Create long, unique passwords. Never reuse passwords across multiple websites. Use a password manager whenever possible."

},

{

title:"Phishing Attacks",

description:"Never click suspicious links or attachments. Always verify the sender before sharing personal information."

},

{

title:"Malware",

description:"Install antivirus software, keep it updated, and avoid downloading files from untrusted websites."

},

{

title:"Ransomware",

description:"Regularly back up important files and never open unexpected email attachments."

},

{

title:"Social Engineering",

description:"Hackers manipulate people into revealing confidential information. Always verify identities."

},

{

title:"Public Wi-Fi Safety",

description:"Avoid logging into banking or sensitive accounts on public Wi-Fi without a VPN."

},

{

title:"Safe Browsing",

description:"Only visit trusted websites. Look for HTTPS and avoid downloading unknown files."

},

{

title:"Two-Factor Authentication",

description:"Enable 2FA on all important accounts to add an extra layer of security."

}

];

const container=document.getElementById("topicContainer");

function displayTopics(data){

    let html = "";

    data.forEach(topic => {

        html += `
        <div class="topic">

            <h2>${topic.title}</h2>

            <p>${topic.description}</p>

            <button onclick="completeLesson('${topic.title}')">
                ✓ Mark as Completed
            </button>

        </div>
        `;

    });

    container.innerHTML = html;

}

displayTopics(lessons);

function completeLesson(title){

let completed = JSON.parse(localStorage.getItem("completedLessons")) || [];

if(!completed.includes(title)){

completed.push(title);

localStorage.setItem("completedLessons", JSON.stringify(completed));

alert("Lesson Completed!");

}

updateProgress();

}

function updateProgress(){

let completed = JSON.parse(localStorage.getItem("completedLessons")) || [];

document.getElementById("progressText").innerHTML = completed.length;

document.getElementById("learnProgress").style.width =
(completed.length / lessons.length) * 100 + "%";

}

document.getElementById("searchBox").addEventListener("input",function(){

let search=this.value.toLowerCase();

let filtered=lessons.filter(item=>item.title.toLowerCase().includes(search));

displayTopics(filtered);

});

updateProgress();
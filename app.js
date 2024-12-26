
const apiUrl='https://content.guardianapis.com/search';
const token='92e58e10-bba8-458f-90c4-438ae77f6d14';

fetch(`${apiUrl}?api-key=${token}`)
.then(response => response.json())
.then(data =>{
    console.log(data);
    
    const articles=data.response.results;

    articles.forEach(article => {
        const title=article.webTitle;
        const link=article.webUrl;

        let header=document.createElement("h3");
        header.textContent=title;

        header.addEventListener('click',() => {
            window.open(link,'_blank');
        });

        document.body.append(header);
    });
})

const span=document.querySelector("span");
const btn1=document.getElementById("start");
const btn2=document.getElementById("stop");
const btn3=document.getElementById("reset");

let time=parseInt(span.innerText);
let id;
btn1.addEventListener('click',() => {
  id=setInterval(()=>{
    time++;
    span.innerText=time;
  },500)
});

btn2.addEventListener('click',() => {
    clearInterval(id);
});

btn3.addEventListener('click',() => {
    time=0;
    span.innerText=0;
})


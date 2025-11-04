const quoteText=document.getElementById("quote-text");
const quoteAuthor=document.getElementById("quote-author");
const newBtn=document.getElementById("new-quote-btn");
const copyBtn=document.getElementById("copy-btn");
const shareBtn=document.getElementById("share-btn");

async function getQuote(){
  quoteText.textContent="Loading...";
  quoteAuthor.textContent="";
  try{
    const response=await fetch("https://zenquotes.io/api/random");
    const data=await response.json();
    quoteText.textContent=`"${data[0].q}"`;
    quoteAuthor.textContent=`— ${data[0].a}`;
  }catch(e){
    quoteText.textContent="Failed to fetch quote 😢";
  }
}

newBtn.addEventListener("click",getQuote);

copyBtn.addEventListener("click",async()=>{
  await navigator.clipboard.writeText(`${quoteText.textContent} ${quoteAuthor.textContent}`);
  alert("Quote copied!");
});

shareBtn.addEventListener("click",()=>{
  const text=`${quoteText.textContent} ${quoteAuthor.textContent}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
});

getQuote();


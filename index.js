const form=document.querySelector('form');
const resultDiv=document.querySelector('.result');

form.addEventListener('submit',(e)=>{
e.preventDefault();
getWordInfo(form.elements[0].value);
    });

    const getWordInfo=async(word)=>{
      //  alert("WORD:" + word);
        const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data=await response.json();

resultDiv.innerHTML=`<h2>${data[0].word}</h2>
<p>${data[0].meanings[0].partOfSpeech}</p>
<p>${data[0].meanings[0].definitions[0].definition}</p>
`;

console.log(data);


    }
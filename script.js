let dictionary = {
    getData: function(word){
        let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;
        fetch(url).then((resp)=>resp.json()).then((data)=>this.displayData(data))
    },
    displayData: (data)=>{
        // code here
        console.log( data[0].meanings[0].definitions[0].definition);
        document.getElementById('meaning').innerHTML = data[0].meanings[0].definitions[0].definition;
    }
}

document.querySelector('button').addEventListener('click', ()=>{
    let word = document.getElementById('in').value;
    dictionary.getData(word)
});

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //storing the results of the grabbed array
        const towns = jsonObject['towns'];
        //looping through each town, for the cards
        for (let i = 0; i < towns.length; i++) {
            //making each element: section,h2,p,p,image
            if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
                let card = document.createElement('section');
                let text = document.createElement('div');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let image = document.createElement('img');
                //adding content to each card
                h2.textContent = towns[i].name;
                h3.textContent = '"' + towns[i].motto + '"';
                p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
                p2.textContent = 'Current Population: ' + towns[i].currentPopulation;
                p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', 'img/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name + ' ' + towns[i].motto);
    
                text.appendChild(h2);
                text.appendChild(h3);
                text.appendChild(p1);
                text.appendChild(p2);
                text.appendChild(p3);
                card.appendChild(text);
                card.appendChild(image);
                document.querySelector('div.towns').appendChild(card);
            }
        }
    });
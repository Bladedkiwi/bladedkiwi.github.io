const requestURL = 'https://bladedkiwi.github.io/lesson_13/temples.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //storing the results of the grabbed array
        const temples = jsonObject['temples'];
        //looping through each temple, for the cards
        for (var i = 0; i < temples.length; i++) {
            //making each element
            let container = document.createElement('div');
            let info = document.createElement('h2');
            let section1 = document.createElement('div');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let email = document.createElement('p');
            let section2 = document.createElement('div');
            let services = document.createElement('h3');
            let offers = document.createElement('p');
            let ordinance = document.createElement('h4');
            let ordinances = document.createElement('p');
            let sessions = document.createElement('h4');
            let sessionsched = document.createElement('ul');
            let section3 = document.createElement('div');
            let closings = document.createElement('h3');
            let closingsched = document.createElement('ul');
            let history = document.createElement('h3');
            let historysched = document.createElement('ul');

            //adding content to each card and section
            info.textContent = "Current Info"
            address.textContent = temples[i].address
            phone.textContent =  temples[i].phone;
            email.textContent =  temples[i].email;
            services.textContent =  "Services";
            offers.textContent =  temples[i].services;
            ordinance.textContent =  "Avaiable Ordinances"
            ordinances.textContent =  temples[i].ordinanceslist;
            sessions.textContent =  "Session Schedule";
            closings.textContent = "Temple Closings";
            history.textContent =  "History";

            for (var x = 0; x < temples[i].sessionslist.length; x++) {
                let item = document.createElement('li');
                item.textContent = temples[i].sessionslist[x];
                sessionsched.appendChild(item);
            }

            for (var y = 0; y < temples[i].templeclosings.length; y++) {
                let item2 = document.createElement('li');
                item2.textContent = temples[i].templeclosings[y];
                closingsched.appendChild(item2);
            }

            for (var z = 0; z < temples[i].history.length; z++) {
                let item3 = document.createElement('li');
                item3.textContent = temples[i].history[z];
                historysched.appendChild(item3);
            }

            section1.appendChild(address);
            section1.appendChild(phone);
            section1.appendChild(email);

            section2.appendChild(services);
            section2.appendChild(offers);
            section2.appendChild(ordinance);
            section2.appendChild(ordinances);
            section2.appendChild(sessions);
            section2.appendChild(sessionsched);

            section3.appendChild(closings);
            section3.appendChild(closingsched);
            section3.appendChild(history);
            section3.appendChild(historysched);

            container.appendChild(info);
            container.appendChild(section1);
            container.appendChild(section2);
            container.appendChild(section3);

            document.querySelector('div.temple-grid').appendChild(container);
        }
    });
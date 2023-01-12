            // wprowadz adres do przegladarki i zobacz, co takiego sie wyswietli
            fetch('https://api.nbp.pl/api/cenyzlota/last/5?format=json')
                .then(response => response.json())
                .then(response => {
                    // tutaj obslugujemy dane (parametr 'response') z serwera (json)
                    console.log(response); 

                    // 'response' to tablica - odwoluje sie do 1 elementu (idx = 0)
                    let priceGold0 = response[0];

                    console.log('cena = ' + priceGold0.cena);
                    console.log('data = ' + priceGold0.data);

                    document.getElementById("price0").innerHTML = priceGold0.cena;
                    document.getElementById("date0").innerHTML = priceGold0.data;

                    let priceGold1 = response[1];

                    document.getElementById("price1").innerHTML = priceGold1.cena;
                    document.getElementById("date1").innerHTML = priceGold1.data;

                    let priceGold2 = response[2];

                    document.getElementById("price2").innerHTML = priceGold2.cena;
                    document.getElementById("date2").innerHTML = priceGold2.data;

                    let priceGold3 = response[3];

                    document.getElementById("price3").innerHTML = priceGold3.cena;
                    document.getElementById("date3").innerHTML = priceGold3.data;

                    let priceGold4 = response[4];

                    document.getElementById("price4").innerHTML = priceGold4.cena;
                    document.getElementById("date4").innerHTML = priceGold4.data;

                    for(let i=0; i<4; i++)
                    {
                        
                    }

                    
                })
                .catch(err => console.error(err)); // obsluga w przypadku bledu!
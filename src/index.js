const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

                
                document.getElementById('item').innerHTML = coursesFi; 

                let itemEN;
                let itemFI;

                const sortMenuAsc = () => {
                  
                  if(document.getElementById('item').innerHTML == coursesEn){
                    coursesEn.sort();
                    document.getElementById('item').innerHTML = coursesEn;
                    
                    
                  } else if (document.getElementById('item').innerHTML == coursesFi ) {
                    coursesFi.sort();
                    document.getElementById('item').innerHTML = coursesFi;
                  }


                };

                const sortMenuDesc = () => {
              
                 if(document.getElementById('item').innerHTML == coursesEn){
                  coursesEn.sort();
                  coursesEn.reverse();
                  document.getElementById('item').innerHTML = coursesEn;
                    
                  } else if (document.getElementById('item').innerHTML == coursesFi){
                    coursesFi.sort();
                    coursesFi.reverse();
                    document.getElementById('item').innerHTML = coursesFi;
                  } 
                };
                 

                const langChange = () => {
                  if(document.getElementById('item').innerHTML == coursesEn || document.getElementById('item').innerHTML == itemEN){
                    document.getElementById('item').innerHTML = coursesFi;
                    
                  } else if (document.getElementById('item').innerHTML == coursesFi || document.getElementById('item').innerHTML == itemFI ){
                    document.getElementById('item').innerHTML = coursesEn;

                  }
                };

                

                const random = () => {

                  if( document.getElementById('item').innerHTML == itemEN || document.getElementById('item').innerHTML == coursesEn){
                    itemEN = coursesEn[Math.floor(Math.random()*coursesEn.length)];
                    document.getElementById('item').innerHTML = itemEN; 
                  } else {
                    itemFI = coursesFi[Math.floor(Math.random()*coursesFi.length)];
                    document.getElementById('item').innerHTML = itemFI; 
                  }
                  
                    


                  
                  
                };

                document.getElementById('lang').addEventListener('click', langChange);
                document.getElementById('sorta').addEventListener('click', sortMenuAsc);
                document.getElementById('sortd').addEventListener('click', sortMenuDesc);
                document.getElementById('random').addEventListener('click', random);
                
                
                  
                
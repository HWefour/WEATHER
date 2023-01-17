let input = document.querySelector('#VotreVille');
let btn = document.querySelector('button');
let val;
let temp;
let tempMax;
let tempMin;
let sectionTemp;
let sectionMax;
let sectionMin;
sectionTemp = document.createElement('section');
sectionMax = document.createElement('section');
sectionMin = document.createElement('section');
const ApiKey = "8d1ea57f5c7bb682b127c50f23b95b2b";
let url;
btn.addEventListener('click', function () {

    val = input.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${ApiKey}&units=metric`;
    maFonction();

})
async function maFonction() {
    try {
        let val = input.value;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                tempMax = data.main.temp_max;
                tempMin = data.main.temp_min;
                temp = data.main.temp;
                sectionTemp.innerHTML = Math.round(temp);
                sectionMax.innerHTML = Math.round(tempMax);
                sectionMin.innerHTML = Math.round(tempMin);
                document.body.append(sectionTemp);
                sectionTemp.append(sectionMax);
                sectionTemp.append(sectionMin);
            })
    } catch (error) {
        console.error(error);
    }
}
;











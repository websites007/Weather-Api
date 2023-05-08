const FeelLike = document.querySelector('.about span'),
cities = document.querySelector('#regions')
const key = '19fcee1ae396a011e25de66a241ace90'

const getData = async (city) => {
    const req = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    const data = await req.json()
    
    return data
}
cities.addEventListener('click', () => {
    getData(cities.value).then(data => FeelLike.textContent = Math.floor(data.main.feels_like) + ' ℉')
})

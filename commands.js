import { weatherApi } from "./weatherApi.js";

const orelEbany = (msg) => {
    msg.channel.send('Монета подбрасывается...')

    const random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

    if (random === 1) { // Если вычислено число 1, то выпадает орёл.
        msg.reply(':full_moon: Орёл!')
    }
    if (random === 2) { // Если вычислено число 2, то выпадает решка.
        msg.reply(':new_moon: Решка!')
    }
    if (random === 3) { // Если вычислено число 3, то монета падает ребром.
        msg.reply(':last_quarter_moon: Монета упала ребром!')
    }
}

const getWeather = async (msg,city) => {
    const response = await weatherApi.get(``,{params:{q:city}})
    msg.reply(`In ${city} temperature is ${Number(response.data.current.temp_c)} degrees ceslia`)
}

 const commandList = [   
    {name:'1st',out:orelEbany,call:'!orel'},
    {name: 'weather', out:getWeather, call:'!weather'}
    ];

export default commandList;
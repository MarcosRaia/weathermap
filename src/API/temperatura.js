import { get } from "./request";

export async function buscarTemp(api) {
    try {
        const dados = await get('https://api.openweathermap.org/data/2.5/weather?lat=-122.08&lon=37.39&appid=' + api);
        return { ...dados };
    } catch (erro) {
        return { erro }
    }
}
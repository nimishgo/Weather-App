const key = "abab6853195a6f9eed4adcdbac64cbac";

export async function getData(city = "New Delhi") {
    try{

        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`,{mode : 'cors'});
  
        const cdata = await data.json();
        
        const cityW =  cdata.city.name;
        const temp =  cdata.list[0].main.temp;
        const desc =  cdata.list[0].weather[0].description;
        const icon =  cdata.list[0].weather[0].icon;
        const humidity =  cdata.list[0].main.humidity;
        const windSpeed =  cdata.list[0].wind.speed;
        return {cityW,temp,desc,icon,humidity,windSpeed};
    }
    catch{
        throw new Error("Enter a valid city");
    }
    // console.log(cdata,cityW,temp,desc,icon,humidity,windSpeed);
}
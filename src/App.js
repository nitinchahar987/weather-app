import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [city,setCity]=useState('');
  let [wdetails,setwdetails]=useState();
  let [isloading,setisloading]=useState(false);
  let getData=(event)=>{
    setisloading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
    .then((res)=>res.json())
   

    .then((finalres)=>{
      console.log(finalres)
      if(finalres.cod=='404'){
        setwdetails(undefined);

      }
      else{
      setwdetails(finalres)
      }
      setisloading(false);
    })
    event.preventDefault()
    setCity('');
     
  }
  return (

    <div  className='bg-no-repeat bg-cover w-[100%] h-[100vh] bg-[url(https://th.bing.com/th/id/R.3c4b078af7284e4f772eb1daea326199?rik=9vLOUyA9%2fjVqyg&riu=http%3a%2f%2fi.kinja-img.com%2fgawker-media%2fimage%2fupload%2ft_original%2fis9l7titozic2s3xpqjk.gif&ehk=PYzKzzE3pOb5ET%2bIARtlj%2bxm1CU3BiYfbEPWsSUZnG8%3d&risl=1&pid=ImgRaw&r=0)]'>
      <div className='max-w-[1320] mx-auto'>
        <div className='flex'>
        <h1 className='text-[40px] font-bold py-[50px] text-yellow-300'> WEATHER
        
        </h1><img src='https://s3u.tmimgcdn.com/800x0/u78336474/c18dd74844486ac80532e6108cc8d8fb.jpg' className='object-cover w-20 h-20 my-5 mx-3'/></div>
        
        <form onSubmit={getData}>
          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='w-[300px] h-[40px] pl-3' placeholder='city name'/>
          <button class="mx-1 bg-purple-500 hover:bg-blue-400 text-white pr-4 font-bold py-2.5 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Submit
</button>
        </form>
        <div className='rounded-md w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]'>
          < img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1260.gif' width={100 }
          className={` absolute left-[45%] ${isloading? '' :'hidden '}` }></img>
          {wdetails!==undefined
          ?
          <>
          <h3 className='font-bold text-[30px]'>{wdetails.name} <span className='bg-[yellow]'>{wdetails.sys.country}</span></h3>
          <h2 className='font-bold text-[30px]'>{wdetails.main.temp} celcius</h2>
          <img src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`}/>
          <p className='font-bold text-[20px]'>{wdetails.weather[0].description}</p>
          </>
          :
          "no city found"
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;

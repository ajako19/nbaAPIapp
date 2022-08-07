import "./MainPage.css"
import axios from "axios";
import { useEffect, useState } from "react";
import Player from "../models/Player";

interface Props {
  inputData: string;
}

export default function MainPage({inputData}:Props) {
  const [data, setData] = useState<Player[]>()


  const options = {
    method: 'GET',
    url: 'https://free-nba.p.rapidapi.com/players',
    params: {page: '0', per_page: '5', search: inputData},
    headers: {
      'X-RapidAPI-Key': 'e837d0939cmshe22d728692cc5c8p1e6ce3jsna88bc751b041',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      setData(response.data.data)
      console.log(response.data.data)
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <div className="MainPage">
        <div className={inputData ? "mainPageWrap" : "mainPageNone"}>
          {data?.map((player) => (
            <div className="mp-eachPlayer">
              <h1>{player.first_name} {player.last_name}</h1>
              <h1 className="mp-teamName">{player.team.full_name}</h1>
              <button className="mp-button">View Stats</button>
            </div>
          ))}
        </div>
    </div>
  )
}

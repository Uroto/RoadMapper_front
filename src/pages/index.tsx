import { Inter } from 'next/font/google'
import { Main } from 'next/document';
import { useEffect, useState } from 'react'
import { gptResType } from './generate.interface';
import styles from '../styles/flow.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [data, setdata] = useState<gptResType | null>(null);
  const [word, setWord] = useState<string>('');
  const url:string = "http://localhost:5000/generate";

  const flowReq = async () => {
    try {
      const base_url = new URL(url);
      base_url.searchParams.set('word', word);
      const res = await fetch(base_url.toString(), {
        method: 'GET',
      });
      const data = await res.json();
      setdata(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return res.json();
  //     })
  //     .then((data) => setdata(data))
  //     .catch((error) => {
  //       console.error('There was a problem with the fetch operation:', error.message);
  //     });
  // }, []);
  

  return (
    <div>
      <header>
        <h1>RoadMapper</h1>
      </header>
      <div>
        <div>
          <i className='gptIcon'><img src="" alt="" /></i>
          <input type="text" onChange={(e) => setWord(e.target.value)}/>
          <button onClick={flowReq}><img src=""/>✈</button>
        </div>
        <div className={styles.flow_design01}>
          <ul className={styles.flow01}>
            {data?.flow.map((content, index) => {
              return (
                <li key={index}>
                  <dl>
                    <dt><span className={styles.icon01}>STEP&nbsp;1</span>お申し込み</dt>
                    <dd>{content}</dd>
                  </dl>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <footer>

      </footer>
    </div>
  )
}

import { useState } from 'react'
import { gptResType, flowPairType } from './interfaces/generate.interface';
import styles_flow from '../styles/flow2.module.scss'
import styles from '../styles/main.module.scss'
import { flowReq } from './api/flowReq';

export default function Home() {
  const [data, setdata] = useState<gptResType>({ word: '', topic: '', flow: [] });
  const [word, setWord] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const url:string = "http://localhost:5000/generate";

  const btnHandler = async () => {
    setLoading(true);
    try {
      const res = await flowReq(url, word);
      setdata(res);
    } catch(err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id={styles.overall}>
      <div id={styles.main}>
        <div id={styles.top}>
          <div id={styles.input}>
            <i id={styles.logo}><img src="/images/chatgpt-icon.png" alt="" width="35" height="35" /></i>
            <input type="text" onChange={(e) => setWord(e.target.value)}/>
            <button onClick={btnHandler} disabled={loading}>✈</button>
          </div>
          <div>
            <select name="level">
              <option value="">レベル</option>
              <option value="beginner">初級者</option>
              <option value="intermidiate">中級者</option>
              <option value="advanced">上級者</option>
            </select>
            <select name="time">
              <option value="">とれる時間</option>
              <option value="week">1週間</option>
              <option value="month">1ヶ月～3ヶ月</option>
              <option value="halfmonth">半年</option>
              <option value="overyear">一年以上</option>
            </select>
          </div>
        </div>
        <div>
          {loading ? 'Loading...' : 'Not yet'}
        </div>
        <div className={styles_flow.flow_design02}>
          <ul className={styles_flow.flow02}>
            {data?.flow?.map((content: flowPairType, index: number) => {
              return (
                <li key={index}>
                  <dl>
                    <dt><span className={styles_flow.icon02}>{content.num}</span>{content.title}</dt>
                    <dd>{content.flow}</dd>
                  </dl>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
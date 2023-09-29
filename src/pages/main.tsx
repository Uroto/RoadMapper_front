import { useState } from 'react'
import { gptResType, flowPairType } from './interfaces/generate.interface';
import styles_flow from '../styles/vendor/flow.module.scss'
import styles from '../styles/main.module.scss'
import { flowReq } from './api/flowReq'
import Header from './module/Header';
import Image from 'next/image';

export default function Home() {
  const [data, setdata] = useState<gptResType>({ word: '', topic: '', flow: [] });
  const [word, setWord] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [level, setLevel] = useState<string>('');
  const [time, setTime] = useState<string>('');
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
      setText("");
    }
  }

  return (
    <div id={styles.overall}>
      <Header/>
      <div id={styles.main}>
        <div id={styles.top}>
          <div id={styles.input}>
            <i id={styles.logo}><img src="/images/chatgpt-icon.png" alt="" width="35" height="35" /></i>
            <input type="text" placeholder="習得したいモノ" value={text} onChange={(e) => {
              setWord(e.target.value);
              setText(e.target.value);
            }}/>
            <button onClick={btnHandler} disabled={loading}><Image src="/images/send.svg" width="27" height="27" alt=''></Image></button>
          </div>
          <div id={styles.choose}>
            <select 
              name="level" 
              value={level} // value propを使用
              onChange={(e) => setLevel(e.target.value)} // onChangeイベントを追加
            >
              <option value="" disabled hidden>レベル</option>
              <option value="beginner">初級者</option>
              <option value="intermidiate">中級者</option>
              <option value="advanced">上級者</option>
            </select>
            <select 
            name="time" 
            value={time} // value propを使用
            onChange={(e) => setTime(e.target.value)} // onChangeイベントを追加
          >
              <option value="" disabled hidden>とれる時間</option>
              <option value="1 week">1週間</option>
              <option value="1~3 months">1ヶ月～3ヶ月</option>
              <option value="half year">半年</option>
              <option value="over 1 year">一年以上</option>
            </select>
          </div>
        </div>
        <div>
          {loading ?
          <div id={styles.loading}>
            <h3>生成しています</h3>
            <div id={styles.spinner}></div>
          </div>
          : ''}
        </div>
        <div className={styles_flow.flow_design} id={styles.flow}>
          <ul className={styles_flow.flow}>
            {data?.flow?.map((content: flowPairType, index: number) => {
              return (
                <li key={index}>
                  <dl>
                    <dt><span className={styles_flow.icon}>{content.num}</span>{content.title}</dt>
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
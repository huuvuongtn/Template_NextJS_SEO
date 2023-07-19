import Layout from '@components/Layout';
import { useEffect } from 'react';
import styles from './index.module.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
const data = [
  {
      "description": "Leader structure safe or black late wife newspaper her pick central forget single likely.",
      "url": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "title": "Defense the travel audience hand",
      "id": 1,
      "user": 28
  },
  {
      "description": "Much technology how within rather him lay why part actually system increase feel.",
      "url": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "title": "Space build policy people model treatment town hard use",
      "id": 2,
      "user": 25
  },
  {
      "description": "Street anything piece south yard since well point summer school economy respond people mother.",
      "url": "https://api.slingacademy.com/public/sample-photos/3.jpeg",
      "title": "Party about different guess bill too owner",
      "id": 3,
      "user": 7
  },
  {
      "description": "Skill drug college contain herself future seat human yes approach how then maybe public summer play commercial anything woman include million body measure government clearly question quickly parent.",
      "url": "https://api.slingacademy.com/public/sample-photos/4.jpeg",
      "title": "Table husband",
      "id": 4,
      "user": 22
  },
  {
      "description": "World early north TV around meet goal across reason responsibility have must build up some language soon.",
      "url": "https://api.slingacademy.com/public/sample-photos/5.jpeg",
      "title": "Support audience model program three music",
      "id": 5,
      "user": 25
  },
  {
      "description": "Training beautiful age four skin cultural hundred environmental ability blood go physical relate produce tough open police.",
      "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
      "title": "Apply future response she reduce decide",
      "id": 6,
      "user": 30
  },
  {
      "description": "Few address take for special development white career.",
      "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      "title": "Fire year candidate too like",
      "id": 7,
      "user": 20
  },
  {
      "description": "Drug if approach out according set home job company wall source trouble act huge easy style physical so month.",
      "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
      "title": "Reflect design camera land girl wind behind side",
      "id": 8,
      "user": 13
  },
  {
      "description": "Nature focus wonder behind magazine pattern degree far without tree consider.",
      "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
      "title": "Per nature research",
      "id": 9,
      "user": 2
  },
  {
      "description": "Parent talk collection fill between management purpose fish fight real teacher successful me arrive little.",
      "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
      "title": "Yard",
      "id": 10,
      "user": 30
  }
]
const Screen1 = () => {

  function handleNextClick() {
    const lists = document.querySelectorAll('.'+styles.item);
    document.getElementById('slide')?.appendChild(lists[0]);
  }
  
  function handlePrevClick() {
    const lists = document.querySelectorAll('.'+styles.item);
    console.log(styles.item, lists)
    document.getElementById('slide')?.prepend(lists[lists.length - 1]);
  }


  return (
    <Layout > 
      <div className={styles.container}>
        <div id="slide">
            {data.map((item,index)=>{
              return <div className={styles.item}
              style={{backgroundImage:`url(${item.url})`}}
              >
                  <div className={styles.content}>
                      <div className={styles.name}>{item.title}</div>
                      <div className={styles.des}>{item.description}</div>
                      <button>See more</button>
                  </div>
              </div>
            })}
        </div>
        <div className={styles.buttons}>
        <button id="prev" onClick={handlePrevClick}>{<NavigateBeforeIcon/>}</button>
      <button id="next" onClick={handleNextClick}>{<NavigateNextIcon/>}</button>
        </div>
    </div>
    </Layout>
  );
};

export default Screen1;

import { useState } from 'react'
import './App.css';
import InputArticle from './components/Articles/ArticleForm';

function App() {
  // フォームに入力されている値
  const [articletext, setarticletext] = useState('')

  // 未完了のタスク
  const [unfinishedarticles, setunfinishedarticle] = useState([])

  // 完了したタスク
  const [finishedarticles, setfinishedarticle] = useState([])

  // 入力された値を更新する関数
  const onChangeArticleText = (e) => {
    setarticletext(e.target.value)
  }

  const addArticle = () => {
    if (articletext === '') {
      return
    }
    const newArticles = [...unfinishedarticles, articletext]
    setunfinishedarticle(newArticles)
    setarticletext('')
  }
  return (
    <div classname="App">
      <InputArticle articletext={articletext} onChange={onChangeArticleText} onClick={addArticle} />
    </div>
  );
}

export default App;

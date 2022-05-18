import { useState } from 'react'
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import ArticleForm from './components/Articles/ArticleForm';

function App() {
  // フォームに入力されている値
  const [article, setarticle] = useState('')

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
      <BrowserRouter>
        <Route path="/articles">
          <ArticleForm articletext={articletext} onChange={onChangeArticleText} onClick={addArticle} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

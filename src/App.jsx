import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Footer from './components/Footer'
import ArticlePage from './components/ArticlePage'
import articles from './articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={"<Home imagePath={myImage} />"} />
          <Route path='about' element={"<About imagePath={myImage} />"} />
          <Route path='events' element={"<Events />"} />
          {articles.map(article => (
            <Route
              key={article.id}
              path={article.id}
              element={<ArticlePage title={article.title} imagePath={article.imagePath} description={article.description} />}
            />
          ))}
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

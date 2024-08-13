import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import Footer from './components/Footer'
import ArticlePage from './components/ArticlePage'
import About from './components/About'
import Events from './components/Events'
import Home from './components/Home'

import articles from './articles'

import groupImage from '/Users/admin/Desktop/wpa-esn/esnhaagahelia/src/photo/groupPhoto.jpeg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home imagePath={groupImage} />} />
          <Route path='about' element={<About imagePath={groupImage} />} />
          <Route path='events' element={<Events />} />
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

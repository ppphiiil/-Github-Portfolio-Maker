import { Responsive, WidthProvider } from 'react-grid-layout'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import React, { useEffect, useState, useRef, useContext } from 'react'
import './App.scss'
import { Button, Input } from 'antd'

import {
  aboutMeComponentData,
  socialIconComponentData,

  articlesData,
  imageData,
  mail
} from './testdata'

import MyContext from './MyContext'

//import 'bootstrap/dist/css/bootstrap.min.css';

import AboutMe from './components/AboutMe'
import Image from './components/Image'
import SocialIcon from './components/SocialIcon'
import ShowPortfolio from './components/ShowPortfolio'

const ResponsiveGridLayout = WidthProvider(Responsive)

function App () {
  console.log('in app')

  const { username, setUsername } = useContext(MyContext)

  const usernameInput = useRef()

  let All = [...aboutMeComponentData, ...socialIconComponentData, ...imageData]

  const lg_layout = [
    { i: 'aboutme-main', x: 0, y: 0, w: 9, h: 6 },
    { i: 'map', x: 9, y: 0, w: 3, h: 3 },
    { i: 'linkedin', x: 9, y: 3, w: 3, h: 3 }
    //{ i: 'github', x: 0, y: 6, w: 3, h: 3, },
  ]

  const md_layout = [
    { i: 'aboutme-main', x: 0, y: 0, w: 9, h: 4 },
    { i: 'map', x: 9, y: 0, w: 3, h: 2 },
    { i: 'linkedin', x: 9, y: 3, w: 3, h: 2 }
    //{ i: 'github', x: 0, y: 6, w: 3, h: 2, },
  ]

  const xs_layout = [
    { i: 'aboutme-main', x: 0, y: 0, w: 12, h: 6 },
    { i: 'map', x: 0, y: 1, w: 6, h: 3 },
    { i: 'linkedin', x: 6, y: 1, w: 6, h: 3 }
    //{ i: 'github', x: 6, y: 2, w: 6, h: 2, },
  ]

  const xxs_layout = [
    { i: 'aboutme-main', x: 0, y: 0, w: 12, h: 6 },
    { i: 'map', x: 0, y: 1, w: 6, h: 2 },
    { i: 'linkedin', x: 6, y: 1, w: 6, h: 2 }
    // { i: 'github', x: 6, y: 2, w: 6, h: 2, },
  ]

  const layoutinit = {
    lg: lg_layout,
    md: lg_layout,
    sm: md_layout,
    xs: xs_layout,
    xxs: xxs_layout
  }

  const [layout, setlayout] = useState(layoutinit)
  const [visibleItem, setvisibleItem] = useState('all')
  const [data, setdata] = useState(All)

  const removeAllActive = () => {
    const allTabSliderText = document.querySelectorAll('.tab-slider--text')
    allTabSliderText.forEach(item => {
      item.classList.remove('active')
    })
  }

  console.log('render App')

  const handleKeyDown=(e)=>{
  if (e.key === 'Enter') {
      setUsername(usernameInput.current.state.value)
    }
  }
  
  
  

  return (
    <Router>
      <div className='App'>
      Hallo
        {/* NAVIGATION */}

        <Switch>
          <Route path='/'>
            {/* PAGE */}
            {/* <ResponsiveGridLayout

                className="layout"
                layouts={ layout }
                //onLayoutChange={ onLayoutChange }

                autoSize={ true }
                isResizable={ true }
                isBounded={ true }
                isDraggable={ false }
                measureBeforeMount={ true }
                compactType={ "vertical" }
                useCSSTransforms={ false }
                rowHeight={ 80 }

                margin={ [16, 16] }

                breakpoints={ { lg: 1200, md: 996, sm: 767, xs: 480, xxs: 0 } }
                cols={ { lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 } }>


                { All.map( ( data, index ) => {
                  console.log( "render items" )

                  if ( data.category === "AboutMe" ) {

                    return <div className="react-grid-item" key={ data.name } category="AboutMe"><AboutMe data={ data }  /></div>
                  }
                 
                  if ( data.category === "SocialIcon" ) {
                    return <div className="react-grid-item" key={ data.name } category="SocialIcon"><SocialIcon data={ data }   /></div>
                  }
                  if ( data.category === "Image" ) {
                    return <div className="react-grid-item" key={ data.name } category="Image"><Image data={ data }   /></div>
                  }


                } ) }

              </ResponsiveGridLayout> */}
            <div className='showPortfolio-page'>
              <div className='container'>
                <h1>Github Portfolio-Maker</h1>
              
                <div className='username-input'>
                  <Input
                  style={{textAlign:"center"}}
                    ref={usernameInput}
                    name='username'
                    keyboard="true"
                    autofocus="true"

                    size='large'
                    placeholder='Github Username'
                    onKeyDown={(e)=>handleKeyDown(e)}
                  />

                  <Button
                  style={{marginTop:"0.5rem"}}
                    type='primary'
                    size='large'
                    placeholder='Github Username'
                    onClick={() =>
                      setUsername(usernameInput.current.state.value)
                    }
                  >
                    Create Github-Portfolio
                  </Button>
                </div>
              </div>

              {username && (
                <ShowPortfolio
                  githubUsername={username}
                  colorShema={{
                    javascript: '#92efdf',
                    html: '#F6ECA7',
                    scss: '#bde1e7',
                    css: '#a1bbde'
                  }}
                />
              )}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App

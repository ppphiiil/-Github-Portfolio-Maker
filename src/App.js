import { Responsive, WidthProvider } from 'react-grid-layout';
import { Route, HashRouter, Switch } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import "./App.scss"
import logo from "./logo/logo.png"
import { testCaseStudiesData, aboutMeComponentData, socialIconComponentData, articlesData, imageData, mail } from "./testdata"
import CaseStudy from './components/CaseStudy';
import CaseStudyPage from './components/CaseStudyPage';
import AboutMe from './components/AboutMe';
import Image from './components/Image';
import SocialIcon from "./components/SocialIcon"

const ResponsiveGridLayout = WidthProvider( Responsive );

function App() {
  console.log( "redner app" );


  let All = [...aboutMeComponentData, ...socialIconComponentData, ...testCaseStudiesData, ...imageData];
  console.log( All );
  console.log( All[0].category );


  const lg_layout_case = [
    { i: 'case1', x: 6, y: 0, w: 3, h: 6, },
    { i: 'case2', x: 0, y: 0, w: 6, h: 3, },
    { i: 'case3', x: 6, y: 2, w: 6, h: 3, },
    { i: 'case4', x: 9, y: 0, w: 3, h: 6, },
    { i: 'case5', x: 0, y: 1, w: 6, h: 3, },
    { i: 'aboutme-main', x: 0, y: 5, w: 9, h: 6, },
    { i: 'map', x: 3, y: 2, w: 3, h: 3, },
    { i: 'linkedin', x: 0, y: 2, w: 3, h: 3, },
    { i: 'github', x: 0, y: 3, w: 3, h: 3, },
  ];

  const md_layout_case = [
    { i: 'case1', x: 6, y: 0, w: 3, h: 4, },
    { i: 'case2', x: 0, y: 0, w: 6, h: 2, },
    { i: 'case3', x: 6, y: 2, w: 6, h: 2, },
    { i: 'case4', x: 9, y: 0, w: 3, h: 4, },
    { i: 'case5', x: 0, y: 1, w: 6, h: 3, },
    { i: 'aboutme-main', x: 0, y: 5, w: 9, h: 4, },
    { i: 'linkedin', x: 0, y: 2, w: 3, h: 2, },
    { i: 'github', x: 3, y: 1, w: 3, h: 2, },
    { i: 'map', x: 3, y: 2, w: 3, h: 3, },

  ];

  const xs_layout_case = [
    { i: 'case1', x: 6, y: 0, w: 12, h: 4, },
    { i: 'case2', x: 0, y: 0, w: 12, h: 2, },
    { i: 'case3', x: 6, y: 2, w: 12, h: 3, },
    { i: 'case4', x: 9, y: 0, w: 12, h: 4, },
    { i: 'aboutme-main', x: 0, y: 5, w: 12, h: 4, },
    { i: 'map', x: 9, y: 0, w: 12, h: 2, },
    { i: 'linkedin', x: 0, y: 2, w: 12, h: 2, },
    { i: 'github', x: 3, y: 1, w: 12, h: 2, },
  ];

  const xxs_layout_case = [
    { i: 'case1', x: 6, y: 0, w: 12, h: 4, },
    { i: 'case2', x: 0, y: 0, w: 12, h: 2, },
    { i: 'case3', x: 6, y: 2, w: 12, h: 3, },
    { i: 'case4', x: 9, y: 0, w: 12, h: 4, },
    { i: 'aboutme-main', x: 0, y: 5, w: 12, h: 4, },
    { i: 'map', x: 9, y: 0, w: 12, h: 2, },
    { i: 'linkedin', x: 0, y: 2, w: 12, h: 2, },
    { i: 'github', x: 3, y: 1, w: 12, h: 2, },
  ];





  const lg_layout_aboutme = [
    { i: 'case1', x: 0, y: 4, w: 3, h: 6, },
    { i: 'case2', x: 3, y: 2, w: 6, h: 3, },
    { i: 'case3', x: 0, y: 7, w: 6, h: 3, },
    { i: 'case4', x: 6, y: 3, w: 3, h: 6, },
    { i: 'case5', x: 0, y: 8, w: 6, h: 3, },
    { i: 'aboutme-main', x: 0, y: 0, w: 9, h: 6, },
    { i: 'map', x: 9, y: 0, w: 3, h: 3, },
    { i: 'linkedin', x: 9, y: 1, w: 3, h: 3, },
    { i: 'github', x: 0, y: 2, w: 3, h: 3, },
  ];

  const md_layout_aboutme = [
    { i: 'case1', x: 0, y: 4, w: 3, h: 4, },
    { i: 'case2', x: 3, y: 2, w: 6, h: 2, },
    { i: 'case3', x: 0, y: 7, w: 6, h: 2, },
    { i: 'case4', x: 6, y: 3, w: 3, h: 4, },
    { i: 'case5', x: 0, y: 8, w: 6, h: 2, },
    { i: 'aboutme-main', x: 0, y: 0, w: 9, h: 4, },
    { i: 'map', x: 9, y: 0, w: 3, h: 2, },
    { i: 'linkedin', x: 9, y: 1, w: 3, h: 2, },
    { i: 'github', x: 0, y: 2, w: 3, h: 2, },
  ];

  const xs_layout_aboutme = [
    { i: 'case1', x: 0, y: 4, w: 12, h: 4, },
    { i: 'case2', x: 3, y: 2, w: 12, h: 2, },
    { i: 'aboutme-main', x: 0, y: 0, w: 12, h: 6, },
    { i: 'map', x: 9, y: 0, w: 12, h: 2, },
    { i: 'linkedin', x: 9, y: 1, w: 12, h: 2, },
    { i: 'github', x: 0, y: 2, w: 12, h: 2, },
  ];

  const xxs_layout_aboutme = [
    { i: 'case1', x: 0, y: 4, w: 12, h: 4, },
    { i: 'case2', x: 3, y: 2, w: 12, h: 2, },
    { i: 'aboutme-main', x: 0, y: 0, w: 12, h: 6, },
    { i: 'map', x: 9, y: 0, w: 12, h: 2, },
    { i: 'linkedin', x: 9, y: 1, w: 12, h: 2, },
    { i: 'github', x: 0, y: 2, w: 12, h: 2, },
  ];





  const lg_layout = [
    { i: 'case1', x: 9, y: 1, w: 3, h: 6, },
    { i: 'case2', x: 3, y: 2, w: 6, h: 3, },
    { i: 'case3', x: 6, y: 4, w: 6, h: 3, },
    { i: 'case4', x: 3, y: 3, w: 3, h: 6, },
    { i: 'case5', x: 6, y: 3, w: 6, h: 3, },
    { i: 'aboutme-main', x: 0, y: 0, w: 9, h: 6, },
    { i: 'map', x: 9, y: 0, w: 3, h: 3, },
    { i: 'linkedin', x: 0, y: 3, w: 3, h: 3, },
    { i: 'github', x: 0, y: 4, w: 3, h: 3, },
  ];

  const md_layout = [
    { i: 'case1', x: 9, y: 1, w: 3, h: 4, },
    { i: 'case2', x: 3, y: 2, w: 6, h: 2, },
    { i: 'case3', x: 6, y: 4, w: 6, h: 2, },
    { i: 'case4', x: 6, y: 3, w: 3, h: 4, },
    { i: 'case5', x: 3, y: 3, w: 6, h: 2, },
    { i: 'aboutme-main', x: 0, y: 0, w: 9, h: 4, },
    { i: 'map', x: 9, y: 0, w: 3, h: 2, },
    { i: 'linkedin', x: 0, y: 3, w: 3, h: 3, },
    { i: 'github', x: 0, y: 4, w: 3, h: 2, },
  ];

  const xs_layout = [
    { i: 'case1', x: 9, y: 1, w: 12, h: 3, },
    { i: 'case2', x: 3, y: 2, w: 12, h: 3, },
    { i: 'case3', x: 6, y: 4, w: 12, h: 2, },
    { i: 'case4', x: 6, y: 3, w: 12, h: 6, },
    { i: 'case5', x: 6, y: 3, w: 12, h: 3, },
    { i: 'aboutme-main', x: 0, y: 0, w: 12, h: 6, },
    { i: 'map', x: 9, y: 0, w: 12, h: 3, },
    { i: 'linkedin', x: 0, y: 2, w: 12, h: 3, },
    { i: 'github', x: 0, y: 4, w: 12, h: 2, },
  ];

  const xxs_layout = [
    { i: 'case1', x: 9, y: 1, w: 12, h: 3, },
    { i: 'case2', x: 3, y: 2, w: 12, h: 3, },
    { i: 'case3', x: 6, y: 4, w: 6, h: 3, },
    { i: 'case4', x: 6, y: 3, w: 12, h: 6, },
    { i: 'case5', x: 6, y: 3, w: 12, h: 3, },
    { i: 'aboutme-main', x: 0, y: 0, w: 12, h: 6, },
    { i: 'map', x: 9, y: 0, w: 12, h: 3, },
    { i: 'linkedin', x: 0, y: 2, w: 12, h: 3, },
    { i: 'github', x: 0, y: 4, w: 12, h: 2, },
  ];




  const layoutCase = {
    lg: lg_layout_case,
    md: lg_layout_case,
    sm: md_layout_case,
    xs: xs_layout_case,
    xxs: xxs_layout_case,
  }

  const layoutAboutme = {
    lg: lg_layout_aboutme,
    md: lg_layout_aboutme,
    sm: md_layout_aboutme,
    xs: xs_layout_aboutme,
    xxs: xxs_layout_aboutme,
  }

  const layoutinit = {
    lg: lg_layout,
    md: lg_layout,
    sm: md_layout,
    xs: xs_layout,
    xxs: xxs_layout,
  }


  const [layout, setlayout] = useState( layoutinit )
  const [visibleItem, setvisibleItem] = useState( "all" )
  const [data, setdata] = useState( All )



  const removeAllActive = () => {
    const allTabSliderText = document.querySelectorAll( ".tab-slider--text" )
    allTabSliderText.forEach( ( item ) => {
      item.classList.remove( "active" )
    } )
  }


  const clickTabAll = () => {
    setvisibleItem( "all" )
    setlayout( layoutinit );

    const slider = document.querySelector( "#slider" );
    slider.classList.add( "slideAll" )
    slider.classList.remove( "slideAboutMe" )
    slider.classList.remove( "slideProjects" )
    slider.classList.remove( "slideComponents" )
    const sliderText = document.querySelector( "#linkTextAll" )
    removeAllActive();
    sliderText.classList.add( "active" )
  }



  const clickTabAboutMe = () => {
    setvisibleItem( "aboutme" )
    const slider = document.querySelector( "#slider" );
    slider.classList.remove( "slideAll" )
    slider.classList.add( "slideAboutMe" )
    slider.classList.remove( "slideProjects" )
    slider.classList.remove( "slideComponents" )
    const sliderText = document.querySelector( "#linkTextAboutMe" )
    removeAllActive();
    sliderText.classList.add( "active" )
    setlayout( layoutAboutme )
  }



  const clickTabProjects = () => {
    setvisibleItem( "projects" )
    // setlayout( layoutCaseStudy );

    const slider = document.querySelector( "#slider" );
    slider.classList.remove( "slideAll" )
    slider.classList.remove( "slideAboutMe" )
    slider.classList.add( "slideProjects" )
    slider.classList.remove( "slideComponents" )
    const sliderText = document.querySelector( "#linkTextProjects" )
    removeAllActive();
    sliderText.classList.add( "active" )
    console.log( All );
    setlayout( layoutCase );
  }



  const clickTabComponents = () => {
    setvisibleItem( "components" )
    const slider = document.querySelector( "#slider" );
    slider.classList.remove( "slideAll" )
    slider.classList.remove( "slideAboutMe" )
    slider.classList.remove( "slideProjects" )
    slider.classList.add( "slideComponents" )
    const sliderText = document.querySelector( "#linkTextComponents" )
    removeAllActive();
    sliderText.classList.add( "active" )
  }



  const caseStudies =
    testCaseStudiesData.map( ( casestudy ) => {
      return ( < h1 > { casestudy.title }</h1 > )
    } )

  console.log( caseStudies );
  const changeLayout = () => {
  }

  console.log( "render" );

  const checkIfVisible = ( item ) => {
    if ( visibleItem === "all" ) {
      console.log( "all", true );
      return true;
    }
    if ( item === visibleItem ) {
      console.log( "item", true );
      return true
    } else {
      console.log( "item", false );
      return false
    }
  }


  return (
    <div className="App">
      <HashRouter>
        {/* NAVIGATION */ }
        <div class="container">
          <img class="logo" src={ logo } alt="logo" />
          <div class="tab-slider--nav">
            <ul class="tab-slider--tab  " id="slider">
              <li onClick={ clickTabAll } class="tab-slider--text active" id="linkTextAll">All</li>
              <li onClick={ clickTabAboutMe } class="tab-slider--text" id="linkTextAboutMe">Aboutme</li>
              <li onClick={ clickTabProjects } class="tab-slider--text " id="linkTextProjects">Projects</li>
              <li onClick={ clickTabComponents } class="tab-slider--text " id="linkTextComponents">Components</li>
            </ul>
          </div>
          <a href={ `mailto:${mail}` }>contact</a>

        </div>
        <div className="page">

          <Switch>
            <Route path="/casestudy/:name">
              <CaseStudyPage data={ data[0] } />
            </Route>

            <Route exact path="/">
              {/* PAGE */ }
              <ResponsiveGridLayout

                className="layout"
                layouts={ layout }
                //onLayoutChange={ onLayoutChange }

                autoSize={ true }
                isResizable={ true }
                isBounded={ true }
                isDraggable={ true }
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

                    return <div className="react-grid-item" key={ data.name } category="AboutMe"><AboutMe data={ data } visible={ checkIfVisible( "aboutme" ) } /></div>
                  }
                  if ( data.category === "CaseStudy" ) {
                    return <div className="react-grid-item" key={ data.pos } category="CaseStudy"><CaseStudy data={ data } visible={ checkIfVisible( "projects" ) } /></div>
                  }
                  if ( data.category === "SocialIcon" ) {
                    return <div className="react-grid-item" key={ data.name } category="SocialIcon"><SocialIcon data={ data } visible={ checkIfVisible( "aboutme" ) } /></div>
                  }
                  if ( data.category === "Image" ) {
                    return <div className="react-grid-item" key={ data.name } category="Image"><Image data={ data } visible={ checkIfVisible( "aboutme" ) } /></div>
                  }


                } ) }

              </ResponsiveGridLayout>
            </Route>
          </Switch>
        </div>


      </HashRouter>
    </div>
  );
}


export default App;
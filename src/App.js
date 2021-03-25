import './App.css';
import React from 'react';
import image1 from './imges/img1.jpg'
import image3 from './imges/3.png'
import image4 from './imges/4.png'
import image5 from './imges/5.png'
import image6 from './imges/6.png'
import image7 from './imges/7.png'
import image8 from './imges/8.png'
import image9 from './imges/9.png'
import image10 from './imges/10.png'
import image11 from './imges/11.png'
import image12 from './imges/12.png'
import imageA from './imges/a.png'
import imageB from './imges/b.png'
import imageC from './imges/c.jpg'
import imageD from './imges/d.png'


class App extends React.Component {
  myFunction(x) {
    x.classList.toggle("change");
    var y = document.getElementById("myDIV");
    if (y.style.display === "none") {
        document.getElementById("imgLogo").style.display = "none";
        document.getElementById("theImage").style.filter="invert(100%)";
        y.style.display = "block";
        document.getElementById("myDIV2").style.display = "block";
    } else {
        y.style.display = "none";
        document.getElementById("myDIV2").style.display = "none";
        document.getElementById("theImage").style.filter="invert(0%)";
        document.getElementById("imgLogo").style.display = "block";
    }
  }

	render() {
  return (  
    <div className="App">
      <div  id="myDIV2" className="divImg">
        <img src={image1} className="ImgS" alt="John Smith" />
        
        <div className="download">
            <span className="material-icons">arrow_downward</span>
            <div>
                DOWNLOAD<br/>RESUME
            </div>
        </div>
        <img src={image10} className="img10" />
        <img src={image11} className="img11" />
        <img src={image12} className="img12" />
    </div>
    
    <div className="div1">
        <img id="imgLogo" className="img7" src ={image7}/>
        <img id="theImage" className="img9" src ={image9}/> 
        <div className="container" onclick="myFunction(this)">
            <div className="bar1"/>
            <div className="bar2"/>
            <div className="bar3"/>
        </div>  
    </div> 
     <div className="div3">
     <div className="divHelloTxt">
             <span>Hello,</span><br/>
             Donec commodo leo est quis eleifend urna pellentesque eget. Proin scelerisque odio en nisi viverra, nec ullamcorper augue sagittis. Proin faucibus lorem nisl,
     </div>   
     </div>

     <div className="div2">
        <div className="div2-1">
          <img src={image3} className="img3"/>
          <img src={image4} className="img4"/>
          <img src={image5} className="img5"/>
          <img src={image6} className="img6"/>
          <div className="readMore">
              <a href="#">ــــــــ   read more</a>
          </div>
          
          <div className="row"> 
              <img className="imge" src ={imageA}/>
              <img className="imge" src ={imageB}/><br/>
              <img className="imge" src ={imageC}/>
              <img className="imge" src ={imageD}/>
          </div>
       </div>
        

        <div className="div4">
    
            <span>LOADING </span><br/>
            
            <img className="img8" src ={image8}/>
            <h1>
                1.800.123.456
            </h1>

            <h6>
                Donec commodo leo est quis eleifend urna pellentesque eget. 
                Proin scelerisque odio eu nisi viverra, nec ullamcorper augue sagittis. 
                Proin faucibus lor  or <a className="link2" href="#">contactme@mysite.com</a><br/><br/>
            </h6>  
            <div className="row1">
                <a className="bottomLink" href="#">FACEBOOK</a>
                <a className="bottomLink centerLink" href="#">TWITTER</a>
                <a className="bottomLink" href="#">DRIBBBLE</a>       
            </div>

        </div> 

        <div className="vl"></div>
    </div>   


     </div> 
  );
}
}

export default App;

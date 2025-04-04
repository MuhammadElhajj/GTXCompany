import FooterLogo from '../assets/img/GT11 (1).png';
import '../css/Footer.css';

function Footer () {
    return (
    <div>
    <div class="end-footer">
        <div class="name-of-web ">
          <img  class="Footer__logo" src={FooterLogo} alt=""/>
        </div>
 
     
       <div class="div-form">
   Created by Dev <span>ElHajj</span>
       </div>
      
      </div>
    <div class="footer">
        <div class="footer1">
          <h3>Get to know the Developer</h3>
          <ul>
            <li class="footer1-li">
              <a target="_blank" href="https://muhammadelhajj.github.io/Elhajj.com/" >Elhajj</a>
            </li>
            <li class="footer1-li">
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="footer1">
          <h3>Make Money with Us</h3>
          <ul>
            <li class="footer1-li">
              <a href="">Amazon</a>
            </li>
            <li class="footer1-li">
              <a href="">
                Sell on ReStorEm Business</a>
            </li>
            <li class="footer1-li">
              <a href="">Sell apps on ReStorEm</a>
            </li>
      
          </ul>
        </div>
        <div class="footer1">
          <h3>ReStorEm Payment Products</h3>
          <ul>
            <li class="footer1-li">
              <a href=""> ReStorEm Business Card</a>
            </li>
            <li class="footer1-li">
              <a href="">Reload Your Balance</a>
            </li>
          </ul>
        </div>
        <div class="footer1">
          <h3>Let Us Help You</h3>
          <ul>
          <li class="footer1-li">
              <a href="">ReStorEm and COVID-19</a>
            </li>
            <li class="footer1-li">
              <a href=""> Your Account</a>
            </li>
            <li class="footer1-li">
              <a href="">Your Orders</a>
            </li>
        
            <li class="footer1-li">
              <a href="">Amazon Assistant</a>
            </li>
            <li class="footer1-li">
              <a href="">Help</a>
            </li>
          </ul>
        </div>
        </div>
        </div>
   

    )
};

export default Footer
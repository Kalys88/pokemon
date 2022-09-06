import React from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Sort from "../components/Sort";
import Footer from "../components/Footer";


const HomePage = ()=> {
    return (
        <>
        <Header/>
        {/*<SideNav/>*/}
        <Sort/>
        <br/>
        <div className="pok">
            <div>
                <img src="http://www.smashbros.com/images/og/pikachu.jpg" alt=""/>
                <p> Пикачу </p>
            </div>
            <div>
                <img src="http://kakrisovat.top/wp-content/uploads/2019/01/bulbasaur-10.png" alt=""/>
                <p> Бульбазавр </p>
            </div>
        </div>
        <br/>
        <div className="pok">
            <div>
                <img src="https://www.youloveit.ru/uploads/gallery/main/162/squirtle.png" alt=""/>
                <p> Сквиртл </p>
            </div>
            <div>
                <img src="https://www.youloveit.ru/uploads/gallery/main/162/jigglypuff.png" alt=""/>
                <p> Джигглипафф </p>
            </div>
        </div>
      <Footer/>
      </>
    )
}

export default HomePage;
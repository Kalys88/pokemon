import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Sort from "../components/Sort";
import Footer from "../components/Footer";

import { fetchPokemons } from "../store/pokemons";

const HomePage = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

  return (
    <>
      <Header />
      <div className="homepage__container">
        <SideNav />
        <div className="homepage__content">
          <Sort />

          <ul className="homepage__pokemons">
            {pokemons?.value?.map(({ name, imgSrc }) => {
              return (
                <li key={name} className="homepage__pokemons-item">
                  <img src={imgSrc} alt="" />
                  <p> {name} </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

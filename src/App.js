import React, { Component } from "react";
import NewsCard from "./components/NewsCard";
import axios from "axios";

const baseUrl = "https://newsapi.org/v2/";
const urlHeadline =
  baseUrl + "top-headline?" + `country=id&` + `apiKey=${process.env.API_KEY}`;

export default class App extends Component {
  state = {
    listNews: [],
  };

  // https://newsapi.org/v2/top-headlines?country=id&apiKey=027a0c86b59d4edaa9c304428b94a784

  // componentDidMount() {
  //   const self = this;
  //   axios.get();
  // }

  render() {
    return (
      <div>
        <div>
          <NewsCard />
        </div>
      </div>
    );
  }
}

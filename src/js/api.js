import axios from 'axios';

//import logicFetch from './base';
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2';
const KEY = 'cMgNevJhP92xGIzmygmG3mL7Thmyi754';

export default class SearchService {
  constructor() {
    // this.searchQuery = '';
    // this.page = 0;
    // this.country = '';
  }

  async fetchApiEvent(searchQuery, country, page) {
    try {
      const url = `${BASE_URL}/events?keyword=${searchQuery}&apikey=${KEY}&countryCode=${country}&size=16&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.page.totalPages > 62) {
        localStorage.setItem('totalPage', JSON.stringify(62));
      } else {
        localStorage.setItem('totalPage', JSON.stringify(data.page.totalPages));
      }

      //   const { _embedded } = data;

      //   return _embedded ? _embedded.events : null;
      return await data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchDefoltEvent() {
    const url = `${BASE_URL}/events.json?apikey=${KEY}&size=16&page=1`;
    const data = await axios.get(url);
    if (data.data.page.totalPages > 62) {
      localStorage.setItem('totalPage', JSON.stringify(62));
    } else {
      localStorage.setItem(
        'totalPage',
        JSON.stringify(data.data.page.totalPages)
      );
    }

    return data.data._embedded.events;
  }
}

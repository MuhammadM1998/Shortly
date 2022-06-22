import { defineStore } from 'pinia';
import axios from 'axios';

export const useShortenUrl = defineStore({
  id: 'shortenUrl',

  state: () => {
    return {
      linksList: [],
    };
  },

  actions: {
    async shortenLink(link) {
      try {
        const shrtcodeEndpoint = `https://api.shrtco.de/v2/shorten?url=${link}`;
        const { data } = await axios.get(shrtcodeEndpoint);
        return data;
      } catch (error) {
        return error.response.data;
      }
    },

    addLink(originalLink, shortenedLink) {
      const isLinkExist = this.linksList.find(
        (link) => link.originalLink === originalLink
      );
      if (isLinkExist) return false;

      const newLink = {
        shortenedLink,
        originalLink,
      };

      this.linksList.unshift(newLink);
      localStorage.setItem('linksList', JSON.stringify(this.linksList));
      return true;
    },

    fetchLinks() {
      if (localStorage.getItem('linksList'))
        this.linksList = JSON.parse(localStorage.getItem('linksList'));
    },
  },

  getters: {
    getLastinks: (state) => {
      return state.linksList.slice(0, 5);
    },
  },
});

import axiosClient from "./axiosClient";

const movieApi = {
  getAll: (page) => {
    const url = `/homePage/getHome?page=${page}`;
    return axiosClient.get(url);
  },

  getDetails: (category, id) => {
    const url = `/movieDrama/get?id=${id}&category=${category}`;
    return axiosClient.get(url);
  },

  getSearch: (data) => {
    const url = "search/v1/search";
    return axiosClient.post(url, data);
  },
  getSearchList: () => {
    const url = "search/list";
    return axiosClient.get(url);
  },

  getMovieDetail: (category, id, episodeId, definition) => {
    const url = `/media/previewInfo?category=${category}&contentId=${id}&episodeId=${episodeId}&definition=${definition}`;
    return axiosClient.get(url);
  },

  getSearchWithKeyWord: (data) => {
    const url = `search/v1/searchWithKeyWord`;
    return axiosClient.post(url, data);
  },
};

export default movieApi;

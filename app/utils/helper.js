import axios from 'axios';

const Helpers = {
	getArticles: (topic, startYear, endYear) => {
		var authKey = "";
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";
		var queryURL = queryURLBase + topic;
		if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}
		if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "0101";
		}
		return axios.get(queryURL);
	},
	saveArticle: (title, url) => {
		return axios.post('/api/saved', {title: title, url: url});
	},
	getSaved: () => {
	return axios.get('/api/saved');
	},
	deleteArticle: (id) => {
		return axios.delete(`/api/saved/${id}`);
	},
};

export default Helpers;

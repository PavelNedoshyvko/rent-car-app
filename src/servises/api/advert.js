import axios from "axios";

axios.defaults.baseURL = "https://654b58a75b38a59f28eee925.mockapi.io";

export const fetchAllAdverts = async (page) => {
	const params = new URLSearchParams({
		limit: 12,
		page,
	});
	const { data } = await axios.get(`/adverts?${params}`);
	return data;
};
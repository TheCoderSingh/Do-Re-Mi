import axios from "axios";

export const getCookie = (cname) => {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

export const setAuthHeader = () => {
	try {
		const token = getCookie("token");
		if (token)
			axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} catch (error) {
		console.log("Error setting auth", error);
	}
};

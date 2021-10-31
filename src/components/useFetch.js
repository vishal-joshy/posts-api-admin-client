import { useState, useEffect } from 'react';
import axios from 'axios';

const uri = 'http://localhost:8080/api';

const useFetch = ({method,endpoint}) => {
	
	const [data, setData] = useState([]);
    console.log(endpoint);
	useEffect(() => {
		const getData = async () => {
			try {
				const response = await axios.get(uri+endpoint);
				setData(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		getData();
	}, [endpoint]);

	return [data];
};

export default useFetch;

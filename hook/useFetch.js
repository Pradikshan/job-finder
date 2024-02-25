import { useState, useEffect } from "react";
import axios from'axios';

const useFetch = () => {
    const [data, useData] = useData([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/search`,
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'adf2c48dc7mshde4ae60fcaaca5ap1320f7jsne0b438a31ab4',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
    };
}
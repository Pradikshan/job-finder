import { useState, useEffect } from "react";
import axios from'axios';

const useFetch = () => {
    const [data, useData] = useData([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
}
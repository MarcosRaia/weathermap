import axios from 'axios';
import { useEffect } from 'react';
import { buscarTemp } from './temperatura';

const API_KEY = "cfdfe476c3a06d430319b03aa2ed79bb"

 useEffect (async () => {
    await buscarTemp(API_KEY)
        .then(res => res.data)

    console.log(data);
})
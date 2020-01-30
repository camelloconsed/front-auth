import axios from 'axios';
import { network } from '../config';

// Example request
export const getBreeds = async () => await axios.get(`${network.url}/api/breeds/list/all`);

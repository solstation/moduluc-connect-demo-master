import axios from "axios";
import { config } from "../configs/environment";

export const httpClient = axios.create({ ...config.api });

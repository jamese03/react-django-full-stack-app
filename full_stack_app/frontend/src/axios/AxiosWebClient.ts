import * as AxiosGetRequests from "./requests/axiosGetRequests";
import * as AxiosDeleteRequests from "./requests/axiosDeleteRequests";
export const AxiosWebClient = {
    AxiosGetRequests,
    AxiosDeleteRequests,
};

export type IAxiosWebClient = typeof AxiosWebClient;
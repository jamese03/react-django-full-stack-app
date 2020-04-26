import * as AxiosGetRequests from "./requests/axiosGetRequests";
import * as AxiosDeleteRequests from "./requests/axiosDeleteRequests";
import * as AxiosPostRequests from "./requests/axiosPostRequests";

export const AxiosWebClient = {
    AxiosGetRequests,
    AxiosDeleteRequests,
    AxiosPostRequests,
};

export type IAxiosWebClient = typeof AxiosWebClient;
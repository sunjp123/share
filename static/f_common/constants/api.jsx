const API_ROOT = '/api/'
export const  API = {
    addUser:`${API_ROOT}user/register`,
    modifyUser:`${API_ROOT}user/modify`,
    loginUser:`${API_ROOT}user/login`,
    logoutUser:`${API_ROOT}user/logout`,
    getMessage:`${API_ROOT}user/message`,
    readMessage:`${API_ROOT}user/read`,
    sendPhoneCaptcha:`${API_ROOT}user/send`
}
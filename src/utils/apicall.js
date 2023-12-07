import api from 'axios';

 
// api.defaults.baseURL = "http://localhost:80";
// api.defaults.baseURL = "http://a69a909a145b249a6b3ef0b5d3397c4d-318322818.us-east-2.elb.amazonaws.com:80";
api.defaults.baseURL = {BACKEND_URL}
const setHeader = () => {
    // const token = localStorage.getItem('token');
    // if(token){
    //   api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // }
}

export const GetData = async(endPoint,options) => {
  try {
    setHeader();
    const response = await api.get(endPoint);
    return response
  } catch (err) {
      throw err;
  }
    
}

export const PostData = async(endPoint,options) => {
  try {
    setHeader();
    const response = await api.post(endPoint, options);
    return response
  } catch (err) {
      throw err;
  }  
}

export const PutData = async(endPoint,options) => {

  try {
    setHeader();
    const response = await api.put(endPoint, options);
    return response
  } catch (err) {
      throw err;
  }  
}

export const DeleteData = async(endPoint) => {

  try {
    setHeader();
    const response = await api.delete(endPoint);
    return response
  } catch (err) {
      throw err;
  }  
}
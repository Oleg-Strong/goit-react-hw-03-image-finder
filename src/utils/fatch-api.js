import axios from 'axios';
const API_KEY = '31074233-b2aee5c3766edda560e5e1ee4';
const BASE_YRL = 'https://pixabay.com/api/';
const PER_PAGE = 12;
const fetchCards = async (name, page) => {
  return await axios.get(
    `${BASE_YRL}?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
  );
};
export default fetchCards;

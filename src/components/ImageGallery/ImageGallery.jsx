import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures }) => {
  return (
    <ul className={css.imageGallery}>
      {pictures.map(picture => (
        <ImageGalleryItem key={picture.id} image={picture}></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
};

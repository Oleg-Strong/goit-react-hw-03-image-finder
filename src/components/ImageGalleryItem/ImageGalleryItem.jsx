import css from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import Modal from 'components/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  };
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    const { isModalOpen } = this.state;
    return (
      <li className={css.imageGalleryItem}>
        <img
          onClick={this.toggleModal}
          className={css.imageGalleryItemImage}
          src={webformatURL}
          alt={tags}
        />
        {isModalOpen && (
          <Modal closeModal={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

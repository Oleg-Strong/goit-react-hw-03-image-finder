import css from './App.module.css';
import React, { Component } from 'react';
import fetchCards from '../utils/fatch-api';
import Searchbar from './Searchbar';
import SearchForm from './Form';
import ImageGallery from './ImageGallery';
import Button from './Button';
import notify from 'utils/alert';
import { ThreeDots } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from 'react-to-top';

class App extends Component {
  state = {
    searchQuery: '',
    page: null,
    images: [],
    isLoad: false,
    totalHits: null,
  };

  componentDidUpdate(_, prevState) {
    const { page, searchQuery } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.setState({
        isLoad: true,
      });

      fetchCards(searchQuery, page)
        .then(({ data: { hits, totalHits } }) => {
          if (!totalHits) {
            return notify('warning');
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            totalHits: totalHits,
          }));
        })
        .catch(error => {
          notify('error');
          console.log(error);
        })
        .finally(() => {
          this.setState({ isLoad: false });
        });
    }
  }

  changeQuery = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      totalHits: null,
    });
  };

  changePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoad, totalHits } = this.state;
    const isEndOfCollection = totalHits > images.length;

    return (
      <div className={css.app}>
        <Searchbar>
          <SearchForm onSubmit={this.changeQuery}></SearchForm>
        </Searchbar>
        <ImageGallery pictures={images}></ImageGallery>
        {!isLoad && isEndOfCollection ? (
          <Button onChange={this.changePage}>Load more</Button>
        ) : null}
        {isLoad && (
          <ThreeDots
            color="#ff0000"
            wrapperStyle={{
              justifyContent: 'center',
            }}
          />
        )}
        <ScrollToTop
          strokeWidth={0}
          symbolColor={'#fff'}
          symbolSize={30}
          bgColor={'#a7a7a7'}
        />
        <ToastContainer />
      </div>
    );
  }
}
export default App;

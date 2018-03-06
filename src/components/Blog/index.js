import React from 'react';
import NavBar from '/components/common/NavBar';
import Footer from '/components/common/Footer';
import SideBar from './SideBar';
import Tags from './Tags';
import styles from './Blog.css';

const Blog = () => (
  <div className={styles.root}>
    <NavBar />
    <div className={`${styles.content} container`}>
      <div className={styles.main}>
        <h1>
          Use Prettier to format you code
          {' '}
          <img src={require('./images/prettier_badge.svg')} alt="prettier" />
        </h1>
        <Tags />
        <p>
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
          Donec ullamcorper nulla non metus auctor fringilla. Integer posuere
          a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula
          porta felis euismod semper. Maecenas faucibus mollis interdum. Maecena
          faucibus mollis interdum.
        </p>
      </div>
      <SideBar />
    </div>
    <Footer />
  </div>
);

export default Blog;

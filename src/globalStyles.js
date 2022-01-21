import {createGlobalStyle} from 'styled-components';

const globalStyle = createGlobalStyle`
  .search-enter {
    & > div:first-child {
      backdrop-filter: blur(0px);
      background-color: transparent;
    }

    & > div:last-child {
      opacity: 0;
      transform: scale(0.6);
    }
  }

  .search-enter-active {
    & > div:first-child {
      transition: all 500ms;
      backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.5);
    }

    & > div:last-child {
      opacity: 1;
      transform: scale(1);
      transition: all 500ms;
    }
  }

  .search-enter-done {
    & > div:first-child {
      backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.5);
    }

    & > div:last-child {
      opacity: 1;
    }
  }

  .search-exit {
    & > div:first-child {
      backdrop-filter: blur(2px);
      background-color: rgba(0, 0, 0, 0.5);
    }

    & > div:last-child {
      opacity: 1;
      filter: blur(0px);
      transform: scale(1);
    }
  }

  .search-exit-active {
    & > div:first-child {
      transition: all 500ms;
      backdrop-filter: blur(0px);
      background-color: transparent;
    }

    & > div:last-child {
      opacity: 0;
      filter: blur(4px);
      transform: scale(0.9);
      transition: all 500ms;
    }
  }

  .feed-enter {
    opacity: 0;
    transform: translateY(-100%);
  }

  .feed-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 0.3s ease;
  }

  .feed-exit {
    opacity: 1;
    transform: translateY(0%);
  }

  .feed-exit-active {
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
  }

  .left-enter {
    opacity: 0;
    position: absolute;
    transform: translateX(-100%);
  }

  .left-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.5s ease;
  }

  .left-exit {
    transform: translateX(0%);
    opacity: 1;
  }

  .left-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.5s ease;
  }

  .right-enter {
    opacity: 0;
    position: absolute;
    transform: translateX(100%);
  }

  .right-enter-active {
    opacity: 1;
    transform: translateX(0%);
    transition: all 0.5s ease;
  }

  .right-exit {
    transform: translateX(0%);
    opacity: 1;
  }

  .right-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.5s ease;
  }

  .user-enter {
    opacity: 0;
    position: absolute;
  + transform: translateY(- 100 %);
  }

  .user-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 0.3s ease;
  }

  .user-exit {
    opacity: 1;
    transform: translateY(0%);
  }

  .user-exit-active {
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease;
  }
`;

export default globalStyle;
   function checkState(element, inputValue) {
    const filterValues = inputValue.trim().split(' ');
    const states = [];
  
    for (let index = 0; index < filterValues.length; index++) {
      states[index] = getState(element, filterValues[index]);
    }
  
    return states.every(state => state === true);
  }
  
  function getState(data, inputValue, state = false) {
    for (const value of Object.values(data)) {
      if (typeof value === 'object' && value !== null && Object.keys(value).length > 0 && state === false) {
        state = getState(value, inputValue, state);
      } else {
        if (state === false) {
          state = JSON.stringify(value).toLowerCase().includes(inputValue.toLowerCase());
        } else {
          return state;
        }
      }
    }
    return state;
  }

  export const filter = (data, inputValue) => {
    return data.filter((element) => checkState(element, inputValue));
  };

  export const parseQueryString = (queryString) => {
    if (!queryString) {
      return {};
    }

    const response = {};

    queryString.substring(1).split('&').forEach((part) => {
      const [key, value] = part.split('=');
      response[key] = decodeURIComponent(value);
    });

    return response;
  }

  export const DATE_OPTIONS = {  month: 'short', year: 'numeric' };
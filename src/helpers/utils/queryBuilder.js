export const buildQueryParams = (params) => {
    const queryParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        if (typeof value === 'object' && value.field && value.order) {
          queryParams.append(key, `${value.field}:${value.order}`);
        } else if (typeof value === 'string') {
          queryParams.append(key, value.trim());
        } else {
          queryParams.append(key, value);
        }
      }
    });
    
    return queryParams;
  };
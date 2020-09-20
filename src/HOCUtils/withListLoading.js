import React from 'react';

function withListLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: 'center', fontSize: '30px' }}>
        Hold on tight! Initialising Launch...{' '}
        <span role='img' aria-label='rocket'>
          🚀
        </span>
      </p>
    );
  };
}
export default withListLoading;

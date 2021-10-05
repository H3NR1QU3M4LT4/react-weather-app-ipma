/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import './toastify.css';

const ToastifyAlerts = ({ message, type }) => {
  return (
    <div>
      {type === 'success' ? (
        <div className="flex">
          <svg width="1em" height="1em" viewBox="0 0 24 24" className="fill-icon-success">
            <g>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </g>
          </svg>
          <div className="text-text-color1 ml-3">success</div>
        </div>
      ) : type === 'warning' ? (
        <div className="flex">
          <svg width="1em" height="1em" viewBox="0 0 24 24" className="fill-icon-warning">
            <g>
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
            </g>
          </svg>
          <div className="text-text-color1 ml-3"> warning </div>
        </div>
      ) : (
        <div className="flex">
          <svg width="1em" height="1em" viewBox="0 0 24 24" className="fill-icon-error">
            <g>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </g>
          </svg>
          <div className="text-text-color1 ml-3"> error </div>
        </div>
      )}
      <div className="text-text-color2 mt-3">{message}</div>
    </div>
  );
};

export default ToastifyAlerts;

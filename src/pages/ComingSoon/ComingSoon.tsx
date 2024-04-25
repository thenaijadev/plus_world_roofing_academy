import { useEffect, useState } from 'react';
import './ComingSoon.css'
import { useLocation } from 'react-router-dom';

type Props = {
  redirectPath: string;

};

const ComingSoon = (props: Props) => {
  const location = useLocation();
  const [secondsRemaining, setSecondsRemaining] = useState(3); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecondsRemaining(prevSeconds => Math.max(0, prevSeconds - 1)); 

      if (secondsRemaining === 0 && location.pathname !== props.redirectPath) {
        window.location.href = props.redirectPath;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, location.pathname, props.redirectPath]);


  return (
    <div>
      <div className="coming-soon-container d-flex justify-content-center align-items-center">
          <div className='w-50 h-50 m-auto coming-soon-card text-center p-3 rounded-4 d-flex justify-content-center align-items-center flex-column'>
            <h1 className="coming-soon">Coming soon</h1>
            <h6>This page will be redirected in {secondsRemaining} seconss</h6>
          </div>
      </div>
    </div>
  )
}

export default ComingSoon
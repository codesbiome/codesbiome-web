import React, { useState } from 'react';
import logo from '@assets/images/logo.png';
import './Application.less';

type Props = {
  title: string;
  version: string;
};

const Application: React.FC<Props> = (props) => {
  const [counter, setCounter] = useState(0);

  return (
    <React.Fragment>
      <main>
        <div className='main-heading'>
          <img src={logo} width='32' title='Codesbiome' />
          <h1>{props.title}</h1>
        </div>
        <p className='main-teaser'>
          Coming soon...
        </p>
      </main>
    </React.Fragment>
  );
};

export default Application;

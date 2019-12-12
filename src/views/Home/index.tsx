import './index.scss';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect, DispatchProp } from 'react-redux';

interface Props extends DispatchProp {
  counter: number;
}

const Home: React.FC<Props> = ({ counter, dispatch }) => {
  const { t } = useTranslation();
  let [num, setNum] = useState(0);
  function addNum() {
    setNum(++num);
  }
  function sagaChange() {
    dispatch({ type: 'increase', counter: counter + 1 });
  }
  return (
    <div>
      <div className='template' onClick={addNum}>
        {t('template')} {num}
      </div>
      <div className='saga-template' onClick={sagaChange}>
        {t('saga.template')} {counter}
      </div>
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    counter: state.counter
  };
}

export default connect(mapStateToProps)(Home);

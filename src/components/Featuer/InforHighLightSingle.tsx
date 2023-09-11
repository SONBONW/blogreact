import React from 'react';
import user from '../../asset/img/img-user7.png';

function InforHighLightSingle() {
  return (
    <section>
      <div className="form-introduce">
        <span className="tag rounded">Technology</span>
        <h2>
          The Impact of Technology on the Workplace: <br /> How Technology is
          Changing
        </h2>
        <div className="infor-user">
          <div className="user">
            <img className="img-fluid" src={user} alt="" />
            <span>Jason Francisco</span>
          </div>
          <time>August 20, 2022</time>
        </div>
      </div>
    </section>
  );
}

export default InforHighLightSingle;

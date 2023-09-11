// import user from './';
import img from '../../asset/img/img.png';
import user from '../../asset/img/img-user1.png';
import React from 'react';

function InforHighLight() {
  return (
    <section className="position-relative">
      <img className="img-fluid w-100" src={img} alt="" />
      <div className="form-introduce position-absolute d-inline-block bg-white">
        <span className="tag rounded">Technology</span>
        <h2>
          The Impact of Technology on <br /> the Workplace: How <br />{' '}
          Technology is Changing
        </h2>
        <div className="infor-user">
          <div className="user">
            <img src={user} alt="" />
            <span>Jason Francisco</span>
          </div>
          <span className="time">August 20, 2022</span>
        </div>
      </div>
    </section>
  );
}

export default InforHighLight;

import React from "react";
import img from '../asset/img/img.png';
import user from '../asset/img/img-user6.png'

function InforHighLightBlog() {
    return (
         <section>
            <img className="img-fluid" src={img} alt="" />
            <div className="form-introduce blog-listing">
                <span className="tag rounded">Technology</span>
                <h2>The Impact of Technology on the <br /> Workplace: How Technology is Changing</h2>
                <div className="infor-user">
                    <div className="user">
                        <img src={user} alt="" />
                        <span>Jason Francisco</span>
                    </div>
                    <time>August 20, 2022</time>
                </div>
            </div>
        </section>
    );
}

export default InforHighLightBlog;
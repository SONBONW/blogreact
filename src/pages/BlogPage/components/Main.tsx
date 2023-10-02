import React from 'react';
import Advertisement from '../../../components/Advertisement';
import RenderPost from '../../../components/HandlerEvents/ListPost';
import { Link } from 'react-router-dom';
import img from '../../../asset/img/img.png';
import user from '../../../asset/img/img-user6.png';

function MainBlog() {
    return (
        <main className="container custorm-container px-0">
            <section className="pagetitle text-center">
                <h4>Page TItle</h4>
                <p>
                    <span>
                        <Link to="/home">Home</Link>
                    </span>
                    <span>
                        <Link to="/link">Link One</Link>
                    </span>
                </p>
            </section>
            <section>
                <img className="img-fluid" src={img} alt="" />
                <div className="form-introduce blog-listing">
                    <span className="tag rounded">Technology</span>
                    <h2>
                        The Impact of Technology on the <br /> Workplace: How
                        Technology is Changing
                    </h2>
                    <div className="infor-user">
                        <div className="user">
                            <img src={user} alt="" />
                            <span>Jason Francisco</span>
                        </div>
                        <time>August 20, 2022</time>
                    </div>
                </div>
            </section>
            <section className="list-post overflow-hidden">
                <RenderPost title={'Load More'} />
            </section>
            <Advertisement />
        </main>
    );
}

export default MainBlog;

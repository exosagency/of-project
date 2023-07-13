// import ArticleMain from "assets/article-big.jpg";
// import ArticleSide from "assets/article-content.png";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "content/blogs";
import { Link } from "react-router-dom";

const Article = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [nextBlog, setNextBlog] = useState(1);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const activeBlog = blogs.find((item) => item.id == id);
        if (id >= blogs.length) {
            setNextBlog(blogs[0]);
        } else {
            setNextBlog(blogs[id]);
        }
        setBlog(activeBlog);
    }, [id]);

    return (
        <div className="article-page">
            {blog && (
                <div className="article-wrapper">
                    <p className="article-subtitle">{blog.date}</p>
                    <h2 className="article-title">{blog.title}</h2>
                    <img src={blog.image} alt="" />
                    <div className="article-content">
                        {blog.content.map((item, index) => (
                            <React.Fragment key={index}>
                                <h2 className="whats-new-text">{item.subtitle}</h2>
                                <div>
                                    {Array.isArray(item.text) ? (
                                        item.text.map((txt, index) => (
                                            <p key={index} className="article-text">
                                                {txt}
                                            </p>
                                        ))
                                    ) : (
                                        <p className="article-text">{item.text}</p>
                                    )}
                                </div>
                                {item.list && (
                                    <ul className="article-list">
                                        {item.list.map((li, index) => (
                                            <li key={index}>{li}</li>
                                        ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        ))}

                        {blog.bonus && (
                            <>
                                <h2 className="whats-new-text">{blog.bonus.title}</h2>
                                <p className="article-text">{blog.bonus.text}</p>
                                {blog.bonus.content.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <h2 className="whats-new-text">{item.subtitle}</h2>
                                        <div>
                                            {Array.isArray(item.text) ? (
                                                item.text.map((txt, index) => (
                                                    <p key={index} className="article-text">
                                                        {txt}
                                                    </p>
                                                ))
                                            ) : (
                                                <p className="article-text">{item.text}</p>
                                            )}
                                        </div>
                                    </React.Fragment>
                                ))}
                            </>
                        )}
                    </div>
                    <div className="next-article-wrapper">
                        <p className="subtitle">next article</p>
                        <h2 className="next-article-link title">
                            <Link to={"/article/" + nextBlog.id}>{nextBlog.title}</Link>
                        </h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Article;

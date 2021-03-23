import React from 'react'
import s from './Footer.module.css'


class Footer extends React.Component {
    state = { posts: [] }

    // componentDidMount() {
    //     fetch('/posts')
    //         .then(res => res.json())
    //         .then(posts => this.setState({ posts }));
    // }

    render() {

        let postsData = this.state.posts.map(item => {
            return (
                <div>
                    <p>{item.author}</p>
                    <p>{item.title}</p>
                    <p>{item.content}</p>
                </div>
            )
        })

        return (
            <div className={s.footer}>
                {postsData}
            </div>
        )
    }
}

export default Footer;
import React from 'react'
import style from './Footer.module.css'

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
            <div className={style.footer}>
                {postsData}
            </div>
        )
    }
}

export default Footer;
import React from 'react';
import data from './Post';


class Main extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            post: []

        }


        setTimeout(() => {
            this.setState({ post: data })
        }, 5000);
    }


    render() {
        return (
            <main>
                <div className="backgroundAllPosts">

                    {this.state.post.map((post) => {
                        return (
                            <div key={post.id} className="post">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        )
                    })}

                </div>
            </main>
        )

    }
}



export default Main

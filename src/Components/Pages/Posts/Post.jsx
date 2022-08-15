import './Post.css'


const Post = (props) => {
    return (
        <div>
            <div>
                <img className="iconUser" src='https://avatars.mds.yandex.net/i?id=502e7442d0a22b95f3f92de9c15b0af5-5910699-images-thumbs&n=13'></img>
                <span>{props.massager}</span>
                <div>liks {props.liks} </div>
            </div>
        </div>
    )
}

export default Post;
import './Peages.css'
import MyPost from './Posts/MyPost';
import InfoUser from './InfoUser'




const Pages = (props) => {

    return (
        <div className='profilAll'>
            <InfoUser />
            <MyPost posts={props.posts} dispatch={props.dispatch}/>
        </div>
    )
}

export default Pages;
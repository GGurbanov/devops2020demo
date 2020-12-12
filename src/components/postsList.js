import PostListItem from './postListItem';

function PostsList({ data }) {
    return data.length
        ? (
            <ul class="list-group list-group-flush">
                {data.map(post => <PostListItem data={post} key={post.id} />)}
            </ul>
        )
        : <span>No post yet</span>
}

export default PostsList;
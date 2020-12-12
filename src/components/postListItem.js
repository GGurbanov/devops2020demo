function PostListItem({ data }) {
    const { id, title, body } = data;
    
    return (
        <li class="list-group-item px-0">
            <h5>
                <a
                    href="https://jsonplaceholder.typicode.com/"
                    className="text-success"
                    style={{ "text-transform": "capitalize" }}
                >
                    #{id} - {title}
                </a>
            </h5>
            <p className="text-secondary">{body}</p>
        </li>
    );
}

export default PostListItem;
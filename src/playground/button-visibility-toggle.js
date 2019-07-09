let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const jsx = (
        <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
            <div><p>Hey. These are some details that you can now see!</p></div>
        )}
        </div>
    );

    reactDom.render(jsx, document.getElementById('app'));
};

render();
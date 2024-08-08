import React from "react";
import { Helmet } from "react-helmet";

const MyComponent = () => {
    return (
        <div>
            <Helmet>
                <meta
                    property="og:title"
                    content="Your Title"
                />
                <meta
                    property="og:description"
                    content="Your description"
                />
                <meta
                    property="og:image"
                    content="https://i.ytimg.com/vi/RW5HCOMbvuQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADA27-lVq_QTA_JcXLl-uZZINsmg"
                />
                <meta
                    property="og:url"
                    content="https://i.ytimg.com/vi/RW5HCOMbvuQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLADA27-lVq_QTA_JcXLl-uZZINsmg"
                />
            </Helmet>
            <h1>Your Page Content</h1>
        </div>
    );
};

export default MyComponent;

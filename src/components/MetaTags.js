function MetaTags(props) {
    return (
        <>
         <meta name="og:title" content="Little Lemon Restaurant"/>
        <meta name="description" content="Little Lemon, family owned Mediterranean restaurant, traditional recipes served with a modern twist, food delivery, book a table"/>
         <meta name="og:description" content="Little Lemon, family owned Mediterranean restaurant, traditional recipes served with a modern twist, food delivery, book a table"/>
         <meta name="og:image" content={props.ogImage}/>
        </>
    )
}

export default MetaTags
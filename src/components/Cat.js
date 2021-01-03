// Here we pass the cat as props to Dog from the App container which is where the dogs state is stored. Once the prop is passed to Dog here we can return it. In App.js we pass a cat as {cat.message} i.e the url of the random cat stored in state from the fetch. This is then reproduced on screen using an img tag


const Cat = ({cat}) => {


    return (

        <>
        
      {/* the cat prop containing cat.message is passed here */}
        <img src={cat}></img>
        <h1>Hiya kitter</h1>
        
        
        </>


    );


};

export default Cat;
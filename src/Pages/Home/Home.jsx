/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import "./home.scss";
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineArrowRight,
  AiFillHeart,
  AiFillFileText,
  AiOutlineMenu,
} from "react-icons/ai";
const Home = () => {
  const servicesArray = [
    {
      id: 1,
      title: "Custom Bouquets",
      imgLink:'https://plus.unsplash.com/premium_photo-1676316584106-c280fedcdb3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',

      subTitle:
        "Do you acquired taste from your favourite flourist?From your favourite flowers to the rarest hidden secrets, we have what you need",
    },
    {
      id: 2,
      title: "Ocassion Flowers",
      imgLink:'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VyJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',

      subTitle:
        "Favourite flowers for your special day  or special ocassion for your next business event .",
    },
    {
      id: 3,
      title: "Ocassion Flowers",
      imgLink:'https://images.unsplash.com/photo-1594644465539-783d6f6bb37d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zmxvd2VyJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',

      subTitle:
        "Our flourists are passionate about creating the most beautiful combinations of selected dried flowers",
    },
  ];
  return (
    <div className="mainbody">
      <nav>
        <h1>CRADLE</h1>
        <ul>
          <li>COLLECTIONS</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <button>SHOP</button>
        <AiOutlineMenu className="hamburger"/>
      </nav>
      <div className="heroS">
        <img src="/assets/maibnBg.png" alt="" />
        <div className="overlay"></div>
        <img className="transparent" src="/assets/transBg.png" alt="" />
        <div className="hero-text">
          <h1>Custom Dried Flower Bouquets</h1>
          <p>Free deliveries for orders above #10000</p>
          <button>SHOP</button>
        </div>
        <div className="bottom-section">
          <div className="icons">
            <AiOutlineFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
          </div>
          <div className="text">
            <div>Kuipid Collections</div>
            <div className="icon">
              {" "}
              <AiOutlineArrowRight />
            </div>
          </div>
        </div>
      </div>
      <div className="services">
        <h1>This is what we do</h1>
        <p>Our Services</p>
        <div className="service-items">
          {servicesArray.map((item) => (
            <div className="cup" key={item.id}>
              <img className="" src={item.imgLink}  alt="" />
              <div className="text-container">
                <p className="title">{item.title}</p>
                <p className="subTitle">{item.subTitle}</p>
                <p className="read">READ MORE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gift-idea">
        <div className=" leftdiv">
          <h1>Remember Your Loved Ones</h1>
          <p className="title">Gift Ideas That Last Longer</p>
          <p className="subtitle">
            Who does Love flowers ,Whether we are giving it or we are receiving
            it,the only downside is how short lived the happiness fills .We are
            passionate not only about creating nice bouquets but making it last
            longer .Ask our staff on more information on getting your now
          </p>
          <button>Lets Go</button>
        </div>
        <div className="rightDiv">
          <img src="https://images.unsplash.com/photo-1589123053646-4e8c49d46b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2VyJTIwdmFzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
      <div className="services">
        <h1>Dried Flower Collections</h1>
        <p>See What's Popular</p>
        <div className="service-items square">
          {servicesArray.map((item) => (
            <div key={item.id} className="square">
             <img className="" src={item.imgLink}  alt="" />
              <div className="text">
                <div className="icon">
                  <div>
                    <AiFillHeart /> <small>634</small>
                  </div>
                  <div>
                    <AiFillFileText /> <small>34</small>
                  </div>
                </div>
                <p>Share</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="staff">
        <div>
          <h1>Talk to our staff</h1>
         
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            repellendus vitae aliquid pariatur beatae, ipsum nobis libero
            consequuntur totam quos harum incidunt voluptates unde deserunt,
            quisquam alias explicabo ducimus consequatur.
          </p>
          <button>Lets Go</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

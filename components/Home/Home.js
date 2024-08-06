import "./Home.css";
function Home(){
    return(
  <div class="row" id="nav">
 

    <div class="col bg-white">
    <form class="d-flex" role="search" id="Trendy">
        <input class="form-control  mt-3 ms-4 me-2 " type="search" placeholder="Search" aria-label="Search" id="search"/>
        <button class="btn btn-outline-danger mt-3 fw-bold" type="submit">Search</button>
      </form><br/>

  </div><br/><br/>


  <div class="row shadow rounded pt-3" id="categories">
    <div class="col bg-dnger ms-4" ><h5>Women Ethnic</h5></div>
    <div class="col text-center "><h5>Women Western</h5></div>
    <div class="col text-center"><h5>Men Ethnic</h5></div>
    <div class="col text-center "><h5>Men Western</h5></div>
    <div class="col text-center"><h5>Home & Kitchen</h5></div>
    <div class="col text-center "><h5>Beauty & Health</h5></div>
    <div class="col"><h5>Jewellery & Accessories</h5></div>
    <div class="col text-center "><h5>Bags & Footwear</h5></div>
    <div class="col text-center "><h5>Kids Section</h5></div>
    </div><br/><br/><br/>


    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25032024-MainBannerDailyChanging-Z1-P4-Levis-USPA-Min60.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-25032024-MainBannerDailyChanging-Z1-P7-Dnmx-Teamspirit-Under299+extra1000.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-MAINBANNER-Z1-Birthdaybash-5090.gif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-18032024-MainBannerDailyChanging-Z1-P1-HOLISPECIAL-4080.gif" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div ><img id="black" src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-01022024-FREEDEL-above799.jpg" alt=""/></div>
<br/>
<div id="featured">
<h1 class="text-center fst-italic fs-1 text-black fw-bold">Featured Brands</h1>
<div class="row">
    <div class="col"><img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-FEATUREDBRANDS-puma-adidas-min60.jpg" alt=""/></div>
    <div class="col"><img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-FEATUREDBRANDS-uspa-jacknjones-min50.jpg" alt=""/></div>
<div class="col"><img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-21032024-FEATUREDBRANDS-dnmx-netplay-under399.jpg" alt=""/></div>
</div>
</div><br/>


<div id="women-ethnic">
<h1 class="text-center fst-italic fs-1 text-white fw-bold">Women Ethnic</h1>
<div class="row">
    <div class="col" ><img height="380px" class="rounded mt-3" style={{marginLeft:20}} src="https://i.etsystatic.com/28300586/r/il/55a0c6/3205065296/il_1140xN.3205065296_c523.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Kurta Sets</h3></div>
    <div class="col"><img  height="380px" class="mt-3 rounded " src="https://www.shahifits.in/wp-content/uploads/2021/01/latest-wedding-sarees-collection-2021-1548x2048.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Sarees</h3></div>
    <div class="col"><img height="380px" class="mt-3 rounded " src="https://i.pinimg.com/originals/ee/0a/78/ee0a78ea9ddf877a79e94814fdf59bb3.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Lehengas</h3></div>
    <div class="col"><img height="380px"class="mt-3 rounded " src="https://dresseskhazana.com/wp-content/uploads/2017/03/Umrella-Frock.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Frocks</h3></div>
    </div>
    </div><br/>


    <div id="women-western">
    <h1 class="text-center fst-italic fs-1 text-white fw-bold">Women Western</h1>
    <div class="row">
    <div class="col" ><img height="380px"  class="rounded mt-3 ms-3" src="https://assets.ajio.com/medias/sys_master/root/20230918/3wjm/650878f0afa4cf41f5eef249/-473Wx593H-466591062-blue-MODEL.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Jeans</h3></div>
    <div class="col"><img  height="380px" class="mt-3 rounded " src="https://assets.ajio.com/medias/sys_master/root/20240103/t5pD/65957291ddf7791519ff4bf2/-473Wx593H-466372693-brown-MODEL.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Trousers</h3></div>
    <div class="col"><img height="380px" class="mt-3 rounded " src="https://assets.ajio.com/medias/sys_master/root/20230905/a0Tx/64f75689afa4cf41f5a8615c/-473Wx593H-466535684-black-MODEL.jpg" alt=""/><br/><h3 style={{textAlign:"center"}}>Track Pants</h3></div>
<div class="col"><img height="380px"class="mt-3 rounded " src="https://m.media-amazon.com/images/I/71qk7kcOZRL._AC_UL1500_.jpg" alt=""/><h3 style={{textAlign:"center"}}>Tops</h3></div>
    </div>
    </div><br/>


<div id="jwellery">
<h1 class="text-center fst-italic fs-1 text-white fw-bold">Jewellery</h1>
<div class="row">
<div class="col" ><img height="290px"  class="rounded mt-3" style={{marginLeft:20}} src="https://keepmestylish.com/wp/wp-content/uploads/2017/08/latest-diamond-earrings-designs-11.jpg" alt=""/></div>
<div class="col"><img  height="290px" class="mt-3  me-4 rounded " src="https://www.claires.com/dw/image/v2/BBTK_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe4ece6c6/images/hi-res/59304_1.jpg?sw=2000&sh=2000&sm=fit" alt=""/></div>
<div class="col"><img height="290px" class="mt-3 me-4 rounded " src="https://www.olizz.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/i/silver-earrings-olizz-0071em-2.jpg" alt=""/></div>
<div class="col" ><img height="290px"  class="rounded mt-3  me-4" src="https://img0.etsystatic.com/000/0/5132181/il_fullxfull.246726798.jpg" alt=""/></div>
</div>
</div><br/>


<div id="footwear">
<h1 class="text-center fst-italic fs-1 text-black fw-bold">Footwear</h1>
<div class="row">
<div class="col" ><img height="300px"  class="rounded mt-3" style={{marginLeft:25}} src="https://www.na-kd.com/globalassets/trendyol_block_strap_high_heels_1494-004008-0002_01m.jpg?ref=66AD7CF62A" alt=""/><br/></div>
<div class="col"><img height="300px" class="mt-3 rounded " src="https://images.meesho.com/images/products/378499361/c7paj_400.webp" alt=""/><br/></div>
<div class="col"><img  height="300px" class="mt-3 rounded " src="https://images.meesho.com/images/products/338303635/ivnwy_400.webp" alt=""/><br/></div>
<div class="col"><img height="300px" class="mt-3 rounded me-2 " src="https://images.meesho.com/images/products/309099406/m95sz_400.webp" alt=""/><br/></div>
</div>
</div><br/>
    

<div id="footer">
<div class="row">
<div class="col mt-5"style={{marginLeft:20}} ><h1>Shop Non-Stop On <br/>Trendy</h1><br/>
Trusted by more than 1 Crore Indians
Cash on Delivery | Free Delivery<br/><br/>
<img  height="50px" width="200px" src="https://images.meesho.com/images/pow/playstore-icon-big_400.webp" alt=""/></div>
<div class="col mt-5" style={{marginLeft:50}}><h6>Careers</h6><br/>
<h6>Become a supplier</h6><br/>
<h6>Legal and Policies</h6><br/>
<h6>Notices and Returns</h6><br/>
<h5><b>Reach out to us on</b></h5><br/>
<img class="me-5"  src="https://images.meesho.com/images/pow/facebook.webp" alt="" id="f"/><img id="insta" class="me-5" src="https://images.meesho.com/images/pow/instagram.webp" alt=""/><img id="youtube" src="https://images.meesho.com/images/pow/youtube.webp" alt=""/></div>
<div class="col mt-5" ><h5><b>Contact Us</b></h5><br/>
<p>Fashnear Technologies Private<br/> Limited,<br/>
CIN: U74900KA2015PTC082263<br/>
3rd Floor, Wing-E, Helios Business<br/> Park,Kadubeesanahalli Village,<br/> Varthur Hobli, Outer Ring Road<br/> Bellandur, Bangalore, Bangalore <br/>South, Karnataka, India, 560103<br/> E-mail address: <br/>query@Trendy.com<br/>
© 2015-2024 Trendy.com</p></div>

</div>
</div>

  </div>
    )
}
export default Home;
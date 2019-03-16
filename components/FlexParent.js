let mainImage1 = "/static/images/music/10.jpg"
let mainImage2 = "/static/images/music/11.jpg"
let mainImage3 = "/static/images/music/15.jpg"

let smallImage1 = "/static/images/music/11.jpg"
let smallImage2 = "/static/images/music/11.jpg"
let smallImage3 = "/static/images/music/11.jpg"
let smallImage4 = "/static/images/music/11.jpg"
let smallImage5 = "/static/images/music/11.jpg"

let discImage1 = "/static/images/music/6.jpg"
let discImage2 = "/static/images/music/11.jpg"
let discImage3 = "/static/images/music/11.jpg"
let discImage4 = "/static/images/music/11.jpg"
let discImage5 = "/static/images/music/11.jpg"

const parentStyle = {
    margin:"10px 0px",
    display:"flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    alignContent: "center",
    // background:'#191927',
}

const div1Style = {
    // width:180,
    // height: 360,
    width: 420,
    height: 680,
    margin:10,
    background:'#191927',
    borderRadius:5,
    backgroundImage: `url(${mainImage1})`,
    backgroundPosition: '10',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const div2Style = {
    // width:180,
    // height: 360,
    width: 420,
    height: 680,
    margin:10,
    background:'#191927',
    borderRadius:5,
    backgroundImage: `url(${mainImage2})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const div3Style = {
    // width:250,
    // height: 400,
    width: 550,
    height: 750,
    margin:10,
    marginBottom:50,
    background:'#191927',
    borderRadius:5,
    backgroundImage: `url(${mainImage3})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const itemsStyle = {
    // background:'steelblue', 
    height:110,
    width: '100',
    margin: 0,
    display: "flex",
    justifyContent: "center",
    marginBottom: '10%',
}

const boxStyle = {
    // height:100,
    // width: 100,
    width: 200,
    height: 200,
    background:"purple",
    borderRadius: 5,
    margin:10,
    alignContent: "center",
    backgroundImage: `url(${discImage1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

const parentEl = () => (
    <div class="parent" style={parentStyle}>        
        <div class="div-1" style={div1Style}>

        </div>
        <div class="div-2" style={div2Style}>
        </div>
        <div class="div-3" style={div3Style}>

        </div>
        <div class="items" style={itemsStyle}>
                <div class="box" styles={[boxStyle]}></div>
                <div class="box" style={boxStyle}></div>
                <div class="box" style={boxStyle}></div>
                <div class="box" style={boxStyle}></div>
                <div class="box" style={boxStyle}></div>
                <div class="box" style={boxStyle}></div>
                <div class="box" style={boxStyle}></div>
        </div>
    </div>
)

export default parentEl
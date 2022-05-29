//Moldeo de informacion de las difernetes redes sociales o apps.  
// Twitter
const  user_twitter= {
    user_baner:" ",
    user_img:"owl.jpg",
    name: "AIPA 01",
    user_name:"@02AIPA",
    bio:"Text~...",
    location:"México",
    joined:"02/2022",
    following: 88,
    follower: 1,
    genelarinfo : function(){
        return `
        User Name: ${this.user_name}
        Name: ${this.name}
        Location: ${this.location}
        Followers: ${this.follower}`
    }
}

const trading_topic_twitter ={
    location: "Mexico",
    first:["Football","Blanca Félix"],
    second:["Entreteinment","#ThorLoveAndThunder"],
    third:["Only on Twitter","#FelizLunes"],
    fourth:["Treding","#HotSale"],
    fifth:["Treding","#DiaDelEstudiante"]
 }


const hashtag_twitter ={
    user_img:"Marvel.jpg",
    name:"Marvel Entreteinment",
    verrified:"Yes",
    user_name:"@Marvel",
    twitet_data: "52m",
    message:"...~ #ThorLoveAndThunder ~... "
}
// Modela de obtenicion de datos de Facebook. 
const user_facebook= {
    direction: "https://www.facebook.com/alan.paz/XXXX",
    user_baner: "image.jpg", 
    user_img: "image.png",
    name: "Alan Paz", 
    nickname: "AI-PA", 
    number_friends: "163 Friends.", 
    studies: "Studies at ~~~",
    love_life: "Single", 
    joined: "May 2016", 
    follower:"570 people", 
    social_media: [
        "Twitter: @aipa02",
        "Instragram: @alan_paz" 
    ],
    genelarinfo: function(){
        return `
        direction: ${this.direction}, 
        name: ${this.name}, 
        user_name: ${this.nickname}`
    }
}
console.log("User info: "+user_facebook.genelarinfo())
console.log("\n")
console.log("Social media: \n \t"+user_facebook.social_media)

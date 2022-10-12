import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name:"Blessed",
            cover: "https://chillhop.com/wp-content/uploads/2022/04/73f23095038f6f023083520706f3e5345f5dd682-1024x1024.jpg",
            artist: "Moods, Yasper",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=32860",
            color: ["#AFD5EC","#6F3D2D"],
            id:uuidv4(),
            active:true
        },
        {
            name:"Seagulls",
            cover: "https://chillhop.com/wp-content/uploads/2022/01/5753da482a6839b31e4905b22a2f8d65913e7eb4-1024x1024.jpg",
            artist: "Misha, Zmeyev, Viktor Minsky",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
            color: ["#FFE8D0","#D7CBC5"],
            id:uuidv4(),
            active:false
        },
        {
            name:"Cruising",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            artist: "Evil Needle",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=34242",
            color: ["#EC6F52","#E6B04F"],
            id:uuidv4(),
            active:false
        },
        {
            name:"Polaroid",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",
            artist: "Makzo, Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24767",
            color: ["#B9D2DB","#B5D0DA"],
            id:uuidv4(),
            active:false
        },
        {
            name:"Rest Until Dark",
            cover: "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
            artist: "Sleepy Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
            color: ["#C1DCD4","#F9ECD5"],
            id:uuidv4(),
            active:false
        },
        {
            name:"Soulsounds",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            artist: "Parkbench Epiphany",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=28936",
            color: ["#D79695","#5E7B8A"],
            id:uuidv4(),
            active:false
        },
    ]
} 

export default chillHop;
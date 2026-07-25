require("dotenv").config();
const mongoose = require("mongoose");
const Student = require("./models/Student");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Student.deleteMany({});

    await Student.insertMany([
      {
        name: "Rahul Sharma",
        rollNo: "23CSE101",
        course: "B.Tech CSE",
        semester: 5,
        email: "rahul@gmail.com",
        phone: "9876543210",
      },
      {
        name: "Aman Verma",
        rollNo: "23CSE102",
        course: "B.Tech CSE",
        semester: 5,
        email: "aman@gmail.com",
        phone: "9876543211",
      },
      {
        name: "Priya Singh",
        rollNo: "23CSE103",
        course: "B.Tech AI",
        semester: 5,
        email: "priya@gmail.com",
        phone: "9876543212",
      },
      {
        name: "Anjali Gupta",
        rollNo: "23CSE104",
        course: "B.Tech IT",
        semester: 6,
        email: "anjali@gmail.com",
        phone: "9876543213",
      },
      {
        name: "Mohit Kumar",
        rollNo: "23CSE105",
        course: "B.Tech AI",
        semester: 6,
        email: "mohit@gmail.com",
        phone: "9876543214",
      },
      {
        name: "Sneha Sharma",
        rollNo: "23CSE106",
        course: "B.Tech CSE",
        semester: 7,
        email: "sneha@gmail.com",
        phone: "9876543215",
      },
      {
        name: "Rohan Mehta",
        rollNo: "23CSE107",
        course: "B.Tech IT",
        semester: 5,
        email: "rohan@gmail.com",
        phone: "9876543216",
      },
      {
        name: "Neha Arora",
        rollNo: "23CSE108",
        course: "B.Tech AI",
        semester: 6,
        email: "neha@gmail.com",
        phone: "9876543217",
      },
      {
        name: "Karan Singh",
        rollNo: "23CSE109",
        course: "B.Tech CSE",
        semester: 7,
        email: "karan@gmail.com",
        phone: "9876543218",
      },
      {
        name: "Simran Kaur",
        rollNo: "23CSE110",
        course: "B.Tech IT",
        semester: 5,
        email: "simran@gmail.com",
        phone: "9876543219",
      },
     
    {
     name: "Aarav Sharma",
     rollNo: "CSE23001",
    course: "B.Tech CSE",
    semester: 5,
    email: "aarav.sharma@example.com",
    phone: "9876501001"
  },
  {
    name: "Ananya Gupta",
   rollNo: "AIML23002",
    course: "B.Tech AI & ML",
    semester: 5,
    email: "ananya.gupta@example.com",
    phone: "9876501002"
  },
  {
    name: "Rohan Verma",
    rollNo: "ECE23003",
    course: "B.Tech ECE",
    semester: 3,
    email: "rohan.verma@example.com",
    phone: "9876501003"
  },
  {
    name: "Priya Singh",
    rollNo: "IT23004",
    course: "B.Tech IT",
    semester: 7,
    email: "priya.singh@example.com",
    phone: "9876501004"
  },
  {
    name: "Karan Mehta",
    rollNo: "CSE23005",
    course: "B.Tech CSE",
    semester: 1,
    email: "karan.mehta@example.com",
    phone: "9876501005"
  },
  {
    name: "Neha Kapoor",
    rollNo: "AIML23006",
    course: "B.Tech AI & ML",
    semester: 5,
    email: "neha.kapoor@example.com",
    phone: "9876501006"
  },
  {
    name: "Aditya Joshi",
    rollNo: "ME23007",
    course: "B.Tech Mechanical",
    semester: 3,
    email: "aditya.joshi@example.com",
    phone: "9876501007"
  },
  {
    name: "Sneha Yadav",
    rollNo: "CE23008",
    course: "B.Tech Civil",
    semester: 7,
    email: "sneha.yadav@example.com",
    phone: "9876501008"
  },
  {
    name: "Harsh Patel",
    rollNo: "EE23009",
    course: "B.Tech Electrical",
    semester: 1,
    email: "harsh.patel@example.com",
    phone: "9876501009"
  },
  {
    "name": "Harsh Singh",
    "rollNo": "IT23001",
    "course": "B.Tech ECE",
    "semester": 5,
    "email": "harsh.singh1@example.com",
    "phone": "9991510816"
  },
  {
    "name": "Meera Singh",
    "rollNo": "AIML23012",
    "course": "B.Tech AI & ML",
    "semester": 8,
    "email": "meera.singh2@example.com",
    "phone": "9425788359"
  },
  {
    "name": "Arjun Verma",
    "rollNo": "CE23003",
    "course": "B.Tech Mechanical",
    "semester": 1,
    "email": "arjun.verma3@example.com",
    "phone": "9402308396"
  },
  {
    "name": "Nikhil Kapoor",
    "rollNo": "ME23004",
    "course": "B.Tech IT",
    "semester": 4,
    "email": "nikhil.kapoor4@example.com",
    "phone": "9564173812"
  },
  {
    "name": "Neha Singh",
    "rollNo": "CE23005",
    "course": "B.Tech AI & ML",
    "semester": 7,
    "email": "neha.singh5@example.com",
    "phone": "9012798946"
  },
  {
    "name": "Arjun Mehta",
    "rollNo": "CSE23006",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "arjun.mehta6@example.com",
    "phone": "9403124394"
  },
  {
    "name": "Karan Sharma",
    "rollNo": "CSE23007",
    "course": "B.Tech Mechanical",
    "semester": 7,
    "email": "karan.sharma7@example.com",
    "phone": "9158511106"
  },
  {
    "name": "Ananya Mehta",
    "rollNo": "EE23008",
    "course": "B.Tech Mechanical",
    "semester": 6,
    "email": "ananya.mehta8@example.com",
    "phone": "9344092381"
  },
  {
    "name": "Nikhil Bansal",
    "rollNo": "CSE23009",
    "course": "B.Tech IT",
    "semester": 3,
    "email": "nikhil.bansal9@example.com",
    "phone": "9031713706"
  },
  {
    "name": "Meera Kumar",
    "rollNo": "EE23010",
    "course": "B.Tech Electrical",
    "semester": 4,
    "email": "meera.kumar10@example.com",
    "phone": "9925900188"
  },
  {
    "name": "Diya Yadav",
    "rollNo": "EE23011",
    "course": "B.Tech AI & ML",
    "semester": 2,
    "email": "diya.yadav11@example.com",
    "phone": "9655736547"
  },
  {
    "name": "Riya Agarwal",
    "rollNo": "CE23012",
    "course": "B.Tech AI & ML",
    "semester": 7,
    "email": "riya.agarwal12@example.com",
    "phone": "9933954333"
  },
  {
    "name": "Harsh Mehta",
    "rollNo": "CSE23013",
    "course": "B.Tech IT",
    "semester": 3,
    "email": "harsh.mehta13@example.com",
    "phone": "9213914168"
  },
  {
    "name": "Riya Sharma",
    "rollNo": "ECE23014",
    "course": "B.Tech Civil",
    "semester": 8,
    "email": "riya.sharma14@example.com",
    "phone": "9125257276"
  },
  {
    "name": "Arjun Verma",
    "rollNo": "EE23015",
    "course": "B.Tech Civil",
    "semester": 6,
    "email": "arjun.verma15@example.com",
    "phone": "9985885166"
  },
  {
    "name": "Diya Yadav",
    "rollNo": "IT23016",
    "course": "B.Tech Mechanical",
    "semester": 7,
    "email": "diya.yadav16@example.com",
    "phone": "9091437149"
  },
  {
    "name": "Neha Kumar",
    "rollNo": "CE23017",
    "course": "B.Tech Mechanical",
    "semester": 8,
    "email": "neha.kumar17@example.com",
    "phone": "9575808234"
  },
  {
    "name": "Arjun Kapoor",
    "rollNo": "CSE23018",
    "course": "B.Tech ECE",
    "semester": 2,
    "email": "arjun.kapoor18@example.com",
    "phone": "9049623372"
  },
  {
    "name": "Aarav Saxena",
    "rollNo": "EE23019",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "aarav.saxena19@example.com",
    "phone": "9861484183"
  },
  {
    "name": "Pooja Yadav",
    "rollNo": "EE23020",
    "course": "B.Tech ECE",
    "semester": 4,
    "email": "pooja.yadav20@example.com",
    "phone": "9397060594"
  },
  {
    "name": "Riya Sharma",
    "rollNo": "CSE23021",
    "course": "B.Tech Electrical",
    "semester": 4,
    "email": "riya.sharma21@example.com",
    "phone": "9747707890"
  },
  {
    "name": "Nikhil Mehta",
    "rollNo": "IT23022",
    "course": "B.Tech ECE",
    "semester": 8,
    "email": "nikhil.mehta22@example.com",
    "phone": "9396632117"
  },
  {
    "name": "Neha Sharma",
    "rollNo": "ME23023",
    "course": "B.Tech Electrical",
    "semester": 5,
    "email": "neha.sharma23@example.com",
    "phone": "9187474845"
  },
  {
    "name": "Rahul Mishra",
    "rollNo": "CE23024",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "rahul.mishra24@example.com",
    "phone": "9337992068"
  },
  {
    "name": "Priya Gupta",
    "rollNo": "ME23025",
    "course": "B.Tech IT",
    "semester": 2,
    "email": "priya.gupta25@example.com",
    "phone": "9666916952"
  },
  {
    "name": "Aarav Sharma",
    "rollNo": "IT23026",
    "course": "B.Tech Civil",
    "semester": 3,
    "email": "aarav.sharma26@example.com",
    "phone": "9839576070"
  },
  {
    "name": "Pooja Singh",
    "rollNo": "CSE23027",
    "course": "B.Tech IT",
    "semester": 7,
    "email": "pooja.singh27@example.com",
    "phone": "9037848131"
  },
  {
    "name": "Nikhil Kapoor",
    "rollNo": "CE23028",
    "course": "B.Tech Electrical",
    "semester": 8,
    "email": "nikhil.kapoor28@example.com",
    "phone": "9327913805"
  },
  {
    "name": "Neha Mishra",
    "rollNo": "AIML23029",
    "course": "B.Tech Mechanical",
    "semester": 6,
    "email": "neha.mishra29@example.com",
    "phone": "9235506965"
  },
  {
    "name": "Kavya Mehta",
    "rollNo": "EE23030",
    "course": "B.Tech Electrical",
    "semester": 8,
    "email": "kavya.mehta30@example.com",
    "phone": "9073453627"
  },
  {
    "name": "Nikhil Mehta",
    "rollNo": "AIML23031",
    "course": "B.Tech AI & ML",
    "semester": 6,
    "email": "nikhil.mehta31@example.com",
    "phone": "9903462484"
  },
  {
    "name": "Ananya Kapoor",
    "rollNo": "CSE23032",
    "course": "B.Tech Mechanical",
    "semester": 8,
    "email": "ananya.kapoor32@example.com",
    "phone": "9201884380"
  },
  {
    "name": "Ananya Malhotra",
    "rollNo": "CSE23033",
    "course": "B.Tech Mechanical",
    "semester": 1,
    "email": "ananya.malhotra33@example.com",
    "phone": "9057055778"
  },
  {
    "name": "Kavya Mehta",
    "rollNo": "ME23034",
    "course": "B.Tech IT",
    "semester": 6,
    "email": "kavya.mehta34@example.com",
    "phone": "9789763508"
  },
  {
    "name": "Ishita Patel",
    "rollNo": "AIML23035",
    "course": "B.Tech Civil",
    "semester": 5,
    "email": "ishita.patel35@example.com",
    "phone": "9751972718"
  },
  {
    "name": "Vivaan Sharma",
    "rollNo": "CSE23036",
    "course": "B.Tech Civil",
    "semester": 8,
    "email": "vivaan.sharma36@example.com",
    "phone": "9486307990"
  },
  {
    "name": "Pooja Saxena",
    "rollNo": "IT23037",
    "course": "B.Tech Electrical",
    "semester": 8,
    "email": "pooja.saxena37@example.com",
    "phone": "9399649754"
  },
  {
    "name": "Ananya Kapoor",
    "rollNo": "ME23038",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "ananya.kapoor38@example.com",
    "phone": "9123439038"
  },
  {
    "name": "Rohan Joshi",
    "rollNo": "AIML23039",
    "course": "B.Tech Electrical",
    "semester": 6,
    "email": "rohan.joshi39@example.com",
    "phone": "9389305520"
  },
  {
    "name": "Meera Verma",
    "rollNo": "CSE23040",
    "course": "B.Tech ECE",
    "semester": 8,
    "email": "meera.verma40@example.com",
    "phone": "9002817076"
  },
  {
    "name": "Arjun Mishra",
    "rollNo": "AIML23041",
    "course": "B.Tech CSE",
    "semester": 7,
    "email": "arjun.mishra41@example.com",
    "phone": "9399228796"
  },
  {
    "name": "Meera Saxena",
    "rollNo": "EE23042",
    "course": "B.Tech CSE",
    "semester": 6,
    "email": "meera.saxena42@example.com",
    "phone": "9167124202"
  },
  {
    "name": "Rahul Bansal",
    "rollNo": "ME23043",
    "course": "B.Tech Mechanical",
    "semester": 8,
    "email": "rahul.bansal43@example.com",
    "phone": "9580139721"
  },
  {
    "name": "Nikhil Bansal",
    "rollNo": "IT23044",
    "course": "B.Tech Electrical",
    "semester": 2,
    "email": "nikhil.bansal44@example.com",
    "phone": "9026627302"
  },
  {
    "name": "Arjun Verma",
    "rollNo": "EE23045",
    "course": "B.Tech AI & ML",
    "semester": 2,
    "email": "arjun.verma45@example.com",
    "phone": "9421764754"
  },
  {
    "name": "Ananya Agarwal",
    "rollNo": "AIML23046",
    "course": "B.Tech IT",
    "semester": 4,
    "email": "ananya.agarwal46@example.com",
    "phone": "9894093182"
  },
  {
    "name": "Pooja Malhotra",
    "rollNo": "AIML23047",
    "course": "B.Tech Mechanical",
    "semester": 4,
    "email": "pooja.malhotra47@example.com",
    "phone": "9123711770"
  },
  {
    "name": "Nikhil Saxena",
    "rollNo": "CE23048",
    "course": "B.Tech ECE",
    "semester": 7,
    "email": "nikhil.saxena48@example.com",
    "phone": "9641986536"
  },
  {
    "name": "Aarav Saxena",
    "rollNo": "CE23049",
    "course": "B.Tech Electrical",
    "semester": 5,
    "email": "aarav.saxena49@example.com",
    "phone": "9481155303"
  },
  {
    "name": "Rahul Singh",
    "rollNo": "EE23050",
    "course": "B.Tech Civil",
    "semester": 3,
    "email": "rahul.singh50@example.com",
    "phone": "9631722897"
  },
  {
    "name": "Diya Bansal",
    "rollNo": "CE23051",
    "course": "B.Tech Mechanical",
    "semester": 5,
    "email": "diya.bansal51@example.com",
    "phone": "9731101746"
  },
  {
    "name": "Pooja Patel",
    "rollNo": "CE23052",
    "course": "B.Tech CSE",
    "semester": 3,
    "email": "pooja.patel52@example.com",
    "phone": "9496202088"
  },
  {
    "name": "Ishita Agarwal",
    "rollNo": "ECE23053",
    "course": "B.Tech CSE",
    "semester": 1,
    "email": "ishita.agarwal53@example.com",
    "phone": "9646971950"
  },
  {
    "name": "Pooja Joshi",
    "rollNo": "ME23054",
    "course": "B.Tech CSE",
    "semester": 8,
    "email": "pooja.joshi54@example.com",
    "phone": "9278035626"
  },
  {
    "name": "Vivaan Gupta",
    "rollNo": "ME23055",
    "course": "B.Tech Mechanical",
    "semester": 5,
    "email": "vivaan.gupta55@example.com",
    "phone": "9116972320"
  },
  {
    "name": "Meera Saxena",
    "rollNo": "CSE23056",
    "course": "B.Tech Mechanical",
    "semester": 4,
    "email": "meera.saxena56@example.com",
    "phone": "9808791123"
  },
  {
    "name": "Diya Agarwal",
    "rollNo": "ECE23057",
    "course": "B.Tech AI & ML",
    "semester": 1,
    "email": "diya.agarwal57@example.com",
    "phone": "9838105287"
  },
  {
    "name": "Rohan Kapoor",
    "rollNo": "EE23058",
    "course": "B.Tech Mechanical",
    "semester": 6,
    "email": "rohan.kapoor58@example.com",
    "phone": "9403707947"
  },
  {
    "name": "Sneha Saxena",
    "rollNo": "IT23059",
    "course": "B.Tech ECE",
    "semester": 3,
    "email": "sneha.saxena59@example.com",
    "phone": "9370841185"
  },
  {
    "name": "Rohan Sharma",
    "rollNo": "AIML23060",
    "course": "B.Tech ECE",
    "semester": 4,
    "email": "rohan.sharma60@example.com",
    "phone": "9972270678"
  },
  {
    "name": "Rahul Bansal",
    "rollNo": "IT23061",
    "course": "B.Tech Civil",
    "semester": 2,
    "email": "rahul.bansal61@example.com",
    "phone": "9194850164"
  },
  {
    "name": "Sneha Singh",
    "rollNo": "IT23062",
    "course": "B.Tech Mechanical",
    "semester": 6,
    "email": "sneha.singh62@example.com",
    "phone": "9627691045"
  },
  {
    "name": "Riya Saxena",
    "rollNo": "ECE23063",
    "course": "B.Tech Mechanical",
    "semester": 1,
    "email": "riya.saxena63@example.com",
    "phone": "9583198978"
  },
  {
    "name": "Rahul Yadav",
    "rollNo": "AIML23064",
    "course": "B.Tech Mechanical",
    "semester": 8,
    "email": "rahul.yadav64@example.com",
    "phone": "9901592247"
  },
  {
    "name": "Sneha Sharma",
    "rollNo": "EE23065",
    "course": "B.Tech Electrical",
    "semester": 8,
    "email": "sneha.sharma65@example.com",
    "phone": "9427341258"
  },
  {
    "name": "Meera Agarwal",
    "rollNo": "EE23066",
    "course": "B.Tech Mechanical",
    "semester": 4,
    "email": "meera.agarwal66@example.com",
    "phone": "9157073651"
  },
  {
    "name": "Pooja Agarwal",
    "rollNo": "IT23067",
    "course": "B.Tech Electrical",
    "semester": 7,
    "email": "pooja.agarwal67@example.com",
    "phone": "9984896158"
  },
  {
    "name": "Riya Kumar",
    "rollNo": "IT23068",
    "course": "B.Tech CSE",
    "semester": 7,
    "email": "riya.kumar68@example.com",
    "phone": "9012013356"
  },
  {
    "name": "Karan Verma",
    "rollNo": "CSE23069",
    "course": "B.Tech AI & ML",
    "semester": 5,
    "email": "karan.verma69@example.com",
    "phone": "9204890132"
  },
  {
    "name": "Rohan Bansal",
    "rollNo": "IT23070",
    "course": "B.Tech IT",
    "semester": 8,
    "email": "rohan.bansal70@example.com",
    "phone": "9524778103"
  },
  {
    "name": "Aditya Gupta",
    "rollNo": "CSE23071",
    "course": "B.Tech Electrical",
    "semester": 3,
    "email": "aditya.gupta71@example.com",
    "phone": "9021063831"
  },
  {
    "name": "Pooja Malhotra",
    "rollNo": "EE23072",
    "course": "B.Tech Mechanical",
    "semester": 7,
    "email": "pooja.malhotra72@example.com",
    "phone": "9441219516"
  },
  {
    "name": "Diya Malhotra",
    "rollNo": "ME23073",
    "course": "B.Tech Civil",
    "semester": 2,
    "email": "diya.malhotra73@example.com",
    "phone": "9583800296"
  },
  {
    "name": "Ishita Singh",
    "rollNo": "CE23074",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "ishita.singh74@example.com",
    "phone": "9606022841"
  },
  {
    "name": "Vivaan Joshi",
    "rollNo": "EE23075",
    "course": "B.Tech AI & ML",
    "semester": 5,
    "email": "vivaan.joshi75@example.com",
    "phone": "9357068331"
  },
  {
    "name": "Nikhil Kapoor",
    "rollNo": "CE23076",
    "course": "B.Tech Electrical",
    "semester": 1,
    "email": "nikhil.kapoor76@example.com",
    "phone": "9034123171"
  },
  {
    "name": "Ananya Yadav",
    "rollNo": "ECE23077",
    "course": "B.Tech CSE",
    "semester": 8,
    "email": "ananya.yadav77@example.com",
    "phone": "9318600204"
  },
  {
    "name": "Priya Malhotra",
    "rollNo": "EE23078",
    "course": "B.Tech Electrical",
    "semester": 2,
    "email": "priya.malhotra78@example.com",
    "phone": "9626936471"
  },
  {
    "name": "Sneha Kapoor",
    "rollNo": "EE23079",
    "course": "B.Tech Electrical",
    "semester": 8,
    "email": "sneha.kapoor79@example.com",
    "phone": "9546709235"
  },
  {
    "name": "Priya Sharma",
    "rollNo": "IT23080",
    "course": "B.Tech AI & ML",
    "semester": 2,
    "email": "priya.sharma80@example.com",
    "phone": "9816325557"
  },
  {
    "name": "Nikhil Saxena",
    "rollNo": "ECE23081",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "nikhil.saxena81@example.com",
    "phone": "9154539743"
  },
  {
    "name": "Kavya Mishra",
    "rollNo": "EE23082",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "kavya.mishra82@example.com",
    "phone": "9334610911"
  },
  {
    "name": "Sneha Patel",
    "rollNo": "IT23083",
    "course": "B.Tech AI & ML",
    "semester": 4,
    "email": "sneha.patel83@example.com",
    "phone": "9692029580"
  },
  {
    "name": "Riya Joshi",
    "rollNo": "IT23084",
    "course": "B.Tech Civil",
    "semester": 6,
    "email": "riya.joshi84@example.com",
    "phone": "9669669023"
  },
  {
    "name": "Neha Malhotra",
    "rollNo": "CE23085",
    "course": "B.Tech IT",
    "semester": 2,
    "email": "neha.malhotra85@example.com",
    "phone": "9768802451"
  },
  {
    "name": "Rohan Malhotra",
    "rollNo": "CE23086",
    "course": "B.Tech CSE",
    "semester": 7,
    "email": "rohan.malhotra86@example.com",
    "phone": "9957346509"
  },
  {
    "name": "Karan Kumar",
    "rollNo": "EE23087",
    "course": "B.Tech IT",
    "semester": 2,
    "email": "karan.kumar87@example.com",
    "phone": "9771301875"
  },
  {
    "name": "Meera Patel",
    "rollNo": "ME23088",
    "course": "B.Tech Electrical",
    "semester": 7,
    "email": "meera.patel88@example.com",
    "phone": "9733058443"
  },
  {
    "name": "Ananya Saxena",
    "rollNo": "CE23089",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "ananya.saxena89@example.com",
    "phone": "9037721892"
  },
  {
    "name": "Neha Sharma",
    "rollNo": "IT23090",
    "course": "B.Tech Electrical",
    "semester": 2,
    "email": "neha.sharma90@example.com",
    "phone": "9770047334"
  },
  {
    "name": "Rohan Malhotra",
    "rollNo": "EE23091",
    "course": "B.Tech Mechanical",
    "semester": 7,
    "email": "rohan.malhotra91@example.com",
    "phone": "9662020192"
  },
  {
    "name": "Aditya Patel",
    "rollNo": "AIML23092",
    "course": "B.Tech CSE",
    "semester": 7,
    "email": "aditya.patel92@example.com",
    "phone": "9931879308"
  },
  {
    "name": "Aditya Gupta",
    "rollNo": "EE23093",
    "course": "B.Tech IT",
    "semester": 6,
    "email": "aditya.gupta93@example.com",
    "phone": "9399818456"
  },
  {
    "name": "Aarav Malhotra",
    "rollNo": "EE23094",
    "course": "B.Tech ECE",
    "semester": 5,
    "email": "aarav.malhotra94@example.com",
    "phone": "9678256229"
  },
  {
    "name": "Ananya Joshi",
    "rollNo": "CE23095",
    "course": "B.Tech ECE",
    "semester": 1,
    "email": "ananya.joshi95@example.com",
    "phone": "9650653578"
  },
  {
    "name": "Rahul Yadav",
    "rollNo": "AIML23096",
    "course": "B.Tech IT",
    "semester": 7,
    "email": "rahul.yadav96@example.com",
    "phone": "9841883924"
  },
  {
    "name": "Ishita Kumar",
    "rollNo": "ECE23097",
    "course": "B.Tech IT",
    "semester": 6,
    "email": "ishita.kumar97@example.com",
    "phone": "9299234144"
  },
  {
    "name": "Neha Saxena",
    "rollNo": "AIML23098",
    "course": "B.Tech IT",
    "semester": 5,
    "email": "neha.saxena98@example.com",
    "phone": "9739171898"
  },
  {
    "name": "Rahul Singh",
    "rollNo": "EE23099",
    "course": "B.Tech Electrical",
    "semester": 7,
    "email": "rahul.singh99@example.com",
    "phone": "9922269125"
  },
  {
    "name": "Vivaan Kumar",
    "rollNo": "ME23100",
    "course": "B.Tech Civil",
    "semester": 2,
    "email": "vivaan.kumar100@example.com",
    "phone": "9702309102"
  },
  {
    "name": "Aarav Gupta",
    "rollNo": "ME23101",
    "course": "B.Tech Civil",
    "semester": 5,
    "email": "aarav.gupta101@example.com",
    "phone": "9246064088"
  },
  {
    "name": "Neha Yadav",
    "rollNo": "CSE23102",
    "course": "B.Tech ECE",
    "semester": 7,
    "email": "neha.yadav102@example.com",
    "phone": "9197967566"
  },
  {
    "name": "Sneha Kumar",
    "rollNo": "AIML23103",
    "course": "B.Tech IT",
    "semester": 6,
    "email": "sneha.kumar103@example.com",
    "phone": "9457106104"
  },
  {
    "name": "Aditi Kumar",
    "rollNo": "CE23104",
    "course": "B.Tech ECE",
    "semester": 1,
    "email": "aditi.kumar104@example.com",
    "phone": "9946406449"
  },
  {
    "name": "Nikhil Saxena",
    "rollNo": "ECE23105",
    "course": "B.Tech Electrical",
    "semester": 3,
    "email": "nikhil.saxena105@example.com",
    "phone": "9315730286"
  },
  {
    "name": "Diya Mehta",
    "rollNo": "IT23106",
    "course": "B.Tech CSE",
    "semester": 3,
    "email": "diya.mehta106@example.com",
    "phone": "9895665386"
  },
  {
    "name": "Harsh Gupta",
    "rollNo": "EE23107",
    "course": "B.Tech ECE",
    "semester": 7,
    "email": "harsh.gupta107@example.com",
    "phone": "9395647770"
  },
  {
    "name": "Vivaan Sharma",
    "rollNo": "ECE23108",
    "course": "B.Tech CSE",
    "semester": 3,
    "email": "vivaan.sharma108@example.com",
    "phone": "9993623730"
  },
  {
    "name": "Arjun Sharma",
    "rollNo": "CSE23109",
    "course": "B.Tech Civil",
    "semester": 2,
    "email": "arjun.sharma109@example.com",
    "phone": "9131565177"
  },
  {
    "name": "Aditya Joshi",
    "rollNo": "CSE23110",
    "course": "B.Tech IT",
    "semester": 5,
    "email": "aditya.joshi110@example.com",
    "phone": "9561055629"
  },
  {
    "name": "Rahul Yadav",
    "rollNo": "EE23111",
    "course": "B.Tech AI & ML",
    "semester": 5,
    "email": "rahul.yadav111@example.com",
    "phone": "9463195587"
  },
  {
    "name": "Ishita Kapoor",
    "rollNo": "EE23112",
    "course": "B.Tech Civil",
    "semester": 7,
    "email": "ishita.kapoor112@example.com",
    "phone": "9208521668"
  },
  {
    "name": "Harsh Kumar",
    "rollNo": "EE23113",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "harsh.kumar113@example.com",
    "phone": "9631932054"
  },
  {
    "name": "Meera Patel",
    "rollNo": "CSE23114",
    "course": "B.Tech Electrical",
    "semester": 1,
    "email": "meera.patel114@example.com",
    "phone": "9002739552"
  },
  {
    "name": "Diya Bansal",
    "rollNo": "EE23115",
    "course": "B.Tech AI & ML",
    "semester": 8,
    "email": "diya.bansal115@example.com",
    "phone": "9348925200"
  },
  {
    "name": "Nikhil Patel",
    "rollNo": "IT23116",
    "course": "B.Tech Civil",
    "semester": 6,
    "email": "nikhil.patel116@example.com",
    "phone": "9726118469"
  },
  {
    "name": "Pooja Gupta",
    "rollNo": "EE23117",
    "course": "B.Tech ECE",
    "semester": 6,
    "email": "pooja.gupta117@example.com",
    "phone": "9111148784"
  },
  {
    "name": "Neha Singh",
    "rollNo": "EE23118",
    "course": "B.Tech ECE",
    "semester": 4,
    "email": "neha.singh118@example.com",
    "phone": "9671352683"
  },
  {
    "name": "Arjun Agarwal",
    "rollNo": "CSE23119",
    "course": "B.Tech Electrical",
    "semester": 7,
    "email": "arjun.agarwal119@example.com",
    "phone": "9920228999"
  },
  {
    "name": "Arjun Singh",
    "rollNo": "ME23120",
    "course": "B.Tech Mechanical",
    "semester": 3,
    "email": "arjun.singh120@example.com",
    "phone": "9956702478"
  },
  {
    "name": "Pooja Joshi",
    "rollNo": "CSE23121",
    "course": "B.Tech Electrical",
    "semester": 2,
    "email": "pooja.joshi121@example.com",
    "phone": "9798423774"
  },
  {
    "name": "Sneha Joshi",
    "rollNo": "CSE23122",
    "course": "B.Tech CSE",
    "semester": 6,
    "email": "sneha.joshi122@example.com",
    "phone": "9585754720"
  },
  {
    "name": "Rohan Patel",
    "rollNo": "ME23123",
    "course": "B.Tech ECE",
    "semester": 1,
    "email": "rohan.patel123@example.com",
    "phone": "9786993868"
  },
  {
    "name": "Rahul Gupta",
    "rollNo": "CE23124",
    "course": "B.Tech Electrical",
    "semester": 2,
    "email": "rahul.gupta124@example.com",
    "phone": "9016504670"
  },
  {
    "name": "Priya Mehta",
    "rollNo": "AIML23125",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "priya.mehta125@example.com",
    "phone": "9347706861"
  },
  {
    "name": "Ananya Mishra",
    "rollNo": "CE23126",
    "course": "B.Tech Civil",
    "semester": 4,
    "email": "ananya.mishra126@example.com",
    "phone": "9405987903"
  },
  {
    "name": "Karan Gupta",
    "rollNo": "CSE23127",
    "course": "B.Tech AI & ML",
    "semester": 3,
    "email": "karan.gupta127@example.com",
    "phone": "9525999088"
  },
  {
    "name": "Harsh Verma",
    "rollNo": "EE23128",
    "course": "B.Tech Electrical",
    "semester": 5,
    "email": "harsh.verma128@example.com",
    "phone": "9984890328"
  },
  {
    "name": "Rohan Bansal",
    "rollNo": "IT23129",
    "course": "B.Tech ECE",
    "semester": 8,
    "email": "rohan.bansal129@example.com",
    "phone": "9787308283"
  },
  {
    "name": "Rahul Kumar",
    "rollNo": "CSE23130",
    "course": "B.Tech Mechanical",
    "semester": 1,
    "email": "rahul.kumar130@example.com",
    "phone": "9174051568"
  },
  {
    "name": "Meera Kapoor",
    "rollNo": "ME23131",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "meera.kapoor131@example.com",
    "phone": "9326720529"
  },
  {
    "name": "Rahul Agarwal",
    "rollNo": "IT23132",
    "course": "B.Tech ECE",
    "semester": 2,
    "email": "rahul.agarwal132@example.com",
    "phone": "9446846733"
  },
  {
    "name": "Diya Verma",
    "rollNo": "ECE23133",
    "course": "B.Tech ECE",
    "semester": 4,
    "email": "diya.verma133@example.com",
    "phone": "9864527457"
  },
  {
    "name": "Aditya Joshi",
    "rollNo": "CE23134",
    "course": "B.Tech ECE",
    "semester": 4,
    "email": "aditya.joshi134@example.com",
    "phone": "9290495655"
  },
  {
    "name": "Aditya Agarwal",
    "rollNo": "ME23135",
    "course": "B.Tech Civil",
    "semester": 7,
    "email": "aditya.agarwal135@example.com",
    "phone": "9825893950"
  },
  {
    "name": "Aditi Kumar",
    "rollNo": "ECE23136",
    "course": "B.Tech ECE",
    "semester": 3,
    "email": "aditi.kumar136@example.com",
    "phone": "9990570359"
  },
  {
    "name": "Aarav Singh",
    "rollNo": "EE23137",
    "course": "B.Tech ECE",
    "semester": 1,
    "email": "aarav.singh137@example.com",
    "phone": "9314341725"
  },
  {
    "name": "Nikhil Saxena",
    "rollNo": "CSE23138",
    "course": "B.Tech ECE",
    "semester": 7,
    "email": "nikhil.saxena138@example.com",
    "phone": "9969255115"
  },
  {
    "name": "Riya Yadav",
    "rollNo": "AIML23139",
    "course": "B.Tech Electrical",
    "semester": 3,
    "email": "riya.yadav139@example.com",
    "phone": "9514180389"
  },
  {
    "name": "Aditi Yadav",
    "rollNo": "ME23140",
    "course": "B.Tech CSE",
    "semester": 2,
    "email": "aditi.yadav140@example.com",
    "phone": "9622027469"
  },
  {
    "name": "Harsh Saxena",
    "rollNo": "AIML23141",
    "course": "B.Tech Mechanical",
    "semester": 7,
    "email": "harsh.saxena141@example.com",
    "phone": "9995212500"
  },
  {
    "name": "Aarav Mishra",
    "rollNo": "IT23142",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "aarav.mishra142@example.com",
    "phone": "9662802872"
  },
  {
    "name": "Vivaan Gupta",
    "rollNo": "CE23143",
    "course": "B.Tech AI & ML",
    "semester": 8,
    "email": "vivaan.gupta143@example.com",
    "phone": "9625122691"
  },
  {
    "name": "Aditya Sharma",
    "rollNo": "CSE23144",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "aditya.sharma144@example.com",
    "phone": "9358019485"
  },
  {
    "name": "Riya Yadav",
    "rollNo": "AIML23145",
    "course": "B.Tech AI & ML",
    "semester": 5,
    "email": "riya.yadav145@example.com",
    "phone": "9057539462"
  },
  {
    "name": "Vivaan Joshi",
    "rollNo": "CSE23146",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "vivaan.joshi146@example.com",
    "phone": "9263854417"
  },
  {
    "name": "Harsh Joshi",
    "rollNo": "CSE23147",
    "course": "B.Tech Electrical",
    "semester": 7,
    "email": "harsh.joshi147@example.com",
    "phone": "9298422588"
  },
  {
    "name": "Rohan Sharma",
    "rollNo": "CSE23148",
    "course": "B.Tech Civil",
    "semester": 3,
    "email": "rohan.sharma148@example.com",
    "phone": "9923262919"
  },
  {
    "name": "Diya Bansal",
    "rollNo": "AIML23149",
    "course": "B.Tech Mechanical",
    "semester": 3,
    "email": "diya.bansal149@example.com",
    "phone": "9671861711"
  },
  {
    "name": "Rohan Singh",
    "rollNo": "IT23150",
    "course": "B.Tech Electrical",
    "semester": 5,
    "email": "rohan.singh150@example.com",
    "phone": "9077541068"
  },
  {
    "name": "Diya Verma",
    "rollNo": "IT23151",
    "course": "B.Tech IT",
    "semester": 7,
    "email": "diya.verma151@example.com",
    "phone": "9270021150"
  },
  {
    "name": "Nikhil Mishra",
    "rollNo": "ME23152",
    "course": "B.Tech Mechanical",
    "semester": 6,
    "email": "nikhil.mishra152@example.com",
    "phone": "9819002364"
  },
  {
    "name": "Diya Agarwal",
    "rollNo": "ECE23153",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "diya.agarwal153@example.com",
    "phone": "9634489354"
  },
  {
    "name": "Aditi Kumar",
    "rollNo": "CE23154",
    "course": "B.Tech IT",
    "semester": 5,
    "email": "aditi.kumar154@example.com",
    "phone": "9352600091"
  },
  {
    "name": "Riya Mehta",
    "rollNo": "ME23155",
    "course": "B.Tech Civil",
    "semester": 5,
    "email": "riya.mehta155@example.com",
    "phone": "9577373092"
  },
  {
    "name": "Meera Agarwal",
    "rollNo": "ECE23156",
    "course": "B.Tech CSE",
    "semester": 7,
    "email": "meera.agarwal156@example.com",
    "phone": "9282434166"
  },
  {
    "name": "Rahul Mehta",
    "rollNo": "EE23157",
    "course": "B.Tech CSE",
    "semester": 7,
    "email": "rahul.mehta157@example.com",
    "phone": "9127364604"
  },
  {
    "name": "Sneha Patel",
    "rollNo": "EE23158",
    "course": "B.Tech CSE",
    "semester": 6,
    "email": "sneha.patel158@example.com",
    "phone": "9937315100"
  },
  {
    "name": "Vivaan Bansal",
    "rollNo": "CE23159",
    "course": "B.Tech ECE",
    "semester": 4,
    "email": "vivaan.bansal159@example.com",
    "phone": "9843318516"
  },
  {
    "name": "Diya Bansal",
    "rollNo": "ME23160",
    "course": "B.Tech Mechanical",
    "semester": 3,
    "email": "diya.bansal160@example.com",
    "phone": "9834112253"
  },
  {
    "name": "Arjun Malhotra",
    "rollNo": "ECE23161",
    "course": "B.Tech ECE",
    "semester": 7,
    "email": "arjun.malhotra161@example.com",
    "phone": "9407836880"
  },
  {
    "name": "Sneha Patel",
    "rollNo": "CE23162",
    "course": "B.Tech Civil",
    "semester": 1,
    "email": "sneha.patel162@example.com",
    "phone": "9650333404"
  },
  {
    "name": "Diya Bansal",
    "rollNo": "AIML23163",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "diya.bansal163@example.com",
    "phone": "9406544487"
  },
  {
    "name": "Sneha Singh",
    "rollNo": "CE23164",
    "course": "B.Tech IT",
    "semester": 8,
    "email": "sneha.singh164@example.com",
    "phone": "9815101855"
  },
  {
    "name": "Meera Saxena",
    "rollNo": "CSE23165",
    "course": "B.Tech Civil",
    "semester": 4,
    "email": "meera.saxena165@example.com",
    "phone": "9119309608"
  },
  {
    "name": "Pooja Singh",
    "rollNo": "EE23166",
    "course": "B.Tech IT",
    "semester": 1,
    "email": "pooja.singh166@example.com",
    "phone": "9159734529"
  },
  {
    "name": "Riya Verma",
    "rollNo": "EE23167",
    "course": "B.Tech CSE",
    "semester": 4,
    "email": "riya.verma167@example.com",
    "phone": "9247063311"
  },
  {
    "name": "Diya Mehta",
    "rollNo": "EE23168",
    "course": "B.Tech AI & ML",
    "semester": 5,
    "email": "diya.mehta168@example.com",
    "phone": "9384935086"
  },
  {
    "name": "Harsh Agarwal",
    "rollNo": "ECE23169",
    "course": "B.Tech IT",
    "semester": 4,
    "email": "harsh.agarwal169@example.com",
    "phone": "9265942947"
  },
  {
    "name": "Diya Yadav",
    "rollNo": "EE23170",
    "course": "B.Tech AI & ML",
    "semester": 7,
    "email": "diya.yadav170@example.com",
    "phone": "9788760481"
  },
  {
    "name": "Riya Verma",
    "rollNo": "CSE23171",
    "course": "B.Tech Electrical",
    "semester": 7,
    "email": "riya.verma171@example.com",
    "phone": "9629067211"
  },
  {
    "name": "Rohan Kumar",
    "rollNo": "EE23172",
    "course": "B.Tech Electrical",
    "semester": 6,
    "email": "rohan.kumar172@example.com",
    "phone": "9264636916"
  },
  {
    "name": "Aditya Bansal",
    "rollNo": "CSE23173",
    "course": "B.Tech Mechanical",
    "semester": 5,
    "email": "aditya.bansal173@example.com",
    "phone": "9795222301"
  },
  {
    "name": "Harsh Mehta",
    "rollNo": "EE23174",
    "course": "B.Tech IT",
    "semester": 2,
    "email": "harsh.mehta174@example.com",
    "phone": "9636551445"
  },
  {
    "name": "Meera Joshi",
    "rollNo": "ME23175",
    "course": "B.Tech CSE",
    "semester": 6,
    "email": "meera.joshi175@example.com",
    "phone": "9370634536"
  },
  {
    "name": "Diya Patel",
    "rollNo": "EE23176",
    "course": "B.Tech Civil",
    "semester": 2,
    "email": "diya.patel176@example.com",
    "phone": "9648233349"
  },
  {
    "name": "Rahul Malhotra",
    "rollNo": "EE23177",
    "course": "B.Tech Mechanical",
    "semester": 5,
    "email": "rahul.malhotra177@example.com",
    "phone": "9297651329"
  },
  {
    "name": "Arjun Saxena",
    "rollNo": "EE23178",
    "course": "B.Tech ECE",
    "semester": 2,
    "email": "arjun.saxena178@example.com",
    "phone": "9217884764"
  },
  {
    "name": "Rahul Yadav",
    "rollNo": "CE23179",
    "course": "B.Tech AI & ML",
    "semester": 4,
    "email": "rahul.yadav179@example.com",
    "phone": "9860214368"
  },
  {
    "name": "Vivaan Kapoor",
    "rollNo": "ME23180",
    "course": "B.Tech AI & ML",
    "semester": 7,
    "email": "vivaan.kapoor180@example.com",
    "phone": "9503087392"
  },
  {
    "name": "Sneha Mishra",
    "rollNo": "IT23181",
    "course": "B.Tech ECE",
    "semester": 7,
    "email": "sneha.mishra181@example.com",
    "phone": "9146999935"
  },
  {
    "name": "Nikhil Patel",
    "rollNo": "EE23182",
    "course": "B.Tech Civil",
    "semester": 1,
    "email": "nikhil.patel182@example.com",
    "phone": "9189227269"
  },
  {
    "name": "Diya Sharma",
    "rollNo": "IT23183",
    "course": "B.Tech Civil",
    "semester": 8,
    "email": "diya.sharma183@example.com",
    "phone": "9655024046"
  },
  {
    "name": "Ishita Yadav",
    "rollNo": "AIML23184",
    "course": "B.Tech Civil",
    "semester": 4,
    "email": "ishita.yadav184@example.com",
    "phone": "9657897607"
  },
  {
    "name": "Karan Kumar",
    "rollNo": "CSE23185",
    "course": "B.Tech Civil",
    "semester": 4,
    "email": "karan.kumar185@example.com",
    "phone": "9104754524"
  },
  {
    "name": "Meera Bansal",
    "rollNo": "EE23186",
    "course": "B.Tech IT",
    "semester": 4,
    "email": "meera.bansal186@example.com",
    "phone": "9466645220"
  },
  {
    "name": "Meera Sharma",
    "rollNo": "CSE23187",
    "course": "B.Tech Mechanical",
    "semester": 6,
    "email": "meera.sharma187@example.com",
    "phone": "9120148339"
  },
  {
    "name": "Sneha Gupta",
    "rollNo": "ECE23188",
    "course": "B.Tech Mechanical",
    "semester": 8,
    "email": "sneha.gupta188@example.com",
    "phone": "9923132099"
  },
  {
    "name": "Harsh Mishra",
    "rollNo": "ME23189",
    "course": "B.Tech AI & ML",
    "semester": 3,
    "email": "harsh.mishra189@example.com",
    "phone": "9220863786"
  },
  {
    "name": "Harsh Saxena",
    "rollNo": "CSE23190",
    "course": "B.Tech IT",
    "semester": 2,
    "email": "harsh.saxena190@example.com",
    "phone": "9107138769"
  },
  {
    "name": "Priya Kapoor",
    "rollNo": "AIML23191",
    "course": "B.Tech IT",
    "semester": 3,
    "email": "priya.kapoor191@example.com",
    "phone": "9960310676"
  },
  {
    "name": "Harsh Kumar",
    "rollNo": "ME23192",
    "course": "B.Tech Civil",
    "semester": 7,
    "email": "harsh.kumar192@example.com",
    "phone": "9756966708"
  },
  {
    "name": "Arjun Agarwal",
    "rollNo": "IT23193",
    "course": "B.Tech Civil",
    "semester": 5,
    "email": "arjun.agarwal193@example.com",
    "phone": "9541778435"
  },
  {
    "name": "Rohan Joshi",
    "rollNo": "ECE23194",
    "course": "B.Tech Civil",
    "semester": 7,
    "email": "rohan.joshi194@example.com",
    "phone": "9568879947"
  },
  {
    "name": "Aditya Saxena",
    "rollNo": "IT23195",
    "course": "B.Tech ECE",
    "semester": 2,
    "email": "aditya.saxena195@example.com",
    "phone": "9569966847"
  },
  {
    "name": "Rahul Malhotra",
    "rollNo": "CE23196",
    "course": "B.Tech CSE",
    "semester": 8,
    "email": "rahul.malhotra196@example.com",
    "phone": "9607648048"
  },
  {
    "name": "Priya Joshi",
    "rollNo": "AIML23197",
    "course": "B.Tech AI & ML",
    "semester": 3,
    "email": "priya.joshi197@example.com",
    "phone": "9884032838"
  },
  {
    "name": "Aditya Saxena",
    "rollNo": "CE23198",
    "course": "B.Tech CSE",
    "semester": 5,
    "email": "aditya.saxena198@example.com",
    "phone": "9325977126"
  },
  {
    "name": "Meera Mehta",
    "rollNo": "AIML23199",
    "course": "B.Tech IT",
    "semester": 2,
    "email": "meera.mehta199@example.com",
    "phone": "9859884278"
  },
  {
    "name": "Diya Mishra",
    "rollNo": "CE23200",
    "course": "B.Tech ECE",
    "semester": 6,
    "email": "diya.mishra200@example.com",
    "phone": "9182015504"
  }
,
  {
    name: "Ishita Malhotra",
    rollNo: "CSE23010",
    course: "B.Tech CSE",
    semester: 5,
    email: "ishita.malhotra@example.com",
    phone: "9876501010"
  }
     
    ]);

    console.log("222 Students Inserted Successfully!");
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
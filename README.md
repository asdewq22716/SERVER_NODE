project-folder/
│
├── config/                 # เก็บไฟล์การตั้งค่าต่างๆ เช่น การตั้งค่าฐานข้อมูล
│   └── db.js
│
├── controllers/            # เก็บ logic ของการจัดการกับ request ต่างๆ
│   └── authController.js
│
├── middleware/             # เก็บ middleware ที่ใช้ในโปรเจ็กต์
│   └── authMiddleware.js   # เช่น middleware สำหรับการยืนยันตัวตน
│
├── models/                 # เก็บโมเดลสำหรับการเข้าถึงฐานข้อมูล
│   └── userModel.js
│
├── routes/                 # เก็บไฟล์ route ต่างๆ
│   └── auth.js
│
├── utils/                  # เก็บ utility functions หรือ helper functions
│   └── token.js
│
├── .env                    # เก็บตัวแปรสภาพแวดล้อม
├── .gitignore              # ระบุไฟล์ที่ไม่ต้องการให้ติดตามใน git
├── package.json            # เก็บข้อมูลของโปรเจ็กต์และ dependencies
├── server.js               # ไฟล์หลักสำหรับเริ่มต้น server
└── README.md               # ไฟล์อธิบายโปรเจ็กต์
"# SERVER_NODE" 

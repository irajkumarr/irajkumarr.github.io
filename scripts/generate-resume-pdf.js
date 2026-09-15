const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "../public/resume.pdf");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 36, bottom: 36, left: 40, right: 40 },
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const primaryColor = "#111827";
const secondaryColor = "#374151";
const accentColor = "#0284c7";
const mutedColor = "#6b7280";

// Header
doc
  .fontSize(22)
  .font("Helvetica-Bold")
  .fillColor(primaryColor)
  .text("Raj Kumar Timalsina", { align: "center" });

doc.moveDown(0.2);

doc
  .fontSize(9.5)
  .font("Helvetica")
  .fillColor(secondaryColor)
  .text(
    "rajk.timalsina05@gmail.com   |   +977 9765033186   |   Hetauda / Kathmandu, Nepal",
    { align: "center" },
  );

doc
  .fontSize(9)
  .fillColor(accentColor)
  .text(
    "linkedin.com/in/irajkumarr   |   github.com/irajkumarr   |   rajkumartimalsina.me",
    { align: "center" },
  );

doc.moveDown(0.6);

function renderSectionHeader(title) {
  doc
    .fontSize(11)
    .font("Helvetica-Bold")
    .fillColor(primaryColor)
    .text(title.toUpperCase());

  doc
    .strokeColor("#e5e7eb")
    .lineWidth(1)
    .moveTo(40, doc.y + 2)
    .lineTo(555, doc.y + 2)
    .stroke();

  doc.moveDown(0.4);
}

// 1. TECHNICAL SKILLS
renderSectionHeader("Technical Skills");

doc.fontSize(9).font("Helvetica-Bold").fillColor(primaryColor);
doc
  .text("Languages: ", { continued: true })
  .font("Helvetica")
  .fillColor(secondaryColor)
  .text("Dart, JavaScript, TypeScript");

doc.font("Helvetica-Bold").fillColor(primaryColor);
doc
  .text("Frameworks & Libraries: ", { continued: true })
  .font("Helvetica")
  .fillColor(secondaryColor)
  .text("Flutter, Node.js, Express.js, Nest.js");

doc.font("Helvetica-Bold").fillColor(primaryColor);
doc
  .text("Databases: ", { continued: true })
  .font("Helvetica")
  .fillColor(secondaryColor)
  .text("MongoDB, PostgreSQL, Firebase (Firestore)");

doc.font("Helvetica-Bold").fillColor(primaryColor);
doc
  .text("Development Tools: ", { continued: true })
  .font("Helvetica")
  .fillColor(secondaryColor)
  .text("Git, GitHub, Postman, VS Code, Android Studio");

doc.font("Helvetica-Bold").fillColor(primaryColor);
doc
  .text("Core Competencies: ", { continued: true })
  .font("Helvetica")
  .fillColor(secondaryColor)
  .text(
    "Clean Architecture, State Management (BLoC/Cubit, Riverpod, Provider), RESTful API Development, JWT/OAuth2 Authentication, Cross-Platform Development",
  );

doc.moveDown(0.6);

// 2. EXPERIENCE
renderSectionHeader("Experience");

// Role 1
doc
  .font("Helvetica-Bold")
  .fontSize(10)
  .fillColor(primaryColor)
  .text("Flutter Developer Intern", 40, doc.y);
doc
  .font("Helvetica-Bold")
  .fontSize(9)
  .fillColor(secondaryColor)
  .text("Supreme IT Solutions | Kathmandu, Nepal | Remote", 40, doc.y, {
    continued: true,
  });
doc
  .font("Helvetica")
  .fontSize(8.5)
  .fillColor(mutedColor)
  .text("December 2025 – April 2026", { align: "right" });

doc.moveDown(0.2);

const expBullets = [
  "Built cross-platform Flutter features using Clean Architecture and BLoC/Cubit for 3+ client applications.",
  "Collaborated with cross-functional teams and QA engineers to design, develop, and implement new features, ensuring high-quality releases.",
  "Implemented JWT-based authentication and REST API integration with Dio, hardening app-level security.",
];

expBullets.forEach((bullet) => {
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(secondaryColor)
    .text(`•  ${bullet}`, 50, doc.y, { width: 505 });
});

doc.moveDown(0.6);

// 3. PROJECTS
renderSectionHeader("Projects");

// Project 1
doc
  .font("Helvetica-Bold")
  .fontSize(9.5)
  .fillColor(primaryColor)
  .text("E-Learning Platform", 40, doc.y, { continued: true });
doc
  .font("Helvetica")
  .fontSize(8.5)
  .fillColor(mutedColor)
  .text(
    "   |   Flutter, Node.js, MongoDB, Riverpod, Stripe, Firebase FCM, GitHub Actions, Fastlane",
  );

doc.moveDown(0.15);
const p1Bullets = [
  "Built a full-stack e-learning platform with course filtering, progress tracking, and automated PDF certificate generation.",
  "Integrated Stripe payments into a Node.js/Express/MongoDB REST API, and applied Riverpod state management with Firebase Cloud Messaging and optimistic pagination for smooth performance.",
  "Set up CI/CD pipelines using GitHub Actions and Fastlane to automate builds and distribute releases via Firebase App Distribution.",
];
p1Bullets.forEach((b) => {
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(secondaryColor)
    .text(`•  ${b}`, 50, doc.y, { width: 505 });
});

doc.moveDown(0.4);

// Project 2
doc
  .font("Helvetica-Bold")
  .fontSize(9.5)
  .fillColor(primaryColor)
  .text("Job Portal Application", 40, doc.y, { continued: true });
doc
  .font("Helvetica")
  .fontSize(8.5)
  .fillColor(mutedColor)
  .text("   |   Flutter, Node.js, MongoDB, Provider");

doc.moveDown(0.15);
const p2Bullets = [
  "Architected a Node.js/MongoDB backend with optimized indexing for faster, more scalable search performance.",
  "Built category and location-based filtering with real-time push notifications.",
  "Used Provider state management to keep the cross-platform UI responsive with live status updates.",
];
p2Bullets.forEach((b) => {
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(secondaryColor)
    .text(`•  ${b}`, 50, doc.y, { width: 505 });
});

doc.moveDown(0.4);

// Project 3
doc
  .font("Helvetica-Bold")
  .fontSize(9.5)
  .fillColor(primaryColor)
  .text("Food Delivery Application", 40, doc.y, { continued: true });
doc
  .font("Helvetica")
  .fontSize(8.5)
  .fillColor(mutedColor)
  .text("   |   Flutter, Node.js, Express.js, MongoDB, Firebase");

doc.moveDown(0.15);
const p3Bullets = [
  "Designed modular REST APIs for order processing, promo logic, and ratings.",
  "Built browsing, cart, and secure checkout flows with JWT-authenticated user sessions.",
  "Enabled order tracking and push notifications through Firebase Cloud Messaging.",
];
p3Bullets.forEach((b) => {
  doc
    .fontSize(8.5)
    .font("Helvetica")
    .fillColor(secondaryColor)
    .text(`•  ${b}`, 50, doc.y, { width: 505 });
});

doc.moveDown(0.6);

// 4. EDUCATION
renderSectionHeader("Education");

doc
  .font("Helvetica-Bold")
  .fontSize(9.5)
  .fillColor(primaryColor)
  .text("Birendra Multiple Campus | Tribhuvan University", 40, doc.y, {
    continued: true,
  });
doc
  .font("Helvetica")
  .fontSize(8.5)
  .fillColor(mutedColor)
  .text("2022 – Present", { align: "right" });

doc
  .font("Helvetica-Oblique")
  .fontSize(8.5)
  .fillColor(secondaryColor)
  .text(
    "Bachelor of Science in Computer Science and Information Technology",
    40,
    doc.y,
    { continued: true },
  );
doc
  .font("Helvetica")
  .fontSize(8.5)
  .fillColor(mutedColor)
  .text("Bharatpur, Hetauda", { align: "right" });

doc.end();

writeStream.on("finish", () => {
  console.log("Resume PDF generated successfully at " + outputPath);
});

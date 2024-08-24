require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact.js");
const propertyRoute = require("./routes/property");
const path = require("path");
const multer = require("multer");
const { storage } = require("./cloudinary");
const session = require("express-session");
const bcrypt = require("bcrypt");
const slugify = require("slugify");

const app = express();

// Connect to MongoDB
const Blog = require("./models/blogs");
const User = require("./models/user");

const mongoDBURL = process.env.DB_URL;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("Error connecting to the database..", err);
  });

// Specifying Multer Storage to Cloudinary Storage Settings
const upload = multer({ storage });

// CORS Setup
app.use(
  cors({
    origin: true,
    methods: "*",
    credentials: true,
  })
);

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "ABCD1234",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true, // Helps mitigate XSS attacks
      maxAge: 24 * 60 * 60 * 1000, // Session expires in 1 day
    },
  })
);

// Route for Getting all Blogs Data
app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

// Route for Registering
app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  // bcrypt to hash the password
  const hash = await bcrypt.hash(password, 12);
  const newUser = new User({
    username: username,
    email: email,
    password: hash,
    role: role,
  });
  await newUser.save();

  // Adding the Session Variables for Session Tracking
  req.session.user_id = newUser._id;
  req.session.user_name = newUser.username;
  req.session.user_role = newUser.role;
  req.session.save((err) => {
    if (err) {
      console.log(err);
      res.send("Error saving session");
    } else {
      console.log(req.session);
      res.json({ isRegister: true });
    }
  });
});

// Route for Logging In
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    res.json({ isLogin: false });
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      req.session.user_id = user._id;
      req.session.user_name = user.username;
      req.session.user_role = user.role;
      req.session.save((err) => {
        if (err) {
          console.log(err);
          res.send("Error saving session");
        } else {
          console.log(req.session);
          res.json({ isLogin: true });
        }
      });
    } else {
      console.log("Error");
      res.json({ isLogin: false });
    }
  }
});

// Route to Check Log In Status
app.post("/logInStatus", (req, res) => {
  console.log(req.session.user_id);
  if (req.session.user_id) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});

// Route to Check If User is auth to create blog
app.post("/createBlog/auth", async (req, res) => {
  try {
    console.log("Session Info:", req.session);

    if (
      req.session.user_id &&
      (req.session.user_role === "content creator" ||
        req.session.user_role === "admin")
    ) {
      res.json({ isAuth: true });
    } else {
      res.json({ isAuth: false });
    }
  } catch (err) {
    console.error("Error checking authorization:", err);
    res.status(500).json({ isAuth: false, error: "Internal Server Error" });
  }
});

// Route to create new blog
app.post("/blogs/new", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  const slug = slugify(req.body.title, { lower: true, strict: true });
  const dataWithCloudinaryImgUrlandSlug = {
    ...req.body,
    image: req.file.path,
    slug: slug,
  };
  const newBlog = new Blog(dataWithCloudinaryImgUrlandSlug);
  await newBlog.save();
  res.send("success");
});

// Route to update views of a Specific blog
app.post("/blogs/updateViews/:id", async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
});

// Route to Update the Likes of a blog
app.post("/blogs/updateLikes/:id", async (req, res) => {
  const { id } = req.params;
  await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
});

// Route to get details of Specific Blog
app.get("/blogs/:slug", async (req, res) => {
  // const { id } = req.params;
  const { slug } = req.params;

  const blog = await Blog.findOne({ slug: slug });
  res.json(blog);
});

// Route to get all user data
app.post("/getuserdata", (req, res) => {
  res.json({ username: req.session.user_name, role: req.session.user_role });
});

// Route to Destroy Session and Logout
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out");
    }
    res.send("Logged Out");
  });
});

// Serve static files from the uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
console.log(
  "Static files are being served from",
  path.join(__dirname, "uploads")
);
app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Use routes
app.use("/auth", authRoute);
app.use("/", contactRoute);
app.use("/property", propertyRoute);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Listening on port ${port}...`));

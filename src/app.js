import express from "express";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Node.js server is running!",
    });
});

export default app;
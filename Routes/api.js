
import express from "express";
const router = express.Router();
import * as Blogcontroller from "../app/controllers/Blogcontroller.js";


// Create Route
router.post("/Create-blog",Blogcontroller.CreateBlog);

// Read Route
router.get("/Read-blog",Blogcontroller.ReadBlog);

// Update Route
router.put("/Update-blog",Blogcontroller.UpdateBlog);

// Delete Route
router.delete("/Delete-blog",Blogcontroller.DeleteBlog);


export default router;

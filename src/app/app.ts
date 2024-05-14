import express, { Request, Response } from "express";
const app = express();

// middleware
app.use(express.json())
app.use(express.text())

app.get("/", (req: Request, res: Response) => {
  res.json(
    {
        message: "Server is running..."
    }
  );
});


app.post("/", (req: Request, res: Response) => {
    console.log(req.body);
    res.json(
        {
            message: "Api touch"
        }
    )
})

export default app;

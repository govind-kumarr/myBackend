import { Diary } from "../models/Diary.js";

export const getDiary = async (req, res, next) => {
  Diary.getDiary()
    .then((diary) => res.send(diary))
    .catch((err) => {
      console.log(err);
      res.send("Error while retrieving data");
    });
};

export const post_A_Note = async (req, res, next) => {
  const { date, content, author } = req.body;
  if (!date || !content || !author) {
    res.send("One of the field is missing");
  } else {
    const Page = new Diary(date, content, author);
    Page.save()
      .then((result) => {
        console.log("Result", result);
        res.send("Page saved successfully");
      })
      .catch((error) => {
        console.log("Error occured saving page\n", error);
        res.send("Error occured saving page");
      });
  }
};

export const edit_A_Note = (req, res, next) => {
  const data = req.body;
  const newNote = new Diary(data?.date, data?.content, data?.author, data?._id);
  newNote
    .save()
    .then((response) => res.send(response))
    .catch((error) => {
      console.log("Error while updating\n", error);
      res.send("Something went wrong!");
    });
};

export const delete_A_Note = (req, res, next) => {
  const { id } = req.params;
  Diary.Delete(id)
    .then((result) => {
      console.log("Deleted", result);
      res.send(result);
    })
    .catch((err) => {
      console.log("Failed to delete", err);
      res.send("Error while deleting");
    });
};

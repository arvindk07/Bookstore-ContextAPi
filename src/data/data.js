import club from "../assets/books/5am.jpg";
import atomic from "../assets/books/atomic.jpg";
import benjamin from "../assets/books/benjamin.jpg";
import energizeyourmind from "../assets/books/energizeyourmind.jpg";
import itstartwithus from "../assets/books/Itstartwithus.jpg";
import jut from "../assets/books/jut.jpg";
import neverfinished from "../assets/books/neverfinished.jpg";
import onething from "../assets/books/onething.jpg";
import trader from "../assets/books/trader.jpg";
import { v4 } from "uuid";

const books = [
  {
    id: 1,
    title: "5AM Club",
    img: club,
    discription:
      "Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning",
    price: 4,
    author: "Robin Sharma",
  },
  {
    id: 2,
    title: "Atomic",
    img: atomic,
    discription:
      "James Clear has spent years honing the art and studying the science of habits. This engaging, hands-on book is the guide you need to break bad routines and make",
    price: 6,
    author: "James Clear",
  },
  {
    id: 3,
    title: "Benjamin Graham",
    img: benjamin,
    discription:
      "Benjamin Franklin was a complex person who seemed simple. This book caught my eye shortly after I read an article that mentioned Benjamin Franklin's many facets. He wasn't just a shaggy-haired, chubby ",
    price: 10,
    author: "Benjamin Graham",
  },
  {
    id: 4,
    title: "Energize Your Mind",
    img: energizeyourmind,
    discription:
      "Take charge of your mind. Be in charge of your life. In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works.",
    price: 15,
    author: "Gaur Gopal Das",
  },
  {
    id: 5,
    title: "It Starts with Us",
    img: itstartwithus,
    discription:
      "It Starts with Us is a romance novel by Colleen Hoover, published by Atria Books on October 18, 2022. It is the sequel to her 2016 best-selling novel It Ends with Us. ",
    price: 9,
    author: "Colleen Hoover",
  },
  {
    id: 6,
    title: "Jujutsu Kaisen",
    img: jut,
    discription:
      "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018,",
    price: 3,
    author: "Gege Akutami",
  },
  {
    id: 7,
    title: "Never Finished",
    img: neverfinished,
    discription:
      "This is not a self-help book. It's a wake-up call! Can't Hurt Me, David Goggins' smash hit memoir, demonstrated how much untapped ability",
    price: 4,
    author: "N/A",
  },
  {
    id: 8,
    title: "One Thing",
    img: onething,
    discription:
      "Take charge of your mind. Be in charge of your life. In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works.",
    price: 4,
    author: "N/A",
  },
  {
    id: 9,
    title: "Trader",
    img: trader,
    discription:
      "Take charge of your mind. Be in charge of your life. In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works.",
    price: 4,
    author: "N/A",
  },
];

export default books;

import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true}
);

const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

const bookSchema = mongoose.Schema({
    title: { type: String, 
            required: true,
    },
    author: { type: String, 
            required: true,
    },
    category: { type: String,
        required: true,
    },
    price: { type: Number, 
              required: true,
              min: 1,
    },
    date: { type: String, 
            required: true,
            validate: {
                validator: function(v) {
                  return /^\d\d-\d\d-\d\d$/.test(v);
                },
                message: props => `${props.value} is not a valid date!`
            },
    }
});

const memberSchema = mongoose.Schema({
    name: { type: String, 
            required: true,
    },
    email: { type: String, 
            required: true,
    },
    address: { type: String,
        required: true,
    },
});

const recommendationSchema = mongoose.Schema({
    name: { type: String, 
            required: true,
    },
    title: { type: String, 
            required: true,
    },
    rating: { type: Number,
        required: true,
    },
    comment: { type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);
const Member = mongoose.model("Member", memberSchema);
const Recommendation = mongoose.model("Recommendation", recommendationSchema);

// Books
const createBook = async (title, author, category, price, date) => {
    const book = new Book({ title: title, author: author, category: category, price: price, date: date });
    return book.save();
}

const findBook = async (filter, projection, limit) => {
    const query = Book.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const updateBook = async (_id, title, author, category, price, date) => {
    console.log(_id, title, author, category, price, date)
    const result = await Book.replaceOne({ _id: _id }, { title: title, author: author, category: category, price: price, date: date  });
    console.log(result)
    return result.modifiedCount;
}

const deleteBook = async (_id) => {
    const result = await Book.deleteOne({ _id: _id });
    return result.deletedCount;
}

//Members
const createMember = async (name, email, address) => {
    const book = new Member({ name: name, email: email, address: address});
    return book.save();
}

const findMember = async (filter, projection, limit) => {
    const query = Member.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const updateMember = async (_id, name, email, address) => {
    console.log(_id, name, email, address)
    const result = await Member.replaceOne({ _id: _id }, {name: name, email: email, address: address});
    console.log(result)
    return result.modifiedCount;
}

const deleteMember = async (_id) => {
    const result = await Member.deleteOne({ _id: _id });
    return result.deletedCount;
}
//Recommendations
const findRecommendation = async (filter, projection, limit) => {
    const query = Recommendation.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

const deleteRecommendation = async (_id) => {
    const result = await Recommendation.deleteOne({ _id: _id });
    return result.deletedCount;
}


export { createBook, findBook, updateBook, deleteBook,
         createMember, findMember, updateMember, deleteMember,
         findRecommendation, deleteRecommendation,
       }

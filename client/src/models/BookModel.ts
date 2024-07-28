class BookModel {
    id: number;
    title: string;
    author?: string;
    description?: string;
    copies?: number;
    copiesAvaliable?: number;
    category?: string;
    img?: string;

    constructor(
        id: number,
        title: string,
        author?: string,
        description?: string,
        copies?: number,
        copiesAvaliable?: number,
        category?: string,
        img?: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.copies = copies;
        this.copiesAvaliable = copiesAvaliable;
        this.category = category;
        this.img = img;
    }
}

export default BookModel;
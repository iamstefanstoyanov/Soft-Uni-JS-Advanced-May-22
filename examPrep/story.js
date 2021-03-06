class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        let currentUsername = this._likes.includes(username);

        if (username == this.creator) {
            throw new Error('You can\'t like your own story!');
        }

        if (currentUsername) {
            throw new Error('You can\'t like the same story twice!');
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        let currentUsername = this._likes.includes(username);

        if (!currentUsername) {
            throw new Error('You can\'t dislike this story!');
        }

        const index = this._likes.indexOf(username);
        this._likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, inputId) {

        let currentId = this._comments.find(x => x.id == inputId);

        if (currentId) {
            let replyId = Number(`${currentId.id}.${currentId.replies.length + 1}`);
            currentId.replies.push({ replyId, username, content });
            return `You replied successfully`;
        }

        let id = this._comments.length + 1;
        let replies = [];
        this._comments.push({ id, username, content, replies });

        return `${username} commented on ${this.title}`;
    }

    toString(sortingType) {

        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`,
        ];

        if (sortingType == 'username') {
            this._comments.sort((a, b) => a.username.localeCompare(b.username));

            for (const comment of this._comments) {
                comment.replies.sort((a, b) => a.username.localeCompare(b.username));
            }
        }

        if (sortingType == 'desc') {
            this._comments.sort((a, b) => b.id - a.id);

            for (const comment of this._comments) {
                comment.replies.sort((a, b) => b.replyId - a.replyId);
            }
        }

        if (sortingType == 'asc') {
            this._comments.sort((a, b) => a.id - b.id);

            for (const comment of this._comments) {
                comment.replies.sort((a, b) => a.replyId - b.replyId);
            }
        }

        for (const comment of this._comments) {

            result.push(`-- ${comment.id}. ${comment.username}: ${comment.content}`);

            for (const reply of comment.replies) {
                result.push(`--- ${reply.replyId}. ${reply.username}: ${reply.content}`);
            }
        }

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
console.log(art.like("John"));
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));

console.log(art.comment("Zane", "Reply", 1));
console.log(art.comment("Jessy", "Nice :)"));
console.log(art.comment("SAmmy", "Reply@", 1));

console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
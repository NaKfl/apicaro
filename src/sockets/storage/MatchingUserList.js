class MatchingListUser {
  constructor() {
    if (MatchingListUser.instance) {
      return MatchingListUser.instance;
    }
    MatchingListUser.instance = this;
    this.users = [];
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(user) {
    this.size += 1;
    this.users.push(user);
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    this.size -= 1;
    return this.users.shift();
  }

  front() {
    if (this.isEmpty()) return undefined;

    return this.users[0];
  }

  rear() {
    if (this.isEmpty()) return undefined;

    return this.users[this.size - 1];
  }

  clear() {
    this.users.length = 0;
    this.size = 0;
  }
}

export default MatchingListUser;

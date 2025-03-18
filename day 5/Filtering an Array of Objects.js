// Sample array of user objects
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 27 },
    { name: "David", age: 19 },
    { name: "Emma", age: 35 }
];

// Function to filter users older than 25
const filterUsersByAge = (users, ageLimit) => {
    return users.filter(user => user.age > ageLimit);
};

// Filtering users older than 25
const filteredUsers = filterUsersByAge(users, 25);

// Output the result
console.log(filteredUsers);

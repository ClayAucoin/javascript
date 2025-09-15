// for loop = repeat some code a LIMITED amount of times

// print from 1 to 10 by 1
for (let i = 1; i <= 10; i++) {
    // console.log(`${i}`);
}

// print from 1 to 10 by 2 (to get odd numbers)
for (let i = 1; i <= 10; i += 2) {
    // console.log(`${i}`);
}

// print from 1 to 10 by 2 (to get even numbers)
for (let i = 2; i <= 10; i += 2) {
    // console.log(`${i}`);
}

// print from 10 to 1
for (let i = 10; i > 0; i--) {
    // console.log(`${i}`);
}

// print from 10 to 1 by 2
for (let i = 10; i > 0; i -= 2) {
    // console.log(`${i}`);
}

// continue, this will skip the number 13
for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue
    } else {
        // console.log(`${i}`);
    }
}

// break, stops the loop when it hits 13
for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        break
    } else {
        console.log(`${i}`);
    }
}
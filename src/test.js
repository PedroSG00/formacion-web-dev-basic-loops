const shuffle = (currentArray) => {
    const array = [...currentArray];
    let counter = array.length;

    while (counter > 0) {
        let randomIndex = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
};


// Build the tests array using the existing harness format
const tests = [];

const add = (name, fn, expect) => tests.push({ name, run: fn, expect });

// Find the maximum
[
    [2, 1, 2], [5, -7, 5], [1, 3, 3], [-5, 3, 3], [4, 4, 4]
].forEach((t, i) => add(`Find the maximum #${i + 1}`, () => maxOfTwoNumbers(t[0], t[1]), t[2]));

// Find the longest word
add('Find the longest word #1', () => findLongestWord([]), null);
add('Find the longest word #2', () => findLongestWord(['foo']), 'foo');
add('Find the longest word #3', () => findLongestWord(['foo', 'bar']), 'foo');
add('Find the longest word #4', () => findLongestWord(['bar', 'foo']), 'bar');

let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
for (let i = 0; i < 10; i++) {
    const w = shuffle(words);
    add(`Find the longest word shuffled #${i + 1}`, () => findLongestWord(w), 'ironhack');
}

// Calculate the sum of array of numbers
add('Calculate the sum #1', () => sumNumbers([]), 0);
add('Calculate the sum #2', () => sumNumbers([4]), 4);
add('Calculate the sum #3', () => sumNumbers([0, 0, 0, 0, 0]), 0);
add('Calculate the sum #4', () => sumNumbers([10, 5, 4, 32, 8]), 59);

// Bonus: sum
add('Bonus sum #1', () => sum([]), 0);
add('Bonus sum #2', () => sum([4]), 4);
add('Bonus sum #3', () => sum([0, 0, 0, 0, 0]), 0);
add('Bonus sum #4', () => sum([10, 5, 4, 32, 8]), 59);
add('Bonus sum #5 strings', () => sum(['ana', 'marco', 'nicolas', 'tania', 'ptwd']), 24);
add('Bonus sum #6 mixed strings and numbers', () => sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10]), 56);
add('Bonus sum #7 mixed + booleans false', () => sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false]), 46);
add('Bonus sum #8 mixed + booleans true', () => sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true]), 47);
// Expect throw for unsupported types: we encode expect as a string 'THROW:<message>'
add('Bonus sum #9 throw', () => sum([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}]), "THROW:Unsupported data type sir or ma'am");

// Calculate average numbers
add('Average numbers #1', () => averageNumbers([]), null);
add('Average numbers #2', () => averageNumbers([9]), 9);
add('Average numbers #3', () => averageNumbers([9, -3, -4, 6]), 2);
add('Average numbers #4', () => averageNumbers([9, 10, 82, 92, 32, 102, 58]), 55);

// Average word length
add('Average word length #1', () => averageWordLength([]), null);
add('Average word length #2', () => averageWordLength(['ironhack']), 8);
add('Average word length #3', () => averageWordLength(['Ironhack', 'Madrid', 'Barcelona', 'Paris', 'Miami', 'Mexico', 'Berlin', 'Programmers']), 7);

// Bonus avg
add('Bonus avg #1', () => avg([]), null);
add('Bonus avg #2 false', () => avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false]), 46 / 9);
add('Bonus avg #3 true', () => avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true]), 47 / 9);

// Unique array
add('Unique array #1', () => uniquifyArray([]), null);
add('Unique array #2', () => uniquifyArray(['Ironhack', 'Ironhack', 'Ironhack']), ['Ironhack']);
add('Unique array #3', () => uniquifyArray(['Cat', 'Dog', 'Cow']), ['Cat', 'Dog', 'Cow']);
add('Unique array #4', () => uniquifyArray(['iPhone', 'Samsung', 'Android', 'iOS', 'iPhone', 'Samsung', 'Nokia', 'Blackberry', 'Android']), ['iPhone', 'Samsung', 'Android', 'iOS', 'Nokia', 'Blackberry']);

// Find elements
add('Find elements #1', () => doesWordExist([]), null);
add('Find elements #2', () => doesWordExist(['machine'], 'machine'), true);
add('Find elements #3', () => doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille'), false);
add('Find elements #4', () => doesWordExist(['pizza', 'sandwich', 'snack', 'soda', 'book', 'computer'], 'book'), true);

// Count repetition
add('Count repetition #1', () => howManyTimes([]), 0);
add('Count repetition #2', () => howManyTimes(['basketball', 'football', 'tennis'], 'tennis'), 1);
add('Count repetition #3', () => howManyTimes(['basketball', 'football', 'tennis'], 'rugby'), 0);
add('Count repetition #4', () => howManyTimes(['basketball', 'football', 'tennis', 'rugby', 'rugby', 'ping pong', 'rugby', 'basketball', 'rugby', 'handball', 'rugby'], 'rugby'), 5);

// Iteration #8: Bonus - greatestProduct
// Unificado: comprueba que la función está declarada y realiza varias comprobaciones
add('Bonus Quest - greatestProduct', () => {
    const out = {};
    out.declared = typeof greatestProduct;

    const matrixOnes = Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => 1));
    out.allOnes = greatestProduct(matrixOnes);

    const matrixTwos = Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => 2));
    out.allTwos = greatestProduct(matrixTwos);

    // casos adicionales
    out.emptyMatrix = greatestProduct([]);
    out.nonArray = greatestProduct(null);

    const smallH = [
        [1, 2, 3, 4],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
    ];
    out.smallHorizontal = greatestProduct(smallH); // 1*2*3*4 = 24

    const smallV = [
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [4, 1, 1, 1],
        [5, 1, 1, 1]
    ];
    out.smallVertical = greatestProduct(smallV); // 2*3*4*5 = 120

    return out;
}, { declared: 'function', allOnes: 1, allTwos: 16, emptyMatrix: 0, nonArray: 0, smallHorizontal: 24, smallVertical: 120 });



function deepEqual(a, b) {
    try {
        return JSON.stringify(a) === JSON.stringify(b);
    } catch (e) {
        return a === b;
    }
}

function formatValue(v) {
    if (typeof v === "string") return `"${v}"`;
    try { return JSON.stringify(v); } catch { return String(v); }
}

function runAll() {
    const container = document.getElementById("exercises");
    container.innerHTML = "";

    const groups = {};
    tests.forEach(t => {
        const idx = t.name.indexOf(" #");
        const key = idx > -1 ? t.name.slice(0, idx) : t.name;
        if (!groups[key]) groups[key] = [];
        groups[key].push(t);
    });

    let passed = 0, failed = 0;

    Object.keys(groups).forEach(exName => {
        const group = groups[exName];

        const exEl = document.createElement('div');
        exEl.className = 'exercise';

        const header = document.createElement('button');
        header.className = 'exercise-header';
        header.type = 'button';
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = `<span class="ex-title">${exName}</span><span class="ex-counts">✅ <span class="ex-passed">0</span> ❌ <span class="ex-failed">0</span></span>`;

        const body = document.createElement('div');
        body.className = 'exercise-body';
        body.hidden = true;

        const left = document.createElement('div');
        left.className = 'subsection correct';
        left.innerHTML = '<h4>Correct</h4>';
        const ulCorrect = document.createElement('ul');
        ulCorrect.className = 'list correct-list';
        left.appendChild(ulCorrect);

        const right = document.createElement('div');
        right.className = 'subsection fail';
        right.innerHTML = '<h4>Failed</h4>';
        const ulFail = document.createElement('ul');
        ulFail.className = 'list fail-list';
        right.appendChild(ulFail);

        body.appendChild(left);
        body.appendChild(right);

        exEl.appendChild(header);
        exEl.appendChild(body);

        container.appendChild(exEl);

        let exPassed = 0, exFailed = 0;

        group.forEach(t => {
            let received;
            let ok = false;
            // Special convention: if expect is a string beginning with 'THROW:'
            if (typeof t.expect === 'string' && t.expect.indexOf('THROW:') === 0) {
                const expectedMessage = t.expect.slice(6);
                try {
                    // should throw
                    const r = t.run();
                    received = formatValue(r);
                    ok = false; // didn't throw
                } catch (err) {
                    received = `Error: ${err.message || err}`;
                    ok = (err.message === expectedMessage);
                }
            } else {
                try {
                    received = t.run();
                    ok = deepEqual(received, t.expect);
                } catch (err) {
                    received = `Error: ${err.message || err}`;
                    ok = false;
                }
            }

            const li = document.createElement('li');
            li.className = ok ? 'pass' : 'fail';
            li.innerHTML = `<div class="row-label">${t.name}</div>
            <div class="small">Expected: <span class="expected">${formatValue(t.expect)}</span></div>
            <div class="small">Received: <span class="received">${formatValue(received)}</span></div>`;

            if (ok) {
                ulCorrect.appendChild(li);
                exPassed++; passed++;
            } else {
                ulFail.appendChild(li);
                exFailed++; failed++;
            }
        });

        header.querySelector('.ex-passed').textContent = exPassed;
        header.querySelector('.ex-failed').textContent = exFailed;

        header.addEventListener('click', () => {
            const expanded = header.getAttribute('aria-expanded') === 'true';
            header.setAttribute('aria-expanded', expanded ? 'false' : 'true');
            body.hidden = expanded ? true : false;
        });
    });

    document.getElementById("passed").textContent = passed;
    document.getElementById("failed").textContent = failed;
    document.getElementById("total").textContent = tests.length;
}

function runTest(id) {
    let chosen = [];
    if (typeof id === 'number') {
        const idx = id - 1;
        if (idx >= 0 && idx < tests.length) chosen = [tests[idx]];
        else return [];
    } else if (typeof id === 'string') {
        const exact = tests.find(t => t.name === id);
        if (exact) chosen = [exact];
        else {
            chosen = tests.filter(t => t.name.startsWith(id + ' #') || t.name === id);
        }
    } else {
        return [];
    }

    const results = chosen.map(t => {
        // handle THROW: expectation
        if (typeof t.expect === 'string' && t.expect.indexOf('THROW:') === 0) {
            const expectedMessage = t.expect.slice(6);
            try {
                const received = t.run();
                return { name: t.name, ok: false, received, expect: t.expect };
            } catch (err) {
                const received = `Error: ${err.message || err}`;
                const ok = (err.message === expectedMessage);
                return { name: t.name, ok, received, expect: t.expect };
            }
        }

        try {
            const received = t.run();
            const ok = deepEqual(received, t.expect);
            return { name: t.name, ok, received, expect: t.expect };
        } catch (err) {
            return { name: t.name, ok: false, received: `Error: ${err.message || err}`, expect: t.expect };
        }
    });

    return results;
}

runAll();

document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copy');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', () => {
        const exercises = Array.from(document.querySelectorAll('#exercises .exercise')).map(ex => {
            const name = ex.querySelector('.ex-title')?.innerText || '';
            const passed = Number(ex.querySelector('.ex-passed')?.textContent || 0);
            const failed = Number(ex.querySelector('.ex-failed')?.textContent || 0);
            const correct = Array.from(ex.querySelectorAll('.correct-list li')).map(li => ({
                test: li.querySelector('.row-label')?.innerText?.trim() || '',
                expected: li.querySelector('.expected')?.innerText?.trim() || '',
                received: li.querySelector('.received')?.innerText?.trim() || ''
            }));
            const failedList = Array.from(ex.querySelectorAll('.fail-list li')).map(li => ({
                test: li.querySelector('.row-label')?.innerText?.trim() || '',
                expected: li.querySelector('.expected')?.innerText?.trim() || '',
                received: li.querySelector('.received')?.innerText?.trim() || ''
            }));
            return { name, passed, failed, correct, failed: failedList };
        });

        navigator.clipboard?.writeText(JSON.stringify(exercises, null, 2)).then(() => {
            alert('Results copied to clipboard (JSON).');
        }).catch(() => alert('Could not copy to clipboard.'));
    });
});
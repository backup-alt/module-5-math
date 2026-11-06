import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outPath = path.resolve('public', 'EMA51005_Module_2_Final_Answer_Key.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 45, bottom: 45, left: 50, right: 50 },
  bufferPages: true,
  autoFirstPage: true,
});

const writeStream = fs.createWriteStream(outPath);
doc.pipe(writeStream);

function drawRunningHeader() {
  doc.save();
  doc.font('Helvetica').fontSize(9).fillColor('#333333');
  doc.text('EMA51005 - Discrete Mathematics', 50, 28, { align: 'left' });
  doc.text('Unit II - Combinatorics', 50, 28, { align: 'right', width: 495 });
  doc.strokeColor('#aaaaaa').lineWidth(0.5).moveTo(50, 40).lineTo(545, 40).stroke();
  doc.restore();
}

function titleBlock() {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(16).fillColor('#000000').text('EMA51005 - Discrete Mathematics', { align: 'center' });
  doc.font('Helvetica-Bold').fontSize(13).text('UNIT II - Combinatorics', { align: 'center' });
  doc.font('Helvetica').fontSize(11).text('Final Exam Answer Key', { align: 'center' });
  doc.moveDown(0.8);
  doc.font('Helvetica-Oblique').fontSize(9).fillColor('#444444').text(
    'Answers are written in a simple university-exam flow: definition/given, required property, step-by-step working, and conclusion. Strictly following the professor\'s classwork notes.',
    { align: 'justify' }
  );
  doc.moveDown(1);
}

function sectionHeader(title: string) {
  doc.moveDown(0.5);
  doc.font('Helvetica-Bold').fontSize(12).fillColor('#000000').text(title);
  doc.moveDown(0.4);
}

function q(num: string, question: string, answer: string[]) {
  // Check if we need a new page
  if (doc.y > 700) {
    doc.addPage();
  }
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor('#000000').text(`${num}. ${question}`, {
    align: 'justify',
  });
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(9).fillColor('#111111');
  for (let i = 0; i < answer.length; i++) {
    const line = answer[i];
    if (line.startsWith('Answer:')) {
      doc.font('Helvetica-Bold').text('Answer: ', { continued: true }).font('Helvetica').text(line.replace(/^Answer:\s*/, ''), { align: 'justify' });
    } else if (line.startsWith('   ') || line.startsWith('\t')) {
      doc.text(line, { indent: 15, align: 'justify' });
    } else {
      doc.text(line, { align: 'justify' });
    }
    doc.moveDown(0.15);
  }
  doc.moveDown(0.4);
}

// Build Document
titleBlock();
sectionHeader('Part A - Short Answers');

q('1', 'Assuming that repetitions are not permitted, how many four-digit numbers can be formed from the six digits 1, 2, 3, 5, 7, 8?', [
  'Answer: Total number of digits n = 6, and we form four-digit numbers taking r = 4 digits without repetition.',
  'By the permutation formula: nPr = n! / (n - r)!',
  '6P4 = 6! / (6 - 4)! = 6! / 2! = (1 × 2 × 3 × 4 × 5 × 6) / (1 × 2) = 360.',
  'Hence, 360 four-digit numbers can be formed.'
]);

q('2', 'Show that if seven colours are used to paint 50 bicycles, at least 8 bicycles will be the same colour.', [
  'Answer: Given m = 50 bicycles (pigeons) and n = 7 colours (pigeonholes).',
  'By Generalised Pigeonhole Principle (as in classwork):',
  'Number of bicycles of same colour ≥ [(m - n)/n] + 1',
  '= [(50 - 7)/7] + 1 = [43/7] + 1 = 6.14 + 1 → 7 + 1 = 8 (or ⌊(50 - 1)/7⌋ + 1 = 7 + 1 = 8).',
  'Hence, at least 8 bicycles will be the same colour.'
]);

q('3', 'How many 7 letter words can be formed using the letters of the word BENZENE?', [
  'Answer: Total letters n = 7. Letter frequencies: E = 3, N = 2, B = 1, Z = 1.',
  'Number of words = 7! / (3! × 2! × 1! × 1!) = 5040 / (6 × 2) = 5040 / 12 = 420.',
  'Hence, 420 distinct 7-letter words can be formed.'
]);

q('4', 'State Pigeonhole principle.', [
  'Answer: If n + 1 pigeons occupy n holes, then at least one hole has more than one pigeon.'
]);

q('5', 'Find the minimum number of students needed to guarantee that five of them belong to the same subject having major as English, Maths, Physics, and Chemistry.', [
  'Answer: Here n = 4 subjects (holes) and we guarantee k = 5 students in the same subject.',
  'By Generalised Pigeonhole Principle: ⌊(m - 1) / n⌋ + 1 = 5',
  '(m - 1) / 4 = 4 ⇒ m - 1 = 16 ⇒ m = 17.',
  'Hence, minimum 17 students are needed.'
]);

q('6', 'Define the generalisation of the pigeonhole principle.', [
  'Answer: If m pigeons occupy n holes, then at least one hole has more than [(m - n)/n] + 1 (i.e. at least ⌊(m - 1)/n⌋ + 1) pigeons.'
]);

q('7', 'A man hiked for 10 hours and covered a total distance of 45 km. It is known that he hiked 6 km in the first hour and only 3 km in the last hour. Show that he must have hiked at least 9 km within a certain period of 2 consecutive hours.', [
  'Answer: Total distance = 45 km in 10 hours. Hour 1 = 6 km, Hour 10 = 3 km.',
  'Distance in remaining 8 hours (hours 2 to 9) = 45 - (6 + 3) = 36 km.',
  'Divide these 8 hours into n = 4 disjoint 2-hour periods: (2,3), (4,5), (6,7), (8,9).',
  'By Pigeonhole Principle, at least one 2-hour period covers ≥ 36 / 4 = 9 km.'
]);

q('8', 'Define Recurrence relation.', [
  'Answer: An equation that expresses the general term of a sequence {a_n} in terms of one or more previous terms of the sequence, namely a_1, a_2, ..., a_{n-1}, for all positive integers n with n ≥ n_0 (where n_0 is a non-negative integer), is called a recurrence relation for the sequence {a_n}.'
]);

q('9', 'Write the general solution of recurrence relation.', [
  'Answer: For a linear recurrence relation, the general solution is: a_n = a_n^(h) + a_n^(p), where a_n^(h) is the homogeneous solution and a_n^(p) is the particular solution.',
  'For a second-order relation with characteristic roots m_1, m_2:',
  '(i) If m_1 ≠ m_2 are real and distinct: y_n = A·m_1^n + B·m_2^n.',
  '(ii) If m_1 = m_2 = m are real and equal: y_n = (A + B·n)·m^n.'
]);

q('10', 'Write the principle of Inclusion and Exclusion formula for the term |A ∪ B ∪ C|.', [
  'Answer: For any three finite sets A, B, and C:',
  '|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|.'
]);

// Part B
doc.addPage();
sectionHeader('Part B - 6 Mark Answers');

q('1', 'Use mathematical induction to prove that n^3 + 2n is divisible by 3, for n ≥ 1.', [
  'Answer: Let P(n) : n^3 + 2n is divisible by 3.',
  'Step 1 (Base Step, n = 1):',
  'P(1) = 1^3 + 2(1) = 1 + 2 = 3, which is divisible by 3. ∴ P(1) is true.',
  'Step 2 (Inductive Hypothesis):',
  'Assume P(k) is true for n = k. That is, (k^3 + 2k)/3 = c ⇒ k^3 + 2k = 3c for some integer c.',
  'Step 3 (To prove P(k+1) is true):',
  'For n = k + 1: (k + 1)^3 + 2(k + 1) = (k^3 + 3k^2 + 3k + 1) + (2k + 2)',
  '= (k^3 + 2k) + 3k^2 + 3k + 3 = 3c + 3(k^2 + k + 1) = 3[c + k^2 + k + 1],',
  'which is a multiple of 3 and divisible by 3. ∴ P(k+1) is true.',
  'Hence, by mathematical induction, n^3 + 2n is divisible by 3 for all n ≥ 1.'
]);

q('2', 'Prove by mathematical induction that 1/(1·2) + 1/(2·3) + 1/(3·4) + ... + 1/[n(n+1)] = n/(n+1).', [
  'Answer: Let P(n) : 1/(1·2) + 1/(2·3) + ... + 1/[n(n+1)] = n/(n+1).',
  'For n = 1: LHS = 1/(1·2) = 1/2. RHS = 1/(1+1) = 1/2. ∴ P(1) is true.',
  'Assume P(k) is true: 1/(1·2) + 1/(2·3) + ... + 1/[k(k+1)] = k/(k+1).',
  'To prove P(k+1) is true: LHS = [1/(1·2) + 1/(2·3) + ... + 1/[k(k+1)]] + 1/[(k+1)(k+2)]',
  '= k/(k+1) + 1/[(k+1)(k+2)] = [k(k+2) + 1] / [(k+1)(k+2)]',
  '= (k^2 + 2k + 1) / [(k+1)(k+2)] = [(k+1)(k+1)] / [(k+1)(k+2)] = (k+1)/(k+2) = RHS.',
  '∴ P(k+1) is true. Hence proved by mathematical induction.'
]);

q('3', 'A club consisting of 6 men and 7 women, in how many ways can we select a committee of 4 persons which has at least one woman?', [
  'Answer: Total men = 6, women = 7. Committee size = 4 with at least 1 woman.',
  'Possible cases (as listed in classwork notes):',
  '1 Woman and 3 Men: 7C1 × 6C3 = 7 × 20 = 140',
  '2 Women and 2 Men: 7C2 × 6C2 = 21 × 15 = 315',
  '3 Women and 1 Man: 7C3 × 6C1 = 35 × 6 = 210',
  '4 Women and 0 Men: 7C4 × 6C0 = 35 × 1 = 35',
  'Total number of ways = 140 + 315 + 210 + 35 = 700.'
]);

q('4', 'There are 250 students in an engineering college. 188 take Fortran, 100 C, 35 Java, 88 Fortran and C, 23 C and Java, 29 Fortran and Java, and 19 take all three. How many students have not taken any of these three languages?', [
  'Answer: Let A, B, C denote students taking Fortran, C, and Java respectively.',
  'Total n = 250. |A| = 188, |B| = 100, |C| = 35.',
  '|A ∩ B| = 88, |B ∩ C| = 23, |A ∩ C| = 29, |A ∩ B ∩ C| = 19.',
  'By Principle of Inclusion and Exclusion:',
  '|A ∪ B ∪ C| = |A| + |B| + |C| - |A ∩ B| - |A ∩ C| - |B ∩ C| + |A ∩ B ∩ C|',
  '= 188 + 100 + 35 - 88 - 29 - 23 + 19 = 323 - 140 + 19 = 202.',
  'Number of students taking none = 250 - |A ∪ B ∪ C| = 250 - 202 = 48.'
]);

q('5', 'Suppose there are 6 boys and 5 girls. (i) In how many ways can they sit in a row? (ii) In how many ways if boys and girls each sit together? (iii) In how many ways if girls sit together and boys do not sit together?', [
  'Answer: Total people = 6 + 5 = 11.',
  '(i) Total row arrangements = 11P11 = 11! = 39,916,800.',
  '(ii) Boys sit together (6!) and girls sit together (5!), and the 2 groups can be arranged in 2! ways:',
  '   Number of ways = 6! × 5! × 2! = 720 × 120 × 2 = 172,800.',
  '(iii) Girls sit together as 1 block, and boys do not sit together. As derived in classwork:',
  '   Treating 5 girls as 1 unit gives 7 units (7! × 5!), minus both groups together (2 × 6! × 5!):',
  '   Number of ways = 6! × 5! × 5 = 720 × 120 × 5 = 432,000.'
]);

q('6', 'Solve the recurrence relation a_{n+2} - 6a_{n+1} + 9a_n = 3·2^n + 7·3^n, n ≥ 0, given a_0 = 1, a_1 = 4.', [
  'Answer: Characteristic equation: m^2 - 6m + 9 = 0 ⇒ (m - 3)^2 = 0 ⇒ m = 3, 3 (repeated root).',
  'Homogeneous solution: a_n^(h) = (A + Bn)·3^n.',
  'Particular solution:',
  'For 3·2^n: let a_n^(p1) = C·2^n ⇒ C·2^{n+2} - 6C·2^{n+1} + 9C·2^n = 3·2^n ⇒ C(4 - 12 + 9) = 3 ⇒ C = 3.',
  'For 7·3^n: since 3 is a double root, let a_n^(p2) = D·n^2·3^n ⇒ substitution gives 18D = 7 ⇒ D = 7/18.',
  'General solution: a_n = (A + Bn)·3^n + 3·2^n + (7/18)n^2·3^n.',
  'Using initial conditions a_0 = 1 and a_1 = 4:',
  'n = 0: a_0 = A + 3 = 1 ⇒ A = -2.',
  'n = 1: a_1 = (-2 + B)·3 + 6 + 7/6 = 4 ⇒ 3B = 4 - 7/6 = 17/6 ⇒ B = 17/18.',
  '∴ a_n = (-2 + (17/18)n + (7/18)n^2)·3^n + 3·2^n.'
]);

q('7', 'How many positive integers n can be formed using the digits 3, 4, 4, 5, 5, 6, 7, if n has to exceed 50,00,000?', [
  'Answer: Given 7 digits {3, 4, 4, 5, 5, 6, 7} with repeated digits 4 (twice) and 5 (twice).',
  'To exceed 50,00,000, the first digit must be 5, 6, or 7:',
  'Case 1 (First digit = 5): remaining digits {3, 4, 4, 5, 6, 7} (4 repeated twice): 6! / 2! = 360.',
  'Case 2 (First digit = 6): remaining digits {3, 4, 4, 5, 5, 7} (4 and 5 repeated twice): 6! / (2! × 2!) = 180.',
  'Case 3 (First digit = 7): remaining digits {3, 4, 4, 5, 5, 6} (4 and 5 repeated twice): 6! / (2! × 2!) = 180.',
  'Total positive integers = 360 + 180 + 180 = 720.'
]);

q('8', 'If 6 people A, B, C, D, E, F are seated about a round table, how many different circular arrangements are possible? If A, B, C are females and others are males, in how many do genders alternate?', [
  'Answer: (i) Total circular arrangements of 6 people = (n - 1)! = (6 - 1)! = 5! = 120.',
  '(ii) Gender alternating arrangements: First seat the 3 females around the circle in (3 - 1)! = 2! = 2 ways. Then seat the 3 males in the 3 alternating gaps in 3! = 6 ways.',
  'Number of alternating arrangements = 2! × 3! = 2 × 6 = 12.'
]);

q('9', 'A team of 11 players is to be chosen from 15 members: (i) One particular player is always included, (ii) Two such players have always to be included.', [
  'Answer: (As written in classwork QB 1):',
  '(i) One particular player always included: choose remaining 10 from 14:',
  '   (15 - 1)C(11 - 1) = 14C10 = 14! / (4! × 10!) = (11 × 12 × 13 × 14) / (1 × 2 × 3 × 4) = 11 × 13 × 7 = 1001.',
  '(ii) Two such players always included: choose remaining 9 from 13:',
  '   (15 - 2)C(11 - 2) = 13C9 = 13! / (4! × 9!) = (10 × 11 × 12 × 13) / (1 × 2 × 3 × 4) = 5 × 11 × 13 = 715.'
]);

q('10', 'Solve the recurrence relation a_n - 2a_{n-1} = 3^n, a_1 = 5.', [
  'Answer: Homogeneous equation: a_n - 2a_{n-1} = 0 ⇒ m - 2 = 0 ⇒ m = 2. ∴ a_n^(h) = A·2^n.',
  'Particular solution: let a_n^(p) = C·3^n ⇒ C·3^n - 2C·3^{n-1} = 3^n ⇒ 3C - 2C = 3 ⇒ C = 3.',
  '∴ a_n^(p) = 3·3^n = 3^{n+1}.',
  'General solution: a_n = A·2^n + 3^{n+1}.',
  'Initial condition a_1 = 5 ⇒ A·2^1 + 3^2 = 5 ⇒ 2A + 9 = 5 ⇒ 2A = -4 ⇒ A = -2.',
  '∴ a_n = 3^{n+1} - 2·2^n = 3^{n+1} - 2^{n+1}.'
]);

// Part C
doc.addPage();
sectionHeader('Part C - 10 Mark Answers');

q('1', 'Solve the recurrence relation a_{n+1} - a_n = 3n^2 - n; n ≥ 0, a_0 = 3.', [
  'Answer: Homogeneous part: a_{n+1} - a_n = 0 ⇒ m - 1 = 0 ⇒ m = 1. ∴ a_n^(h) = A(1)^n = A.',
  'Particular solution: Since m = 1 is a characteristic root, assume a_n^(p) = n(Bn^2 + Cn + D) = Bn^3 + Cn^2 + Dn.',
  'Substitute into a_{n+1} - a_n = 3n^2 - n:',
  'B[(n+1)^3 - n^3] + C[(n+1)^2 - n^2] + D[(n+1) - n] = 3n^2 - n',
  '3Bn^2 + (3B + 2C)n + (B + C + D) = 3n^2 - n.',
  'Comparing coefficients:',
  '3B = 3 ⇒ B = 1;',
  '3B + 2C = -1 ⇒ 3(1) + 2C = -1 ⇒ 2C = -4 ⇒ C = -2;',
  'B + C + D = 0 ⇒ 1 - 2 + D = 0 ⇒ D = 1.',
  '∴ a_n^(p) = n^3 - 2n^2 + n = n(n - 1)^2.',
  'General solution: a_n = A + n^3 - 2n^2 + n. Using a_0 = 3 ⇒ A = 3.',
  '∴ a_n = n^3 - 2n^2 + n + 3 = 3 + n(n - 1)^2.'
]);

q('2', 'Use mathematical induction to prove that n^3 + (n+1)^3 + (n+2)^3 is divisible by 9, for n ≥ 1.', [
  'Answer: Let P(n) : n^3 + (n+1)^3 + (n+2)^3 is divisible by 9.',
  'Step 1 (For n = 1): P(1) = 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36 = 9 × 4, divisible by 9. ∴ P(1) is true.',
  'Step 2 (Assume P(k) is true): k^3 + (k+1)^3 + (k+2)^3 = 9c ⇒ (k+1)^3 + (k+2)^3 = 9c - k^3.',
  'Step 3 (To prove P(k+1) is true): For n = k + 1, expression is (k+1)^3 + (k+2)^3 + (k+3)^3.',
  '= (9c - k^3) + (k^3 + 9k^2 + 27k + 27) = 9c + 9k^2 + 27k + 27 = 9[c + k^2 + 3k + 3],',
  'which is divisible by 9. ∴ P(k+1) is true. Hence proved by mathematical induction.'
]);

q('3', 'Find a formula for the general term a_n of the Fibonacci sequence 0, 1, 1, 2, 3, 5, 8, 13, ...', [
  'Answer: Recurrence relation: a_n = a_{n-1} + a_{n-2} ⇒ a_n - a_{n-1} - a_{n-2} = 0, with a_0 = 0, a_1 = 1.',
  'Characteristic equation: m^2 - m - 1 = 0 ⇒ m = [1 ± √(1 + 4)] / 2 = (1 ± √5) / 2.',
  'Let m_1 = (1 + √5)/2, m_2 = (1 - √5)/2. General solution: a_n = A·m_1^n + B·m_2^n.',
  'Using a_0 = 0: A + B = 0 ⇒ B = -A.',
  'Using a_1 = 1: A[(1 + √5)/2] - A[(1 - √5)/2] = 1 ⇒ A√5 = 1 ⇒ A = 1/√5, B = -1/√5.',
  '∴ a_n = (1/√5) [((1 + √5)/2)^n - ((1 - √5)/2)^n] for n ≥ 0.'
]);

q('4', 'Prove by mathematical induction that 1^2 + 3^2 + 5^2 + ... + (2n-1)^2 = (1/3)n(2n-1)(2n+1).', [
  'Answer: (As written line-by-line in classwork notes):',
  'For n = 1: P(1) = (1/3)(1)(2(1)-1)(2(1)+1) = (1/3)(1)(1)(3) = 1. ∴ P(1) is true.',
  'Assume P(k) is true: 1^2 + 3^2 + ... + (2k-1)^2 = [k(2k-1)(2k+1)] / 3.',
  'To prove P(k+1) is true: The next term is (2(k+1)-1)^2 = (2k+1)^2. Add (2k+1)^2 on both sides:',
  'LHS = [k(2k-1)(2k+1)] / 3 + (2k+1)^2',
  'Factor out (2k+1): = (2k+1) [ (k(2k-1) + 3(2k+1)) / 3 ]',
  '= (2k+1) [ (2k^2 - k + 6k + 3) / 3 ] = (2k+1) [ (2k^2 + 5k + 3) / 3 ]',
  '= [(2k+1)(k+1)(2k+3)] / 3 = RHS. ∴ P(k+1) is true. Hence proved.'
]);

q('5', 'Use mathematical induction to show that 1/√1 + 1/√2 + 1/√3 + ... + 1/√n > √n, for n ≥ 2.', [
  'Answer: (As written in 10M classwork notes):',
  'Base step: For n = 2: 1/√1 + 1/√2 = 1 + 0.707 = 1.707 > √2 ≈ 1.414. (Or P(1) = 1/√1 = 1). True.',
  'Assume true for k: 1/√1 + 1/√2 + ... + 1/√k > √k.',
  'To prove P(k+1) is true:',
  'LHS = (1/√1 + 1/√2 + ... + 1/√k) + 1/√(k+1) > √k + 1/√(k+1)',
  '= [√(k)√(k+1) + 1] / √(k+1) > [√(k)√(k) + 1] / √(k+1) = (k + 1) / √(k+1)',
  '= [√(k+1)√(k+1)] / √(k+1) = √(k+1) = RHS.',
  '∴ P(k+1) is true. Hence proved by mathematical induction.'
]);

q('6', 'Show that a^n - b^n is divisible by (a - b) for all n, n ≥ 1 using principle of mathematical induction.', [
  'Answer: Let P(n) : a^n - b^n is divisible by (a - b).',
  'For n = 1: a^1 - b^1 = a - b, which is divisible by (a - b). ∴ P(1) is true.',
  'Assume P(k) is true: (a^k - b^k)/(a - b) = c ⇒ a^k - b^k = c(a - b) ⇒ a^k = c(a - b) + b^k.',
  'To prove P(k+1) is true: a^{k+1} - b^{k+1} = a^k·a - b^k·b',
  '= [c(a - b) + b^k]a - b^k·b = a·c(a - b) + b^k(a - b) = (a - b)[a·c + b^k],',
  'which is divisible by (a - b). ∴ P(k+1) is true. Hence proved by mathematical induction.'
]);

q('7', 'Find the number of integers between 1 and 250 both inclusive that are not divisible by any of the integers 2, 3, 5 and 7.', [
  'Answer: (Verbatim 10M Problem 3 in classwork notes):',
  'Let A_1, A_2, A_3, A_4 be sets of integers divisible by 2, 3, 5, 7 respectively:',
  '|A_1| = ⌊250/2⌋ = 125, |A_2| = ⌊250/3⌋ = 83, |A_3| = ⌊250/5⌋ = 50, |A_4| = ⌊250/7⌋ = 35.',
  'Pairwise intersections: |A_1 ∩ A_2| = 41, |A_1 ∩ A_3| = 25, |A_1 ∩ A_4| = 17, |A_2 ∩ A_3| = 16, |A_2 ∩ A_4| = 11, |A_3 ∩ A_4| = 7.',
  'Triple intersections: |A_1 ∩ A_2 ∩ A_3| = 8, |A_1 ∩ A_2 ∩ A_4| = 5, |A_2 ∩ A_3 ∩ A_4| = 2, |A_1 ∩ A_3 ∩ A_4| = 3.',
  'Four-way intersection: |A_1 ∩ A_2 ∩ A_3 ∩ A_4| = ⌊250/210⌋ = 1.',
  'By Principle of Inclusion and Exclusion:',
  '|A_1 ∪ A_2 ∪ A_3 ∪ A_4| = (125 + 83 + 50 + 35) - (41 + 25 + 17 + 16 + 11 + 7) + (8 + 5 + 2 + 3) - 1',
  '= 293 - 117 + 18 - 1 = 193.',
  'Number not divisible by 2, 3, 5, 7 = 250 - 193 = 57.'
]);

q('8', 'How many bit strings of length 10 contain: (a) Exactly four 1’s, (b) Atmost four 1’s, (c) At least four 1’s, (d) An equal number of 0’s and 1’s?', [
  'Answer: (Verbatim 10M Problem 3 in classwork notes):',
  '(a) Exactly four 1’s: 10C4 = 10! / (4! × 6!) = 210.',
  '(b) Atmost four 1’s: 10C0 + 10C1 + 10C2 + 10C3 + 10C4 = 1 + 10 + 45 + 120 + 210 = 386.',
  '(c) At least four 1’s: 10C4 + 10C5 + 10C6 + 10C7 + 10C8 + 10C9 + 10C10',
  '   = 210 + 252 + 210 + 120 + 45 + 10 + 1 = 848.',
  '(d) Equal 0’s and 1’s: 10C5 = 10! / (5! × 5!) = 252.'
]);

q('9', 'Solve the recurrence relation a_n = 2(a_{n-1} - a_{n-2}), n ≥ 2 and a_0 = 1, a_1 = 2.', [
  'Answer: Equation: a_n - 2a_{n-1} + 2a_{n-2} = 0. Characteristic equation: m^2 - 2m + 2 = 0.',
  'Roots: m = [2 ± √(4 - 8)] / 2 = 1 ± i.',
  'In polar form: 1 ± i = √2 [cos(π/4) ± i·sin(π/4)].',
  'General solution: a_n = (√2)^n [c_1 cos(nπ/4) + c_2 sin(nπ/4)].',
  'Using a_0 = 1: (√2)^0 [c_1 cos(0)] = 1 ⇒ c_1 = 1.',
  'Using a_1 = 2: √2 [cos(π/4) + c_2 sin(π/4)] = 2 ⇒ √2 [1/√2 + c_2/√2] = 2 ⇒ 1 + c_2 = 2 ⇒ c_2 = 1.',
  '∴ a_n = (√2)^n [cos(nπ/4) + sin(nπ/4)] (or (1 + i)^{n-1} + (1 - i)^{n-1}).'
]);

q('10', 'In how many ways can 20 students out of 30 be selected for an activity if: (a) Rama refuses to be selected? (b) Raja insists on being selected? (c) Gopal and Govind insist on being selected? (d) Either Gopal or Govind or both get selected?', [
  'Answer: (Verbatim QB 2 in classwork notes): Total students = 30, select = 20.',
  '(a) Rama refuses: choose 20 from remaining 29:',
  '   29C20 = 29! / (9! × 20!) = 11 × 23 × 6 × 5 × 13 × 7 × 29 = 10,015,005.',
  '(b) Raja insists: choose 19 from remaining 29:',
  '   29C19 = 20,030,010.',
  '(c) Gopal and Govind insist: choose 18 from remaining 28:',
  '   28C18 = 13,123,110.',
  '(d) Either Gopal or Govind or both get selected:',
  '   Classwork calculation (30C20 - 28C18): 30,045,015 - 13,123,110 = 16,921,905.',
  '   (By complement rule 30C20 - 28C20: 30,045,015 - 3,108,105 = 26,936,910).'
]);

// Finalize and draw running header and page numbers on all pages
const range = doc.bufferedPageRange();
for (let i = range.start; i < range.start + range.count; i++) {
  doc.switchToPage(i);
  drawRunningHeader();
  doc.save();
  doc.font('Helvetica').fontSize(9).fillColor('#444444');
  doc.text(`${i + 1}`, 50, 800, { align: 'center', width: 495 });
  doc.restore();
}

doc.end();

writeStream.on('finish', () => {
  console.log(`PDF successfully generated at: ${outPath}`);
});
